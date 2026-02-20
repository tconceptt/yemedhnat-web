import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(43,108,176,0.12),_transparent_60%)]" />

      <section className="relative z-10 w-full max-w-2xl rounded-3xl border border-primary/15 bg-white/90 p-8 text-center shadow-xl backdrop-blur sm:p-12">
        <div className="mx-auto mb-6 h-28 w-28 text-primary" aria-hidden="true">
          <svg viewBox="0 0 128 128" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42 15V40C42 52 51 61 63 61C75 61 84 52 84 40V15"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 23H42M84 23H96"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M63 61V82C63 96 74 107 88 107H95"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M108 102C108 107.523 103.523 112 98 112C92.4772 112 88 107.523 88 102C88 96.4772 92.4772 92 98 92C103.523 92 108 96.4772 108 102Z"
              stroke="currentColor"
              strokeWidth="8"
            />
            <path
              d="M63 83V96C63 103.18 57.1797 109 50 109C42.8203 109 37 103.18 37 96V80"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 76C30 80.4183 33.5817 84 38 84C42.4183 84 46 80.4183 46 76C46 71.5817 42.4183 68 38 68C33.5817 68 30 71.5817 30 76Z"
              stroke="currentColor"
              strokeWidth="8"
            />
          </svg>
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404 Error</p>
        <h1 className="mb-3 text-4xl font-semibold text-gray-900 sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mb-8 max-w-xl text-base text-gray-600 sm:text-lg">
          The page you are looking for could not be found. Let&apos;s get you back to the clinic homepage.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Back to Home
        </Link>
      </section>
    </main>
  )
}
