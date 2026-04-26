import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import RippleGrid from './components/RippleGrid'
import CountdownTimer from './components/CountdownTimer'
import BlurText from './components/BlurText'
import './LandingPage.css'

// GPU-optimized: transform + opacity only (no filter: blur — avoids repaint storms)
const titleReveal = (i) => ({
  initial: { opacity: 0, y: -40, scale: 1.08 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
})

const kernelReveal = (i) => ({
  initial: { opacity: 0, y: -30, scale: 1.04 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, delay: 0.6 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function LandingPage() {
  const pointerRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointerRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div className="landing-page">
      {/* Background layers */}
      <div aria-hidden="true" className="nexus-layer ripple-bg">
        <RippleGrid
          gridColor="#eecef2"
          rippleIntensity={0.01}
          gridSize={10}
          gridThickness={15}
          vignetteStrength={0.5}
          glowIntensity={0.2}
          opacity={0.25}
          gridRotation={45}
          mouseInteraction
          mouseInteractionRadius={0.8}
        />
      </div>
      <div aria-hidden="true" className="nexus-layer scanlines"></div>

      {/* Main content */}
      <div className="landing-content">

        {/* Title block with kernel text positioned inside */}
        <div className="landing-title-block">
          <h1 className="hero-title">
            <span className="hero-title-line1">
              <motion.span className="title-secure" {...titleReveal(0)}>SECURE</motion.span>{' '}
              <motion.span className="title-bharat" {...titleReveal(1)}>BHARAT</motion.span>
            </span>
            <br />
            <span className="hero-title-line2">
              <motion.span className="title-summit" {...titleReveal(2)}>SUMMIT</motion.span>{' '}
              <motion.span className="title-26" {...titleReveal(3)}>26</motion.span>
            </span>
          </h1>

          <motion.div className="hero-kernel" {...kernelReveal(0)}>
            <motion.span {...kernelReveal(0)} style={{ display: 'block' }}>Secure Bharat Summit 2026</motion.span>
            <motion.span {...kernelReveal(1)} style={{ display: 'block' }}>The Cybersecurity Club — GGSIPU</motion.span>
            <motion.span {...kernelReveal(2)} style={{ display: 'block' }}>Defenders of the Digital Age</motion.span>
            <div className="kernel-line"></div>
          </motion.div>
        </div>

        <BlurText
          text="The nation's premier cybersecurity summit bringing together tech workshops, expert seminars, panel discussions, and the CyberNexus Hackathon — all under one roof. Defend. Innovate. Lead."
          delay={150}
          animateBy="words"
          direction="top"
          className="hero-description"
        />

        {/* Explore More Button */}
        <div className="landing-cta-wrapper">
          <Link to="/summit" className="landing-explore-btn">
            <span className="material-symbols-outlined">rocket_launch</span>
            Explore More
          </Link>
        </div>
      </div>
    </div>
  )
}
