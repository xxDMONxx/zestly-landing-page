import React from 'react'

export default function Footer() {
  return (
  <footer id="contact" className="mt-auto border-t border-sand-200 bg-white/60 backdrop-blur dark:bg-slate-950/70 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-sand-900 dark:text-sand-100">
              <span className="text-leaf-600">Zestly</span>
              <span className="text-sand-700">.</span>
            </div>
            <p className="mt-3 text-sand-700 max-w-sm dark:text-sand-200">We turn fragmented retail data into fresh, AI-powered insights—so your strategy is always well-nourished.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-sand-900 dark:text-sand-100">Product</h3>
            <ul className="mt-3 space-y-2 text-sand-700 dark:text-sand-200">
              <li><a href="#solutions" className="hover:text-sand-900">Analytics</a></li>
              <li><a href="#" className="hover:text-sand-900">Integrations</a></li>
              <li><a href="#" className="hover:text-sand-900">Pricing</a></li>
              <li><a href="#resources" className="hover:text-sand-900">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-sand-900 dark:text-sand-100">Company</h3>
            <ul className="mt-3 space-y-2 text-sand-700 dark:text-sand-200">
              <li><a href="#" className="hover:text-sand-900">About</a></li>
              <li><a href="#" className="hover:text-sand-900">Careers</a></li>
              <li><a href="#" className="hover:text-sand-900">Contact</a></li>
              <li><a href="#" className="hover:text-sand-900">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-sand-900 dark:text-sand-100">Get in touch</h3>
            <p className="mt-3 text-sand-700 dark:text-sand-200">hello@zestly.ai</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="p-2 rounded-md border border-sand-300 hover:bg-sand-100 dark:border-slate-800 dark:hover:bg-slate-800">
                <img src="/icons/twitter.svg" alt="" className="w-4 h-4 dark:invert" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md border border-sand-300 hover:bg-sand-100 dark:border-slate-800 dark:hover:bg-slate-800">
                <img src="/icons/linkedin.svg" alt="" className="w-4 h-4 dark:invert" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-md border border-sand-300 hover:bg-sand-100 dark:border-slate-800 dark:hover:bg-slate-800">
                <img src="/icons/github.svg" alt="" className="w-4 h-4 dark:invert" />
              </a>
            </div>
          </div>
        </div>
  <div className="mt-10 text-sm text-sand-600 dark:text-sand-300">© {new Date().getFullYear()} Zestly. All rights reserved.</div>
      </div>
    </footer>
  )
}
