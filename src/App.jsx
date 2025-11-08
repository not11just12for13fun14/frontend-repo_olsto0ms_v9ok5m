import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCatalog from './components/ProductCatalog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white ring-2 ring-emerald-500 rounded px-3 py-2">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  )
}
