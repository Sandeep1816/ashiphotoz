import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    return NextResponse.json({ success: true, count: userCount })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to connect to database' },
      { status: 500 }
    )
  }
} 