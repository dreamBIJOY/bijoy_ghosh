import React from "react";
import AddressIcon from "../image/address Icon.png";
import MailIcon from "../image/mail icon.png";
import PhoneIcon from "../image/phone icon.png";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoWhatsapp } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";

function HeroSection() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 xl:px-20">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-5/12 w-full">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#616262]">
            DON'T BE SHY !
          </h1>
          <p className="text-base md:text-lg mt-4 text-gray-600">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="flex flex-col gap-6 mt-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <img className="w-10 md:w-12" src={AddressIcon} alt="Address" />
              <div>
                <h1 className="text-lg md:text-xl text-gray-400">ADDRESS POINT</h1>
                <h2 className="text-sm md:text-base text-gray-600 font-semibold">
                  Tushardhara, Main Road Sector 1, Dhaka 1362
                </h2>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-start gap-4">
              <img className="w-10 md:w-12" src={MailIcon} alt="Mail" />
              <div>
                <h1 className="text-lg md:text-xl text-gray-400">MAIL ME</h1>
                <h2 className="text-sm md:text-base text-gray-600 font-semibold">
                  dreambijoyinfo@gmail.com
                </h2>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <img className="w-10 md:w-12" src={PhoneIcon} alt="Phone" />
              <div>
                <h1 className="text-lg md:text-xl text-gray-400">CALL ME</h1>
                <h2 className="text-sm md:text-base text-gray-600 font-semibold">
                  (+880)1784-439097
                </h2>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-6 mt-6 flex-wrap">
            {[{
              href: "https://www.facebook.com/profile.php?id=61561204123108&mibextid=ZbWKwL",
              icon: <GrFacebookOption size={20} className="md:size-6" />
            }, {
              href: "https://wa.me/8801784439097",
              icon: <BiLogoWhatsapp size={20} className="md:size-6" />
            }, {
              href: "https://www.linkedin.com/in/dream-bijoy-9ba752347/",
              icon: <TiSocialLinkedin size={20} className="md:size-6" />
            }].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 bg-gray-300 hover:bg-[#ffb400] rounded-full flex items-center justify-center group transition-all duration-300"
              >
                <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="lg:w-7/12 w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="flex-1 h-[50px] border border-gray-300 rounded-full px-4 text-sm md:text-base outline-none"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 h-[50px] border border-gray-300 rounded-full px-4 text-sm md:text-base outline-none"
            />
          </div>

          <div className="mt-5">
            <input
              type="text"
              placeholder="SUBJECT"
              className="w-full h-[50px] border border-gray-300 rounded-full px-4 text-sm md:text-base outline-none"
            />
          </div>

          <div className="mt-5">
            <textarea
              rows="5"
              placeholder="YOUR MESSAGE"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-sm md:text-base outline-none resize-none"
            ></textarea>
          </div>

          <div className="mt-6">
            <button className="w-44 md:w-56 h-12 md:h-14 rounded-full border-2 border-[#ffb400] text-sm md:text-base text-gray-600 bg-transparent transition-all duration-300 hover:bg-[#ffb400] hover:text-white">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
