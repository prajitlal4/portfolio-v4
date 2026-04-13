import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { CLIENTS, type ClientConfig } from '@/lib/admin/config'
import { getSiteMetrics, getKeywordPosition } from '@/lib/google/searchConsole'
import { getEventCount } from '@/lib/google/analytics'
import { SignOutButton } from './_components/SignOutButton'

// ---------------------------------------------------------------------------
// Date helpers
// ---------------------------------------------------------------------------

function getDateRanges() {
  const now = new Date()

  // GSC has a ~2-day lag — using yesterday as the end avoids empty-data gaps
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)

  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  // Day 0 of the current month = last day of the previous month
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)

  const fmt = (d: Date) => d.toISOString().split('T')[0]

  return {
    currentStart: fmt(thisMonthStart),
    currentEnd: fmt(yesterday),
    previousStart: fmt(lastMonthStart),
    previousEnd: fmt(lastMonthEnd),
  }
}

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

interface ClientData {
  id: string
  name: string
  website: string
  primaryKeyword: string
  currentClicks: number | null
  previousClicks: number | null
  currentImpressions: number | null
  previousImpressions: number | null
  avgPosition: number | null
  callClicks: number | null
  formSubmissions: number | null
}

type DateRanges = ReturnType<typeof getDateRanges>

async function fetchClientData(
  client: ClientConfig,
  dates: DateRanges
): Promise<ClientData> {
  const [gscCurrent, gscPrevious, position, calls, forms] =
    await Promise.allSettled([
      getSiteMetrics(client.gscSiteUrl, dates.currentStart, dates.currentEnd),
      getSiteMetrics(client.gscSiteUrl, dates.previousStart, dates.previousEnd),
      getKeywordPosition(
        client.gscSiteUrl,
        client.primaryKeyword,
        dates.currentStart,
        dates.currentEnd
      ),
      getEventCount(
        client.ga4PropertyId,
        'call_button_click',
        dates.currentStart,
        dates.currentEnd
      ),
      getEventCount(
        client.ga4PropertyId,
        'form_submission',
        dates.currentStart,
        dates.currentEnd
      ),
    ])

  // Trailing comma disambiguates generic from JSX in .tsx files
  const ok = <T,>(r: PromiseSettledResult<T>): T | null =>
    r.status === 'fulfilled' ? r.value : null

  const curr = ok(gscCurrent)
  const prev = ok(gscPrevious)

  return {
    id: client.id,
    name: client.name,
    website: client.website,
    primaryKeyword: client.primaryKeyword,
    currentClicks: curr?.clicks ?? null,
    previousClicks: prev?.clicks ?? null,
    currentImpressions: curr?.impressions ?? null,
    previousImpressions: prev?.impressions ?? null,
    avgPosition: ok(position),
    callClicks: ok(calls),
    formSubmissions: ok(forms),
  }
}

// ---------------------------------------------------------------------------
// UI components (all server-renderable, no hooks needed)
// ---------------------------------------------------------------------------

function ChangeTag({
  current,
  previous,
  inverted = false,
}: {
  current: number
  previous: number
  inverted?: boolean
}) {
  if (previous === 0) return null
  const delta = ((current - previous) / previous) * 100
  // "inverted" = lower is better (e.g. avg position)
  const improved = inverted ? delta < 0 : delta > 0
  const color = improved ? 'text-emerald-600' : 'text-red-500'
  const arrow = delta >= 0 ? '↑' : '↓'

  return (
    <span className={`text-xs font-medium ${color}`}>
      {arrow}&thinsp;{Math.abs(delta).toFixed(1)}% vs last month
    </span>
  )
}

function Metric({
  label,
  value,
  previous,
  format = (v: number) => v.toLocaleString(),
  inverted = false,
}: {
  label: string
  value: number | null
  previous?: number | null
  format?: (v: number) => string
  inverted?: boolean
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
        {label}
      </span>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-2xl font-semibold text-gray-900 tabular-nums">
          {value !== null ? format(value) : '—'}
        </span>
        {value !== null && previous != null && (
          <ChangeTag current={value} previous={previous} inverted={inverted} />
        )}
      </div>
      {previous != null && (
        <span className="text-xs text-gray-400">
          Last month: {format(previous)}
        </span>
      )}
    </div>
  )
}

function Divider() {
  return <div className="border-t border-gray-100" />
}

function ClientCard({ data }: { data: ClientData }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-0 overflow-hidden">
      {/* Card header */}
      <div className="flex items-start justify-between px-6 pt-6 pb-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">{data.name}</h2>
          <a
            href={`https://${data.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            {data.website}
          </a>
        </div>
        <span className="mt-0.5 inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-100">
          Active
        </span>
      </div>

      <Divider />

      {/* Organic search */}
      <div className="px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Organic Search
        </p>
        <div className="grid grid-cols-2 gap-5">
          <Metric
            label="Clicks"
            value={data.currentClicks}
            previous={data.previousClicks}
          />
          <Metric
            label="Impressions"
            value={data.currentImpressions}
            previous={data.previousImpressions}
          />
        </div>
        <div className="mt-5">
          <Metric
            label={`Avg position — "${data.primaryKeyword}"`}
            value={data.avgPosition}
            format={(v) => v.toFixed(1)}
            inverted
          />
        </div>
      </div>

      <Divider />

      {/* Conversions */}
      <div className="px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Conversions — This Month
        </p>
        <div className="grid grid-cols-2 gap-5">
          <Metric label="Call Button Clicks" value={data.callClicks} />
          <Metric label="Form Submissions" value={data.formSubmissions} />
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function AdminDashboard() {
  const { userId } = await auth()
  if (!userId) redirect('/admin/login')

  const user = await currentUser()
  const dates = getDateRanges()

  const results = await Promise.allSettled(
    CLIENTS.map((client) => fetchClientData(client, dates))
  )

  const clientsData: ClientData[] = results.map((result, i) => {
    if (result.status === 'fulfilled') return result.value
    return {
      id: CLIENTS[i].id,
      name: CLIENTS[i].name,
      website: CLIENTS[i].website,
      primaryKeyword: CLIENTS[i].primaryKeyword,
      currentClicks: null,
      previousClicks: null,
      currentImpressions: null,
      previousImpressions: null,
      avgPosition: null,
      callClicks: null,
      formSubmissions: null,
    }
  })

  const now = new Date()
  const monthLabel = now.toLocaleString('en-AU', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-base font-semibold text-gray-900">
              Lal Solutions
            </span>
            <span className="ml-2 text-sm text-gray-400">Client Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            {user?.emailAddresses[0]?.emailAddress && (
              <span className="hidden sm:block text-sm text-gray-500">
                {user.emailAddresses[0].emailAddress}
              </span>
            )}
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">{monthLabel}</h1>
          <p className="mt-0.5 text-xs text-gray-400">
            Search Console data through{' '}
            {new Date(dates.currentEnd).toLocaleDateString('en-AU', {
              day: 'numeric',
              month: 'short',
            })}{' '}
            &middot; GA4 events through today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientsData.map((data) => (
            <ClientCard key={data.id} data={data} />
          ))}
        </div>
      </main>
    </div>
  )
}
