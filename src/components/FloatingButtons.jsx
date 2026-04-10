import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)

    // Show label hint after 3 seconds
    const t = setTimeout(() => setShowLabel(true), 3000)
    const t2 = setTimeout(() => setShowLabel(false), 6000)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Call button - mobile only */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href="tel:+919986612121"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="sm:hidden w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-2xl shadow-yellow-400/30 transition-transform hover:scale-110 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
            aria-label="Call Now"
          >
            📞
          </motion.a>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <div className="relative flex items-center gap-3">
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, x: 15, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.9 }}
              className="px-3 py-2 rounded-xl text-sm font-medium text-white shadow-xl whitespace-nowrap"
              style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}
            >
              💬 Chat on WhatsApp
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href="https://wa.me/919986612121?text=Hi! I am interested in musical instruments at Hope Music House, Tirupati."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl shadow-green-500/40 wa-pulse"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          aria-label="WhatsApp"
        >
          💬
        </motion.a>
      </div>
    </div>
  )
}
