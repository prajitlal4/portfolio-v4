import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { CLIENTS, type ClientConfig } from '@/lib/admin/config'
import {
  getSiteMetrics,
  getKeywordPosition,
  getTopKeywords,
  type KeywordData,
} from '@/lib/google/searchConsole'
import { getEventCount } from '@/lib/google/analytics'
import { SignOutButton } from './_components/SignOutButton'

// ---------------------------------------------------------------------------
// Date helpers
// ---------------------------------------------------------------------------

function getDateRanges() {
  const now = new Date()

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)

  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
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
  siteAvgPosition: number | null
  previousSiteAvgPosition: number | null
  primaryKeywordPosition: number | null
  topKeywords: KeywordData[]
  callClicks: number | null
  formSubmissions: number | null
}

type DateRanges = ReturnType<typeof getDateRanges>

async function fetchClientData(
  client: ClientConfig,
  dates: DateRanges
): Promise<ClientData> {
  const [gscCurrent, gscPrevious, primaryPos, topKws, calls, forms] =
    await Promise.allSettled([
      getSiteMetrics(client.gscSiteUrl, dates.currentStart, dates.currentEnd),
      getSiteMetrics(client.gscSiteUrl, dates.previousStart, dates.previousEnd),
      getKeywordPosition(
        client.gscSiteUrl,
        client.primaryKeyword,
        dates.currentStart,
        dates.currentEnd
      ),
      getTopKeywords(client.gscSiteUrl, dates.currentStart, dates.currentEnd),
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
    siteAvgPosition: curr?.avgPosition ?? null,
    previousSiteAvgPosition: prev?.avgPosition ?? null,
    primaryKeywordPosition: ok(primaryPos),
    topKeywords: ok(topKws) ?? [],
    callClicks: ok(calls),
    formSubmissions: ok(forms),
  }
}

// ---------------------------------------------------------------------------
// UI components
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

function PositionBadge({ position }: { position: number }) {
  const color =
    position <= 10
      ? 'bg-emerald-50 text-emerald-700'
      : position <= 20
        ? 'bg-amber-50 text-amber-700'
        : 'bg-red-50 text-red-600'

  return (
    <span className={`inline-block rounded px-1.5 py-0.5 text-xs font-semibold tabular-nums ${color}`}>
      #{position.toFixed(1)}
    </span>
  )
}

function KeywordsTable({ keywords }: { keywords: KeywordData[] }) {
  if (keywords.length === 0) {
    return <p className="text-xs text-gray-400">No clicks recorded yet this month</p>
  }

  return (
    <div className="w-full">
      {/* Table header */}
      <div className="flex items-center gap-2 pb-1.5 mb-1 border-b border-gray-100">
        <span className="flex-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Keyword
        </span>
        <span className="w-14 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Position
        </span>
        <span className="w-10 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Clicks
        </span>
        <span className="w-14 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Impr.
        </span>
      </div>

      {/* Rows */}
      {keywords.map((kw) => (
        <div
          key={kw.keyword}
          className="flex items-center gap-2 py-2 border-b border-gray-50 last:border-0"
        >
          <span
            className="flex-1 text-sm text-gray-700 truncate"
            title={kw.keyword}
          >
            {kw.keyword}
          </span>
          <div className="w-14 flex justify-end">
            <PositionBadge position={kw.position} />
          </div>
          <span className="w-10 text-right text-sm tabular-nums text-gray-600">
            {kw.clicks.toLocaleString()}
          </span>
          <span className="w-14 text-right text-sm tabular-nums text-gray-400">
            {kw.impressions.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  )
}

function Divider() {
  return <div className="border-t border-gray-100" />
}

function ClientCard({ data }: { data: ClientData }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
      {/* Header */}
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

      {/* Organic search overview */}
      <div className="px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Organic Search
        </p>
        <div className="grid grid-cols-3 gap-4">
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
          <Metric
            label="Site Avg Position"
            value={data.siteAvgPosition}
            previous={data.previousSiteAvgPosition}
            format={(v) => v.toFixed(1)}
            inverted
          />
        </div>
      </div>

      <Divider />

      {/* Primary keyword */}
      <div className="px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
          Primary Keyword
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 italic">
            &ldquo;{data.primaryKeyword}&rdquo;
          </span>
          {data.primaryKeywordPosition !== null ? (
            <PositionBadge position={data.primaryKeywordPosition} />
          ) : (
            <span className="text-sm text-gray-400">—</span>
          )}
        </div>
      </div>

      <Divider />

      {/* Top keywords */}
      <div className="px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
          Top Keywords — This Month
        </p>
        <KeywordsTable keywords={data.topKeywords} />
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
      siteAvgPosition: null,
      previousSiteAvgPosition: null,
      primaryKeywordPosition: null,
      topKeywords: [],
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
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
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
      <main className="mx-auto max-w-6xl px-6 py-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {clientsData.map((data) => (
            <ClientCard key={data.id} data={data} />
          ))}
        </div>
      </main>
    </div>
  )
}
