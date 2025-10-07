export function ChapterContent({ 
  courseId, 
  chapterId 
}: { 
  courseId: string
  chapterId: string 
}) {
  return (
    <div className="prose max-w-none">
      <h2>Chapter Title</h2>
      <p>Chapter content goes here...</p>
    </div>
  )
}

