import React, { useMemo, useState } from 'react'
import { Star, SlidersHorizontal } from 'lucide-react'

const PRODUCTS = [
  {
    id: 1,
    title: 'Portable Mini Blender',
    price: 39.99,
    category: 'Home',
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1696353558013-16b18d8c1640?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3J0YWJsZSUyME1pbmklMjBCbGVuZGVyfGVufDB8MHx8fDE3NjI2MTM3NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Blend smoothies on the go with USB-C fast charging.'
  },
  {
    id: 2,
    title: 'Wireless Earbuds Pro',
    price: 59.99,
    category: 'Tech',
    popularity: 99,
    image: 'https://images.unsplash.com/photo-1574920164507-e651b363da83?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyMEVhcmJ1ZHMlMjBQcm98ZW58MHwwfHx8MTc2MjYxMzc3NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Active noise cancellation with crystal-clear sound.'
  },
  {
    id: 3,
    title: 'LED Vanity Mirror',
    price: 29.99,
    category: 'Beauty',
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1758553976550-4325ab634da3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMRUQlMjBWYW5pdHklMjBNaXJyb3J8ZW58MHwwfHx8MTc2MjYxMzc3Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Dimmable lights for flawless makeup anywhere.'
  },
  {
    id: 4,
    title: 'Ergonomic Phone Stand',
    price: 19.99,
    category: 'Tech',
    popularity: 85,
    image: 'https://images.unsplash.com/photo-1638800490541-ddd8be62f413?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFcmdvbm9taWMlMjBQaG9uZSUyMFN0YW5kfGVufDB8MHx8fDE3NjI2MTM3Nzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Adjustable aluminum stand for desk setups.'
  },
  {
    id: 5,
    title: 'Aroma Diffuser',
    price: 24.99,
    category: 'Home',
    popularity: 80,
    image: 'https://images.unsplash.com/photo-1635575066917-e788c2bd06b7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcm9tYSUyMERpZmZ1c2VyfGVufDB8MHx8fDE3NjI2MTM3Nzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Calming mist with pastel RGB lighting modes.'
  },
  {
    id: 6,
    title: 'Resistance Bands Set',
    price: 22.99,
    category: 'Fitness',
    popularity: 88,
    image: 'https://images.unsplash.com/photo-1739289043191-201357661bb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXNpc3RhbmNlJTIwQmFuZHMlMjBTZXR8ZW58MHwwfHx8MTc2MjYxMzc3OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Full-body workout kit for home training.'
  }
]

function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 text-xs bg-white/90 text-emerald-700 px-2 py-1 rounded-full ring-1 ring-emerald-200">
          Best Seller
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs text-gray-600">{(product.popularity/20).toFixed(1)}k reviews</span>
          </div>
          <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white py-2.5 text-sm font-medium hover:bg-emerald-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default function ProductCatalog() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState(100)
  const [sort, setSort] = useState('pop')

  const filtered = useMemo(() => {
    let items = PRODUCTS.filter(p => (category === 'All' || p.category === category) && p.price <= price)
    if (sort === 'pop') items = items.sort((a,b) => b.popularity - a.popularity)
    if (sort === 'price-asc') items = items.sort((a,b) => a.price - b.price)
    if (sort === 'price-desc') items = items.sort((a,b) => b.price - a.price)
    return items
  }, [category, price, sort])

  function handleAddToCart(p) {
    alert(`Added ${p.title} to cart`) // placeholder UX only; backend/cart not implemented yet
  }

  return (
    <section id="shop" className="py-16 bg-gradient-to-b from-white to-emerald-50/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Products</h2>
          <div className="hidden sm:flex items-center gap-2 text-gray-600">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm">Filters</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="col-span-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm h-max">
            <div>
              <label className="text-sm font-medium text-gray-700">Category</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {['All','Tech','Home','Beauty','Fitness'].map(c => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-3 py-2 text-sm rounded-lg ring-1 ${category===c? 'bg-emerald-500 text-white ring-emerald-500':'bg-gray-50 text-gray-700 ring-gray-200 hover:bg-gray-100'}`}
                  >{c}</button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700">Max Price: <span className="font-semibold">${price}</span></label>
              <input type="range" min="10" max="100" value={price} onChange={e=>setPrice(Number(e.target.value))} className="w-full mt-2" />
            </div>
            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700">Sort By</label>
              <select value={sort} onChange={e=>setSort(e.target.value)} className="mt-2 w-full rounded-lg border-gray-200">
                <option value="pop">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900">What customers say</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[{
              name:'Alex',text:'Super fast shipping and the quality is amazing!'},
              {name:'Jamie',text:'Clean design, easy checkout. Love the earbuds.'},
              {name:'Taylor',text:'Trusted store. Returns were hassle-free.'}
            ].map((t,i)=> (
              <div key={i} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({length:5}).map((_,i)=>(<Star key={i} className="w-4 h-4 fill-current" />))}
                </div>
                <p className="mt-2 text-gray-700">{t.text}</p>
                <p className="mt-3 text-sm text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
