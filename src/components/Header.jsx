import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
  <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-sand-200 dark:bg-slate-950/70 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" role="navigation" aria-label="Main">
          <a href="#" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 rounded-md">
            <span className="sr-only">Zestly</span>
            <img src="/logo-citrus.svg" alt="Zestly logo" className="w-7 h-7" />
            <span className="text-2xl font-semibold tracking-tight text-sand-900 dark:text-sand-100">Zestly</span>
          </a>

      <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
        <a key={item.label} href={item.href} className="text-sand-700 hover:text-sand-900 transition font-medium dark:text-sand-100 dark:hover:text-white">
                {item.label}
              </a>
            ))}
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              href="#demo"
              className="button-primary"
            >
              Request Demo
            </motion.a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
              className="p-2 rounded-md border border-sand-300 hover:bg-sand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              {dark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
            </button>
            <div className="md:hidden">
            <button
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md border border-sand-300 hover:bg-sand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="md:hidden border-t border-sand-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"
          >
            <ul className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sand-800 hover:bg-sand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 dark:text-sand-100 dark:hover:bg-sand-800"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#demo" className="button-primary w-full justify-center" onClick={() => setOpen(false)}>
                  Request Demo
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
