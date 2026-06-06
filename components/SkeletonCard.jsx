export default function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-card p-5 space-y-4 overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 animate-pulse" />
        <div className="h-4 w-2/3 rounded-lg bg-white/5 animate-pulse" />
      </div>

      <div className="space-y-2">
        <div className="h-2 w-full rounded-full bg-white/5 animate-pulse" />
        <div className="h-2 w-4/5 rounded-full bg-white/5 animate-pulse" />
      </div>
      
      <div className="h-1.5 w-full rounded-full bg-white/5 animate-pulse" />
    </div>
  )
}