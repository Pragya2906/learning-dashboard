'use client'

import { motion } from 'framer-motion'
import { tileVariants } from '../lib/variants'

const ACTIVITY_DATA = Array.from({ length: 52 * 7 }, (_, i) =>
    Math.floor(((Math.sin(i * 9301 + 49297) + 1) / 2) * 5)
)

const intensityClass = {
    0: 'bg-white/5',
    1: 'bg-accent-cyan/20',
    2: 'bg-accent-cyan/40',
    3: 'bg-accent-cyan/60',
    4: 'bg-accent-cyan/90',
}

export default function ActivityTile() {
    const weeks = []
    for (let i = 0; i < 52; i++) {
        weeks.push(ACTIVITY_DATA.slice(i * 7, i * 7 + 7))
    }

    return (
        <motion.article
            variants={tileVariants}
            whileHover={{ scale: 1.01 }}
            aria-label="Learning activity over the past year"
            className="grain relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
                <h2 className="text-sm font-bold text-white mb-1">Activity</h2>
                <p className="text-xs text-slate-500 mb-4">Last 12 months</p>
                <div className="overflow-x-auto">
                    <div className="flex gap-0.5 min-w-max">
                        {weeks.map((week, wi) => (
                            <div key={wi} className="flex flex-col gap-0.5">
                                {week.map((day, di) => (
                                    <motion.div
                                        key={di}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (wi * 7 + di) * 0.001 }}
                                        className={`w-2.5 h-2.5 rounded-sm ${intensityClass[day]}`} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-slate-600">Less</span>
                    {[0, 1, 2, 3, 4].map((l) => (
                        <div key={l} className={`w-2.5 h-2.5 rounded-sm ${intensityClass[l]}`} />
                    ))}
                    <span className="text-xs text-slate-600">More</span>
                </div>
            </div>
        </motion.article>
    )
}