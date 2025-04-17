import React, { useEffect, useState } from "react";
import bg from "../image/2489.jpg";

function MyProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="relative">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bg})`,
           // Adjust opacity here (lower value means more transparent)
        }}
        
      >
        <div>
        <p className="w-full h-full bg-black absolute z-10 opacity-50"></p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-10/12 mx-auto py-10">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-7xl text-center text-white font-semibold">
            Recent <span className="text-[#ffb400]">PROJECT</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-200 text-center mt-10">
            VISIT MY PORTFOLIO & KEEP YOUR FEEDBACK
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group w-full max-w-[400px] mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] object-cover rounded-t-xl"
                />
                {/* Hover Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-2 bg-[#ffb400] text-black font-semibold rounded-full hover:bg-white transition">
                    View
                  </button>
                </div>
              </div>

              {/* Text */}
              <div className=" p-4">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p className="text-gray-900">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProject;
