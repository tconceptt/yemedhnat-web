import { createClient } from '@sanity/client'
import { isSanityConfigured, sanityConfig } from './env'

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      // Webhook-triggered ISR should always fetch fresh published content.
      useCdn: false,
      perspective: 'published',
      token: sanityConfig.token,
    })
  : null
