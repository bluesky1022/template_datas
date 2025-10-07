'use client'

import { Button } from '@/components/ui/button'

export function ProfileForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md"
          rows={4}
          placeholder="Tell us about yourself..."
        />
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  )
}

