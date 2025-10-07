'use client'

import { Button } from '@/components/ui/button'

export function NotificationSettings() {
  const settings = [
    { id: 'email_courses', label: 'Course updates via email' },
    { id: 'email_promotions', label: 'Promotional emails' },
    { id: 'push_notifications', label: 'Push notifications' },
    { id: 'sms_reminders', label: 'SMS reminders' },
  ]

  return (
    <div className="space-y-4">
      {settings.map((setting) => (
        <div key={setting.id} className="flex items-center justify-between">
          <label htmlFor={setting.id} className="text-sm font-medium">
            {setting.label}
          </label>
          <input
            type="checkbox"
            id={setting.id}
            className="h-4 w-4"
          />
        </div>
      ))}
      <Button type="submit" className="mt-6">Save Preferences</Button>
    </div>
  )
}

