import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="relative h-full flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/30 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
              New season • Free shipping over $50
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Trendy Finds for a Minimal Lifestyle
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover curated, high-converting products with fast shipping and secure payments. Designed to build trust and boost conversions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center px-5 py-3 text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-sm transition-colors"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-5 py-3 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg ring-1 ring-emerald-200 transition-colors"
              >
                Why Choose Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
