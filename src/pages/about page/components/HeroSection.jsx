import React from "react";
import HeroImage from '../image/Hero Image.jpg';

function HeroSection() {
  return (
    <div className="py-16 px-4">
      <div className="w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="lg:w-6/12 w-full">
          <h1 className="text-xl sm:text-3xl font-semibold text-[#616262]">
            PERSONAL INFOS
          </h1>

          <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6">
            {/* Column 1 */}
            <div>
              <h1 className="text-base sm:text-lg text-gray-400">
                First Name: <span className="text-gray-600 font-semibold">BIJOY</span>
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 mt-4">
                Date of Birth: <span className="text-gray-600 font-semibold">18 Oct 2006</span>
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 mt-4">
                Freelance: <span className="text-green-500 font-semibold">Available</span>
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 mt-4">
                Phone: <span className="text-gray-600 font-semibold">(+880)1784-439097</span>
              </h1>
            </div>

            {/* Column 2 */}
            <div>
              <h1 className="text-base sm:text-lg text-gray-400">
                Last Name: <span className="text-gray-600 font-semibold">GHOSH</span>
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 mt-4">
                Nationality: <span className="text-gray-600 font-semibold">Bangladeshi</span>
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 mt-4">
                Email: <span className="text-gray-600 font-semibold">dreambijoyinfo@gmail.com</span>
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 mt-4">
                Languages: <span className="text-gray-600 font-semibold">Bangla & English</span>
              </h1>
            </div>
          </div>

          <div className="mt-10">
            <a href="/sample.pdf" download>
              <button className="w-44 md:w-56 h-12 md:h-14 rounded-full border-2 border-[#ffb400] text-sm md:text-base text-gray-600 bg-transparent transition-all duration-300 hover:bg-[#ffb400] hover:text-white">
                DOWNLOAD CV
              </button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-5/12 w-full flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-72 sm:w-96 md:w-[400px] rounded-2xl sm:translate-x-[100px] border-4 border-[#ffb400] rotate-3 hover:rotate-0 transition-all duration-300"
          />
        </div>
      </div>

      <hr className="text-gray-200 w-5/12 mx-auto mt-16" />
    </div>
  );
}

export default HeroSection;
