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
          <div className="relative">
            <h1 className="text-6xl sm:text-[160px] text-center  text-gray-300 font-bold">
            WORK
            </h1>
            <h2 className="text-center text-2xl sm:text-7xl absolute top-3 left-28 sm:top-12 sm:left-[490px]">
              <span className="font-bold text-[#616262]">MY</span>{" "}
              <span className="font-bold text-[#ffb400]">SERVICES</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-10 justify-center mt-10 flex-wrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[280px] h-[410px] p-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl transform transition-transform duration-500 hover:-translate-y-4 hover:rotate-[1deg] hover:shadow-2xl cursor-pointer perspective-1000"
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
