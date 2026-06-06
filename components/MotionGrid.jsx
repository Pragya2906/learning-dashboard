'use client'
import { motion } from 'framer-motion'
import { containerVariants } from '../lib/variants'

export default function MotionGrid({ children }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {children}
    </motion.div>
  )
}