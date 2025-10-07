import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export function ChaptersList({ courseId }: { courseId: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Course Curriculum</CardTitle>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Chapter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12 text-muted-foreground">
          No chapters yet. Click "Add Chapter" to get started.
        </div>
      </CardContent>
    </Card>
  )
}

