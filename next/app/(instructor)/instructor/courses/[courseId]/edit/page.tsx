import { CourseEditForm } from '@/components/instructor/course-edit-form'
import { ChaptersList } from '@/components/instructor/chapters-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function EditCoursePage({
  params,
}: {
  params: { courseId: string }
}) {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Course</h1>
        <p className="text-muted-foreground">
          Manage your course content and settings
        </p>
      </div>
      
      <Tabs defaultValue="details" className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Course Details</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details">
          <CourseEditForm courseId={params.courseId} />
        </TabsContent>
        
        <TabsContent value="curriculum">
          <ChaptersList courseId={params.courseId} />
        </TabsContent>
        
        <TabsContent value="pricing">
          <div className="text-center py-12 text-muted-foreground">
            Pricing settings coming soon...
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="text-center py-12 text-muted-foreground">
            Course settings coming soon...
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

