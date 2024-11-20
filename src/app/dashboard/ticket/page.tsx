'use client'

import WebTicket from '@/app/web-ticket'
import { useSession } from 'next-auth/react'

export default function TicketPage() {
  const { data: session } = useSession()

  if (!session || !session.user) {
    return <div className="text-center p-4">Please log in to view your ticket.</div>
  }

  const user = {
    firstName: session.user.name?.split(' ')[0] || '',
    lastName: session.user.name?.split(' ')[1] || '',
    email: session.user.email || '',
  }

  const ticketId = session.user.id // Assuming we store the ticketId in the user's id field

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Event Ticket</h1>
      <WebTicket user={user} ticketId={ticketId} />
    </div>
  )
}