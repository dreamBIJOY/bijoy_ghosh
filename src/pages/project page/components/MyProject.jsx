
import React, { useEffect, useState } from "react";

function MyProject() {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
  return (
    <div className="py-16">
      <div className="w-10/12 mx-auto">
      <div>
        <div className='relative'>
      <h1 className="text-6xl sm:text-[160px] text-center  text-gray-200 font-bold">PORTFLIO</h1>
      <h2 className="text-center text-2xl sm:text-7xl absolute top-3 left-28 sm:top-12 sm:left-[490px]">
        <span className="font-bold text-[#616262]">MY</span> <span className="font-bold text-[#ffb400]">PROJECTS</span>
      </h2>
    </div>
           <h2 className="text-2xl font-semibold text-gray-700 text-center mt-10">VISIT MY PORTFOLIO & KEEP YOUR FEEDBACK.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mb-10 mt-20">
  {projects.map((project, index) => (
    <div
      className="relative group w-[400px] h-[400px] p-6 bg-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      key={index}
    >
      {/* Project Image */}
      <div className="flex items-center justify-center relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-[400px] h-[250px] object-cover rounded-2xl"
        />

        {/* View Button on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-6 py-2  bg-[#ffb400] text-black font-semibold rounded-full hover:bg-white transition">
            View
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-white mt-3">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <h2 className="text-lg">{project.subtitle}</h2>
      </div>
    </div>
  ))}
</div>


      </div>
      
    </div>
  );
}

export default MyProject;
