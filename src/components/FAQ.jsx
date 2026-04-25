import { useState } from 'react'

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className={`faq-item ${openIndex === i ? 'is-open' : ''}`} key={i}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <span className="material-symbols-outlined faq-chevron" aria-hidden="true">
              expand_more
            </span>
          </button>
          <div className="faq-answer" role="region">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQ
