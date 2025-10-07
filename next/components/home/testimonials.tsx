import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    content: 'This platform transformed my career. The courses are well-structured and the instructors are knowledgeable.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'UX Designer',
    content: 'The best online learning experience I\'ve had. Highly recommended for anyone looking to upskill.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    content: 'Incredible value for money. The quality of content is exceptional and the community is supportive.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied learners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

