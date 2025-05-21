'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push('/dashboard')
    })
  }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={signIn}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl"
      >
        Continue with Google
      </button>
    </div>
  )
}
