import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">FLOQEN</span>
            <p className="footer-tagline">Where APIs are born secure</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Floqen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

