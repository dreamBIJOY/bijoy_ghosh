import React from 'react';

function Newsletter() {
  return (
    <div className='bg-[#ffb400] py-10'>
      <div className='w-11/12 max-w-6xl mx-auto'>
        <div className='text-center px-4'>
          <h6 className='text-xl md:text-2xl'>|| Get Latest Updates</h6>
          <h1 className='text-3xl md:text-5xl mt-4 md:mt-6'>Subscribe For Newsletter</h1>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-6 justify-center mt-10 md:mt-16 px-4'>
          <input
            className='border-2 border-gray-600 w-full md:w-[400px] lg:w-[500px] h-[55px] md:h-[70px] px-5 text-base md:text-xl rounded-2xl outline-none'
            type="text"
            placeholder='demo@example.com'
          />
          <button className="w-full md:w-44 lg:w-56 h-[50px] md:h-14 rounded-full text-sm md:text-base text-white bg-gray-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
