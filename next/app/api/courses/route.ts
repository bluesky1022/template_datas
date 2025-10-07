import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Course from '@/models/Course'
import Chapter from '@/models/Chapter'

export async function GET(req: Request) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const categoryId = searchParams.get('categoryId')
    
    const query: any = { isPublished: true }
    if (categoryId) {
      query.categoryId = categoryId
    }

    const courses = await Course.find(query)
      .populate('category', 'name slug')
      .populate('instructorId', 'name image')
      .sort({ createdAt: -1 })
      .lean()

    // Get chapter counts for each course
    const coursesWithChapters = await Promise.all(
      courses.map(async (course) => {
        const chapters = await Chapter.find({
          courseId: course._id,
          isPublished: true,
        }).select('_id')
        
        return {
          ...course,
          _id: course._id.toString(),
          categoryId: course.categoryId.toString(),
          instructorId: course.instructorId,
          chapters: chapters.map(ch => ({ id: ch._id.toString() })),
        }
      })
    )

    return NextResponse.json(coursesWithChapters)
  } catch (error) {
    console.error('[COURSES_GET]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    await connectDB()

    const { title, categoryId, description, price } = await req.json()

    const course = await Course.create({
      instructorId: userId,
      title,
      categoryId,
      description,
      price,
    })

    return NextResponse.json({
      ...course.toObject(),
      _id: course._id.toString(),
    })
  } catch (error) {
    console.error('[COURSES_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

