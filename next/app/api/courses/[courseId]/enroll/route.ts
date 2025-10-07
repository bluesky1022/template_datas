import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Enrollment from '@/models/Enrollment'

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    await connectDB()

    const enrollment = await Enrollment.create({
      userId,
      courseId: params.courseId,
    })

    return NextResponse.json({
      ...enrollment.toObject(),
      _id: enrollment._id.toString(),
    })
  } catch (error) {
    console.error('[ENROLLMENT_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

