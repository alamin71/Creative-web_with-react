// import React from "react";
// import { motion } from "framer-motion";
// import cardImg from "../../assets/images/cardIMG1.png";
// import cardImg2 from "../../assets/images/cardIMG2.png";
// import cardImg3 from "../../assets/images/cardIMG3.png";

// const WhoIsItFor = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="bg-orange-700 py-20 text-center">
//         <h1 className="text-6xl">Who Is It for</h1>
//         <p className="text-2xl">Together We Co-Create a Better Future.</p>
//       </div>
//       <div className="grid md:grid-cols-3 gap-4 bg-slate-800 py-1 text-center ml-20 mr-20">
//         <div className="bg-white  p-2 rounded-xl relative">
//           <img src={cardImg} alt="cardImg" className="mx-auto align-middle" />
//           <h1 className="text-orange-700 text-2xl font-bold">UNIVERSITIES</h1>
//           <h5>Enhance Experiential Learning</h5>
//           <br />
//           <p>
//             Get your emerging talent out of their <br /> comfort zone whilst in
//             your safe hands. <br /> Help them get connected.
//           </p>{" "}
//           <br />
//           <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl absolute -bottom-4 left-32">
//             Explore now
//           </button>
//         </div>
//         <div className="bg-white  p-2 rounded-xl relative">
//           <img src={cardImg2} alt="cardImg" className="mx-auto align-middle" />
//           <h1 className="text-orange-700 text-2xl font-bold">
//             EMERGING TALENT
//           </h1>
//           <h5>Connect, Collaborate, Create</h5>
//           <br />
//           <p>
//             Discover the skills of those around you <br /> and collaborate
//             across disciplines to <br /> shape your future.
//           </p>
//           <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl absolute -bottom-4 left-32">
//             Explore now
//           </button>
//         </div>
//         <div className="bg-white p-2 rounded-xl relative">
//           <img src={cardImg3} alt="cardImg" className="mx-auto align-middle" />
//           <h1 className="text-orange-700 text-2xl font-bold">BUSINESS</h1>
//           <p>Empower Emerging Talent</p>
//           <br />
//           <p>
//             Shape the career journey of today's <br /> emerging talent to create
//             the workforce <br /> of the future.
//           </p>
//           <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl absolute -bottom-4 left-32">
//             Explore now
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default WhoIsItFor;

import React from "react";
import { motion } from "framer-motion";
import cardImg from "../../assets/images/cardIMG1.png";
import cardImg2 from "../../assets/images/cardIMG2.png";
import cardImg3 from "../../assets/images/cardIMG3.png";

const WhoIsItFor = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-orange-700 py-20 text-center">
        <h1 className="text-6xl">Who Is It for</h1>
        <p className="text-2xl">Together We Co-Create a Better Future.</p>
      </div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-3 gap-4 bg-slate-800 py-1 text-center ml-20 mr-20">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-xl relative">
          <img src={cardImg} alt="cardImg" className="mx-auto align-middle" />
          <h1 className="text-orange-700 text-2xl font-bold">UNIVERSITIES</h1>
          <h5>Enhance Experiential Learning</h5>
          <p className="mt-4">
            Get your emerging talent out of their comfort zone whilst in your
            safe hands. Help them get connected.
          </p>
          {/* Button for large and small devices */}
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2">
            Explore now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-xl relative">
          <img src={cardImg2} alt="cardImg" className="mx-auto align-middle" />
          <h1 className="text-orange-700 text-2xl font-bold">
            EMERGING TALENT
          </h1>
          <h5>Connect, Collaborate, Create</h5>
          <p className="mt-4">
            Discover the skills of those around you and collaborate across
            disciplines to shape your future.
          </p>
          {/* Button for large and small devices */}
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl absolute left-1/2 transform -translate-x-1/2  lg:left-1/2 lg:-translate-x-1/2">
            Explore now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-xl relative">
          <img src={cardImg3} alt="cardImg" className="mx-auto align-middle" />
          <h1 className="text-orange-700 text-2xl font-bold">BUSINESS</h1>
          <p>Empower Emerging Talent</p>
          <p className="mt-4">
            Shape the career journey of today's emerging talent to create the
            workforce of the future.
          </p>
          {/* Button for large and small devices */}
          <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl absolute left-1/2 transform -translate-x-1/2 lg:translate-y-6 lg:left-1/2 lg:-translate-x-1/2">
            Explore now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WhoIsItFor;
