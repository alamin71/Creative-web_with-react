import cardImg from "../../assets/images/cardIMG1.png";
import cardImg2 from "../../assets/images/cardIMG2.png";
import cardImg3 from "../../assets/images/cardIMG3.png";
import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-fadeIn");
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight) {
          el.classList.add("fade-in-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-white mt-10 px-20">
        <h1 className="text-5xl text-orange-500 font-bold text-center mb-3">
          How it Works
        </h1>
        <div className="flex justify-around pb-3 pt-3">
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            UNIVERSITY
          </button>
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            EMERGING TALENT
          </button>
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            BUSINESS
          </button>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex group">
        <div className="w-1/2 border-x-4 transition-all duration-500 bg-slate-100 text-black flex flex-col items-end p-5 pr-10 animate-fadeIn group-hover:border-orange-500">
          <button className="bg-orange-500 text-white font-bold w-12 h-12 rounded-full mb-3">
            1
          </button>
          <h1 className="text-right mb-2">Create Your Profile</h1>
          <p className="text-right mb-3 animate-fadeIn">
            Interaction with staff has far-reaching benefits for emerging <br />
            talent – from creating environments they’re comfortable in to <br />
            improving academic performance. Get to know your emerging <br />
            talent and become more than just a friendly face.
          </p>
        </div>
        <div className="w-1/2 bg-slate-100 text-black flex md:flex-row items-left pl-10 animate-fadeIn">
          <img
            src={cardImg}
            alt="cardImg"
            className="transition-transform duration-700 transform group-hover:scale-105"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex group">
        <div className="w-1/2 border-x-4 transition-all duration-500 bg-slate-100 text-black flex md:flex-col place-items-end pr-10 animate-fadeIn group-hover:border-orange-500">
          <img
            src={cardImg2}
            alt="cardImg"
            className="transition-transform duration-700 transform group-hover:scale-105"
          />
        </div>
        <div className="w-1/2 bg-slate-100 text-black flex flex-col items-left p-5 pr-10 animate-fadeIn">
          <button className="bg-orange-500 text-white font-bold w-12 h-12 rounded-full mb-3">
            2
          </button>
          <h1 className="text-left mb-2">Build Your Network</h1>
          <p className="text-left mb-3">
            Networking with peers and professionals expands your learning <br />
            environment and opens doors to new opportunities. Keep growing{" "}
            <br />
            by connecting with others in your field.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex group">
        <div className="w-1/2 border-x-4 transition-all duration-500 bg-slate-100 text-black flex flex-col items-end p-5 pr-10 animate-fadeIn group-hover:border-orange-500">
          <button className="bg-orange-500 text-white font-bold w-12 h-12 rounded-full mb-3">
            3
          </button>
          <h1 className="text-right mb-2">Grow Your Skills</h1>
          <p className="text-right mb-3">
            Continuous learning and development are crucial in today’s
            fast-paced <br />
            world. Stay ahead by mastering new skills and refining your current{" "}
            <br />
            knowledge.
          </p>
        </div>
        <div className="w-1/2 bg-slate-100 text-black flex md:flex-row items-left pl-10 animate-fadeIn">
          <img
            src={cardImg3}
            alt="cardImg"
            className="transition-transform duration-700 transform group-hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
