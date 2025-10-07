'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'

const FEATURED_COURSES = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master web development with HTML, CSS, JavaScript, React, Node.js and more',
    price: 89.99,
    rating: 4.8,
    students: 12453,
    imageUrl: '/placeholder-course.jpg',
  },
  {
    id: '2',
    title: 'Machine Learning A-Z',
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts',
    price: 94.99,
    rating: 4.9,
    students: 8234,
    imageUrl: '/placeholder-course.jpg',
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    description: 'Learn user interface and user experience design from scratch',
    price: 79.99,
    rating: 4.7,
    students: 6721,
    imageUrl: '/placeholder-course.jpg',
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-muted-foreground">
            Explore our most popular courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_COURSES.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600" />
              <CardHeader>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-muted-foreground">
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="text-2xl font-bold">${course.price}</span>
                <Button asChild>
                  <Link href={`/courses/${course.id}`}>
                    View Course
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

