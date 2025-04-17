import React, { useEffect } from 'react'
import FirstSection from './components/FirstSection'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'


function AboutPage() {
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>

    <FirstSection/>
    <HeroSection/>
    <Skills/>
    
    </>
  )
}

export default AboutPage