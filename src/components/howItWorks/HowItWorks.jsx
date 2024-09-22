import cardImg from "../../assets/images/cardIMG1.png";
import cardImg2 from "../../assets/images/cardIMG2.png";
import cardImg3 from "../../assets/images/cardIMG3.png";

const HowItWorks = () => {
  return (
    <>
      <div className="bg-white mt-10 mx-20">
        <h1 className="text-5xl text-orange-500 font-bold text-center">
          How it Works
        </h1>
        <div className="flex justify-around pb-3">
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            Explore now
          </button>
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            Explore now
          </button>
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            Explore now
          </button>
        </div>
      </div>
      <div className="flex border-r-red-500">
        <div className="w-1/2 bg-slate-500 flex flex-col items-end p-5 pr-10">
          <button className="bg-orange-500 text-white font-bold w-12 h-12 rounded-full mb-3">
            1
          </button>
          <h1 className="text-right mb-2">Create Your Profile</h1>
          <p className="text-right mb-3">
            Interaction with staff has far reaching benefits for emerging <br />
            talent – from creating environments they’re comfortable in to <br />
            improving academic performance. Get to know your emerging <br />
            talent and become more than just a friendly face.
          </p>
        </div>
        <div className="w-1/2 bg-slate-500 flex md:flex-row items-left  pl-10">
          <img src={cardImg} alt="cardImg" className="text-right" />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 bg-slate-500 flex md:flex-col place-items-end pr-10">
          <img src={cardImg} alt="cardImg" className="text-right" />
        </div>
        <div className="w-1/2 bg-slate-500 flex flex-col items-left p-5 pr-10">
          <button className="bg-orange-500 text-white font-bold w-12 h-12 rounded-full mb-3">
            2
          </button>
          <h1 className="text-left mb-2">Create Your Profile</h1>
          <p className="text-left mb-3">
            Interaction with staff has far reaching benefits for emerging <br />
            talent – from creating environments they’re comfortable in to <br />
            improving academic performance. Get to know your emerging <br />
            talent and become more than just a friendly face.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 bg-slate-500 flex flex-col items-end p-5 pr-10">
          <button className="bg-orange-500 text-white font-bold w-12 h-12 rounded-full mb-3">
            3
          </button>
          <h1 className="text-right mb-2">Create Your Profile</h1>
          <p className="text-right mb-3">
            Interaction with staff has far reaching benefits for emerging <br />
            talent – from creating environments they’re comfortable in to <br />
            improving academic performance. Get to know your emerging <br />
            talent and become more than just a friendly face.
          </p>
        </div>
        <div className="w-1/2 bg-slate-500 flex md:flex-row items-left  pl-10">
          <img src={cardImg} alt="cardImg" className="text-right" />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
