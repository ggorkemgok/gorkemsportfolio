import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero/Hero'
import { Works } from './components/Works/Works'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <Skills />
    </div>
  )
}

export default App