import { google } from 'googleapis'
import { createGoogleAuth } from './auth'

export interface SiteMetrics {
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
      // No dimensions = aggregate totals across all queries/pages/etc.
    },
  })

  const row = response.data.rows?.[0]
  return {
    clicks: row?.clicks ?? 0,
    impressions: row?.impressions ?? 0,
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
