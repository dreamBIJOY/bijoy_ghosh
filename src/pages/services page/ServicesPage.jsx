import React, { useEffect } from 'react'
import MyServices from './components/MyServices'

function ServicesPage() {
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
   <>
   <MyServices/>
   </>
  )
}

export default ServicesPage