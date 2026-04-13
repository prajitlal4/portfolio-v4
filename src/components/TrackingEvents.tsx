'use client'

/**
 * TrackingEvents
 *
 * Drop this once anywhere in the root layout (outside any conditional) and it
 * will globally track:
 *   - Clicks on any tel: link   → GA4 event "call_button_click"
 *   - Any form submission        → GA4 event "form_submission"
 *
 * No need to touch individual buttons or forms.
 *
 * Usage (in the client site's app/layout.tsx):
 *   import { TrackingEvents } from '@/components/TrackingEvents'
 *   // inside <body>:
 *   <TrackingEvents />
 */

import { useEffect } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void
  }
}

export function TrackingEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      // Walk up the DOM in case the user clicked a child element (e.g. an icon
      // inside the <a> tag)
      const link = (event.target as Element).closest('a[href^="tel:"]') as
        | HTMLAnchorElement
        | null
      if (!link || !window.gtag) return

      window.gtag('event', 'call_button_click', {
        phone_number: link.href.replace('tel:', ''),
      })
    }

    function handleSubmit(event: SubmitEvent) {
      if (!window.gtag) return
      const form = event.target as HTMLFormElement
      window.gtag('event', 'form_submission', {
        form_id: form.id || undefined,
        form_name: form.getAttribute('name') || undefined,
      })
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('submit', handleSubmit)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return null
}
