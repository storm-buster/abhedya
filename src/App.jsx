import { useEffect, useRef, useState, useCallback, lazy, Suspense } from 'react'
import { motion } from 'motion/react'
// Lazy load heavy 3D components — Three.js won't block initial page render
const CyberScene = lazy(() => import('./components/CyberScene'))
const RippleGrid = lazy(() => import('./components/RippleGrid'))
import CountdownTimer from './components/CountdownTimer'
import BlurText from './components/BlurText'
import FAQ from './components/FAQ'

import './styles/layout.css'
import './styles/hero.css'
import './styles/tracks.css'
import './styles/sections.css'
import './styles/components.css'
import './styles/responsive.css'

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

import {
  navLinks, trackCards, intelFeed, footerLinks,
  faqItems, socialLinks, speakers
} from './data/siteData'

function App() {
  const pointerRef = useRef({ x: 0, y: 0 })
  const [menuOpen, setMenuOpen] = useState(false)
  const [showFloatingCta, setShowFloatingCta] = useState(false)

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointerRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  /* Scroll-triggered reveal animations + floating CTA visibility */
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    revealEls.forEach((el) => observer.observe(el))

    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <div className="nexus-page">
      {/* Skip to content link for accessibility */}
      <a href="#home" className="skip-link">Skip to content</a>

      <div aria-hidden="true" className="nexus-layer ripple-bg">
        <Suspense fallback={null}>
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
        </Suspense>
      </div>
      <div aria-hidden="true" className="nexus-layer scanlines"></div>

      <header className="nexus-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <span aria-hidden="true" className="brand-square"></span>
            <span className="brand-text">
              ABHEDYA <strong>× DEFENDERS CONNECT</strong>
            </span>
          </a>

          <nav aria-label="Primary" className="nexus-nav desktop-nav">
            {navLinks.map((link) => (
              <a
                className={link.isActive ? 'is-active' : ''}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-button" href="#register">
              Register Now
            </a>
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`hamburger-btn ${menuOpen ? 'is-open' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <nav className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#register" className="mobile-menu-cta" onClick={closeMenu}>
            Register Now
          </a>
        </nav>
      </header>

      {/* Mobile menu backdrop */}
      {menuOpen && <div className="mobile-backdrop" onClick={closeMenu} aria-hidden="true" />}

      <main className="nexus-main">
        <section className="hero-section container" id="home">
          {/* India Map — decorative background, blends with theme */}
          <img
            aria-hidden="true"
            src="/india_map.png"
            alt=""
            className="hero-india-map"
          />
          {/* Organization Logos */}
          <div className="hero-logos">
            <div className="hero-logos-left">
              <img alt="Abhedya" className="org-logo" src="/abhedya-logo.png" />
              <img alt="Defenders Connect" className="org-logo" src="/defenders-logo.png" />
            </div>
            <div className="hero-logos-right">
              <img alt="GGSIPU" className="org-logo org-logo-ipu" src="/ipu-logo.png" />
            </div>
          </div>

          <div className="hero-badge">
            ABHEDYA × DEFENDERS CONNECT × GGSIPU — PRESENTS
          </div>

          {/* Countdown Timer */}
          <CountdownTimer variant="inline" />

          {/* Title block with kernel text positioned inside */}
          <div className="summit-title-block">
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
            delay={60}
            animateBy="words"
            direction="top"
            className="hero-description"
          />

          <div className="hero-meta">
            <article className="meta-item">
              <span aria-hidden="true" className="material-symbols-outlined">
                calendar_month
              </span>
              <span>2nd May 2026</span>
            </article>
            <a
              className="meta-item location-link"
              href="https://maps.app.goo.gl/jNrYHFYb89PnYFss8"
              target="_blank"
              rel="noopener noreferrer"
              title="View on Google Maps"
            >
              <span aria-hidden="true" className="material-symbols-outlined">
                location_on
              </span>
              <span>GGSIPU EDC Auditorium</span>
            </a>
          </div>

          <div className="hero-actions">
            <a className="hero-cta hero-cta-primary" href="#register">
              Register Now
            </a>
            <a className="hero-cta hero-cta-secondary" href="#tracks">
              Explore Events
            </a>
          </div>

          <div className="hero-scene-shell skeleton-glow">
            <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'var(--bg-deep)' }} />}>
              <CyberScene mode="hero" pointerRef={pointerRef} />
            </Suspense>
            <p className="scene-label">
              Interactive 3D Visualization • Move cursor to shift camera • Click to energize
            </p>
          </div>
        </section>

        <section className="tracks-section container reveal" id="tracks">
          <div className="tracks-header">
            <div>
              <p className="section-kicker">// Event Tracks</p>
              <h2>What&apos;s Happening</h2>
            </div>
            <p className="tracks-ref">
              2nd May 2026
              <br />
              <a
                href="https://maps.app.goo.gl/jNrYHFYb89PnYFss8"
                target="_blank"
                rel="noopener noreferrer"
                className="location-inline-link"
              >
                GGSIPU EDC Auditorium
              </a>
            </p>
          </div>

          <div className="tracks-grid">
            {trackCards.map((card) =>
              card.id === 'hackathon' ? (
                <article
                  className={`track-card ${card.layout} tone-${card.tone}`}
                  id={card.id}
                  key={card.id}
                >
                  <div className="track-media">
                    <img alt={card.title} loading="lazy" src={card.image} />

                    {/* Hackathon details in the upper empty space */}
                    <div className="hackathon-details">
                      <div className="hackathon-tracks-inline">
                        <div className="track-pill-inline">
                          <span className="material-symbols-outlined">shield</span>
                          Cyber Security
                        </div>
                        <div className="track-pill-inline">
                          <span className="material-symbols-outlined">token</span>
                          Blockchain
                        </div>
                        <div className="track-pill-inline">
                          <span className="material-symbols-outlined">smart_toy</span>
                          Agentic AI
                        </div>
                        <div className="track-pill-inline">
                          <span className="material-symbols-outlined">auto_awesome</span>
                          Generative AI
                        </div>
                      </div>

                      <div className="hackathon-meta-grid">
                        <div className="hackathon-meta-item">
                          <span className="material-symbols-outlined">groups</span>
                          <div>
                            <h6>Eligibility</h6>
                            <p>Teams of 2-4 UG/PG students (Inter-college/specialization allowed)</p>
                          </div>
                        </div>
                        <div className="hackathon-meta-item">
                          <span className="material-symbols-outlined">emoji_events</span>
                          <div>
                            <h6>Prize Pool</h6>
                            <p>Cash prize + goodies worth ₹1,00,000+</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounds-container">
                        <div className="round-inline">
                          <div className="round-inline-header">
                            <span className="round-badge">01</span>
                            <div>
                              <span className="round-mode-inline">
                                <span className="material-symbols-outlined">cloud</span>
                                Online PPT Screening
                              </span>
                              <h4>Problem &amp; Solution Pitch</h4>
                            </div>
                          </div>
                          <ul className="round-details-inline">
                            <li>Focus on uniqueness, tech stack, scalability, and expected impact.</li>
                          </ul>
                        </div>

                        <div className="round-inline round-inline-finale">
                          <div className="round-inline-header">
                            <span className="round-badge round-badge-finale">02</span>
                            <div>
                              <span className="round-mode-inline round-mode-accent">
                                <span className="material-symbols-outlined">location_on</span>
                                Offline — May 2, 2026 (10AM - 6PM)
                              </span>
                              <h4>Grand Finale @ GGSIPU-EDC</h4>
                            </div>
                          </div>
                          <ul className="round-details-inline">
                            <li>Showcase working prototype/MVP. Explain architecture &amp; business impact.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="hackathon-criteria">
                        <h6>Evaluation Criteria:</h6>
                        <p>Originality, technical execution, creativity, scalability, and real-world impact.</p>
                        <small>* Plagiarism leads to disqualification. Open-source APIs allowed.</small>
                      </div>

                      <a href="https://unstop.com/hackathons/cyber-nexus-hackathon-secure-bharat-summit-guru-gobind-singh-indraprastha-university-ggsipu-delhi-1676534" className="hackathon-reg-btn">
                        Register to Hackathon
                        <span className="material-symbols-outlined">arrow_outward</span>
                      </a>
                    </div>

                    {/* Original overlay at bottom */}
                    <div className="track-overlay">
                      <span className={`track-tag tone-${card.tone}`}>{card.tag}</span>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    <span aria-hidden="true" className="material-symbols-outlined track-icon">
                      {card.icon}
                    </span>
                  </div>
                </article>
              ) : card.id === 'sessions' ? (
                <article
                  className={`track-card ${card.layout} tone-${card.tone}`}
                  id={card.id}
                  key={card.id}
                >
                  <div className="track-media">
                    <img alt={card.title} loading="lazy" src={card.image} />

                    {/* Speakers List */}
                    <div className="speakers-details">
                      <div className="speakers-header-inline">
                        <span className="material-symbols-outlined">campaign</span>
                        Featured Speakers
                      </div>
                      <div className="speakers-list">
                        {speakers.map((speaker, idx) => (
                          <div key={idx} className="speaker-item">
                            <div className="speaker-info">
                              <span className="speaker-label">Speaker</span>
                              <span className="speaker-name">{speaker.name}</span>
                            </div>
                            <a
                              href={speaker.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="linkedin-link-icon"
                              title={`View ${speaker.name}'s LinkedIn`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="track-overlay">
                      <span className={`track-tag tone-${card.tone}`}>{card.tag}</span>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    <span aria-hidden="true" className="material-symbols-outlined track-icon">
                      {card.icon}
                    </span>
                  </div>
                </article>
              ) : (
                <article
                  className={`track-card ${card.layout} tone-${card.tone}`}
                  id={card.id}
                  key={card.id}
                >
                  <div className="track-media">
                    <img alt={card.title} loading="lazy" src={card.image} />
                    <div className="track-overlay">
                      <span className={`track-tag tone-${card.tone}`}>{card.tag}</span>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    <span aria-hidden="true" className="material-symbols-outlined track-icon">
                      {card.icon}
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* ===== SPONSORS SECTION ===== */}
        <section className="sponsors-section container reveal" id="sponsors">
          <div className="sponsors-header">
            <p className="section-kicker">// Our Partners</p>
            <h2>Sponsors</h2>
          </div>

          <div className="sponsors-grid">
            {/* Gold Sponsor */}
            <div className="sponsor-tier sponsor-gold">
              <div className="tier-label">
                <span className="material-symbols-outlined">workspace_premium</span>
                Gold Sponsor
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo-card">
                  <span className="sponsor-coming-soon">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Silver Sponsor */}
            <div className="sponsor-tier sponsor-silver">
              <div className="tier-label">
                <span className="material-symbols-outlined">military_tech</span>
                Silver Sponsor
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo-card">
                  <img alt="Otticamart" src="/otticamart-logo.svg" />
                </div>
              </div>
            </div>

            {/* Powered By */}
            <div className="sponsor-tier sponsor-powered">
              <div className="tier-label">
                <span className="material-symbols-outlined">bolt</span>
                Powered By
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo-card">
                  <img alt="Unstop" src="/unstop-logo.svg" />
                </div>
              </div>
            </div>

            {/* General Sponsors */}
            <div className="sponsor-tier sponsor-general">
              <div className="tier-label">
                <span className="material-symbols-outlined">handshake</span>
                General Sponsors
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo-card">
                  <img alt="CodeCrafters" src="/codecrafters-2.svg" />
                </div>
                <div className="sponsor-logo-card">
                  <img alt=".xyz" src="/xyz-logo-png.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intel-section container reveal" id="intel">
          <div className="intel-shell">
            <div className="intel-feed">
              <div className="feed-title-row">
                <span aria-hidden="true" className="status-dot"></span>
                <h3>Live Updates</h3>
              </div>

              <div className="feed-items">
                {intelFeed.map((item) => (
                  <article className={`feed-item tone-${item.tone}`} key={item.time}>
                    <span>{item.time}</span>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="intel-visual">
              <div className="intel-scene skeleton-glow">
                <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'var(--bg-deep)' }} />}>
                  <CyberScene mode="compact" pointerRef={pointerRef} />
                </Suspense>
              </div>
              <div className="intel-score">
                <span>System Integrity</span>
                <strong>98%</strong>
              </div>
              <div aria-hidden="true" className="score-bars">
                <span></span>
                <span></span>
                <span></span>
                <span className="is-dim"></span>
              </div>
            </aside>
          </div>
        </section>

        <section className="register-strip container reveal" id="register">
          <div>
            <p className="section-kicker">Registration Open</p>
            <h3>Reserve your spot at Secure Bharat Summit 2026</h3>
          </div>
          <a href="https://unstop.com/workshops-webinars/secure-bharat-summit-secure-bharat-summit-guru-gobind-singh-indraprastha-university-ggsipu-delhi-1676571">Register Now →</a>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="faq-section container reveal" id="faq">
          <div className="faq-header">
            <p className="section-kicker">// FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FAQ items={faqItems} />
        </section>

        {/* ===== PRIVACY POLICY SECTION ===== */}
        <section className="privacy-section container reveal" id="privacy">
          <div className="privacy-card">
            <div className="privacy-header">
              <span className="material-symbols-outlined">shield_lock</span>
              <h3>Privacy Policy</h3>
            </div>
            <div className="privacy-content">
              <p>
                At Secure Bharat Summit, your privacy is our priority. We are committed to protecting
                the personal information you share with us during registration and participation.
              </p>

              <div className="privacy-sub-section">
                <h4>1. Data Collection</h4>
                <p>
                  We collect essential information such as your name, college, email, and contact details
                  primarily for organizing the summit and coordinating hackathon team activities.
                </p>
              </div>

              <div className="privacy-sub-section">
                <h4>2. Information Usage</h4>
                <p>
                  Your data is used solely for event-related communications, security clearance at the
                  GGSIPU EDC campus, and for issuing certificates of participation.
                </p>
              </div>

              <div className="privacy-sub-section">
                <h4>3. Data Security</h4>
                <p>
                  All submitted data is stored in secured databases with restricted access. We implement
                  industry-standard encryption to protect your sensitive information from unauthorized access.
                </p>
              </div>

              <div className="privacy-sub-section">
                <h4>4. Third-Party Sharing</h4>
                <p>
                  We do not sell or lease your data. Information may only be shared with official partners
                  (like Unstop for registration) strictly for event execution purposes.
                </p>
              </div>

              <p className="privacy-contact-footer">
                For questions or data deletion requests, contact our team at:
                <br />
                <strong>abhedyathecybersecclub@gmail.com</strong>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="nexus-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <h4>Secure Bharat Summit</h4>
            <p>
              © 2026 Abhedya — The Cybersecurity Club, GGSIPU.
              <br />
              All Rights Reserved. www.SecureBharatSummit.xyz
            </p>
            <div className="social-links">
              {socialLinks.map((s) => (
                <a href={s.href} key={s.label} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.isCustom ? (
                    <div className="custom-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d={s.svgPath} /></svg>
                    </div>
                  ) : (
                    <span className="material-symbols-outlined">{s.icon}</span>
                  )}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((item) => (
              <a href={item.href} key={item.label}>
                {item.icon && <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.4rem' }}>{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-chip">
            <span aria-hidden="true"></span>
            Secured Connection
          </div>
        </div>
      </footer>

      {/* Floating CTA bar */}
      <div className={`floating-cta ${showFloatingCta ? 'is-visible' : ''}`}>
        <CountdownTimer variant="floating" />
      </div>

      {/* Scroll-to-top button */}
      {showFloatingCta && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined">keyboard_arrow_up</span>
        </button>
      )}
    </div>
  )
}

export default App
