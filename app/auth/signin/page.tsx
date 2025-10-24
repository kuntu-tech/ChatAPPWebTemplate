'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function SignIn() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      redirect('/dashboard')
    }
  }, [session])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    )
  }

  if (session) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Use DataTail OAuth to sign in
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => {
              window.location.href = '/api/auth/signin/datail-oauth'
            }}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all"
          >
            Sign in with DataTail
          </button>
        </div>
      </div>
    </div>
  )
}
