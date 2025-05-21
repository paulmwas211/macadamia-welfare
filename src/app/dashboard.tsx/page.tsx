'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push('/login')
      else setUser(user)
    })
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome to Macadamia Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
