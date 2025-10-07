import { Hero } from '@/components/home/hero'
import { FeaturedCourses } from '@/components/home/featured-courses'
import { Categories } from '@/components/home/categories'
import { Stats } from '@/components/home/stats'
import { Testimonials } from '@/components/home/testimonials'
import { CTA } from '@/components/home/cta'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <FeaturedCourses />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

