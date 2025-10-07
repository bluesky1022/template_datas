'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn Without Limits
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Start, switch, or advance your career with thousands of courses, 
            professional certificates, and degrees from world-class instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/browse">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/register">
                <Play className="mr-2 h-4 w-4" />
                Get Started Free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

