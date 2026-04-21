import { useEffect, useRef } from 'react'
import CyberScene from './components/CyberScene'
import './App.css'

const navLinks = [
  { href: '#workshops', label: 'Workshops', isActive: true },
  { href: '#sessions', label: 'Sessions' },
  { href: '#panels', label: 'Panels' },
  { href: '#hackathon', label: 'Hackathon' },
]

const trackCards = [
  {
    id: 'workshops',
    layout: 'wide',
    tag: 'TECH WORKSHOP',
    title: 'Tech Workshops',
    description:
      'Hands-on labs with real-time exploitation scenarios and defensive reconfigurations for industrial-grade systems.',
    tone: 'primary',
    icon: 'terminal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkHsjCWMI_p3e9Oqbe5yjr23jLSyqox7XG618xC7K-iQNC73-OPK3x6oljzJ_T-HcTx_teSSVkMiOILq2JRoJnvMcraEzVwSy0l_9K-8WjCCKVngdCQ7T2ulimk1KxpVnoRyrzG0Whkc-rwMbn007XQb3ryLbL3Z7t-ADqu3YvbCKLI5FOaWY47W2gOnAlhNA-vMD8f4hYIsFZ5y0J1MkjU8rFGJtRyXiSQ1oDC08pUc_C0god21e21srvmJEoX89pfsKQqMLKWhY',
  },
  {
    id: 'sessions',
    layout: 'narrow',
    tag: 'EXPERT SEMINARS',
    title: 'Expert Sessions',
    description: 'Threat intelligence briefings and architectural hardening strategies from industry leaders.',
    tone: 'secondary',
    icon: 'security',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRUDt6cSEGwKo4SuH5FNFLeUhu6-uE8sPw5coMmzceUR32sPaqF-bW_6qx5h_mcnwuj85oy3RGSfPSrj8YU5VctUe3Q5NxOHlQCKnPoVvujhjnLIYRPOXozGqPgvwupzfX5yut_4WLYp4R9jE_q3Umay-R-PMrTv2gda2U94cGKG7gkJQX_TUIxDGSY92G9AuvEkneQZD9TUIrbPnWPc7xvvvVG_lArCTGQjw7Rc4pW2eNRUKuV4KVd6RY7j0dxUnu5a13K5YXAI8',
  },
  {
    id: 'panels',
    layout: 'narrow',
    tag: 'PANEL DISCUSSION',
    title: 'Panel Discussion',
    description: 'Sovereign security and national defense infrastructure debate with top experts.',
    tone: 'primary',
    icon: 'groups',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvpmlUfb8r6UQVI9MX1pnW1mokc7gjuIybjoRXoI5KiHjcRovYlFLx4lE2HnSX_qb3ujQwAWqTgMxlo0CIhDDjep5PhtE7oD4lLYBbmJ5gojdtHKlUlY9ol8Je832xNG4zU1rhHhWTLY_4V_k-qvmDiF0aDzwZf9_edak3RDSqRIBHJKnqY56CVNS60sV4qyTTWMgXqsHMYGO81R_mf0COEmwI2A_pAEDDckpLWvyngpWFy1DduHBRv3DiLt2-YaOuq-rRFM1rh4A',
  },
  {
    id: 'hackathon',
    layout: 'wide',
    tag: 'CYBERNEXUS HACKATHON',
    title: 'CyberNexus Hackathon',
    description:
      'Capture the flag. Breach the perimeter. Prize pool of ₹1,00,000+ awaits the best cyber warriors.',
    tone: 'primary',
    icon: 'center_focus_strong',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl3u5Gc4W9PqIhf6ngPri2D7ujHJMafHaHzH_6L_EO5HlHe_Sqm6UPMHYq6oTOAIbI2ekmbQtWcfaKB6L0avZYA7KzwsktSOhDtIux-AC_QwFtJAJpgI8rdIFrmw52MVNUQt3Et23zfYT3mvtQAkacBQPfCzYrZhTVFyYooL54aV0MWBwGfhdtYWYFzCPH9LbaRE2beBvA6_7kN1PPOTlmyty_IWuY7lHsIHGQYMMuZrlTSeMlW5H7LjAIu-zrIC0oP1vEfBy5yV4',
  },
]

const intelFeed = [
  {
    time: '[14:02]',
    text: 'General VK Singh confirms attendance for inauguration ceremony.',
    tone: 'primary',
  },
  {
    time: '[12:45]',
    text: 'Hackathon bounty pool increased to ₹1,00,000+. All systems go.',
    tone: 'secondary',
  },
  {
    time: '[09:10]',
    text: 'Workshop capacity at 85%. Secure your seats immediately.',
    tone: 'neutral',
  },
]

const footerLinks = [
  'Privacy Policy',
  'Security Standards',
  'Contact Us',
]

function App() {
  const pointerRef = useRef({ x: 0, y: 0 })

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

  return (
    <div className="nexus-page">
      <div aria-hidden="true" className="nexus-layer hex-grid"></div>
      <div aria-hidden="true" className="nexus-layer scanlines"></div>

      <header className="nexus-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <span aria-hidden="true" className="brand-square"></span>
            <span className="brand-text">
              ABHEDYA <strong>× DEFENDERS CONNECT</strong>
            </span>
          </a>

          <nav aria-label="Primary" className="nexus-nav">
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

          <a className="header-button" href="#register">
            Register Now
          </a>
        </div>
      </header>

      <main className="nexus-main">
        <section className="hero-section container" id="home">
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

          <div className="hero-kernel">
            Secure Bharat Summit 2026
            <br />
            The Cybersecurity Club — GGSIPU
            <br />
            Defenders of the Digital Age
            <div className="kernel-line"></div>
          </div>

          <div className="hero-badge">
            ABHEDYA × DEFENDERS CONNECT × GGSIPU — PRESENTS
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line1">
              <span className="title-secure">SECURE</span>{' '}
              <span className="title-bharat">BHARAT</span>
            </span>
            <br />
            <span className="hero-title-line2">
              <span className="title-summit">SUMMIT</span>{' '}
              <span className="title-26">26</span>
            </span>
          </h1>

          <div className="hero-meta">
            <article className="meta-item">
              <span aria-hidden="true" className="material-symbols-outlined">
                calendar_month
              </span>
              <span>2nd May 2026</span>
            </article>
            <article className="meta-item">
              <span aria-hidden="true" className="material-symbols-outlined">
                location_on
              </span>
              <span>GGSIPU EDC Auditorium</span>
            </article>
          </div>

          <p className="hero-description">
            The nation&apos;s premier cybersecurity summit bringing together
            tech workshops, expert seminars, panel discussions, and the
            CyberNexus Hackathon — all under one roof. Defend. Innovate. Lead.
          </p>

          <div className="hero-actions">
            <a className="hero-cta hero-cta-primary" href="#register">
              Register Now
            </a>
            <a className="hero-cta hero-cta-secondary" href="#tracks">
              Explore Events
            </a>
          </div>

          <div className="hero-scene-shell">
            <CyberScene mode="hero" pointerRef={pointerRef} />
            <p className="scene-label">
              Interactive 3D Visualization • Move cursor to shift camera • Click to energize
            </p>
          </div>
        </section>

        <section className="tracks-section container" id="tracks">
          <div className="tracks-header">
            <div>
              <p className="section-kicker">// Event Tracks</p>
              <h2>What&apos;s Happening</h2>
            </div>
            <p className="tracks-ref">
              2nd May 2026
              <br />
              GGSIPU EDC Auditorium
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

                      <div className="round-inline">
                        <div className="round-inline-header">
                          <span className="round-badge">01</span>
                          <div>
                            <span className="round-mode-inline">
                              <span className="material-symbols-outlined">cloud</span>
                              Online
                            </span>
                            <h4>PPT Submission Round</h4>
                          </div>
                        </div>
                        <ul className="round-details-inline">
                          <li>Submit a PPT explaining your innovative idea — problem statement, solution, tech stack, use case & impact.</li>
                          <li>Top <strong>25 teams</strong> shortlisted for the finale.</li>
                        </ul>
                      </div>

                      <div className="round-inline round-inline-finale">
                        <div className="round-inline-header">
                          <span className="round-badge round-badge-finale">02</span>
                          <div>
                            <span className="round-mode-inline round-mode-accent">
                              <span className="material-symbols-outlined">location_on</span>
                              Offline — 2nd May 2026
                            </span>
                            <h4>Offline Grand Finale</h4>
                          </div>
                        </div>
                        <ul className="round-details-inline">
                          <li>Top 25 teams present working prototype/MVP before judges at <strong>GGSIPU-EDC, Delhi</strong>.</li>
                          <li>Live judging, mentoring, networking & final presentations.</li>
                        </ul>
                      </div>

                      <p className="hackathon-prize">
                        <span className="material-symbols-outlined">emoji_events</span>
                        Prize Pool: ₹1,00,000+
                      </p>
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
        <section className="sponsors-section container" id="sponsors">
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

            {/* General Sponsor */}
            <div className="sponsor-tier sponsor-general">
              <div className="tier-label">
                <span className="material-symbols-outlined">handshake</span>
                General Sponsor
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo-card">
                  <img alt="CodeCrafters" src="/codecrafters-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intel-section container" id="intel">
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
              <div className="intel-scene">
                <CyberScene mode="compact" pointerRef={pointerRef} />
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

        <section className="register-strip container" id="register">
          <div>
            <p className="section-kicker">Registration Open</p>
            <h3>Reserve your spot at Secure Bharat Summit 2026</h3>
          </div>
          <a href="https://unstop.com/college-fests/secure-bharat-summit-guru-gobind-singh-indraprastha-university-ggsipu-delhi-460416">Register Now →</a>
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
          </div>

          <div className="footer-links">
            {footerLinks.map((item) => (
              <a href="#home" key={item}>
                {item}
              </a>
            ))}
          </div>

          <div className="footer-chip">
            <span aria-hidden="true"></span>
            Secured Connection
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
