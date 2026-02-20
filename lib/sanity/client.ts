import { createClient } from '@sanity/client'
import { isSanityConfigured, sanityConfig } from './env'

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
      perspective: 'published',
      token: sanityConfig.token,
    })
  : null
