/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { DataTable } from '@/app/data-table'
import Link from "next/link";


interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  createdAt: string
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    } else if (status === 'authenticated') {
      fetchUsers()
    }
  }, [status, router])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError('Error fetching users. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  if (!session || !session.user) {
    return (
      <div className="text-center min-h-screen flex flex-col items-center gap-5 justify-center p-4">
        You are not authorized to access this page
        <br />
        <Link href="/" className="text-purple-400">
          Go back to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <h2>A list of registered users for the Event Conference.</h2>
      <DataTable data={users} />
    </div>
  )
}