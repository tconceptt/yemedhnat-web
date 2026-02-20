import groq from 'groq'
import { sanityClient } from './client'
import type { BlogPost, BlogPostListItem } from './types'

const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  "authorName": author->name,
  "categories": categories[]->title
}`

const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  body,
  "authorName": author->name,
  "categories": categories[]->title
}`

const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`

export async function getAllPosts(): Promise<BlogPostListItem[]> {
  if (!sanityClient) {
    return []
  }

  return sanityClient.fetch<BlogPostListItem[]>(postsQuery)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    return null
  }

  return sanityClient.fetch<BlogPost | null>(postBySlugQuery, { slug })
}

export async function getPostSlugs(): Promise<string[]> {
  if (!sanityClient) {
    return []
  }

  return sanityClient.fetch<string[]>(postSlugsQuery)
}
