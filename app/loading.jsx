import SkeletonCard from '@/components/SkeletonCard'

function SkeletonHero() {
  return (
    <div className="md:col-span-2 lg:col-span-2 rounded-2xl border border-border-subtle bg-bg-card p-6 md:p-8 min-h-[180px] flex flex-col justify-between">
      <div className="space-y-3">
        <div className="h-3 w-24 rounded-lg bg-white/5 animate-pulse_soft" />
        <div className="h-7 w-64 rounded-lg bg-white/5 animate-pulse_soft" />
        <div className="h-3 w-48 rounded-lg bg-white/5 animate-pulse_soft" />
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-7 w-28 rounded-full bg-white/5 animate-pulse_soft" />
        <div className="h-7 w-28 rounded-full bg-white/5 animate-pulse_soft" />
      </div>
    </div>
  )
}

function SkeletonActivity() {
  return (
    <div className="md:col-span-2 lg:col-span-1 rounded-2xl border border-border-subtle bg-bg-card p-5 min-h-[160px]">
      <div className="h-4 w-20 rounded-lg bg-white/5 animate-pulse_soft mb-4" />
      <div className="grid grid-cols-12 gap-0.5">
        {Array.from({ length: 84 }).map((_, i) => (
          <div key={i} className="h-2.5 w-2.5 rounded-sm bg-white/5 animate-pulse_soft" />
        ))}
      </div>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="flex min-h-screen bg-bg-base">
      <div className="hidden md:flex flex-col h-screen w-[220px] bg-bg-card border-r border-border-subtle shrink-0" />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <SkeletonHero />
          <SkeletonActivity />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </main>
    </div>
  )
}