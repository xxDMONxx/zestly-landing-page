import React from 'react'
import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard.jsx'

const features = [
  {
    title: 'No data degree needed',
    desc: 'Retail insights for everyone—no SQL, no spreadsheets, just clarity.',
    icon: '/icons/segment.svg',
    color: 'bg-lemon-50 text-lemon-700 border-lemon-200',
  },
  {
    title: 'Show the whole picture',
    desc: 'Unify stores, warehouses, and ecom into one refreshing view.',
    icon: '/icons/growth.svg',
    color: 'bg-leaf-50 text-leaf-700 border-leaf-200',
  },
  {
    title: 'Predict tomorrow',
    desc: 'Real-time intelligence that helps you plan before the rush.',
    icon: '/icons/forecast.svg',
    color: 'bg-harvest-50 text-harvest-700 border-harvest-200',
  },
]

export default function Differentiators() {
  return (
    <section id="solutions" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-sand-900 dark:text-sand-100">From raw data to refreshing clarity.</h2>
          <p className="mt-3 text-sand-700 dark:text-sand-200">Pick. Press. Pour. We filter out the noise so your team gets pure insight.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
