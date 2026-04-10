import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const highlights = [
  {
    icon: '🎻',
    title: 'Indian & Western',
    desc: 'A perfect blend of classical Indian and contemporary Western instruments under one roof.',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    desc: 'Premium quality instruments at prices that suit students, hobbyists, and professionals alike.',
  },
  {
    icon: '🏪',
    title: 'Trusted Local Store',
    desc: 'A beloved name in Tirupati, serving musicians and music lovers for over a decade.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-yellow-400/30" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-yellow-400/3 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/5 mb-6">
              <span className="text-yellow-400 text-xs font-mono uppercase tracking-widest">Our Story</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Where <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Passion</span><br />
              Meets <span className="text-white">Music</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Hope Music House is Tirupati's most trusted destination for musical instruments.
              Nestled opposite Hotel Bliss, we have been the go-to store for students,
              professionals, and enthusiasts who live and breathe music.
            </p>

            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Whether you're picking up your first guitar or searching for a rare classical
              instrument, our knowledgeable staff and wide selection ensure you always
              leave with the right instrument and a smile.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="tel:+919986612121"
                className="px-6 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
                style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
              >
                Visit Us Today
              </a>
              <div className="neon-line flex-1 max-w-24" />
              <span className="text-yellow-400/60 text-sm font-mono">Est. 2010</span>
            </div>
          </motion.div>

          {/* Right – highlight cards */}
          <div className="grid gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-yellow-400/30 transition-all duration-300 gold-glow-hover group"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-yellow-400/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
