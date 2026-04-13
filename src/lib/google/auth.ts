import { google } from 'googleapis'

export function createGoogleAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const key = process.env.GOOGLE_PRIVATE_KEY

  if (!email || !key) {
    throw new Error(
      'Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY environment variables'
    )
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      // .env files escape newlines as \n — restore them
      private_key: key.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly',
    ],
  })
}
