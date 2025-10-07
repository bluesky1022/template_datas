'use client'

import { Button } from '@/components/ui/button'

export function CoursesFilter() {
  const filters = ['All', 'In Progress', 'Completed', 'Not Started']

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={filter === 'All' ? 'default' : 'outline'}
          size="sm"
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}

