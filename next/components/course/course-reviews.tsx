import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function CourseReviews({ courseId }: { courseId: string }) {
  const reviews = [
    { id: '1', author: 'Sarah J.', rating: 5, comment: 'Excellent course!' },
    { id: '2', author: 'Mike C.', rating: 4, comment: 'Very helpful and well-structured' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">{review.author}</span>
              <div className="flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

