import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CourseInstructor({ courseId }: { courseId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Instructor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-300" />
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Senior Developer</p>
            <p className="mt-2 text-sm">
              10+ years of experience in software development and teaching
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

