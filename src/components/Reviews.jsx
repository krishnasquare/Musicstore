import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const reviews = [
  {
    id: 1,
    name: 'Ravi Kumar',
    role: 'Guitar Student',
    avatar: '🎸',
    rating: 5,
    text: 'Good place to get musical instruments in Tirupati. The staff is very knowledgeable and helpful. I bought my first acoustic guitar here and they helped me choose the right one for my budget. Highly recommend!',
    date: 'March 2024',
    source: 'Google Review',
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    role: 'Music Teacher',
    avatar: '🎹',
    rating: 5,
    text: 'Wide range of music instruments available at Hope Music House. I have been visiting this store for years and they always have what I need. From classical violins to modern keyboards, they have it all. Great prices too!',
    date: 'February 2024',
    source: 'Google Review',
  },
  {
    id: 3,
    name: 'Srinivas Reddy',
    role: 'Professional Drummer',
    avatar: '🥁',
    rating: 5,
    text: 'Best music store in Tirupati! I have purchased multiple drum accessories here. The quality is excellent and pricing is very affordable. The owner is passionate about music and it shows in how they run the store.',
    date: 'January 2024',
    source: 'Google Review',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Violin Learner',
    avatar: '🎻',
    rating: 5,
    text: 'I was looking for a good violin for my daughter and Hope Music House had a wonderful selection. The staff patiently explained the differences and helped us choose the perfect instrument. We love it!',
    date: 'December 2023',
    source: 'Google Review',
  },
  {
    id: 5,
    name: 'Venkata Rao',
    role: 'Carnatic Musician',
    avatar: '🪗',
    rating: 5,
    text: 'Excellent store for both Indian and Western instruments. They have harmoniums, tablas, flutes alongside modern guitars and keyboards. It\'s the only place in Tirupati where I find everything under one roof.',
    date: 'November 2023',
    source: 'Google Review',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-white/10'}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.1 })

  const next = () => setActive((a) => (a + 1) % reviews.length)
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length)

  return (
    <section id="reviews" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      {/* BG pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,215,0,0.08) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/5 mb-4">
            <span className="text-yellow-400 text-xs font-mono uppercase tracking-widest">Customer Reviews</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 section-title">
            What Musicians Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-xl">★</span>)}
            </div>
            <span className="text-yellow-400 font-bold text-lg">4.9</span>
            <span className="text-white/40 text-sm">/ 5.0 • 100+ Reviews</span>
          </div>
        </motion.div>

        {/* Featured Review */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative glass-card rounded-3xl p-8 sm:p-10" style={{ border: '1px solid rgba(255,215,0,0.15)' }}>
            {/* Quote mark */}
            <div className="absolute -top-4 -left-2 text-8xl font-display leading-none opacity-20 text-yellow-400 select-none">"</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-2xl">
                    {reviews[active].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">{reviews[active].name}</div>
                    <div className="text-yellow-400/60 text-sm">{reviews[active].role}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <StarRating rating={reviews[active].rating} />
                    <div className="text-white/30 text-xs mt-1">{reviews[active].date}</div>
                  </div>
                </div>

                <p className="text-white/70 text-lg leading-relaxed italic">
                  "{reviews[active].text}"
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="text-xs text-white/30 font-mono">{reviews[active].source}</span>
                  <span className="text-yellow-400/40 text-xs">✓ Verified</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 text-white/50 hover:border-yellow-400/40 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center"
            >
              ←
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-yellow-400' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 text-white/50 hover:border-yellow-400/40 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onClick={() => setActive(i)}
              className={`glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-yellow-400/30 ${active === i ? 'border-yellow-400/30' : ''}`}
            >
              <StarRating rating={review.rating} />
              <p className="text-white/50 text-sm mt-3 leading-relaxed line-clamp-3">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-lg">{review.avatar}</span>
                <span className="text-white/60 text-sm font-medium">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://maps.google.com/?q=Hope+Music+House+Tirupati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-yellow-400 text-sm transition-colors duration-300"
          >
            <span>⭐</span>
            View all reviews on Google
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
