import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    title: 'Inventory Optimization',
    desc: 'Balance stock like a well-tended field—never overwater, never let it dry.',
    icon: '/icons/cart.svg',
    badge: 'leaf',
  },
  {
    title: 'Customer Segmentation',
    desc: 'Group shoppers by behaviors and tastes to serve more of what they love.',
    icon: '/icons/segment.svg',
    badge: 'harvest',
  },
  {
    title: 'Margin Enhancement',
    desc: 'Spot ripe opportunities to improve margins without sacrificing loyalty.',
    icon: '/icons/margin.svg',
    badge: 'orchard',
  },
  {
    title: 'Seasonal Forecasting',
    desc: 'Predict demand as seasons turn—plan autumn promos with confidence.',
    icon: '/icons/forecast.svg',
    badge: 'leaf',
  },
]

const badgeStyles = {
  leaf: 'bg-leaf-50 text-leaf-700 border-leaf-200',
  harvest: 'bg-harvest-50 text-harvest-700 border-harvest-200',
  orchard: 'bg-orchard-50 text-orchard-700 border-orchard-200',
}

export default function UseCaseGrid() {
  return (
  <section id="resources" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-sand-900 dark:text-sand-100">Perfect for Autumn Planning</h2>
            <p className="mt-3 text-sand-700 max-w-2xl dark:text-sand-200">From inventory to forecasting, Zestly nurtures every step of your retail strategy with AI-driven insights.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="card p-5"
            >
              <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm font-medium ${badgeStyles[c.badge]} dark:bg-slate-900 dark:border-slate-800 dark:text-sand-100`}>
                <img src={c.icon} alt="" className="w-4 h-4" aria-hidden />
                {c.title}
              </div>
              <p className="mt-3 text-sand-700 dark:text-sand-200">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
