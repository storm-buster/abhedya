/**
 * Site-wide data for the Secure Bharat Summit 2026 website.
 * All static content (nav links, event tracks, FAQ, speakers, etc.)
 * is defined here to keep page components clean and focused on layout.
 */

// ───────────────────────────────────────────────
// Navigation
// ───────────────────────────────────────────────

export const navLinks = [
  { href: '#workshops', label: 'Workshops', isActive: true },
  { href: '#sessions', label: 'Sessions' },
  { href: '#panels', label: 'Panels' },
  { href: '#hackathon', label: 'Hackathon' },
]

// ───────────────────────────────────────────────
// Event Track Cards
// ───────────────────────────────────────────────

export const trackCards = [
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
      'The ultimate challenge for innovators. From PPT screening to prototype showcase, compete for the glory and a massive prize pool.',
    tone: 'primary',
    icon: 'center_focus_strong',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl3u5Gc4W9PqIhf6ngPri2D7ujHJMafHaHzH_6L_EO5HlHe_Sqm6UPMHYq6oTOAIbI2ekmbQtWcfaKB6L0avZYA7KzwsktSOhDtIux-AC_QwFtJAJpgI8rdIFrmw52MVNUQt3Et23zfYT3mvtQAkacBQPfCzYrZhTVFyYooL54aV0MWBwGfhdtYWYFzCPH9LbaRE2beBvA6_7kN1PPOTlmyty_IWuY7lHsIHGQYMMuZrlTSeMlW5H7LjAIu-zrIC0oP1vEfBy5yV4',
  },
]

// ───────────────────────────────────────────────
// Live Updates Feed
// ───────────────────────────────────────────────

export const intelFeed = [
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

// ───────────────────────────────────────────────
// Footer
// ───────────────────────────────────────────────

export const footerLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Contact Us', href: 'mailto:abhedyathecybersecclub@gmail.com', icon: 'mail' },
]

// ───────────────────────────────────────────────
// FAQ
// ───────────────────────────────────────────────

export const faqItems = [
  {
    q: 'Who can participate in the CyberNexus Hackathon?',
    a: 'Teams of 2-4 undergraduate or postgraduate students from any college or specialization can participate. Inter-college teams are welcome.',
  },
  {
    q: 'Is the event free to attend?',
    a: 'Yes, workshops, panel discussions, and expert sessions are free for all registered attendees. The hackathon has a separate registration via Unstop.',
  },
  {
    q: 'What should I bring to the offline finale?',
    a: 'Bring your laptop, charger, student ID, and any hardware/devices your project requires. Wi-Fi and power outlets will be provided at the venue.',
  },
  {
    q: 'How do I reach GGSIPU EDC Auditorium?',
    a: 'GGSIPU East Delhi Campus is located in Surajmal Vihar, Delhi. The closest metro stations are Mansarovar Park (Red Line), Karkarduma (Blue & Pink Lines), and Karkarduma Court (Pink Line). Detailed directions will be emailed to registered participants.',
  },
  {
    q: 'Can I participate in both the hackathon and attend workshops?',
    a: "Absolutely! The schedule is designed so that hackathon participants can attend workshops and sessions during breaks. You'll receive a complete itinerary after registration.",
  },
  {
    q: 'What are the judging criteria for the hackathon?',
    a: 'Projects are evaluated on originality, technical execution, creativity, scalability, and real-world impact. Plagiarism leads to disqualification. Open-source APIs are allowed.',
  },
]

// ───────────────────────────────────────────────
// Speakers
// ───────────────────────────────────────────────

export const speakers = [
  {
    name: 'Dr. Rakshit Tandon',
    link: 'https://www.linkedin.com/in/rakshittandon',
  },
  {
    name: 'Mr. Ooppss',
    link: 'https://www.linkedin.com/in/mrooppss',
  },
  {
    name: 'Mr. Manoj Kumar Kushwaha',
    link: 'https://www.linkedin.com/in/manoj-kumar-kushwaha-6771a05b',
  },
]

// ───────────────────────────────────────────────
// Social Links (WhatsApp SVG is defined in App.jsx
// because it contains JSX)
// ───────────────────────────────────────────────

export const socialLinks = [
  { icon: 'mail', href: 'mailto:abhedyathecybersecclub@gmail.com', label: 'Email' },
  { icon: 'photo_camera', href: 'https://www.instagram.com/abhedya.edc', label: 'Instagram' },
  { icon: 'work', href: 'https://www.linkedin.com/company/abhedya-edc/', label: 'LinkedIn' },
  {
    icon: 'forum',
    href: 'https://chat.whatsapp.com/EiETnVPXByT1vIRtgJwgtt',
    label: 'WhatsApp Community',
    isCustom: true,
    // SVG path for WhatsApp icon (rendered as inline SVG in the component)
    svgPath: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.602 6.023L0 24l6.117-1.605a11.845 11.845 0 005.93 1.583h.005c6.635 0 12.05-5.414 12.05-12.05a11.832 11.832 0 00-3.56-8.528z',
  },
]
