'use client'

import { Button } from '@/components/ui/button'

export function CourseForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Course Title</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="e.g., Complete Web Development"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md"
          rows={4}
          placeholder="Describe your course..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select className="w-full px-3 py-2 border rounded-md">
          <option>Development</option>
          <option>Design</option>
          <option>Business</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Price ($)</label>
        <input
          type="number"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="89.99"
        />
      </div>
      <Button type="submit">Create Course</Button>
    </form>
  )
}

