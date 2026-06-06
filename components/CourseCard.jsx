'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code2, Server, FileCode, Paintbrush, BookOpen } from 'lucide-react'
import { tileVariants } from '../lib/variants'

const ICON_MAP = { Code2, Server, FileCode, Paintbrush, BookOpen }
const gradients = [
  'from-cyan-500/20 via-transparent to-violet-500/10',
  'from-violet-500/20 via-transparent to-pink-500/10',
  'from-emerald-500/20 via-transparent to-cyan-500/10',
  'from-orange-500/20 via-transparent to-red-500/10',
]

export default function CourseCard({ course, index }) {
  const [displayProgress, setDisplayProgress] = useState(0)
  useEffect(() => {
    const timer = setTimeout(
      () => setDisplayProgress(course.progress),
      400 + index * 100)
    return () => clearTimeout(timer)
  }, [course.progress, index])

  const IconComponent = ICON_MAP[course.icon_name] ?? BookOpen

  return (
    <motion.article
      variants={tileVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="grain relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-5 cursor-pointer group">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-60 pointer-events-none`} />

      <div className="absolute inset-0 rounded-2xl border border-accent-cyan/0 group-hover:border-accent-cyan/20 transition-colors duration-300 pointer-events-none" />
      <div className="relative z-10 space-y-4">

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <IconComponent size={18} className="text-accent-cyan" />
          </div>
          <h3 className="text-sm font-bold text-white leading-snug pt-1">
            {course.title}
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500">Progress</span>
            <span className="text-xs text-accent-cyan font-bold">
              {course.progress}%
            </span>
          </div>
          
          <div
            role="progressbar"
            aria-valuenow={course.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${course.title} progress`}
            className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
              initial={{ width: '0%' }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + index * 0.1 }} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}