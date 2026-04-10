import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
    camera.position.z = 5

    // Gold material
    const goldMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xFFD700),
      metalness: 0.9,
      roughness: 0.2,
      emissive: new THREE.Color(0x443300),
      emissiveIntensity: 0.3,
    })

    const amberMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xFFA500),
      metalness: 0.8,
      roughness: 0.3,
      emissive: new THREE.Color(0x331100),
      emissiveIntensity: 0.4,
    })

    const darkGoldMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xB8860B),
      metalness: 0.95,
      roughness: 0.1,
      emissive: new THREE.Color(0x221100),
      emissiveIntensity: 0.5,
    })

    // Build guitar-like shape from primitives
    const group = new THREE.Group()

    // Guitar body - figure-8 shape using two spheres
    const bodyTop = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 32), goldMat)
    bodyTop.position.set(0, 0.5, 0)
    bodyTop.scale.set(1, 0.85, 0.45)

    const bodyBottom = new THREE.Mesh(new THREE.SphereGeometry(0.75, 32, 32), goldMat)
    bodyBottom.position.set(0, -0.4, 0)
    bodyBottom.scale.set(1, 0.85, 0.45)

    // Sound hole
    const soundHole = new THREE.Mesh(
      new THREE.TorusGeometry(0.22, 0.025, 12, 40),
      darkGoldMat
    )
    soundHole.position.set(0, -0.1, 0.22)
    soundHole.rotation.x = Math.PI * 0.05

    // Guitar neck
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.085, 0.1, 2.2, 12),
      amberMat
    )
    neck.position.set(0, 1.75, 0)
    neck.rotation.z = 0

    // Headstock
    const headstock = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.5, 0.1),
      goldMat
    )
    headstock.position.set(0, 3.0, 0)

    // Tuning pegs (3 per side = 6 total)
    const pegGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.12, 8)
    const pegPositions = [
      [-0.13, 3.1, 0], [-0.13, 2.95, 0], [-0.13, 2.8, 0],
      [0.13, 3.1, 0], [0.13, 2.95, 0], [0.13, 2.8, 0],
    ]
    pegPositions.forEach(([x, y, z]) => {
      const peg = new THREE.Mesh(pegGeo, darkGoldMat)
      peg.position.set(x, y, z)
      peg.rotation.z = Math.PI / 2
      group.add(peg)
    })

    // Strings
    for (let i = -2; i <= 3; i++) {
      const stringGeo = new THREE.CylinderGeometry(0.008, 0.008, 4.2, 4)
      const stringMat = new THREE.MeshStandardMaterial({
        color: 0xCCCCCC,
        metalness: 0.99,
        roughness: 0.05,
        emissive: 0x444444,
        emissiveIntensity: 0.3,
      })
      const str = new THREE.Mesh(stringGeo, stringMat)
      str.position.set(i * 0.055, 1.0, 0.18)
      group.add(str)
    }

    // Bridge
    const bridge = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.06, 0.12),
      darkGoldMat
    )
    bridge.position.set(0, -0.6, 0.18)

    // Nut
    const nut = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.05, 0.1),
      darkGoldMat
    )
    nut.position.set(0, 2.8, 0.05)

    // Body shine ring
    const shine = new THREE.Mesh(
      new THREE.TorusGeometry(0.7, 0.02, 8, 60),
      amberMat
    )
    shine.position.set(0, -0.4, 0.22)
    shine.rotation.x = Math.PI * 0.05

    group.add(bodyTop, bodyBottom, soundHole, neck, headstock, bridge, nut, shine)

    // Floating music notes
    const noteGroup = new THREE.Group()
    const noteMat = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      emissive: 0xFFAA00,
      emissiveIntensity: 0.8,
      metalness: 0.7,
      roughness: 0.2,
    })
    const noteMat2 = new THREE.MeshStandardMaterial({
      color: 0xFFA500,
      emissive: 0xFF6600,
      emissiveIntensity: 0.6,
      metalness: 0.6,
      roughness: 0.3,
    })

    const notePositions = [
      { x: 2.2, y: 1.5, z: -0.5, scale: 0.12, mat: noteMat },
      { x: -2.5, y: 0.8, z: -1, scale: 0.09, mat: noteMat2 },
      { x: 2.8, y: -0.5, z: -0.3, scale: 0.07, mat: noteMat },
      { x: -2.0, y: -1.2, z: -0.8, scale: 0.11, mat: noteMat2 },
      { x: 3.2, y: 0.2, z: -1.2, scale: 0.08, mat: noteMat },
      { x: -3.0, y: 1.8, z: -0.7, scale: 0.06, mat: noteMat2 },
    ]

    notePositions.forEach(({ x, y, z, scale, mat }) => {
      const noteHead = new THREE.Mesh(new THREE.SphereGeometry(scale, 12, 8), mat)
      noteHead.scale.set(1.2, 1, 0.7)
      const noteStem = new THREE.Mesh(new THREE.CylinderGeometry(scale * 0.15, scale * 0.15, scale * 5, 6), mat)
      noteStem.position.set(scale * 1.1, scale * 2.5, 0)
      const noteObj = new THREE.Group()
      noteObj.add(noteHead, noteStem)
      noteObj.position.set(x, y, z)
      noteObj.userData.floatOffset = Math.random() * Math.PI * 2
      noteObj.userData.floatSpeed = 0.5 + Math.random() * 0.5
      noteGroup.add(noteObj)
    })

    // Orbiting stars/sparkles
    const sparkleGroup = new THREE.Group()
    const sparkleMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFAA,
      emissive: 0xFFFF00,
      emissiveIntensity: 1.5,
    })
    for (let i = 0; i < 20; i++) {
      const spark = new THREE.Mesh(new THREE.OctahedronGeometry(0.04 + Math.random() * 0.05, 0), sparkleMat)
      const angle = (i / 20) * Math.PI * 2
      const radius = 2.5 + Math.random() * 0.8
      spark.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 4,
        Math.sin(angle) * radius - 1
      )
      spark.userData.orbitAngle = angle
      spark.userData.orbitRadius = radius
      spark.userData.orbitSpeed = 0.15 + Math.random() * 0.1
      spark.userData.bobOffset = Math.random() * Math.PI * 2
      sparkleGroup.add(spark)
    }

    scene.add(group, noteGroup, sparkleGroup)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222, 1)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xFFD700, 3)
    keyLight.position.set(3, 5, 5)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xFFA500, 1.5)
    fillLight.position.set(-4, 2, 3)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xFFFFAA, 2)
    rimLight.position.set(0, -3, -5)
    scene.add(rimLight)

    const pointLight1 = new THREE.PointLight(0xFFD700, 2, 8)
    pointLight1.position.set(2, 2, 3)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xFF6600, 1.5, 10)
    pointLight2.position.set(-3, -1, 4)
    scene.add(pointLight2)

    // Mouse parallax
    let mouseX = 0, mouseY = 0
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // Animation
    let frame = 0
    const animate = () => {
      const id = requestAnimationFrame(animate)
      frame += 0.01

      // Rotate guitar
      group.rotation.y = Math.sin(frame * 0.4) * 0.35 + mouseX * 0.15
      group.rotation.x = Math.sin(frame * 0.3) * 0.1 + mouseY * 0.08
      group.position.y = Math.sin(frame * 0.5) * 0.15

      // Float notes
      noteGroup.children.forEach((note) => {
        const t = frame * note.userData.floatSpeed + note.userData.floatOffset
        note.position.y += Math.sin(t) * 0.003
        note.rotation.z = Math.sin(t * 0.7) * 0.3
        note.rotation.y += 0.01
      })

      // Orbit sparkles
      sparkleGroup.children.forEach((spark) => {
        spark.userData.orbitAngle += spark.userData.orbitSpeed * 0.01
        const a = spark.userData.orbitAngle
        const r = spark.userData.orbitRadius
        spark.position.x = Math.cos(a) * r
        spark.position.z = Math.sin(a) * r - 1
        spark.position.y += Math.sin(frame * 0.8 + spark.userData.bobOffset) * 0.003
        spark.rotation.x += 0.02
        spark.rotation.y += 0.03
      })

      // Pulsing light
      pointLight1.intensity = 2 + Math.sin(frame * 2) * 0.5
      keyLight.intensity = 3 + Math.sin(frame * 1.5) * 0.5

      renderer.render(scene, camera)
      return id
    }

    const animId = animate()

    // Resize
    const onResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 hero-overlay" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent" style={{ zIndex: 2 }} />

      {/* Particle grid bg */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: 2 }}>
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-sm font-mono tracking-widest uppercase">
            Tirupati's Premier Music Store
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6"
        >
          <span className="block text-white">Your Sound</span>
          <span className="block" style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 40%, #FF8C00 70%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Starts Here
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 mb-10 font-light tracking-wide"
        >
          Premium Musical Instruments in{' '}
          <span className="text-yellow-400 font-semibold">Tirupati</span>
          {' '}— Guitars, Violins, Keyboards & More
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+919986612121"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30"
            style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
          >
            <span className="text-xl">📞</span>
            <span>Call Now</span>
          </a>

          <button
            onClick={() => handleScroll('#products')}
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-yellow-400 border border-yellow-400/40 bg-yellow-400/5 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-400/15 hover:border-yellow-400/70 hover:scale-105"
          >
            <span>View Products</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <a
            href="https://wa.me/919986612121"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white border border-green-500/40 bg-green-500/10 backdrop-blur-sm transition-all duration-300 hover:bg-green-500/20 hover:border-green-500/70 hover:scale-105"
          >
            <span className="text-xl">💬</span>
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-8 mt-16 flex-wrap"
        >
          {[
            { value: '500+', label: 'Instruments' },
            { value: '10+', label: 'Years Serving' },
            { value: '1000+', label: 'Happy Musicians' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-yellow-400">{stat.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-yellow-400/50 to-transparent" />
      </motion.div>
    </section>
  )
}
