export interface ClientConfig {
  id: string
  name: string
  website: string
  gscSiteUrl: string
  ga4PropertyId: string
  primaryKeyword: string
}

export const CLIENTS: ClientConfig[] = [
  {
    id: 'scope-bathrooms',
    name: 'Scope Bathrooms',
    website: 'scopebathroomrenovations.com',
    gscSiteUrl: 'sc-domain:scopebathroomrenovations.com',
    ga4PropertyId: process.env.GA4_PROPERTY_SCOPE ?? '',
    primaryKeyword: 'bathroom renovations joondalup',
  },
  {
    id: 'highside-plumbing',
    name: 'Highside Plumbing',
    website: 'highsideplumbing.com.au',
    gscSiteUrl: 'sc-domain:highsideplumbing.com.au',
    ga4PropertyId: process.env.GA4_PROPERTY_HIGHSIDE ?? '',
    primaryKeyword: 'plumber wanneroo',
  },
]
