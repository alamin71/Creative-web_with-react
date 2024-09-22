import React from "react";
import Banner from "../banner/Banner";
import About from "../about/About";
import WhoIsItFor from "../whoIsItFor/WhoIsItFor";
import HowItWorks from "../howItWorks/HowItWorks";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <WhoIsItFor></WhoIsItFor>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
