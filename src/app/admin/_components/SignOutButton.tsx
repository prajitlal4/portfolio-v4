'use client'

import { SignOutButton as ClerkSignOutButton } from '@clerk/nextjs'

export function SignOutButton() {
  return (
    <ClerkSignOutButton redirectUrl="/admin/login">
      <button className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
        Sign out
      </button>
    </ClerkSignOutButton>
  )
}
