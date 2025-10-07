import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function RecentCourses() {
  const courses = [
    { id: '1', title: 'Web Development Bootcamp', progress: 75 },
    { id: '2', title: 'Machine Learning A-Z', progress: 45 },
    { id: '3', title: 'UI/UX Design', progress: 90 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Continue Learning</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{course.title}</span>
              <span className="text-sm text-muted-foreground">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href={`/courses/${course.id}`}>Continue</Link>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

