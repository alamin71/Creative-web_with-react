import React from "react";

const About = () => {
  return (
    <div className="md:flex ml-20 mt-2">
      <div className="grid md:grid-cols-2 gap-4 border-red-800 w-1/2">
        <div className="relative">
          <div className="absolute right-0 top-1/2  hidden md:block">
            <h1 class="w-36 h-1 bg-red-500"></h1>
          </div>
        </div>
        <div className="bg-amber-600 w-64 h-64 text-3xl flex flex-col justify-center items-center text-center  text-white rounded-lg">
          <h1>Who we are?</h1>
          <span>01</span>
        </div>
        <div className="bg-lime-400 w-64 h-64 text-3xl flex flex-col justify-center items-center text-center  text-white rounded-lg">
          <h1>Creative Vibes</h1>
          <span>02</span>
        </div>
        <div className="bg-slate-600 w-64 h-64 text-3xl flex flex-col justify-center items-center text-center  text-white rounded-lg">
          <h1>Creative Connection</h1>
          <span>03</span>
        </div>
      </div>
      {/* about details right side */}
      <div className="w-1/2">
        <div className="flex flex-col justify-center items-start h-screen">
          <h1 className="text-6xl font-bold mb-5">About Us</h1>
          <p className="text-3xl mb-5">Bringing Communities Together</p>
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            Discover more
          </button>
        </div>
        <div className="relative">
          <div className="absolute right-0 bottom-36  hidden md:block">
            <h1 class="w-36 h-1 bg-red-500"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
