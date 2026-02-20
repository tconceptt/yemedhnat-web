import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, UserRound } from 'lucide-react'
import { isSanityConfigured } from '@/lib/sanity/env'
import { urlForImage } from '@/lib/sanity/image'
import { getAllPosts } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Medical articles and clinic updates from Yemedhnat Internal Medicine Clinic.',
  alternates: {
    canonical: '/blog',
  },
}

export const revalidate = 300

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-background pb-16 pt-28 sm:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-primary-dark to-primary p-8 text-white shadow-xl sm:p-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Yemedhnat Insights</p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Clinic Blog</h1>
          <p className="max-w-2xl text-base text-white/90 sm:text-lg">
            Trusted internal medicine education, preventive health guidance, and updates from our team.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {!isSanityConfigured ? (
          <section className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-900 sm:p-8">
            <h2 className="mb-2 text-2xl font-semibold">Sanity not configured yet</h2>
            <p className="mb-4 text-base">
              Add your Sanity environment variables to load blog posts from your CMS.
            </p>
            <pre className="overflow-x-auto rounded-xl bg-white/80 p-4 text-sm leading-7">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
# Optional only if your dataset is private:
SANITY_API_READ_TOKEN=your_read_token`}
            </pre>
            <p className="mt-4 text-sm">
              After adding these values in <code>.env.local</code>, restart your dev server.
            </p>
          </section>
        ) : posts.length === 0 ? (
          <section className="rounded-2xl border border-primary/20 bg-white p-10 text-center shadow-sm">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">No posts yet</h2>
            <p className="text-gray-600">Publish your first post in Sanity and it will appear here automatically.</p>
          </section>
        ) : (
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => {
              const imageUrl = urlForImage(post.mainImage)?.width(1200).height(700).fit('crop').auto('format').url()

              return (
                <article
                  key={post._id}
                  className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 w-full bg-primary-light">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-6 text-center text-primary-dark">
                          <p className="text-base font-semibold">Yemedhnat Internal Medicine Blog</p>
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-3 text-sm text-gray-500">
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

                    <h2 className="mb-3 text-2xl font-semibold leading-tight text-gray-900">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mb-4 text-base text-gray-600">
                      {post.excerpt?.trim() || 'Read the full article from our clinic team.'}
                    </p>

                    <Link href={`/blog/${post.slug}`} className="text-sm font-semibold uppercase tracking-[0.16em] text-primary hover:text-primary-dark">
                      Read Article
                    </Link>
                  </div>
                </article>
              )
            })}
          </section>
        )}
      </div>
    </main>
  )
}
