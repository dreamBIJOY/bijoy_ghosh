import React from "react";
import Logo from "./image/Logo.png";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#616262] py-10">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <img className="w-[180px]" src={Logo} alt="" />
            <p className="text-base md:text-lg w-full md:w-[500px] text-gray-300 mt-4">
              I specialize in crafting modern, responsive websites that bring
              ideas to life. From sleek designs to functional development, I
              turn your vision into a powerful online presence
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4">
            <h1 className="text-xl font-semibold text-white">QUICK LINKS</h1>

            <div className="flex flex-col gap-4 mt-4 md:mt-8">
              <Link
                to="/"
                className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
              >
                <span className="text-gray-300">Home</span>
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>

              <Link
                to="/services"
                className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
              >
                <span className="text-gray-300">Services</span>
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>

              <Link
                to="/projects"
                className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
              >
                <span className="text-gray-300">Project List</span>
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>

              <Link
                to="/aboutme"
                className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
              >
                <span className="text-gray-300">About Me</span>
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>

              <Link
                to="/contactme"
                className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
              >
                <span className="text-gray-300">Contact Me</span>
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3">
            <h1 className="text-xl font-semibold text-white">CONTACT ME</h1>
            <div className="flex flex-col justify-start gap-4 mt-4 md:mt-8">
              <h1 className="text-base md:text-lg flex items-start md:items-center gap-2 text-gray-300">
                <IoLocationOutline className="text-[24px] md:text-[30px] text-[#ffb400] mt-1 md:mt-0"/>  
                <span>Tushardhara, Main Road Sector 1, Dhaka 1362</span>
              </h1>

              <h1 className="text-base md:text-lg flex items-center gap-2 text-gray-300">
                <LuPhoneCall className="text-[20px] md:text-[24px] text-[#ffb400]"/>  
                (+880)1784-439097
              </h1>

              <h1 className="text-base md:text-lg flex items-start md:items-center gap-2 text-gray-300">
                <MdOutlineMailOutline className="text-[20px] md:text-[24px] text-[#ffb400] mt-1 md:mt-0"/>  
                <span>dreambijoyinfo@gmail.com</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;