import React from 'react'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import MyServices from './components/MyServices'
import Skills from './components/Skills'
import MyProject from './components/MyProject'

function HomePage() {
  return (
    <>
    <Hero/>
    <MyServices/>
    <Skills/>
    <MyProject/>
    <Newsletter/>
    
    </>
  )
}

export default HomePage