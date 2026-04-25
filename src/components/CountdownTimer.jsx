import { useState, useEffect } from 'react'

const EVENT_DATE = new Date('2026-05-02T10:00:00+05:30')

function getTimeLeft() {
  const diff = EVENT_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff,
  }
}

const pad = (n) => String(n).padStart(2, '0')

const CountdownTimer = ({ variant = 'inline' }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft.total <= 0) return null

  if (variant === 'floating') {
    return (
      <div className="countdown-floating-inner">
        <span className="countdown-live-dot" aria-hidden="true"></span>
        <span className="countdown-floating-label">Event in</span>
        <div className="countdown-compact">
          <span>{pad(timeLeft.days)}d</span>
          <span>{pad(timeLeft.hours)}h</span>
          <span>{pad(timeLeft.minutes)}m</span>
          <span>{pad(timeLeft.seconds)}s</span>
        </div>
        <a
          href="https://unstop.com/college-fests/secure-bharat-summit-guru-gobind-singh-indraprastha-university-ggsipu-delhi-460416"
          className="countdown-cta"
        >
          Register Now →
        </a>
      </div>
    )
  }

  return (
    <div className="countdown-inline">
      <div className="countdown-unit">
        <span className="countdown-value">{pad(timeLeft.days)}</span>
        <span className="countdown-label">Days</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-unit">
        <span className="countdown-value">{pad(timeLeft.hours)}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-unit">
        <span className="countdown-value">{pad(timeLeft.minutes)}</span>
        <span className="countdown-label">Min</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-unit">
        <span className="countdown-value">{pad(timeLeft.seconds)}</span>
        <span className="countdown-label">Sec</span>
      </div>
    </div>
  )
}

export default CountdownTimer
