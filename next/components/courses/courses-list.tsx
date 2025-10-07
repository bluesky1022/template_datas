'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'

interface CoursesListProps {
  variant: 'all' | 'enrolled'
}

export function CoursesList({ variant }: CoursesListProps) {
  // This would normally fetch from API
  const courses = Array.from({ length: 6 }, (_, i) => ({
    id: String(i + 1),
    title: `Sample Course ${i + 1}`,
    description: 'Learn the fundamentals and advance your skills',
    price: 89.99,
    rating: 4.8,
    students: 1000 + i * 100,
    progress: variant === 'enrolled' ? Math.floor(Math.random() * 100) : undefined,
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
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
                ({course.students} students)
              </span>
            </div>
            {course.progress !== undefined && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            {variant === 'enrolled' ? (
              <Button className="w-full" asChild>
                <Link href={`/courses/${course.id}`}>
                  Continue Learning
                </Link>
              </Button>
            ) : (
              <>
                <span className="text-2xl font-bold">${course.price}</span>
                <Button asChild>
                  <Link href={`/courses/${course.id}`}>
                    View Course
                  </Link>
                </Button>
              </>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

