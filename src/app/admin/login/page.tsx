import { SignIn } from '@clerk/nextjs'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            card: 'shadow-sm border border-gray-100 rounded-2xl',
            headerTitle: 'text-gray-900 font-semibold',
            headerSubtitle: 'text-gray-500',
          },
        }}
      />
    </div>
  )
}
