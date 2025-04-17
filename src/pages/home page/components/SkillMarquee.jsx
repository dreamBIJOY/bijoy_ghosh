import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // optional

function SkillMarquee() {
  const skills = [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'React.js',
    'Photoshop',
    'Illustrator',
    'UI/UX',
  ];

  return (
    <div className="bg-gray-900 py-6 overflow-hidden w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        speed={2000} // অটো স্ক্রল স্পিড (কম মান = বেশি সময় = ধীর গতি)
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      >
        {/* Skills কে ডাবল করে দিচ্ছি যেন লুপে সুন্দরভাবে চলে */}
        {[...skills, ...skills].map((skill, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex items-center gap-2 px-6">
              <span className="text-[#ffb400] font-semibold text-lg">{skill}</span>
              <span className="text-gray-300 text-xl">◆</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SkillMarquee;
