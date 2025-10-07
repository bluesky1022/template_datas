import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return new NextResponse('Missing fields', { status: 400 })
    }

    await connectDB()

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return new NextResponse('Email already exists', { status: 400 })
    }

    const hashedPassword = await hash(password, 12)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'STUDENT',
    })

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('[REGISTER_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

