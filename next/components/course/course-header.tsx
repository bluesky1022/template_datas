export function CourseHeader({ courseId }: { courseId: string }) {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Course Title</h1>
        <p className="text-xl text-gray-300 mb-4">
          Master the fundamentals and advanced concepts
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span>⭐ 4.8 (1,234 ratings)</span>
          <span>👥 12,453 students</span>
          <span>🕐 Last updated 10/2024</span>
        </div>
      </div>
    </div>
  )
}

