import React, { useRef, useState } from "react";
import Logo from "../image/Logo.png";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenuUnfold3Line } from "react-icons/ri";

function Navbar() {
  const [menuName, setMenuName] = useState(false);
  const menuRef = useRef(null);
  const handelMenuName = () => {
    setMenuName(!menuName);
  };
  useState(() => {
    const outSideClick = (data) => {
      if (menuRef.current && !menuRef.current.contains(data.target)) {
        setMenuName(false);
      }
    };
    document.addEventListener("click", outSideClick);
    return () => {
      document.removeEventListener("click", outSideClick);
    };
  }, []);

  return (
    <div className="">
      <div className="w-10/12 max-w-8xl mx-auto flex items-center justify-between">
        <div className="block md:hidden relative">
          {menuName ? (
            <IoCloseOutline
              onClick={handelMenuName}
              size={30}
              className="cursor-pointer"
            />
          ) : (
            <RiMenuUnfold3Line
              onClick={handelMenuName}
              size={30}
              className="cursor-pointer"
            />
          )}

          <div>
          <ul
  className={`${
    menuName
      ? "text-md text-gray-600 grid grid-cols-1 gap-4 bg-base-200 w-[160px] h-[300px] px-6 py-4 rounded-lg absolute top-[55px] z-10 -left-[27px]"
      : "hidden"
  }`}
>
  <Link 
    to="/" 
    onClick={() => setMenuName(false)} 
    className="text-gray-700 hover:text-[#ffb400] transition-colors duration-300"
  >
    Home
  </Link>
  <Link 
    to="/services" 
    onClick={() => setMenuName(false)} 
    className="text-gray-700 hover:text-[#ffb400] transition-colors duration-300"
  >
    Services
  </Link>
  <Link 
    to="/projects" 
    onClick={() => setMenuName(false)} 
    className="text-gray-700 hover:text-[#ffb400] transition-colors duration-300"
  >
    Project List
  </Link>
  <Link 
    to="/aboutme" 
    onClick={() => setMenuName(false)} 
    className="text-gray-700 hover:text-[#ffb400] transition-colors duration-300"
  >
    About Me
  </Link>
  <Link 
    to="/contactme" 
    onClick={() => setMenuName(false)} 
    className="text-gray-700 hover:text-[#ffb400] transition-colors duration-300"
  >
    Contact Me
  </Link>
</ul>

          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start">
          <img className="w-[120px] sm:w-[220px]" src={Logo} alt="" />
        </div>

        {/* Menu Section */}
        <div className="hidden sm:block">
          <div className="flex items-center gap-8 text-[13px] sm:text-xl text-gray-600  font-semibold">
            <Link
              to="/"
              className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
            >
              <span>Home</span>
              <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>

            <Link
              to="/services"
              className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
            >
              <span>Services</span>
              <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>

            <Link
              to="/projects"
              className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
            >
              <span>Project List</span>
              <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>

            <Link
              to="/aboutme"
              className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
            >
              <span>About Me</span>
              <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>

            <Link
              to="/contactme"
              className="relative group px-1 hover:text-[#ffb400] transition-transform duration-500"
            >
              <span>Contact Me</span>
              <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#ffb400] to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
          </div>
        </div>

        {/* Button Section */}
        <div>
          <Link to="/contactme">
            {" "}
            <button className="text-white sm:text-xl btn w-[90px] sm:w-[150px] sm:h-[60px] border-none rounded-full bg-[#ffb400]">
              Hair Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
