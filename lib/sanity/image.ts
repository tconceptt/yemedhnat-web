import { createImageUrlBuilder } from '@sanity/image-url'
import { isSanityConfigured, sanityConfig } from './env'

const imageBuilder = isSanityConfigured
  ? createImageUrlBuilder({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
    })
  : null

export function urlForImage(source: unknown) {
  if (!imageBuilder || !source) {
    return null
  }

  return imageBuilder.image(source)
}
