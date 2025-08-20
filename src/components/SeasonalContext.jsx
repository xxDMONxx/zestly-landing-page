import React from 'react'
import { motion } from 'framer-motion'

export default function SeasonalContext() {
  return (
    <section aria-labelledby="season-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 id="season-title" className="text-2xl sm:text-3xl font-bold text-sand-900 dark:text-sand-100">Autumn clarity = Peak season confidence.</h2>
            <p className="mt-3 text-sand-700 dark:text-sand-200">Seasonal planning can’t wait. Zestly gives you the insight edge before the Black Friday rush — so you can stock smarter, sell better, and win early.</p>
            <motion.a href="#trial" className="button-primary mt-6 inline-flex" whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
              Get ready for your most insightful season yet
            </motion.a>
          </div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="card p-4">
            <img src="/dashboard-mockup.svg" alt="Seasonal dashboard view" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
