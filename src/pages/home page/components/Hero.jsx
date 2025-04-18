import React, { useEffect, useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoWhatsapp } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiDownload } from "react-icons/hi";
import HeroImage from "../image/Hero Image.jpg";
import bg from '../image/19362653.jpg';

// Typing Effect Component
function TypingEffect() {
  const titles = ["Web Developer", "Graphics Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentTitle = titles[index];
    let speed = isDeleting ? 70 : 150;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    const cursor = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursor);
  }, []);

  return (
    <span className="text-2xl md:text-5xl block mt-2 text-gray-800">
      {text}
      <span className="text-[#ffb400]">{cursorVisible ? "|" : " "}</span>
    </span>
  );
}

function Hero() {
  return (
    <div className="relative text-gray-600 pt-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
      </div>

      <div className="w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Left Section */}
        <div className="lg:w-6/12 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Hello! I’m <br />
            <span className="text-[#ffb400] text-5xl md:text-6xl block mt-2">
              BIJOY GHOSH
            </span>
            <TypingEffect />
          </h1>
          <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-700">
            I'm a web designer & front‑end developer focused on crafting clean & user‑friendly experiences. 
            I’m passionate about building excellent websites that improve the lives of those around me.
          </p>

          <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
            <a
              href="/CV.pdf"
              download
              className="border border-[#ffb400] px-6 py-3 rounded-full text-gray-600 text-lg hover:bg-[#ffb400] hover:text-[#0f1117] transition duration-300 flex items-center gap-2"
            >
              Get Resume <HiDownload />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-6/12">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[400px] sm:w-[300px] md:w-[400px] lg:w-[800px] z-10 rounded-2xl"
          />

          {/* Rings and Icons */}
          <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 z-0">
            {[250, 350, 450].map((size, i) => (
              <div
                key={i}
                className={`w-[${size}px] h-[${size}px] rounded-full border-2 border-[#ffb400] absolute`}
                style={{
                  transform: `translate(-${90 - i * 10}%, -${40 + i * 55}px)`,
                }}
              ></div>
            ))}

            {/* Social Icons */}
            <div className="absolute top-[100px] -right-10 flex flex-col gap-4 -translate-y-1/2">
              <a href="https://www.facebook.com/profile.php?id=61561204123108&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <div className="w-[45px] h-[45px] bg-gray-600 hover:bg-[#1877f2] rounded-full flex items-center justify-center transition-all duration-300">
                  <GrFacebookOption className="text-white text-lg" />
                </div>
              </a>
              <a href="https://wa.me/8801784439097" target="_blank" rel="noopener noreferrer">
                <div className="w-[45px] h-[45px] bg-gray-600 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300">
                  <BiLogoWhatsapp className="text-white text-lg" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/bijoyghosh" target="_blank" rel="noopener noreferrer">
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
