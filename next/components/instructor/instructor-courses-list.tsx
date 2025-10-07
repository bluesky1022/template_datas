import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Edit, Trash } from 'lucide-react'

export function InstructorCoursesList() {
  const courses = [
    { id: '1', title: 'My Course 1', students: 120, published: true },
    { id: '2', title: 'My Course 2', students: 85, published: false },
  ]

  return (
    <div className="grid gap-4">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>
                  {course.students} students • {course.published ? 'Published' : 'Draft'}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href={`/instructor/courses/${course.id}/edit`}>
                    <Edit className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

