import { CourseHeader } from '@/components/course/course-header'
import { CourseContent } from '@/components/course/course-content'
import { CourseInstructor } from '@/components/course/course-instructor'
import { CourseReviews } from '@/components/course/course-reviews'
import { CourseSidebar } from '@/components/course/course-sidebar'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function CoursePage({ 
  params 
}: { 
  params: { courseId: string } 
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CourseHeader courseId={params.courseId} />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <CourseContent courseId={params.courseId} />
              <CourseInstructor courseId={params.courseId} />
              <CourseReviews courseId={params.courseId} />
            </div>
            <div className="lg:col-span-1">
              <CourseSidebar courseId={params.courseId} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

