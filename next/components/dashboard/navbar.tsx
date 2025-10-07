'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { UserNav } from './user-nav'

export function DashboardNavbar() {
  return (
    <div className="flex items-center p-4 border-b h-full bg-white dark:bg-gray-800">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserNav />
      </div>
    </div>
  )
}

