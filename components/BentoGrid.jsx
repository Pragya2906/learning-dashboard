import { Suspense } from 'react'
import HeroTile from './HeroTile'
import ActivityTile from './ActivityTile'
import SkeletonCard from './SkeletonCard'
import MotionGrid from './MotionGrid'
import CourseCard from './CourseCard'

export default function BentoGrid({ user, courses }) {
  return (
    <main className="flex-1 p-4 md:p-6 pb-24 md:pb-6 overflow-y-auto">
      <MotionGrid>
        <div className="md:col-span-2 lg:col-span-2">
          <HeroTile user={user} />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <ActivityTile />
        </div>
        {courses.length === 0 ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (courses.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} />
        )))}
      </MotionGrid>
    </main>
  )
}