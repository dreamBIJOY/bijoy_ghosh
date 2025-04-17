import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import MyServices from './components/MyServices'
import Skills from './components/Skills'
import MyProject from './components/MyProject'
import Marquee from './components/SkillMarquee'

function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
    <Hero/>
    <MyServices/>
    <Marquee/>
    <Skills/>
    <MyProject/>
    <Newsletter/>
    
    </>
  )
}

export default HomePage