import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CourseSidebar({ courseId }: { courseId: string }) {
  return (
    <Card className="sticky top-4">
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600" />
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">$89.99</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" size="lg">Enroll Now</Button>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium">12 hours</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Lectures:</span>
            <span className="font-medium">42</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Level:</span>
            <span className="font-medium">Beginner</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

