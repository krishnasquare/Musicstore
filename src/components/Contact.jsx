import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const contactInfo = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Opp. Hotel Bliss, Tirupati, Andhra Pradesh',
    link: 'https://maps.google.com/?q=Hope+Music+House+Opp+Hotel+Bliss+Tirupati',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9986612121',
    link: 'tel:+919986612121',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    link: 'https://wa.me/919986612121',
  },
  {
    icon: '🕐',
    label: 'Store Hours',
    value: 'Mon–Sat: 10 AM – 8 PM\nSunday: 10 AM – 6 PM',
    link: null,
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000 0%, #050400 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/5 mb-4">
            <span className="text-yellow-400 text-xs font-mono uppercase tracking-widest">Find Us</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 section-title">
            Visit Our Store
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Come see us in person or reach out anytime — we love talking music!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-2xl p-5 flex items-start gap-5 hover:border-yellow-400/25 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-400/8 border border-yellow-400/15 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-yellow-400/15 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-yellow-400/60 text-xs font-mono uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white group-hover:text-yellow-400 transition-colors duration-300 font-medium leading-snug"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-white font-medium leading-snug whitespace-pre-line">
                      {item.value}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-2xl p-6 flex flex-col sm:flex-row gap-4"
              style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.05))', border: '1px solid rgba(255,215,0,0.15)' }}
            >
              <a
                href="tel:+919986612121"
                className="flex-1 text-center py-3.5 rounded-xl font-semibold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
                style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919986612121?text=Hi! I want to visit Hope Music House in Tirupati."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3.5 rounded-xl font-semibold text-white border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 transition-all hover:scale-105"
              >
                💬 WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ border: '1px solid rgba(255,215,0,0.15)', height: '450px' }}
          >
            <iframe
              title="Hope Music House Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1234567890!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHope+Music+House%2C+Opp+Hotel+Bliss%2C+Tirupati!5e0!3m2!1sen!2sin!4v1234567890&q=Hope+Music+House+Tirupati"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <a
                href="https://maps.google.com/?q=Hope+Music+House+Opp+Hotel+Bliss+Tirupati"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 rounded-xl glass-card text-yellow-400 text-sm font-medium hover:bg-yellow-400/10 transition-all"
                style={{ border: '1px solid rgba(255,215,0,0.25)' }}
              >
                📍 Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
