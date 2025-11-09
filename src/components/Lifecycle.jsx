import React, { useEffect, useRef, useState } from 'react'
import './Lifecycle.css'

function Lifecycle() {
  const steps = [
    { id: 1, title: 'Design', icon: '🛠️', tagline: 'Smarter. Faster. Together.', description: 'Generate OpenAPI specs from plain English. AI suggests structures and policies in real time.' },
    { id: 2, title: 'Publish Securely', icon: '🔒', tagline: 'Effortlessly.', description: 'Publish APIs to a centralized catalog and configure them for protection with enterprise-grade identity providers like Azure, Okta, Ping, and Auth0, ensuring every published API is secure, governed, and ready for consumption.' },
    { id: 3, title: 'Test', icon: '✅', tagline: 'Validate functionality and performance.', description: 'Automated testing ensures reliability, security, and performance at every step.' },
    { id: 4, title: 'Subscribe', icon: '📦', tagline: 'Seamless API subscriptions', description: 'Streamline consumer onboarding with intelligent subscription management and access control.' },
    { id: 5, title: 'Consume.', icon: '🚀', tagline: 'Access and integrate effortlessly.', description: 'Empower developer teams to explore, test, and understand APIs within the same platform using shared workspaces and collections. With built-in documentation and collaborative tools, API consumption becomes a seamless, team-driven experience.' }
  ]

  const [active, setActive] = useState(0)
  const [revealed, setRevealed] = useState({})
  const rowRefs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setActive(idx)
            setRevealed((r) => ({ ...r, [idx]: true }))
          }
        })
      },
      { threshold: 0.6 }
    )
    rowRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="lifecycle" id="platform">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Unified AI Driven Platform</h2>
        </div>
        <div className="lifecycle-timeline">
          {steps.map((step, i) => {
            const side = i % 2 === 0 ? 'left' : 'right'
            return (
              <div
                key={step.id}
                className={`lifecycle-item lifecycle-item-${side} ${revealed[i] ? 'revealed' : ''} ${active === i ? 'active' : ''}`}
                data-index={i}
                ref={(el) => (rowRefs.current[i] = el)}
              >
                {side === 'left' && (
                  <div className="lifecycle-content">
                    <h3 className="item-title">{step.title}</h3>
                    {step.tagline && <p className="item-tagline">{step.tagline}</p>}
                    <p className="item-description">{step.description}</p>
                  </div>
                )}

                <div className="timeline-icon-wrapper">
                  <div className="timeline-connector"></div>
                  <div className="timeline-icon">{step.icon}</div>
                  <div className={`row-beam beam-${side}`}></div>
                  <div className="timeline-connector"></div>
                </div>

                {side === 'right' && (
                  <div className="lifecycle-content">
                    <h3 className="item-title">{step.title}</h3>
                    {step.tagline && <p className="item-tagline">{step.tagline}</p>}
                    <p className="item-description">{step.description}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Lifecycle
