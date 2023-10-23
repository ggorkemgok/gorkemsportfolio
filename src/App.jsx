import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero/Hero'
import { Works } from './components/Works/Works'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
    </div>
  )
}

export default App