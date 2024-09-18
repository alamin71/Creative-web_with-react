import React from "react";
import logo from "../../assets/images/Logo-new.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT US</NavLink>
      </li>
      <li>
        <NavLink to="/who">WHO IS IT FOR?</NavLink>
      </li>
      <li>
        <NavLink to="/how">HOW IT WORKS</NavLink>
      </li>
      <li className="md:ml-12 text-center">
        <NavLink to="/contact" className="bg-orange-600 text-white rounded-3xl">
          CONTACTS US
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-base-200 text-white pl-20 pr-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 end-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={logo} alt="logo" className="w-64" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-orange-500 px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Header;

//

// import React from "react";
// import logo from "../../assets/images/Logo-new.png";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const links = (
//     <>
//       <li>
//         <NavLink to="/home">HOME</NavLink>
//       </li>
//       <li>
//         <NavLink to="/about">ABOUT US</NavLink>
//       </li>
//       <li>
//         <NavLink to="/who">WHO IS IT FOR?</NavLink>
//       </li>
//       <li>
//         <NavLink to="/how">HOW IT WORKS</NavLink>
//       </li>
//       <li className="md:ml-12 text-center">
//         <NavLink to="/contact" className="bg-orange-600 text-white rounded-3xl">
//           CONTACT US
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <img src={logo} alt="logo" className="w-64" />
//       </div>

//       {/* Center Navigation Links */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal text-orange-500 px-1">{links}</ul>
//       </div>

//       {/* Dropdown icon on the right */}
//       <div className="navbar lg:hidden">
//         <div className="dropdown">
//           {/* Nav icon on the right */}
//           <div tabIndex={0} role="button" className="btn btn-ghost ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>

//           {/* Menu items that open from the left side */}
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow fixed top-0 left-0"
//           >
//             {links}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
