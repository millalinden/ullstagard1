// Access Token for Contentful Management 

import { createClient } from 'contentful-management'

const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN || '',
})

export default contentfulClient