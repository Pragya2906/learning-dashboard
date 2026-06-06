'use client'
import { motion } from 'framer-motion'
import { Flame, BookOpen, Clock } from 'lucide-react'
import { tileVariants } from '../lib/variants'

export default function HeroTile({ user }) {
  const stats = [
    { icon: Flame, label: 'Day streak', value: user.streak, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
    { icon: BookOpen, label: 'Active courses', value: user.coursesActive, color: 'text-accent-cyan', bg: 'bg-cyan-500/10 border-cyan-500/20' },
    { icon: Clock, label: 'Mins today', value: user.todayMinutes, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },]

  return (
    <motion.article
      variants={tileVariants}
      whileHover={{ scale: 1.01 }}
      aria-label="Welcome hero section"
      className="grain relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-6 md:p-8 min-h-[180px] flex flex-col justify-between">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-violet/10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="text-slate-400 text-sm mb-1">Good morning</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Welcome back, <span className="text-accent-cyan">{user.name}</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          You have {user.coursesActive} courses in progress. Keep the momentum going.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-4">
        {stats.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className={`flex items-center gap-1.5 border rounded-full px-3 py-1.5 ${bg}`}>
            <Icon size={14} className={color} />
            <span className={`text-xs font-bold ${color}`}>{value}</span>
            <span className="text-xs text-slate-500">{label}</span>
          </div>
        ))}
      </div>
    </motion.article>
  )
}