export function Stats() {
  const stats = [
    { value: '10K+', label: 'Active Students' },
    { value: '500+', label: 'Expert Instructors' },
    { value: '2,000+', label: 'Online Courses' },
    { value: '95%', label: 'Success Rate' },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

