
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
          <div className="relative">
            <h1 className="text-6xl sm:text-[160px] text-center text-gray-200 font-bold">
              PORTFLIO
            </h1>
            <h2 className="text-center text-2xl sm:text-7xl absolute top-3 left-20 sm:top-12 sm:left-[490px]">
              <span className="font-bold text-[#616262]">MY</span>{" "}
              <span className="font-bold text-[#ffb400]">PROJECTS</span>
            </h2>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 text-center mt-10">
            VISIT MY PORTFOLIO & KEEP YOUR FEEDBACK.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[400px] h-[450px] bg-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 mx-auto flex flex-col justify-between"
            >
              {/* Project Image */}
              <div className="relative h-[250px] w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Text & Buttons */}
              <div className="px-6 py-4 flex flex-col justify-between h-[180px]">
                <div>
                  <h1 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h1>
                  <h2 className="text-lg text-gray-300">{project.subtitle}</h2>
                </div>
                <div className="mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full py-2 bg-white text-gray-800 font-medium rounded-md hover:bg-[#ffb400] hover:text-black transition duration-300 cursor-pointer">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProject;
