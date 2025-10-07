import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ProgressOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>This Week's Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Monday</span>
            <span className="text-sm font-medium">2.5 hrs</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Tuesday</span>
            <span className="text-sm font-medium">1.0 hrs</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Wednesday</span>
            <span className="text-sm font-medium">3.5 hrs</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Thursday</span>
            <span className="text-sm font-medium">2.0 hrs</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Friday</span>
            <span className="text-sm font-medium">1.5 hrs</span>
          </div>
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-sm">Total</span>
              <span className="text-sm">10.5 hrs</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

