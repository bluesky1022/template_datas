import { CoursesList } from '@/components/courses/courses-list'
import { CoursesFilter } from '@/components/courses/courses-filter'
import { SearchInput } from '@/components/search-input'

export default function BrowsePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Browse Courses</h1>
        <p className="text-muted-foreground">
          Discover your next learning adventure
        </p>
      </div>
      
      <SearchInput />
      <CoursesFilter />
      <CoursesList variant="all" />
    </div>
  )
}

