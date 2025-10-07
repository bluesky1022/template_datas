import { DashboardCards } from '@/components/dashboard/dashboard-cards'
import { RecentCourses } from '@/components/dashboard/recent-courses'
import { ProgressOverview } from '@/components/dashboard/progress-overview'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your learning progress
        </p>
      </div>
      
      <DashboardCards />
      
      <div className="grid gap-6 md:grid-cols-2">
        <RecentCourses />
        <ProgressOverview />
      </div>
    </div>
  )
}

