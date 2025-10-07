import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { InstructorCoursesList } from '@/components/instructor/instructor-courses-list'

export default function InstructorCoursesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Teaching</h1>
          <p className="text-muted-foreground">
            Manage your courses and create new ones
          </p>
        </div>
        <Button asChild>
          <Link href="/instructor/courses/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Course
          </Link>
        </Button>
      </div>
      
      <InstructorCoursesList />
    </div>
  )
}

