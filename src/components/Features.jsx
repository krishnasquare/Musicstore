import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: '💎',
    title: 'Affordable Prices',
    desc: 'We believe music should be accessible to all. Our prices are fair, transparent, and competitive.',
    stat: 'From ₹149',
  },
  {
    icon: '🎼',
    title: 'Wide Range',
    desc: 'Guitars, Violins, Keyboards, Drums, Flutes, Harmoniums — we carry instruments for every genre.',
    stat: '50+ Brands',
  },
  {
    icon: '🧑‍🎓',
    title: 'Expert Support',
    desc: 'Our staff are trained musicians. Get advice on the right instrument, strings, or setup for your needs.',
    stat: '10+ Years',
  },
  {
    icon: '🎒',
    title: 'Accessories Available',
    desc: 'Strings, picks, capos, straps, tuners, bags, stands — everything you need to complete your setup.',
    stat: '200+ Items',
  },
  {
    icon: '🔧',
    title: 'Repair & Setup',
    desc: 'Basic instrument setup and repair services available. Keep your instrument in peak playing condition.',
    stat: 'In-Store',
  },
  {
    icon: '⭐',
    title: 'Trusted by Musicians',
    desc: 'Hundreds of students, teachers, and professionals in Tirupati trust Hope Music House for their needs.',
    stat: '1000+ Happy',
  },
]

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="features" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000 0%, #0a0800 50%, #000 100%)' }}>
      {/* Horizontal glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      {/* BG radial glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-amber-500/4 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-yellow-400/3 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/5 mb-4">
            <span className="text-yellow-400 text-xs font-mono uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 section-title">
            What Sets Us Apart
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            More than just a store — we're a community for music lovers in Tirupati
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 group hover:border-yellow-400/30 transition-all duration-500 gold-glow-hover relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at top right, rgba(255,215,0,0.08), transparent 70%)' }}
              />

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/8 border border-yellow-400/15 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-yellow-400/15 group-hover:border-yellow-400/30 transition-all duration-300">
                  {feat.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white text-lg group-hover:text-yellow-400 transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <span className="text-xs font-mono text-yellow-400/60 bg-yellow-400/8 px-2 py-0.5 rounded-full border border-yellow-400/10">
                      {feat.stat}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,165,0,0.05) 50%, rgba(255,215,0,0.08) 100%)', border: '1px solid rgba(255,215,0,0.15)' }}
        >
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 relative z-10">
            Ready to Start Your <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Musical Journey?</span>
          </h3>
          <p className="text-white/60 mb-8 text-lg relative z-10">
            Visit us today or reach out on WhatsApp — we're here to help you find the perfect instrument.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="tel:+919986612121"
              className="px-8 py-3.5 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
              style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
            >
              📞 Call: 9986612121
            </a>
            <a
              href="https://wa.me/919986612121"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 font-semibold hover:bg-green-500/20 transition-all duration-300 hover:scale-105"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
