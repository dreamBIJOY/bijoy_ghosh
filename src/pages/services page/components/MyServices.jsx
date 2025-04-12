import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function MyServices() {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="py-16">
      <div className="w-10/12 mx-auto">
        <div>
        <div className='relative'>
      <h1 className="text-6xl sm:text-[160px] text-center  text-gray-200 font-bold">WORKS</h1>
      <h2 className="text-center text-2xl sm:text-7xl absolute top-3 left-28 sm:top-12 sm:left-[490px]">
        <span className="font-bold text-[#616262]">MY</span> <span className="font-bold text-[#ffb400]">SERVICES</span>
      </h2>
    </div>
           <h2 className="text-2xl font-semibold text-gray-700 text-center mt-10">Service Provide For My Clients.</h2>
        </div>

        <div className="flex items-center gap-10 justify-center mt-10">
            {
                services.map((service, index) => (
                    <div className="w-[280px] h-[410px] p-6 rounded-xl bg-gray-600 shadow-2xl" key={index}>
                    
                    <div>
                        <img className="w-[70px]" src={service.icon} alt="" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold mt-3 text-white">{service.title}</h1>

                        <div className="flex flex-col gap-2 mt-4">
                        {
                            service.items.map((data, index)=>(
                                <div key={index}>
                                    <div>
                                <h1 className="text-lg flex items-center gap-1 text-white"><IoIosArrowForward />{data}</h1>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default MyServices;
