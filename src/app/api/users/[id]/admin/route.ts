// app/api/users/[id]/admin/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const { isAdmin } = await request.json()

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { isAdmin },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Error updating user admin status:', error)
    return NextResponse.json({ error: 'Failed to update user admin status' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}