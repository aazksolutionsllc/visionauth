import React from 'react'
import './ProblemSolution.css'

function ProblemSolution() {
  return (
    <section className="problem-solution" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            From Fragmentation to Unification
          </h2>
        </div>
        <div className="ps-content">
          <div className="ps-column ps-challenge">
            <div className="icon-wrapper">
              <div className="icon-bg icon-pulse"></div>
              <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Disconnected boxes representing fragmentation */}
                <rect x="10" y="10" width="16" height="16" rx="2" stroke="url(#challengeGrad1)" strokeWidth="2" fill="none"/>
                <rect x="38" y="10" width="16" height="16" rx="2" stroke="url(#challengeGrad2)" strokeWidth="2" fill="none"/>
                <rect x="10" y="38" width="16" height="16" rx="2" stroke="url(#challengeGrad2)" strokeWidth="2" fill="none"/>
                <rect x="38" y="38" width="16" height="16" rx="2" stroke="url(#challengeGrad1)" strokeWidth="2" fill="none"/>
                {/* X marks to show problems */}
                <path d="M16 16L24 24M24 16L16 24" stroke="url(#challengeGrad1)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M44 44L52 52M52 44L44 52" stroke="url(#challengeGrad2)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="challengeGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff6b6b"/>
                    <stop offset="1" stopColor="#ee5a6f"/>
                  </linearGradient>
                  <linearGradient id="challengeGrad2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffa500"/>
                    <stop offset="1" stopColor="#ff8c00"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="icon-glow"></div>
            </div>
            <h3 className="ps-title">The Challenge</h3>
            <p className="ps-text">
              Teams design APIs in one tool, secure them in another, test elsewhere, and rely on manual workflows for consumer access and approvals. Every step from design to consumption, happens in silos, leading to fragmented processes, governance gaps, and slower innovation.
            </p>
          </div>
          
          <div className="ps-column ps-solution">
            <div className="icon-wrapper">
              <div className="icon-bg icon-sparkle"></div>
              <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Unified connected platform representing solution */}
                <circle cx="32" cy="32" r="16" fill="url(#solutionGrad1)" opacity="0.8"/>
                <circle cx="32" cy="32" r="12" fill="url(#solutionGrad2)"/>
                <circle cx="32" cy="32" r="6" fill="#ffffff"/>
                <path d="M28 32L30 34L36 28" stroke="url(#solutionGrad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                {/* Connected nodes */}
                <circle cx="16" cy="20" r="3" fill="url(#solutionGrad1)"/>
                <circle cx="48" cy="20" r="3" fill="url(#solutionGrad1)"/>
                <circle cx="16" cy="44" r="3" fill="url(#solutionGrad1)"/>
                <circle cx="48" cy="44" r="3" fill="url(#solutionGrad1)"/>
                {/* Connection lines */}
                <path d="M19 22L27 28" stroke="url(#solutionGrad4)" strokeWidth="1.5" opacity="0.6"/>
                <path d="M37 28L45 46" stroke="url(#solutionGrad4)" strokeWidth="1.5" opacity="0.6"/>
                <path d="M19 42L27 36" stroke="url(#solutionGrad4)" strokeWidth="1.5" opacity="0.6"/>
                <path d="M37 36L45 18" stroke="url(#solutionGrad4)" strokeWidth="1.5" opacity="0.6"/>
                <defs>
                  <linearGradient id="solutionGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--secondary-teal)"/>
                    <stop offset="1" stopColor="var(--primary-blue)"/>
                  </linearGradient>
                  <linearGradient id="solutionGrad2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--primary-blue)"/>
                    <stop offset="1" stopColor="var(--secondary-teal)"/>
                  </linearGradient>
                  <linearGradient id="solutionGrad3" x1="28" y1="32" x2="36" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--secondary-teal)"/>
                    <stop offset="1" stopColor="var(--primary-blue)"/>
                  </linearGradient>
                  <linearGradient id="solutionGrad4" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--secondary-teal)"/>
                    <stop offset="1" stopColor="var(--primary-blue)"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="icon-glow icon-glow-solution"></div>
            </div>
            <h3 className="ps-title">The Solution</h3>
            <p className="ps-text">
              VisionAuth replaces this fragmentation with a single AI-driven platform that brings every phase from design to approval together. By embedding AI-driven design, adaptive testing, and intelligent governance into each step, VisionAuth eliminates tool sprawl, streamlines collaboration, and delivers APIs that are born secure, continuously optimized, and ready to evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution

