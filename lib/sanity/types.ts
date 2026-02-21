import type { PortableTextBlock } from '@portabletext/types'

export type SanityImage = {
  _type: 'image'
  alt?: string
  asset?: {
    _type: 'reference'
    _ref: string
  }
}

export type BlogPostListItem = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: SanityImage
  authorName?: string
  categories?: string[]
}

export type BlogPost = BlogPostListItem & {
  body?: PortableTextBlock[]
}
