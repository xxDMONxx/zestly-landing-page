import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Pick', desc: 'Collect retail data from POS, ecom, and warehouses.', icon: '/icons/cart.svg', color: 'bg-leaf-50 text-leaf-700 border-leaf-200' },
  { title: 'Press', desc: 'Extract patterns and trends with AI—no setup needed.', icon: '/icons/segment.svg', color: 'bg-lemon-50 text-lemon-700 border-lemon-200' },
  { title: 'Pour', desc: 'Serve clear, refreshing insights to every team.', icon: '/icons/margin.svg', color: 'bg-harvest-50 text-harvest-700 border-harvest-200' },
]

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="how-title" className="text-2xl sm:text-3xl font-bold text-sand-900 dark:text-sand-100">How Zestly Works</h2>
          <p className="mt-3 text-sand-700 dark:text-sand-200">From raw data to refreshing clarity.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
      <motion.div key={s.title} className={`card p-6 border`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} whileHover={{ y: -6 }}>
              <div className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm font-medium bg-white text-sand-800">
                {s.title}
              </div>
              <div className="mt-3 flex items-start gap-3">
                <img src={s.icon} alt="" className="w-6 h-6" aria-hidden />
        <p className="text-sand-700 dark:text-sand-200">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
