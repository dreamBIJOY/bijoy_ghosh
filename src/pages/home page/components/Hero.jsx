import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoWhatsapp } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiDownload } from "react-icons/hi";
import HeroImage from "../image/Hero Image.jpg";

function Hero() {
  return (
    <div className="bg-gray-100 text-gray-600 flex items-center px-5 lg:px-20 pt-10">
      <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="lg:w-6/12 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Hello! I’m <br />
            <span className="text-[#ffb400] text-5xl md:text-7xl block mt-2">
              BIJOY GHOSH
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-700">
            I'm a web designer & front‑end developer focused on crafting clean &
            user‑friendly experiences. I’m passionate about building excellent
            websites that improve the lives of those around me.
          </p>

          {/* Resume Button */}
          <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
            <a
              href="/sample.pdf"
              download
              className="border border-[#ffb400] px-6 py-3 rounded-full text-gray-600 text-lg hover:bg-[#ffb400] hover:text-[#0f1117] transition duration-300 flex items-center gap-2"
            >
              Get Resume <HiDownload />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-6/12">
          {/* Hero Image */}
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[800px] z-10 rounded-2xl"
          />

          {/* Circular Rings */}
          <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 z-0">
            <div className="w-[300px] h-[300px] rounded-full border-2 border-[#ffb400] absolute -translate-x-[90%] -translate-y-[40px]"></div>
            <div className="w-[400px] h-[400px] rounded-full border-2 border-[#ffb400] absolute -translate-x-[80%] -translate-y-[95px]"></div>
            <div className="w-[500px] h-[500px] rounded-full border-2 border-[#ffb400] absolute -translate-x-[75%] -translate-y-[150px]"></div>

            {/* Social Media Icons */}
            <div className="absolute top-[100px] -right-10 flex flex-col gap-4 -translate-y-1/2">
              <a
                href="https://www.facebook.com/profile.php?id=61561204123108&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[45px] h-[45px] bg-gray-600 hover:bg-[#1877f2] rounded-full flex items-center justify-center transition-all duration-300">
                  <GrFacebookOption className="text-white text-lg" />
                </div>
              </a>
              <a
                href="https://wa.me/8801784439097"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[45px] h-[45px] bg-gray-600 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300">
                  <BiLogoWhatsapp className="text-white text-lg" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/bijoyghosh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[45px] h-[45px] bg-gray-600 hover:bg-[#0077b5] rounded-full flex items-center justify-center transition-all duration-300">
                  <TiSocialLinkedin className="text-white text-lg" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
