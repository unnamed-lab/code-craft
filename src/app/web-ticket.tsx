'use client'

import { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface WebTicketProps {
  user: {
    firstName: string
    lastName: string
    email: string
  }
  ticketId: string
}

export default function WebTicket({ user, ticketId }: WebTicketProps) {
  const [qrCode, setQrCode] = useState('')

  useEffect(() => {
    QRCode.toDataURL(ticketId)
      .then(url => setQrCode(url))
      .catch(err => console.error(err))
  }, [ticketId])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="text-2xl text-center">Event Conference 2024</CardTitle>
        <CardDescription className="text-center text-primary-foreground/80">Your Ticket</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p>{user.firstName} {user.lastName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="break-all">{user.email}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Ticket ID</p>
            <p>{ticketId}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Event Date</p>
              <p>June 15-17, 2024</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Venue</p>
              <p>Tech Convention Center</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          {qrCode && <Image src={qrCode} alt="Ticket QR Code" className="w-48 h-48" />}
        </div>
      </CardContent>
      <CardFooter className="bg-muted">
        <Button className="w-full">Download Ticket</Button>
      </CardFooter>
    </Card>
  )
}