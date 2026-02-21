import { timingSafeEqual } from 'crypto'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

type WebhookBody = {
  _type?: string
  slug?: string | { current?: string }
  oldSlug?: string
  previousSlug?: string
}

function normalizeSlug(value: WebhookBody['slug'] | string | undefined): string | undefined {
  if (!value) {
    return undefined
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object' && typeof value.current === 'string') {
    return value.current
  }

  return undefined
}

function safeEqual(expected: string, actual: string): boolean {
  const expectedBuffer = Buffer.from(expected)
  const actualBuffer = Buffer.from(actual)

  if (expectedBuffer.length !== actualBuffer.length) {
    return false
  }

  return timingSafeEqual(expectedBuffer, actualBuffer)
}

export async function POST(request: NextRequest) {
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET

  if (!configuredSecret) {
    return NextResponse.json({ message: 'Missing SANITY_REVALIDATE_SECRET on server' }, { status: 500 })
  }

  const authorizationHeader = request.headers.get('authorization')
  const bearerSecret = authorizationHeader?.startsWith('Bearer ')
    ? authorizationHeader.replace('Bearer ', '').trim()
    : ''

  const providedSecret = request.nextUrl.searchParams.get('secret') || request.headers.get('x-webhook-secret') || bearerSecret

  if (!providedSecret || !safeEqual(configuredSecret, providedSecret)) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  let body: WebhookBody = {}

  try {
    body = (await request.json()) as WebhookBody
  } catch {
    body = {}
  }

  const slug = normalizeSlug(body.slug)
  const previousSlug = normalizeSlug(body.previousSlug || body.oldSlug)

  // Always refresh blog listing, individual post pages, and sitemap.
  revalidatePath('/blog')
  revalidatePath('/blog/[slug]', 'page')
  revalidatePath('/sitemap.xml')

  if (slug) {
    revalidatePath(`/blog/${slug}`)
  }

  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/blog/${previousSlug}`)
  }

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    type: body._type ?? null,
    slug: slug ?? null,
    previousSlug: previousSlug ?? null,
  })
}
