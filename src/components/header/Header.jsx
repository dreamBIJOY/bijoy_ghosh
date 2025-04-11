import React from 'react'
import TopSection from './components/TopSection'
import Navbar from './components/Navbar'

function Header() {
  return (
   <>
   <TopSection/>
   <div className='sticky top-0 z-20 bg-gray-50'>
   <Navbar/>
   </div>
   
   </>
  )
}

export default Header