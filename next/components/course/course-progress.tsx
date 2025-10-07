import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function CourseProgress({ 
  courseId, 
  chapterId 
}: { 
  courseId: string
  chapterId: string 
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }} />
        </div>
        <p className="text-sm text-muted-foreground mt-2">65% Complete</p>
      </div>
      <Button className="ml-4">
        <CheckCircle className="mr-2 h-4 w-4" />
        Mark as Complete
      </Button>
    </div>
  )
}

