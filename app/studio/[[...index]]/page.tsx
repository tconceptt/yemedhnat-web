import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

export default function StudioPage() {
  const hasSanityConfig = Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
  )

  if (!hasSanityConfig) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-center">
        <section className="w-full max-w-xl rounded-2xl border border-amber-300 bg-amber-50 p-8 text-amber-900">
          <h1 className="mb-3 text-3xl font-semibold">Sanity config missing</h1>
          <p className="mb-2">Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.</p>
          <p className="text-sm">Then restart the dev server and refresh this page.</p>
        </section>
      </main>
    )
  }

  return <NextStudio config={config} />
}
