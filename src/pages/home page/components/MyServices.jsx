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

        <div className="flex items-center gap-10 justify-center mt-10 flex-wrap">
          {services.map((service, index) => (
            <div
              className="w-[280px] h-[410px] p-6 rounded-xl bg-[#F1EFEC] shadow-2xl hover:-translate-y-2.5 cursor-pointer hover:drop-shadow-2xl"
              key={index}
            >
              <div>
                <img
                  className="w-[70px] drop-shadow-[0_0_5px_]"
                  src={service.icon}
                  alt=""
                />
              </div>

              <div>
                <h1 className="text-2xl font-semibold mt-3 text-gray-700">
                  {service.title}
                </h1>

                <div className="flex flex-col gap-2 mt-4">
                  {service.items.map((data, index) => (
                    <div key={index}>
                      <h1 className="text-lg flex items-center gap-1 text-gray-700">
                        <IoIosArrowForward />
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
