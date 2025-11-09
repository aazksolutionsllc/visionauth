import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Lifecycle from './components/Lifecycle'
import Integrations from './components/Integrations'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ProblemSolution />
      <Lifecycle />
      <Integrations />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App

