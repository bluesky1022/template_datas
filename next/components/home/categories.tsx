'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Code, Palette, TrendingUp, Camera, Music, BookOpen } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES = [
  { name: 'Development', icon: Code, count: 1234 },
  { name: 'Design', icon: Palette, count: 892 },
  { name: 'Business', icon: TrendingUp, count: 743 },
  { name: 'Photography', icon: Camera, count: 456 },
  { name: 'Music', icon: Music, count: 321 },
  { name: 'Academic', icon: BookOpen, count: 654 },
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Categories</h2>
          <p className="text-muted-foreground">
            Explore courses by category
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => (
            <Link key={category.name} href={`/browse?category=${category.name.toLowerCase()}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <category.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} courses
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

