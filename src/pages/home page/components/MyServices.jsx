import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import bg from "../image/19276.jpg";

function MyServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="relative py-16">
      {/* Background image with opacity */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 opacity-20 z-0"
      >
        <div>
          <p className="w-full h-full bg-black absolute z-10 opacity-30"></p>
        </div>
      </div>

      {/* Actual content above the faded background */}
      <div className="relative z-10 w-10/12 mx-auto">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-7xl text-center text-[#ffb400] font-semibold">
            MY <span className="text-gray-600">SERVICES</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 text-center mt-10">
            Service Provide For My Clients.
          </h2>
        </div>

        <div className="flex items-center gap-10 justify-center mt-10 flex-wrap animate-">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[280px] h-[410px] p-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl transform transition-transform duration-500 hover:-translate-y-4 hover:rotate-[1deg] hover:shadow-2xl cursor-pointer perspective-1000 "
            >
              <div className="transition-transform duration-500 ease-in-out hover:scale-[1.02]">
                <img
                  className="w-[70px] drop-shadow-md"
                  src={service.icon}
                  alt=""
                />
              </div>

              <div className="mt-5">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h1>

                <div className="flex flex-col gap-2 mt-4">
                  {service.items.map((data, i) => (
                    <div key={i}>
                      <h1 className="text-lg flex items-center gap-1 text-gray-700">
                        <IoIosArrowForward className="text-[#ff7e5f]" />
                        {data}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyServices;
