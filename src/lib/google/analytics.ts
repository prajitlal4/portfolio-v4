import { google } from 'googleapis'
import { createGoogleAuth } from './auth'

export async function getEventCount(
  propertyId: string,
  eventName: string,
  startDate: string,
  endDate: string
): Promise<number> {
  if (!propertyId) {
    throw new Error(`GA4 property ID is not configured`)
  }

  const auth = createGoogleAuth()
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth })

  const response = await analyticsdata.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: {
            value: eventName,
            matchType: 'EXACT',
          },
        },
      },
    },
  })

  const value = response.data.rows?.[0]?.metricValues?.[0]?.value
  return value ? parseInt(value, 10) : 0
}
