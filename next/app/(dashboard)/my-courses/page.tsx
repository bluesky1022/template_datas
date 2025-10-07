import { CoursesList } from '@/components/courses/courses-list'
import { CoursesFilter } from '@/components/courses/courses-filter'

export default function MyCoursesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground">
          Continue learning where you left off
        </p>
      </div>
      
      <CoursesFilter />
      <CoursesList variant="enrolled" />
    </div>
  )
}

