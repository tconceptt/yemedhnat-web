import type { MetadataRoute } from 'next'

const siteUrl = 'https://yemedhnatclinic.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

