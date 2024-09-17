import React from "react";
import bannerImg from "../../assets/images/Home_Banner1.png";

const Banner = () => {
  return (
    <div className="relative h-[700px] w-full">
      <img
        src={bannerImg}
        alt="bannerImg"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start text-left text-white">
        <div className="md: mt-28 ml-20 font-bold">
          <span className="text-5xl ">Discover</span>
          <span class="h-5 w-5 bg-red-500 rounded-full inline-block ml-1 mr-1"></span>
          <span className="text-5xl">Interact</span>
          <span class="h-5 w-5 bg-red-500 rounded-full inline-block items-center justify-center ml-1 mr-1"></span>
          <span className="text-5xl">Engage</span>
          <br />
          <br />
          <p className="text-2xl mb-6">
            Enhancing Collaborative relationships between the <br /> world of
            Education and Business.
          </p>
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
