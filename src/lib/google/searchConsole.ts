import { google } from 'googleapis'
import { createGoogleAuth } from './auth'

export interface SiteMetrics {
  clicks: number
  impressions: number
  avgPosition: number | null
}

export interface KeywordData {
  keyword: string
  position: number
  clicks: number
  impressions: number
}

export async function getSiteMetrics(
  siteUrl: string,
  startDate: string,
  endDate: string
): Promise<SiteMetrics> {
  const auth = createGoogleAuth()
  const sc = google.searchconsole({ version: 'v1', auth })

  const response = await sc.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
    },
  })

  const row = response.data.rows?.[0]
  return {
    clicks: row?.clicks ?? 0,
    impressions: row?.impressions ?? 0,
    avgPosition: row?.position ?? null,
  }
}

export async function getKeywordPosition(
  siteUrl: string,
  keyword: string,
  startDate: string,
  endDate: string
): Promise<number | null> {
  const auth = createGoogleAuth()
  const sc = google.searchconsole({ version: 'v1', auth })

  const response = await sc.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      dimensionFilterGroups: [
        {
          filters: [
            {
              dimension: 'query',
              expression: keyword,
              operator: 'equals',
            },
          ],
        },
      ],
    },
  })

  return response.data.rows?.[0]?.position ?? null
}

// Returns top keywords by clicks. Fetches a larger set then sorts client-side
// because the GSC API orders by impressions by default, not clicks.
export async function getTopKeywords(
  siteUrl: string,
  startDate: string,
  endDate: string,
  limit = 8
): Promise<KeywordData[]> {
  const auth = createGoogleAuth()
  const sc = google.searchconsole({ version: 'v1', auth })

  const response = await sc.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      type: 'WEB', // exclude Discover/News traffic which has no query data
      rowLimit: 25, // fetch more so we can sort properly
    },
  })

  return (response.data.rows ?? [])
    .map((row) => ({
      keyword: row.keys?.[0] ?? '',
      position: row.position ?? 0,
      clicks: row.clicks ?? 0,
      impressions: row.impressions ?? 0,
    }))
    .filter((kw) => kw.clicks > 0)
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, limit)
}
