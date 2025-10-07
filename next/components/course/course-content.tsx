import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CourseContent({ courseId }: { courseId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What you'll learn</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Build real-world projects from scratch</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Master the latest tools and technologies</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Learn best practices and industry standards</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

