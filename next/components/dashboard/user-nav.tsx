'use client'

import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { User, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'

export function UserNav() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm">{session?.user?.name}</span>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/profile">
            <Settings className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => signOut()}>
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

