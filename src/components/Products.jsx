import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const categories = ['All', 'Guitars', 'Violins', 'Keyboards', 'Drums', 'Accessories']

const products = [
  {
    id: 1,
    category: 'Guitars',
    name: 'Acoustic Guitar',
    type: 'Classical Series',
    emoji: '🎸',
    color: '#8B4513',
    gradient: 'from-amber-900/40 to-amber-800/20',
    price: '₹2,499+',
    tag: 'Best Seller',
  },
  {
    id: 2,
    category: 'Guitars',
    name: 'Electric Guitar',
    type: 'Pro Series',
    emoji: '🎸',
    color: '#1a1a2e',
    gradient: 'from-blue-900/40 to-purple-900/20',
    price: '₹4,999+',
    tag: 'Popular',
  },
  {
    id: 3,
    category: 'Violins',
    name: 'Classical Violin',
    type: 'Student & Pro',
    emoji: '🎻',
    color: '#5C3317',
    gradient: 'from-amber-950/40 to-yellow-900/20',
    price: '₹3,499+',
    tag: 'Top Rated',
  },
  {
    id: 4,
    category: 'Keyboards',
    name: 'Digital Keyboard',
    type: '61 / 88 Keys',
    emoji: '🎹',
    color: '#1a1a1a',
    gradient: 'from-slate-900/40 to-gray-800/20',
    price: '₹5,999+',
    tag: 'New Arrival',
  },
  {
    id: 5,
    category: 'Keyboards',
    name: 'MIDI Controller',
    type: 'Studio Grade',
    emoji: '🎛️',
    color: '#0d0d0d',
    gradient: 'from-gray-900/40 to-zinc-800/20',
    price: '₹3,999+',
    tag: null,
  },
  {
    id: 6,
    category: 'Drums',
    name: 'Drum Set',
    type: '5-Piece Kit',
    emoji: '🥁',
    color: '#1a0a00',
    gradient: 'from-red-950/40 to-orange-900/20',
    price: '₹8,999+',
    tag: 'Premium',
  },
  {
    id: 7,
    category: 'Drums',
    name: 'Cajon Box Drum',
    type: 'Portable Series',
    emoji: '📦',
    color: '#3d2b1a',
    gradient: 'from-amber-950/40 to-stone-800/20',
    price: '₹1,999+',
    tag: null,
  },
  {
    id: 8,
    category: 'Accessories',
    name: 'Guitar Strings',
    type: 'All Gauges',
    emoji: '🪢',
    color: '#2a2a2a',
    gradient: 'from-zinc-900/40 to-gray-800/20',
    price: '₹149+',
    tag: null,
  },
  {
    id: 9,
    category: 'Accessories',
    name: 'Instrument Bags',
    type: 'Gig Bags & Cases',
    emoji: '🎒',
    color: '#1a1a0a',
    gradient: 'from-olive-900/40 to-gray-800/20',
    price: '₹499+',
    tag: null,
  },
]

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="product-card glass-card rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Visual area */}
      <div className={`relative h-44 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Grid bg */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />

        {/* Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-400/90 text-black">
            {product.tag}
          </div>
        )}

        {/* Emoji icon */}
        <motion.div
          className="text-7xl filter drop-shadow-2xl"
          whileHover={{ scale: 1.15, rotate: [-5, 5, -5, 0], transition: { duration: 0.4 } }}
        >
          {product.emoji}
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Glow bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-white text-lg leading-tight group-hover:text-yellow-400 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-white/40 text-sm mt-0.5">{product.type}</p>
          </div>
          <span className="text-yellow-400 font-bold text-sm whitespace-nowrap">{product.price}</span>
        </div>

        <button
          onClick={() => window.open('https://wa.me/919986612121?text=Hi! I am interested in ' + product.name, '_blank')}
          className="w-full py-2.5 rounded-xl border border-yellow-400/20 text-yellow-400 text-sm font-medium hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all duration-300 group-hover:border-yellow-400/40"
        >
          Enquire Now →
        </button>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({ threshold: 0.1 })

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="section-padding bg-black relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-400/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/5 mb-4">
            <span className="text-yellow-400 text-xs font-mono uppercase tracking-widest">Our Collection</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 section-title">
            Shop by Category
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From beginner to professional — find every instrument you need at Hope Music House
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-black font-semibold scale-105 shadow-lg shadow-yellow-400/20'
                  : 'border border-white/10 text-white/60 hover:border-yellow-400/30 hover:text-yellow-400'
              }`}
              style={activeCategory === cat ? { background: 'linear-gradient(135deg, #FFD700, #FFA500)' } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 mb-4 text-sm">Don't see what you're looking for?</p>
          <a
            href="https://wa.me/919986612121?text=Hi! I am looking for a specific instrument."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 font-medium"
          >
            <span>💬</span>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
