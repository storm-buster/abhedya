# Secure Bharat Summit 2026

> Official website for **Secure Bharat Summit 2026** — A national cybersecurity summit organized by **Abhedya** (The Cybersecurity Club) × **Defenders Connect** at GGSIPU East Delhi Campus.

## About

The Secure Bharat Summit brings together tech workshops, expert seminars, panel discussions, and the **CyberNexus Hackathon** — all under one roof. The event takes place on **2nd May 2026** at the GGSIPU EDC Auditorium, New Delhi.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 19](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React Router](https://reactrouter.com) | Client-side routing |
| [Three.js](https://threejs.org) + React Three Fiber | 3D interactive scene |
| [Motion](https://motion.dev) | Animations (blur-in text, transitions) |
| [DotLottie React](https://lottiefiles.com) | Splash screen animation |
| Vanilla CSS | Styling with CSS custom properties |

## Project Structure

```
abhedya/
├── public/                      # Static assets (logos, animation, favicons)
├── src/
│   ├── components/              # Reusable React components
│   │   ├── BlurText.jsx         # Animated blur-in text effect
│   │   ├── CountdownTimer.jsx   # Event countdown (inline & floating)
│   │   ├── CyberScene.jsx      # 3D Three.js visualization
│   │   ├── FAQ.jsx              # Accordion FAQ section
│   │   ├── RippleGrid.jsx      # WebGL animated background grid
│   │   ├── SplashLoader.jsx    # Lottie splash screen on load
│   │   └── SplashLoader.css
│   ├── data/
│   │   └── siteData.js          # All static content (nav, tracks, FAQ, etc.)
│   ├── styles/                  # CSS organized by section
│   │   ├── layout.css           # Page structure, header, navigation
│   │   ├── hero.css             # Hero section, title gradients, 3D scene
│   │   ├── tracks.css           # Event tracks, hackathon details, speakers
│   │   ├── sections.css         # Sponsors, intel feed, register, footer
│   │   ├── components.css       # Countdown, FAQ, mobile menu, accessibility
│   │   └── responsive.css       # All media queries (1180px, 860px, 560px)
│   ├── App.jsx                  # Summit page (/summit)
│   ├── LandingPage.jsx          # Landing page (/)
│   ├── LandingPage.css          # Landing page styles
│   ├── index.css                # Global design tokens & resets
│   └── main.jsx                 # App entry point & router setup
├── index.html                   # HTML entry with SEO meta tags
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies & scripts
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/secure-bharat-summit.git
cd secure-bharat-summit

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Landing Page | Splash animation → Animated hero with CTA |
| `/summit` | Summit Page | Full event details, tracks, hackathon, sponsors, FAQ |

## Key Features

- **Splash Screen** — Lottie cybersecurity animation on first load
- **Animated Title** — Blur-in motion effect on title text and description
- **3D Interactive Scene** — Three.js wireframe icosahedron with mouse tracking
- **Ripple Grid Background** — WebGL animated grid with mouse interaction
- **Event Countdown** — Live countdown timer to event date
- **Hackathon Section** — Domains, rounds, eligibility, and Unstop registration
- **Responsive Design** — Optimized for desktop, tablet, and mobile

## Credits

- **Abhedya** — The Cybersecurity Club, GGSIPU
- **Defenders Connect** — Cybersecurity Community
- **GGSIPU** — Guru Gobind Singh Indraprastha University

---

Built with ❤️ for the cybersecurity community.
