import React from 'react'
import Logo from '../image/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=''>
        <div className='w-10/12 max-w-8xl mx-auto flex items-center justify-between'>
            {/* Logo Section */}
            <div className='flex justify-center sm:justify-start'>
                <img className='w-[120px] sm:w-[220px]' src={Logo} alt="" />
            </div>

            {/* Menu Section */}
            <div className='hidden sm:block'>
            <div className='flex items-center gap-8 text-[13px] sm:text-xl text-gray-600  font-semibold'>
  <Link to="/" className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500">
    <span>Home</span>
    <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
  </Link>

  <Link to="/services" className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500">
    <span>Services</span>
    <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
  </Link>

  <Link to="/projects" className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500">
    <span>Project List</span>
    <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
  </Link>

  <Link to="/aboutme" className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500">
    <span>About Me</span>
    <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
  </Link>

  <Link to="/contactme" className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500">
    <span>Contact Me</span>
    <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
  </Link>
</div>

            </div>

            {/* Button Section */}
            <div>
               <Link to='/contactme'> <button className='text-white sm:text-xl btn w-[90px] sm:w-[150px] sm:h-[60px] border-none rounded-full bg-[#ffb400]'>Hair Me</button></Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar