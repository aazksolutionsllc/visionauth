import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container nav-three">
        <div className="nav-left">
          <a href="#platform" className="nav-link">Platform</a>
          <a href="#integrations" className="nav-link">Integrations</a>
        </div>
        <div className="nav-logo">
          <span className="logo-text">FLOQEN</span>
        </div>
        <div className="nav-right">
          <a href="#about" className="nav-link">About</a>
          <button className="nav-button">Get Early Access</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav

