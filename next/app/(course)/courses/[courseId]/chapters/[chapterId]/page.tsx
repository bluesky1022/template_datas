import { VideoPlayer } from '@/components/course/video-player'
import { ChapterContent } from '@/components/course/chapter-content'
import { ChapterNavigation } from '@/components/course/chapter-navigation'
import { CourseProgress } from '@/components/course/course-progress'

export default function ChapterPage({
  params,
}: {
  params: { courseId: string; chapterId: string }
}) {
  return (
    <div className="h-full">
      <div className="h-[80vh] flex flex-col">
        <div className="flex-1">
          <VideoPlayer 
            courseId={params.courseId} 
            chapterId={params.chapterId} 
          />
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 border-t">
          <CourseProgress 
            courseId={params.courseId} 
            chapterId={params.chapterId} 
          />
        </div>
      </div>
      <div className="p-6">
        <ChapterContent 
          courseId={params.courseId} 
          chapterId={params.chapterId} 
        />
        <ChapterNavigation 
          courseId={params.courseId} 
          chapterId={params.chapterId} 
        />
      </div>
    </div>
  )
}

