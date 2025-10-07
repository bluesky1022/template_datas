import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ChapterNavigation({ 
  courseId, 
  chapterId 
}: { 
  courseId: string
  chapterId: string 
}) {
  return (
    <div className="flex justify-between mt-8">
      <Button variant="outline">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>
      <Button>
        Next
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

