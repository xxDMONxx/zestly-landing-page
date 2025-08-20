import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
  <section id="pricing" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-sand-900 dark:text-sand-100">Ready to Harvest Your Data?</h2>
          <p className="mt-3 text-sand-700 dark:text-sand-200">Join hundreds of retailers already cultivating growth with Zestly.</p>
          <motion.a href="#trial" className="button-primary mt-6 inline-flex" whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
            Start Your Free Trial
          </motion.a>
        </div>
      </div>
    </section>
  )
}
