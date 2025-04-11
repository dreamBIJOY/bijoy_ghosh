import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { BsVoicemail } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoWhatsapp } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";

function TopSection() {
  return (
    <div className="bg-[#616262]">
  <div className="w-10/12 max-w-8xl mx-auto py-2">
    <div className="flex items-center justify-between flex-wrap gap-2">

      {/* Left side */}
      <div className="md:flex items-center gap-4 sm:gap-6 flex-wrap text-white text-sm sm:text-lg">
        <h1 className="flex items-center gap-1 sm:gap-2">
          <LuPhoneCall size={18} className="sm:size-5" /> +8801784-439097
        </h1>
        <h1 className="flex items-center gap-1 sm:gap-2">
          <BsVoicemail size={20} className="sm:size-6" /> dreambijoyinfo@gmail.com
        </h1>
      </div>

      {/* Right side (social icons) */}
      <div className="text-white">
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61561204123108&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrFacebookOption size={20} className="sm:size-[25px]" />
          </a>
          <a
            href="https://wa.me/8801784439097"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoWhatsapp size={20} className="sm:size-[25px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/dream-bijoy-9ba752347/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedin size={24} className="sm:size-[30px]" />
          </a>
        </div>
      </div>

    </div>
  </div>
</div>

  )
}

export default TopSection