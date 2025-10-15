// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { FaUserCircle } from "react-icons/fa";
// // import ProfileModal from "./ProfileModal";
// // import ModeToggle from "./mode-toggle";
// // import { BsChatLeftTextFill } from "react-icons/bs";

// // function Navbar() {
// //   const navigate = useNavigate();

// //   return (
// //     <div>
// //       <nav className=" mx-6 md:mx-8 lg:mx-auto lg:w-5xl xl:w-6xl border-2 rounded-full shadow-lg mt-4 ">
// //         <div className="px-4 md:px-6 py-3">
// //           <div className="flex justify-between items-center">
// //             {/* Left Section */}
// //             <div className="flex items-center space-x-3 md:space-x-4">
// //               <button
// //                 className="p-2 hover:bg-gray-700 rounded-md transition-colors"
// //                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //                 aria-label="Toggle sidebar"
// //               >
// //                 {/* <FaBars className=" h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" /> */}
// //               </button>
// //               <h1
// //                 className="text-xl md:text-2xl lg:text-2xl font-bold cursor-pointer hidden md:block"
// //                 onClick={() => navigate("/dashboard")}
// //               >
// //                 PassVault
// //               </h1>
// //             </div>

// //             {/* Right Section */}
// //             <div className="flex items-center space-x-2 md:space-x-4">
// //               {/* <button
// //                 onClick={() => {
// //                   if (isUnlocked) {
// //                     lockVault();
// //                     setSelectedOption((prev) =>
// //                       ["GeneratePassword", "ShowAllPassword"].includes(prev)
// //                         ? "Home"
// //                         : prev
// //                     );
// //                   } else {
// //                     setSelectedOption("ShowAllPassword");
// //                     toast("Please Enter Your Master Password !", {
// //                       icon: "ℹ️",
// //                     });
// //                   }
// //                 }}
// //                 className={`flex items-center space-x-1.5 md:space-x-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-colors ${
// //                   isUnlocked
// //                     ? "bg-red-600 hover:bg-red-700"
// //                     : "bg-blue-600 hover:bg-blue-700"
// //                 }`}
// //               >
// //                 <FaLock className="text-xs md:text-sm" />
// //                 <span className="hidden sm:inline text-xs md:text-sm font-medium">
// //                   {isUnlocked ? "Lock Vault" : "Unlock Vault"}
// //                 </span>
// //               </button> */}

// //               <button
// //                 onClick={() => navigate("/support")}
// //                 title="PassVault Chat Support"
// //                 className="p-2  rounded-md transition-colors"
// //               >
// //                 <BsChatLeftTextFill className=" h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" />
// //               </button>

// //               <button
// //                 className="p-2 rounded-full  transition-colors"
// //                 onClick={() => setIsModalOpen(!isModalOpen)}
// //               >
// //                 <FaUserCircle className=" h-5 w-5 md:h-6 md:w-6" />
// //               </button>
// //               <ModeToggle />
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* <nav className="p-4 flex items-center gap-4">
// //         <h1>PassVault</h1>
// //         <ul className="flex space-x-4 ">
// //           <li>
// //             <Link to="/" className="">
// //               Home
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/about" className="">
// //               About
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/contact" className="">
// //               Contact
// //             </Link>
// //           </li>
// //         </ul>
// //         <ModeToggle />

// //         <button
// //           onClick={() => navigate("/support")}
// //           title="PassVault Chat Support"
// //         >
// //           <BsChatLeftTextFill className="text-2xl h-8 w-8 text-gray-300 hover:cursor-pointer " />
// //         </button>
// //       </nav> */}
// //     </div>
// //   );
// // }

// // export default Navbar;

// // 2nd
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import ProfileModal from "./ProfileModal";
// import ModeToggle from "./mode-toggle";
// import { BsChatLeftTextFill } from "react-icons/bs";

// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <div className="sticky top-0 z-50  bg-transparent">
//       <nav className=" mx-6 md:mx-8 lg:mx-auto lg:w-5xl xl:w-6xl border-2 rounded-full shadow-lg bg-opacity-50 backdrop-blur-sm">
//         <div className="px-4 md:px-6 py-3">
//           <div className="flex justify-between items-center">
//             {/* Left Section */}
//             <div className="flex items-center space-x-3 md:space-x-4">
//               <button
//                 className="p-2 hover:bg-gray-700 rounded-md transition-colors"
//                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                 aria-label="Toggle sidebar"
//               >
//                 {/* <FaBars className=" h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" /> */}
//               </button>
//               <h1
//                 className="text-xl md:text-2xl lg:text-2xl font-bold cursor-pointer hidden md:block"
//                 onClick={() => navigate("/dashboard")}
//               >
//                 PassVault
//               </h1>
//             </div>

//             {/* Right Section */}
//             <div className="flex items-center space-x-2 md:space-x-4">
//               {/* <button
//                 onClick={() => {
//                   if (isUnlocked) {
//                     lockVault();
//                     setSelectedOption((prev) =>
//                       ["GeneratePassword", "ShowAllPassword"].includes(prev)
//                         ? "Home"
//                         : prev
//                     );
//                   } else {
//                     setSelectedOption("ShowAllPassword");
//                     toast("Please Enter Your Master Password !", {
//                       icon: "ℹ️",
//                     });
//                   }
//                 }}
//                 className={`flex items-center space-x-1.5 md:space-x-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-colors ${
//                   isUnlocked
//                     ? "bg-red-600 hover:bg-red-700"
//                     : "bg-blue-600 hover:bg-blue-700"
//                 }`}
//               >
//                 <FaLock className="text-xs md:text-sm" />
//                 <span className="hidden sm:inline text-xs md:text-sm font-medium">
//                   {isUnlocked ? "Lock Vault" : "Unlock Vault"}
//                 </span>
//               </button> */}

//               <button
//                 onClick={() => navigate("/support")}
//                 title="PassVault Chat Support"
//                 className="p-2  rounded-md transition-colors"
//               >
//                 <BsChatLeftTextFill className=" h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" />
//               </button>

//               <button
//                 className="p-2 rounded-full  transition-colors"
//                 onClick={() => setIsModalOpen(!isModalOpen)}
//               >
//                 <FaUserCircle className=" h-5 w-5 md:h-6 md:w-6" />
//               </button>
//               <ModeToggle />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* <nav className="p-4 flex items-center gap-4">
//         <h1>PassVault</h1>
//         <ul className="flex space-x-4 ">
//           <li>
//             <Link to="/" className="">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="">
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <ModeToggle />

//         <button
//           onClick={() => navigate("/support")}
//           title="PassVault Chat Support"
//         >
//           <BsChatLeftTextFill className="text-2xl h-8 w-8 text-gray-300 hover:cursor-pointer " />
//         </button>
//       </nav> */}
//     </div>
//   );
// }

// export default Navbar;

// 3rd
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
import ModeToggle from "./mode-toggle";
import { BsChatLeftTextFill } from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();

  return (
    // <div className="sticky top-0 z-50 backdrop-blur-md  ">
    <header
      className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 fixed top-0 left-0 right-0 transition-all duration-300 ${"bg-transparent"}`}
    >
      <nav className="mx-6 md:mx-8 lg:mx-auto lg:w-5xl xl:w-6xl border-2 rounded-full shadow-lg bg-opacity-50 backdrop-blur-sm">
        <div className="px-4 md:px-6 py-2">
          <div className="flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                className="p-2 hover:bg-gray-700 rounded-md transition-colors"
                // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle sidebar"
              >
                {/* <FaBars className=" h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" /> */}
              </button>
              <h1
                className="text-xl md:text-2xl lg:text-2xl font-bold cursor-pointer hidden md:block"
                onClick={() => navigate("/dashboard")}
              >
                PassVault
              </h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => navigate("/support")}
                title="PassVault Chat Support"
                className="p-2 rounded-md transition-colors"
              >
                <BsChatLeftTextFill className="h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" />
              </button>

              <button
                className="p-2 rounded-full transition-colors"
                // onClick={() => setIsModalOpen(!isModalOpen)}
              >
                <FaUserCircle className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
}

export default Navbar;
