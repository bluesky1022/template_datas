import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Course from '@/models/Course'
import Chapter from '@/models/Chapter'

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    await connectDB()

    const course = await Course.findById(params.courseId)
      .populate('categoryId', 'name slug')
      .populate('instructorId', '_id name image bio')
      .lean()

    if (!course) {
      return new NextResponse('Course not found', { status: 404 })
    }

    const chapters = await Chapter.find({
      courseId: params.courseId,
      isPublished: true,
    }).sort({ position: 1 }).lean()

    return NextResponse.json({
      ...course,
      _id: course._id.toString(),
      category: course.categoryId,
      instructor: course.instructorId,
      chapters: chapters.map(ch => ({
        ...ch,
        _id: ch._id.toString(),
        courseId: ch.courseId.toString(),
      })),
    })
  } catch (error) {
    console.error('[COURSE_GET]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function PATCH(
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

    const values = await req.json()

    const course = await Course.findOneAndUpdate(
      {
        _id: params.courseId,
        instructorId: userId,
      },
      { ...values },
      { new: true }
    )

    if (!course) {
      return new NextResponse('Not found', { status: 404 })
    }

    return NextResponse.json({
      ...course.toObject(),
      _id: course._id.toString(),
    })
  } catch (error) {
    console.error('[COURSE_PATCH]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function DELETE(
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

    const course = await Course.findOne({
      _id: params.courseId,
      instructorId: userId,
    })

    if (!course) {
      return new NextResponse('Not found', { status: 404 })
    }

    await Course.findByIdAndDelete(params.courseId)

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('[COURSE_DELETE]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

