import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureCard({ title, desc, icon, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className={`card p-6 border`}
      role="article"
      aria-label={title}
    >
      <div className="flex items-start gap-4">
        <div className={`shrink-0 rounded-lg border p-2 ${color}`} aria-hidden>
          <motion.img src={icon} alt="" className="w-6 h-6" whileHover={{ scale: 1.08 }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-sand-900 dark:text-sand-100">{title}</h3>
          <p className="mt-1 text-sand-700 dark:text-sand-200">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
