import React, { useEffect } from 'react'
import MyProject from './components/MyProject'

function ProjectPage() {
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
    <MyProject/>
    </>
  )
}

export default ProjectPage