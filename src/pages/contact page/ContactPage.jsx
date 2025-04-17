import React, { useEffect } from 'react'
import FirstSection from './components/FirstSection'
import HeroSection from './components/HeroSection'

function ContactPage() {
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
    <FirstSection/>
    <HeroSection/>
    </>
  )
}

export default ContactPage