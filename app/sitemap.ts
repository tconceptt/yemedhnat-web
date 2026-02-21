import type { MetadataRoute } from 'next'
import { isSanityConfigured } from '@/lib/sanity/env'
import { getPostSlugs } from '@/lib/sanity/queries'

const siteUrl = 'https://yemedhnatclinic.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  if (!isSanityConfigured) {
    return baseRoutes
  }

  try {
    const slugs = await getPostSlugs()
    const blogPostRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

    return [...baseRoutes, ...blogPostRoutes]
  } catch {
    return baseRoutes
  }
}
