import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const categories = ['Guitars', 'Violins', 'Keyboards', 'Drums', 'Accessories', 'Indian Instruments']

const socials = [
  { icon: '📘', label: 'Facebook', href: 'https://facebook.com' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '🎵', label: 'YouTube', href: 'https://youtube.com' },
  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/919986612121' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black border-t" style={{ borderColor: 'rgba(255,215,0,0.08)' }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center text-2xl">
                🎸
              </div>
              <div>
                <div className="font-display font-bold text-xl" style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Hope Music House
                </div>
                <div className="text-xs text-yellow-400/50 font-mono tracking-widest">TIRUPATI</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your trusted destination for premium musical instruments in Tirupati. Serving musicians since 2010.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-base hover:border-yellow-400/40 hover:bg-yellow-400/8 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400/80 text-xs font-mono uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/40 hover:text-yellow-400 text-sm transition-colors duration-300 text-left flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:bg-yellow-400 group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-yellow-400/80 text-xs font-mono uppercase tracking-widest mb-5">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleNav('#products')}
                    className="text-white/40 hover:text-yellow-400 text-sm transition-colors duration-300 text-left flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:bg-yellow-400 group-hover:w-5 transition-all duration-300" />
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-400/80 text-xs font-mono uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400/60 mt-0.5">📍</span>
                <span className="text-white/40 text-sm leading-relaxed">
                  Opp. Hotel Bliss, Tirupati, Andhra Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400/60">📞</span>
                <a href="tel:+919986612121" className="text-white/40 hover:text-yellow-400 text-sm transition-colors">
                  +91 9986612121
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400/60">🕐</span>
                <span className="text-white/40 text-sm">Mon–Sun: 10 AM – 8 PM</span>
              </div>

              <a
                href="https://wa.me/919986612121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full border border-green-500/30 bg-green-500/8 text-green-400 text-sm font-medium hover:bg-green-500/15 transition-all duration-300"
              >
                <span>💬</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <p className="text-white/25 text-xs font-mono">
          © 2024 Hope Music House, Tirupati. All rights reserved.
        </p>
        <p className="text-white/20 text-xs">
          Crafted with ❤️ for musicians in Tirupati
        </p>
      </div>
    </footer>
  )
}
