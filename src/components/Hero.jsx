import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [toast, setToast] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed')
      setToast(true)
      setTimeout(() => setToast(false), 2200)
      setEmail('')
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
  <section className="relative isolate overflow-hidden pt-16 pb-10 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
  <div className="absolute inset-0 pointer-events-none bg-grid-dots opacity-30 dark:opacity-20" aria-hidden="true"></div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-sand-900 dark:text-sand-100"
          >
            Harvest insights before the rush.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg text-sand-700 max-w-xl dark:text-sand-200"
          >
            Zestly transforms retail data into clear, actionable insights, just in time for your busiest season.
          </motion.p>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex w-full max-w-lg gap-3"
            aria-label="Get your free analysis"
          >
      <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email"
                className="w-full rounded-lg border border-sand-300 bg-white/80 px-4 py-3 text-sand-900 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-sand-100"
              />
            </div>
            <motion.button type="submit" className="button-secondary whitespace-nowrap disabled:opacity-60" whileHover={{ y: -1 }} whileTap={{ y: 0 }} disabled={loading}>
              {loading ? 'Submitting…' : 'Book your demo'}
            </motion.button>
          </motion.form>
          {error && (
            <div role="alert" className="mt-3 text-sm text-orchard-600 dark:text-orchard-300">
              {error}
            </div>
          )}

          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                role="status"
                aria-live="polite"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-sand-900 text-white px-3 py-2 shadow-md dark:bg-slate-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                We'll reach out with a fresh analysis shortly.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="card p-4"
          >
            <img src="/dashboard-mockup.svg" alt="Zestly dashboard mockup" className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
