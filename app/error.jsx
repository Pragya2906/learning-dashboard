'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-base">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 text-center max-w-sm p-8 rounded-2xl border border-red-500/20 bg-red-500/5"
      >
        <AlertTriangle size={32} className="text-red-400" />
        <h2 className="font-display text-white text-lg font-700">Something went wrong</h2>
        <p className="text-slate-400 text-sm font-body">{error.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm hover:bg-red-500/20 transition-colors"
        >
          Try again
        </button>
      </motion.div>
    </div>
  )
}