import React from 'react'
import { ShoppingCart, Search, Menu, Instagram, Youtube, Ticket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none sm:hidden" aria-label="Open menu">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-gray-900">Minimal</span>
            <span className="text-emerald-500">Mart</span>
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 ring-1 ring-gray-200">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            className="bg-transparent outline-none text-sm w-64"
            placeholder="Search trending products"
          />
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-sm text-gray-700">
          <a href="#shop" className="hover:text-emerald-600">Shop</a>
          <a href="#track" className="hover:text-emerald-600">Track Order</a>
          <a href="#about" className="hover:text-emerald-600">About</a>
          <a href="#contact" className="hover:text-emerald-600">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cart" className="relative p-2 rounded-lg hover:bg-gray-100" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-emerald-500 text-white rounded-full px-1.5 py-0.5">2</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 text-gray-600">
            <a href="#social" aria-label="Instagram" className="p-2 rounded-lg hover:bg-gray-100"><Instagram className="w-4 h-4" /></a>
            <a href="#social" aria-label="TikTok" className="p-2 rounded-lg hover:bg-gray-100"><Ticket className="w-4 h-4" /></a>
            <a href="#social" aria-label="YouTube" className="p-2 rounded-lg hover:bg-gray-100"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </header>
  )
}
