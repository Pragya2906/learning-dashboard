'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, BookOpen, Trophy, Settings, ChevronLeft, Zap } from 'lucide-react'

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: BookOpen, label: 'Courses', id: 'courses' },
    { icon: Trophy, label: 'Achievements', id: 'achievements' },
    { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false)
    const [active, setActive] = useState('dashboard')

    return (
        <>
            <motion.aside
                animate={{ width: collapsed ? 64 : 220 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="hidden md:flex flex-col h-screen sticky top-0 bg-bg-card border-r border-border-subtle overflow-hidden shrink-0 z-20">

                <div className="flex items-center gap-3 px-4 py-5 border-b border-border-subtle">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center shrink-0">
                        <Zap size={16} className="text-white" />
                    </div>
                    <AnimatePresence>
                        {!collapsed && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="font-display font-700 text-white text-sm tracking-wide">
                                LearnOS
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                <nav className="flex-1 px-2 py-4 space-y-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            aria-label={`Navigate to ${item.label}`}
                            aria-current={active === item.id ? 'page' : undefined}
                            className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors group">
                            {active === item.id && (
                                <motion.div
                                    layoutId="sidebar-highlight"
                                    className="absolute inset-0 bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }} />)}
                            <item.icon
                                size={18}
                                className={`shrink-0 relative z-10 transition-colors ${active === item.id ? 'text-accent-cyan' : 'text-slate-500 group-hover:text-slate-300'
                                    }`} />
                            <AnimatePresence>
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className={`text-sm relative z-10 font-body ${active === item.id ? 'text-white font-500' : 'text-slate-400 group-hover:text-slate-200'
                                            }`}>
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    ))}
                </nav>

                <div className="px-2 pb-4">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        className="w-full flex items-center justify-center p-2.5 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-colors">
                        <motion.div
                            animate={{ rotate: collapsed ? 180 : 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
                            <ChevronLeft size={18} />
                        </motion.div>
                    </button>
                </div>
            </motion.aside>

            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-card border-t border-border-subtle flex items-center justify-around px-4 py-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        aria-label={`Navigate to ${item.label}`}
                        aria-current={active === item.id ? 'page' : undefined}
                        className="relative flex flex-col items-center gap-1 px-3 py-1.5">
                        {active === item.id && (
                            <motion.div
                                layoutId="mobile-highlight"
                                className="absolute inset-0 bg-accent-cyan/10 rounded-xl"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }} />)}
                        <item.icon
                            size={20}
                            className={`relative z-10 ${active === item.id ? 'text-accent-cyan' : 'text-slate-500'}`} />
                        <span className={`text-[10px] relative z-10 ${active === item.id ? 'text-accent-cyan' : 'text-slate-500'}`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>
        </>
    )
}