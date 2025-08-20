import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Differentiators from './components/Differentiators.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import UseCaseGrid from './components/UseCaseGrid.jsx'
import SeasonalContext from './components/SeasonalContext.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[length:1200px_600px,900px_600px]">
      <Header />
      <main>
        <Hero />
        <Differentiators />
  <HowItWorks />
        <UseCaseGrid />
  <SeasonalContext />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
