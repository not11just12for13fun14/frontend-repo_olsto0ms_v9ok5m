import React from 'react'
import { ShieldCheck, Truck, RefreshCw, Mail, Instagram, Youtube, Ticket } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-semibold text-gray-900">Why shop with us</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Secure payments</li>
              <li className="flex items-center gap-2"><Truck className="w-4 h-4 text-emerald-600" /> Free shipping over $50</li>
              <li className="flex items-center gap-2"><RefreshCw className="w-4 h-4 text-emerald-600" /> 30-day easy returns</li>
            </ul>
          </div>
          <div id="about">
            <h4 className="font-semibold text-gray-900">About Us</h4>
            <p className="mt-4 text-sm text-gray-600">
              We curate trending products from trusted suppliers and deliver a seamless shopping experience with a minimalist, modern touch.
            </p>
          </div>
          <div id="contact">
            <h4 className="font-semibold text-gray-900">Newsletter</h4>
            <form className="mt-4 flex gap-2">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 ring-1 ring-gray-200">
                <Mail className="w-4 h-4 text-gray-500" />
                <input className="bg-transparent outline-none text-sm w-full" placeholder="Enter your email" type="email" required />
              </div>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm">Subscribe</button>
            </form>
            <div className="mt-4 flex items-center gap-3 text-gray-600" id="social">
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-gray-100"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="TikTok" className="p-2 rounded-lg hover:bg-gray-100"><Ticket className="w-4 h-4" /></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-lg hover:bg-gray-100"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-gray-900">FAQ</h4>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <details className="rounded-lg bg-gray-50 p-3">
                <summary className="font-medium cursor-pointer">How long is shipping?</summary>
                <p className="mt-2">Typically 5-10 business days depending on your location and product.</p>
              </details>
              <details className="rounded-lg bg-gray-50 p-3">
                <summary className="font-medium cursor-pointer">Do you offer returns?</summary>
                <p className="mt-2">Yes, 30-day easy returns. Reach out via email for a quick refund or exchange.</p>
              </details>
              <details className="rounded-lg bg-gray-50 p-3">
                <summary className="font-medium cursor-pointer">Are payments secure?</summary>
                <p className="mt-2">We use encrypted gateways and do not store card details.</p>
              </details>
            </div>
          </div>
          <div id="track" className="rounded-xl border border-gray-100 p-6 bg-gradient-to-br from-emerald-50 to-amber-50">
            <h4 className="font-semibold text-gray-900">Track Your Order</h4>
            <form className="mt-4 grid sm:grid-cols-[1fr_auto] gap-2">
              <input className="rounded-lg border-gray-200" placeholder="# Enter tracking number" />
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm">Track</button>
            </form>
            <p className="mt-2 text-xs text-gray-500">We’ll fetch the latest status from our logistics partners.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} MinimalMart. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-gray-50 rounded ring-1 ring-gray-200">Secure Checkout</span>
            <span className="px-2 py-1 bg-gray-50 rounded ring-1 ring-gray-200">Free Shipping</span>
            <span className="px-2 py-1 bg-gray-50 rounded ring-1 ring-gray-200">Easy Returns</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
