import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { ArrowLeft, CalendarDays, UserRound } from 'lucide-react'
import { notFound } from 'next/navigation'
import { isSanityConfigured } from '@/lib/sanity/env'
import { urlForImage } from '@/lib/sanity/image'
import { getPostBySlug, getPostSlugs } from '@/lib/sanity/queries'

export const revalidate = 300

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-lg leading-relaxed text-gray-700">{children}</p>,
    h2: ({ children }) => <h2 className="mb-4 mt-10 text-3xl font-semibold tracking-tight text-gray-900">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-8 text-2xl font-semibold tracking-tight text-gray-900">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mb-6 border-l-4 border-primary bg-primary-light/40 px-5 py-3 text-gray-700">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-6 text-lg text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg text-gray-700">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : '#'
      const isExternal = href.startsWith('http://') || href.startsWith('https://')

      return (
        <a
          href={href}
          className="font-semibold text-primary underline decoration-primary/40 underline-offset-4"
          rel={isExternal ? 'noopener noreferrer' : undefined}
          target={isExternal ? '_blank' : undefined}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value)?.width(1600).fit('max').auto('format').url()
      const alt = typeof value?.alt === 'string' ? value.alt : 'Blog image'

      if (!imageUrl) {
        return null
      }

      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-primary/10">
          <div className="relative h-[320px] w-full sm:h-[460px]">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
        </figure>
      )
    },
  },
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs()

  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  if (!isSanityConfigured) {
    return {
      title: 'Blog',
    }
  }

  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt ?? `Read ${post.title} on the Yemedhnat blog.`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!isSanityConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-center">
        <section className="w-full max-w-xl rounded-2xl border border-amber-300 bg-amber-50 p-8 text-amber-900">
          <h1 className="mb-3 text-3xl font-semibold">Sanity configuration required</h1>
          <p className="mb-6">This blog post page becomes active after your Sanity environment variables are set.</p>
          <Link href="/blog" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
            Go to Blog
          </Link>
        </section>
      </main>
    )
  }

  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const heroImageUrl = urlForImage(post.mainImage)?.width(1800).height(1000).fit('crop').auto('format').url()

  return (
    <main className="min-h-screen bg-background pb-20 pt-20 sm:pt-24">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary hover:text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>

        <header className="mb-8 rounded-3xl bg-white p-7 shadow-sm sm:p-10">
          <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            {post.authorName ? (
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-4 w-4" />
                {post.authorName}
              </span>
            ) : null}
          </div>
        </header>

        {heroImageUrl ? (
          <div className="relative mb-10 h-[300px] w-full overflow-hidden rounded-3xl border border-primary/10 sm:h-[460px]">
            <Image
              src={heroImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1000px, 100vw"
              priority
            />
          </div>
        ) : null}

        <section className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">
          {post.body && post.body.length > 0 ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="text-lg text-gray-700">No content has been added to this post yet.</p>
          )}
        </section>
      </article>
    </main>
  )
}
