import React from 'react'

function Newsletter() {
  return (
    <div className='bg-[#ffb400] py-10'>
        <div className='w-10/12 mx-auto'>
            <div className='text-center'>
                <h6 className='text-2xl'>|| Get Latest Updates</h6>
                <h1 className='text-5xl mt-6'>Subscribe For Newsletter</h1>
            </div>
            <div className='flex items-center gap-10 justify-center mt-16'>
                <input className='border-2 border-gray-600 text-w  w-[500px] h-[70px] px-5 outline-none text-xl rounded-2xl' type="text" placeholder='demo@example.com' />
                <button className="w-44 md:w-56 h-12 md:h-14 rounded-full text-sm md:text-base text-white transition-all duration-300 bg-gray-600 cursor-pointer">
              SEND MESSAGE
            </button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter