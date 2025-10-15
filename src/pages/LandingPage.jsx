// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import GeneratePassword from "../components/GeneratePassword";
// // import SignUpModal from "../components/SignUpModal";
// // import {
// //   FaQuestionCircle,
// //   FaCircle,
// //   FaChevronDown,
// //   FaChevronUp,
// //   FaTwitter,
// //   FaGithub,
// //   FaLinkedin,
// //   FaEnvelope,
// //   FaKey,
// //   FaLock,
// //   FaShieldAlt,
// //   FaLockOpen,
// //   FaExclamationCircle,
// //   FaPlus,
// //   FaCode,
// //   FaArrowDown,
// //   FaUserShield,
// //   FaServer,
// //   FaExclamationTriangle,
// //   FaCheck,
// //   FaFingerprint,
// //   FaArrowRight,
// // } from "react-icons/fa";

// // export default function LandingPage() {
// //   const [activeFaq, setActiveFaq] = useState(null);
// //   const [animationStep, setAnimationStep] = useState(0);

// //   // Cycle through animation steps
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setAnimationStep((prev) => (prev + 1) % 4);
// //     }, 3000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   const toggleFaq = (index) => {
// //     setActiveFaq(activeFaq === index ? null : index);
// //   };

// //   // FAQ data
// //   const faqData = [
// //     {
// //       question: "Is PassVault really secure?",
// //       answer:
// //         "Yes, PassVault uses AES-256 encryption, which is virtually unbreakable with current technology. Your master password never leaves your device, and all encryption/decryption happens locally.",
// //     },
// //     {
// //       question: "What happens if I forget my master password?",
// //       answer:
// //         "Since we never store your master password and have no way to decrypt your data without it, it's crucial that you remember it. Consider creating a secure backup of your master password in a safe place.",
// //     },
// //     {
// //       question: "Can I use PassVault on multiple devices?",
// //       answer:
// //         "Yes, you can access your PassVault from any device. Your encrypted data syncs securely across devices, but you'll always need your master password to decrypt it.",
// //     },
// //     {
// //       question: "How does the two-factor authentication work?",
// //       answer:
// //         "Two-factor authentication adds an extra layer of security by requiring something you know (your master password) and something you have (like your phone). Even if someone knows your master password, they can't access your vault without the second factor.",
// //     },
// //     {
// //       question: "Is PassVault open source?",
// //       answer:
// //         "Yes! We believe in transparency and community-driven security. Our code is available for review on GitHub, which means security experts worldwide can verify our security claims and help improve our platform.",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center p-6">
// //       <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-16">
// //         {/* Left Side Content */}
// //         <div className="w-full md:w-2/3 text-left">
// //           <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
// //             Welcome to PassVault
// //           </h1>
// //           <p className="text-lg  mb-6 animate-fade-in">
// //             Securely store, manage, and generate passwords with ease. Your
// //             digital security starts here.
// //           </p>

// //           {/* Features Section */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
// //             {/* Feature 1 */}
// //             <div className="hover:cursor-pointer border-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
// //               <h2 className="text-2xl font-bold mb-2">🔒 Secure Storage</h2>
// //               <p className="text-gray-400">
// //                 Your passwords are encrypted with military-grade security.
// //               </p>
// //             </div>

// //             {/* Feature 2 */}
// //             <div className="hover:cursor-pointer border-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
// //               <h2 className="text-2xl font-bold mb-2">⚡ Easy Access</h2>
// //               <p className="text-gray-400">
// //                 Access your passwords anytime, anywhere with our intuitive
// //                 dashboard.
// //               </p>
// //             </div>

// //             {/* Feature 3 */}
// //             <div className="hover:cursor-pointer border-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
// //               <h2 className="text-2xl font-bold mb-2">
// //                 🛡️ Two-Factor Authentication
// //               </h2>
// //               <p className="text-gray-400">
// //                 Enhance your security with built-in 2FA support.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Call to Action */}
// //           <div className="mt-8">

// //             <button className="hover:cursor-pointer bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg">
// //               <Link to="/signup" className="inline-flex items-center gap-2" >Get Started <FaArrowRight /></Link>
// //             </button>

// //           </div>
// //         </div>

// //         {/* Right Side - Generate Password */}
// //         <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
// //           <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-96 md:max-w-xs lg:max-w-sm">
// //             <GeneratePassword />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Master Password Security Flow Visualization */}
// //       <div className=" border-2 rounded-xl p-4 sm:p-6 mb-8">
// //         <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
// //           <FaKey
// //             className={`text-yellow-400 mr-2 sm:mr-3 ${
// //               animationStep === 0 ? "animate-pulse" : ""
// //             }`}
// //           />
// //           Master Password Security
// //         </h2>

// //         <div className="flex flex-col items-center">
// //           <div className="w-full">
// //             <div className="relative mb-4 sm:mb-6">
// //               <h3 className="text-center text-base sm:text-lg font-semibold mb-3 sm:mb-4">
// //                 How Your Master Password Stays Secure
// //               </h3>

// //               {/* Master password flow visualization */}
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8">
// //                 {/* Left side - what happens on your device */}
// //                 <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-blue-900">
// //                   <h4 className="text-center text-blue-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
// //                     On Your Device
// //                   </h4>

// //                   <div className="space-y-4 sm:space-y-6">
// //                     {/* Step 1: Enter Master Password */}
// //                     <div
// //                       className={`p-2 sm:p-3 rounded-lg ${
// //                         animationStep === 0 ? "bg-blue-900 bg-opacity-20" : ""
// //                       } transition-colors duration-300`}
// //                     >
// //                       <div className="flex items-center mb-2">
// //                         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-900 flex items-center justify-center mr-2 sm:mr-3">
// //                           <span className="text-blue-200 font-bold text-xs sm:text-sm">
// //                             1
// //                           </span>
// //                         </div>
// //                         <h5 className="font-semibold text-sm sm:text-base">
// //                           Enter Master Password
// //                         </h5>
// //                       </div>

// //                       <div className="pl-8 sm:pl-11">
// //                         <div className="bg-gray-900 p-2 rounded border border-gray-700 flex flex-wrap">
// //                           <span className="font-mono text-gray-400 text-xs sm:text-sm">
// //                             Password:{" "}
// //                           </span>
// //                           <span className="font-mono text-blue-300 ml-1 sm:ml-2 text-xs sm:text-sm">
// //                             {animationStep === 0
// //                               ? "SuperSecret123!"
// //                               : "•••••••••••••"}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Step 2: Generate Random Salt */}
// //                     <div
// //                       className={`p-2 sm:p-3 rounded-lg ${
// //                         animationStep === 1 ? "bg-blue-900 bg-opacity-20" : ""
// //                       } transition-colors duration-300`}
// //                     >
// //                       <div className="flex items-center mb-2">
// //                         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-900 flex items-center justify-center mr-2 sm:mr-3">
// //                           <span className="text-blue-200 font-bold text-xs sm:text-sm">
// //                             2
// //                           </span>
// //                         </div>
// //                         <h5 className="font-semibold text-sm sm:text-base">
// //                           Generate Random Salt
// //                         </h5>
// //                       </div>

// //                       <div className="pl-8 sm:pl-11">
// //                         <div className="bg-gray-900 p-2 rounded border border-gray-700">
// //                           <span className="font-mono text-gray-400 text-xs sm:text-sm">
// //                             Salt:{" "}
// //                           </span>
// //                           <span
// //                             className={`font-mono text-purple-300 text-xs sm:text-sm truncate block ${
// //                               animationStep === 1 ? "animate-pulse" : ""
// //                             }`}
// //                           >
// //                             a7f9ce56b3d2...
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Step 3: Key Derivation */}
// //                     <div
// //                       className={`p-2 sm:p-3 rounded-lg ${
// //                         animationStep === 2 ? "bg-blue-900 bg-opacity-20" : ""
// //                       } transition-colors duration-300`}
// //                     >
// //                       <div className="flex items-center mb-2">
// //                         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-900 flex items-center justify-center mr-2 sm:mr-3">
// //                           <span className="text-blue-200 font-bold text-xs sm:text-sm">
// //                             3
// //                           </span>
// //                         </div>
// //                         <h5 className="font-semibold text-sm sm:text-base">
// //                           Derive Key & Verification Hash
// //                         </h5>
// //                       </div>

// //                       <div className="pl-8 sm:pl-11 relative">
// //                         {/* Inputs: Password + Salt - Made responsive */}
// //                         <div className="flex flex-col sm:flex-row items-center">
// //                           <div className="w-full sm:w-1/2 bg-gray-900 p-2 rounded-t sm:rounded-l sm:rounded-tr-none border border-gray-700 mb-2 sm:mb-0">
// //                             <div className="flex flex-col">
// //                               <span className="font-mono text-gray-400 text-xs">
// //                                 Password
// //                               </span>
// //                               <span className="font-mono text-blue-300 text-xs truncate">
// //                                 SuperSecret123!
// //                               </span>
// //                             </div>
// //                           </div>
// //                           <div className="flex items-center justify-center w-8 mb-2 sm:mb-0">
// //                             <FaPlus className="text-gray-500" />
// //                           </div>
// //                           <div className="w-full sm:w-1/2 bg-gray-900 p-2 rounded-b sm:rounded-r sm:rounded-bl-none border border-gray-700">
// //                             <div className="flex flex-col">
// //                               <span className="font-mono text-gray-400 text-xs">
// //                                 Salt
// //                               </span>
// //                               <span className="font-mono text-purple-300 text-xs truncate">
// //                                 a7f9ce56b3d2...
// //                               </span>
// //                             </div>
// //                           </div>
// //                         </div>

// //                         {/* PBKDF2 Process */}
// //                         <div className="my-3 text-center p-2 bg-blue-800 bg-opacity-20 rounded-lg border border-blue-900">
// //                           <div className="font-mono text-xs text-blue-300 break-words">
// //                             PBKDF2(password, salt, 100,000)
// //                           </div>
// //                           <div
// //                             className={`${
// //                               animationStep === 2 ? "animate-pulse" : ""
// //                             }`}
// //                           >
// //                             ⚙️ ⚙️ ⚙️
// //                           </div>
// //                         </div>

// //                         {/* Dual Outputs with Animation */}
// //                         <div
// //                           className={`flex justify-center text-center mt-1 ${
// //                             animationStep === 2
// //                               ? "text-yellow-500 animate-bounce"
// //                               : "text-gray-500"
// //                           }`}
// //                         >
// //                           <FaArrowDown />
// //                         </div>

// //                         {/* Two outputs - Made responsive */}
// //                         <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                           {/* Encryption Key - Stays on Device */}
// //                           <div className="bg-gray-900 p-2 rounded border border-green-700 relative">
// //                             <div className="flex justify-between">
// //                               <span className="font-mono text-gray-400 text-xs">
// //                                 Master Key:
// //                               </span>
// //                               <span className="text-xs text-green-400">
// //                                 Stays local
// //                               </span>
// //                             </div>
// //                             <span
// //                               className={`font-mono text-green-300 text-xs truncate block ${
// //                                 animationStep === 2 ? "animate-pulse" : ""
// //                               }`}
// //                             >
// //                               e8f2d6b9c7a3...
// //                             </span>
// //                             {animationStep === 2 && (
// //                               <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-xs">
// //                                 🔒
// //                               </div>
// //                             )}
// //                           </div>

// //                           {/* Verification Hash - Will be Stored */}
// //                           <div className="bg-gray-900 p-2 rounded border border-yellow-700 relative">
// //                             <div className="flex justify-between">
// //                               <span className="font-mono text-gray-400 text-xs">
// //                                 Verify Hash:
// //                               </span>
// //                               <span className="text-xs text-yellow-400">
// //                                 To DB
// //                               </span>
// //                             </div>
// //                             <span
// //                               className={`font-mono text-yellow-300 text-xs truncate block ${
// //                                 animationStep === 2 ? "animate-pulse" : ""
// //                               }`}
// //                             >
// //                               f29a4b7d6e3c...
// //                             </span>
// //                             {animationStep === 2 && (
// //                               <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-xs">
// //                                 📤
// //                               </div>
// //                             )}
// //                           </div>
// //                         </div>

// //                         {/* Animation showing verification hash traveling to database */}
// //                         {animationStep === 2 && (
// //                           <div className="hidden sm:block absolute w-4 h-4 bg-yellow-500 rounded-full right-0 top-1/2 transform -translate-y-1/2 animate-ping opacity-75"></div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Right side - what's stored in database */}
// //                 <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-purple-900 mt-4 lg:mt-0">
// //                   <h4 className="text-center text-purple-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
// //                     In Database
// //                   </h4>

// //                   <div className="space-y-4 sm:space-y-6 relative">
// //                     {/* Database storage visualization */}
// //                     <div
// //                       className={`p-3 sm:p-4 bg-gray-900 rounded-lg border ${
// //                         animationStep === 3
// //                           ? "border-green-700"
// //                           : "border-gray-700"
// //                       } transition-colors duration-300`}
// //                     >
// //                       <h5 className="font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">
// //                         User Record
// //                       </h5>

// //                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
// //                         <div className="col-span-1 sm:col-span-2 bg-gray-800 p-2 rounded">
// //                           <span className="font-mono text-gray-400 text-xs">
// //                             user_id:{" "}
// //                           </span>
// //                           <span className="font-mono text-blue-300 text-xs">
// //                             u_839472
// //                           </span>
// //                         </div>

// //                         <div className="bg-gray-800 p-2 rounded">
// //                           <span className="font-mono text-gray-400 text-xs">
// //                             email:{" "}
// //                           </span>
// //                           <span className="font-mono text-blue-300 text-xs truncate block">
// //                             user@example.com
// //                           </span>
// //                         </div>

// //                         <div className="bg-gray-800 p-2 rounded">
// //                           <span className="font-mono text-gray-400 text-xs">
// //                             created_at:{" "}
// //                           </span>
// //                           <span className="font-mono text-blue-300 text-xs">
// //                             2023-04-15
// //                           </span>
// //                         </div>

// //                         <div
// //                           className={`col-span-1 sm:col-span-2 bg-gray-800 p-2 rounded ${
// //                             animationStep === 3 ? "border border-green-600" : ""
// //                           } transition-colors duration-300`}
// //                         >
// //                           <span className="font-mono text-gray-400 text-xs">
// //                             salt:{" "}
// //                           </span>
// //                           <span
// //                             className={`font-mono text-purple-300 text-xs truncate block ${
// //                               animationStep === 3 ? "animate-pulse" : ""
// //                             }`}
// //                           >
// //                             a7f9ce56b3d2...
// //                           </span>
// //                         </div>

// //                         <div
// //                           className={`col-span-1 sm:col-span-2 bg-gray-800 p-2 rounded ${
// //                             animationStep === 3 ? "border border-green-600" : ""
// //                           } transition-colors duration-300`}
// //                         >
// //                           <span className="font-mono text-gray-400 text-xs">
// //                             verification_hash:{" "}
// //                           </span>
// //                           <span
// //                             className={`font-mono text-green-300 text-xs truncate block ${
// //                               animationStep === 3 ? "animate-pulse" : ""
// //                             }`}
// //                           >
// //                             f29a4b7d6e3c...
// //                           </span>
// //                         </div>

// //                         {/* What's NOT stored - Master Password */}
// //                         <div className="col-span-1 sm:col-span-2 mt-2 flex items-center p-2 bg-red-900 bg-opacity-20 rounded-lg">
// //                           <FaExclamationCircle className="text-red-500 mr-2 flex-shrink-0" />
// //                           <span className="text-red-300 text-xs sm:text-sm font-medium">
// //                             Master password is <strong>never</strong> stored!
// //                           </span>
// //                         </div>

// //                         {/* What's NOT stored - Master Key */}
// //                         <div className="col-span-1 sm:col-span-2 flex items-center p-2 bg-red-900 bg-opacity-20 rounded-lg">
// //                           <FaExclamationCircle className="text-red-500 mr-2 flex-shrink-0" />
// //                           <span className="text-red-300 text-xs sm:text-sm font-medium">
// //                             Encryption key is <strong>never</strong> sent to
// //                             server!
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Explanation of verification process */}
// //                     <div
// //                       className={`p-2 sm:p-3 bg-blue-900 bg-opacity-20 rounded-lg border border-blue-700 ${
// //                         animationStep === 3 ? "animate-pulse" : ""
// //                       }`}
// //                     >
// //                       <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
// //                         How We Verify Your Password
// //                       </h5>
// //                       <ol className="list-decimal pl-4 sm:pl-5 text-xs sm:text-sm space-y-0.5 sm:space-y-1">
// //                         <li>When you enter your master password again</li>
// //                         <li>We use the stored salt to derive the same key</li>
// //                         <li>We try to decrypt the verification data</li>
// //                         <li>If decryption works, your password is correct!</li>
// //                       </ol>
// //                     </div>

// //                     {/* Explanation of security benefit */}
// //                     <div
// //                       className={`p-2 sm:p-3 bg-gray-800 border-l-4 ${
// //                         animationStep === 3
// //                           ? "border-green-600"
// //                           : "border-gray-700"
// //                       } transition-colors duration-300`}
// //                     >
// //                       <p className="text-xs sm:text-sm">
// //                         Even if the database is compromised, attackers only get
// //                         the salt and hash - they still can't decrypt your
// //                         passwords without knowing your master password.
// //                       </p>
// //                     </div>

// //                     {/* Animated security shield icon during final step */}
// //                     {animationStep === 3 && (
// //                       <div className="absolute -top-4 -right-4 bg-green-900 bg-opacity-30 p-2 rounded-full animate-pulse hidden sm:block">
// //                         <FaShieldAlt className="text-green-500 text-2xl" />
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Animation controls/indicators */}
// //               <div className="mt-4 sm:mt-6 flex justify-center">
// //                 <div className="flex flex-wrap justify-center space-x-1 sm:space-x-3">
// //                   {[0, 1, 2, 3].map((step) => (
// //                     <div
// //                       key={step}
// //                       className={`px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium mb-1 ${
// //                         step === animationStep
// //                           ? "bg-blue-600 text-white"
// //                           : "bg-gray-700 text-gray-400"
// //                       } transition-all duration-300`}
// //                     >
// //                       {step === 0 && "Enter Password"}
// //                       {step === 1 && "Generate Salt"}
// //                       {step === 2 && "Derive Key"}
// //                       {step === 3 && "Store Securely"}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Technical explanation */}
// //             <div className="bg-gray-800 p-3 sm:p-4 rounded-lg mt-4">
// //               <h4 className="font-semibold mb-2 flex items-center text-sm sm:text-base">
// //                 <FaCode className="text-blue-400 mr-2" />
// //                 Technical Details
// //               </h4>
// //               <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-gray-300">
// //                 <li>
// //                   We use <span className="text-blue-300 font-mono">PBKDF2</span>{" "}
// //                   with{" "}
// //                   <span className="text-blue-300 font-mono">
// //                     100,000 iterations
// //                   </span>
// //                 </li>
// //                 <li>
// //                   <span className="text-yellow-300 font-mono">
// //                     Verification hash
// //                   </span>{" "}
// //                   confirms your password
// //                 </li>
// //                 <li>
// //                   Your vault uses{" "}
// //                   <span className="text-green-300 font-mono">AES-256-GCM</span>{" "}
// //                   to encryption for all passwords
// //                 </li>
// //                 <li>
// //                   Each password has its own{" "}
// //                   <span className="text-blue-300 font-mono">
// //                     initialization vector(IV)
// //                   </span>
// //                 </li>
// //                 <li>
// //                   The encrypted verification data contains a known string that
// //                   can only be decrypted with the correct key
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Improved FAQ Section */}
// //       <div className="bg-gray-900 rounded-xl p-6 mb-8 md:w-2/3 mt-16 w-full max-w-6xl">
// //         <h2 className="text-2xl font-bold mb-8 flex items-center justify-center">
// //           <FaQuestionCircle className="text-blue-400 mr-3" />
// //           Frequently Asked Questions
// //         </h2>

// //         <div className="space-y-4">
// //           {faqData.map((faq, index) => (
// //             <div
// //               key={index}
// //               className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 shadow-md ${
// //                 activeFaq === index
// //                   ? "border-l-4 border-blue-500"
// //                   : "hover:bg-gray-750"
// //               }`}
// //             >
// //               {/* Question (clickable header) */}
// //               <div
// //                 className="p-4 cursor-pointer flex justify-between items-center"
// //                 onClick={() => toggleFaq(index)}
// //               >
// //                 <h3 className="text-lg font-semibold flex items-center">
// //                   {activeFaq === index ? (
// //                     <FaLockOpen className="mr-3 text-blue-500 transition-colors duration-300" />
// //                   ) : (
// //                     <FaLock className="mr-3 text-gray-400 transition-colors duration-300" />
// //                   )}
// //                   {faq.question}
// //                 </h3>
// //                 <div
// //                   className={`transition-transform duration-300 ${
// //                     activeFaq === index ? "transform rotate-180" : ""
// //                   }`}
// //                 >
// //                   <FaChevronDown
// //                     className={`${
// //                       activeFaq === index ? "text-blue-500" : "text-gray-400"
// //                     }`}
// //                   />
// //                 </div>
// //               </div>

// //               {/* Answer (collapsible content) */}
// //               <div
// //                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
// //                   activeFaq === index ? "max-h-40" : "max-h-0"
// //                 }`}
// //               >
// //                 <div className="p-4 pt-0 text-gray-300 bg-gray-800 border-t border-gray-700">
// //                   {faq.answer}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* New Footer Section */}
// //       <footer className="w-full bg-gray-800 mt-auto pt-12 pb-6 border-t border-gray-700">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
// //             {/* About */}
// //             <div>
// //               <h3 className="text-xl font-bold mb-4 text-gray-100">
// //                 PassVault
// //               </h3>
// //               <p className="text-gray-400 mb-4">
// //                 Secure password management with end-to-end encryption. Keep your
// //                 digital life protected with military-grade security.
// //               </p>
// //               <div className="flex space-x-4">
// //                 <a
// //                   href="#"
// //                   className="text-gray-400 hover:text-blue-400 transition-colors"
// //                 >
// //                   <FaTwitter size={20} />
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-400 hover:text-purple-400 transition-colors"
// //                 >
// //                   <FaGithub size={20} />
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-400 hover:text-blue-500 transition-colors"
// //                 >
// //                   <FaLinkedin size={20} />
// //                 </a>
// //                 <a
// //                   href="#"
// //                   className="text-gray-400 hover:text-red-400 transition-colors"
// //                 >
// //                   <FaEnvelope size={20} />
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Quick Links */}
// //             <div>
// //               <h3 className="text-xl font-bold mb-4 text-gray-100">
// //                 Quick Links
// //               </h3>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li>
// //                   <Link
// //                     to="/features"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Features
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/pricing"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Pricing
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/blog"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Blog
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/about"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     About Us
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/contact"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Contact
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>

// //             {/* Security Links */}
// //             <div>
// //               <h3 className="text-xl font-bold mb-4 text-gray-100">Security</h3>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li>
// //                   <Link
// //                     to="/security"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Security Practices
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/privacy"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Privacy Policy
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/terms"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Terms of Service
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/bug-bounty"
// //                     className="hover:text-blue-400 transition-colors"
// //                   >
// //                     Bug Bounty Program
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="#"
// //                     className="flex items-center hover:text-blue-400 transition-colors"
// //                   >
// //                     <FaShieldAlt className="mr-2" /> Security Audit Report
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>

// //           {/* Copyright and bottom links */}
// //           <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
// //             <div className="text-gray-500 text-sm mb-4 md:mb-0">
// //               &copy; {new Date().getFullYear()} PassVault. All rights reserved.
// //             </div>
// //             <div className="flex space-x-6">
// //               <Link
// //                 to="/privacy"
// //                 className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
// //               >
// //                 Privacy
// //               </Link>
// //               <Link
// //                 to="/terms"
// //                 className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
// //               >
// //                 Terms
// //               </Link>
// //               <Link
// //                 to="/sitemap"
// //                 className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
// //               >
// //                 Sitemap
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>

// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import GeneratePassword from "../components/GeneratePassword";
// import SignUpModal from "../components/SignUpModal";
// import {
//   FaQuestionCircle,
//   FaCircle,
//   FaChevronDown,
//   FaChevronUp,
//   FaTwitter,
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaKey,
//   FaLock,
//   FaShieldAlt,
//   FaLockOpen,
//   FaExclamationCircle,
//   FaPlus,
//   FaCode,
//   FaArrowDown,
//   FaUserShield,
//   FaServer,
//   FaExclamationTriangle,
//   FaCheck,
//   FaFingerprint,
//   FaArrowRight,
// } from "react-icons/fa";
// // ...existing code...

// export default function LandingPage() {
//   const [activeFaq, setActiveFaq] = useState(null);
//   const [animationStep, setAnimationStep] = useState(0);

//   // Cycle through animation steps
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setAnimationStep((prev) => (prev + 1) % 4);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   // FAQ data
//   const faqData = [
//     {
//       question: "Is PassVault really secure?",
//       answer:
//         "Yes, PassVault uses AES-256 encryption, which is virtually unbreakable with current technology. Your master password never leaves your device, and all encryption/decryption happens locally.",
//     },
//     {
//       question: "What happens if I forget my master password?",
//       answer:
//         "Since we never store your master password and have no way to decrypt your data without it, it's crucial that you remember it. Consider creating a secure backup of your master password in a safe place.",
//     },
//     {
//       question: "Can I use PassVault on multiple devices?",
//       answer:
//         "Yes, you can access your PassVault from any device. Your encrypted data syncs securely across devices, but you'll always need your master password to decrypt it.",
//     },
//     {
//       question: "How does the two-factor authentication work?",
//       answer:
//         "Two-factor authentication adds an extra layer of security by requiring something you know (your master password) and something you have (like your phone). Even if someone knows your master password, they can't access your vault without the second factor.",
//     },
//     {
//       question: "Is PassVault open source?",
//       answer:
//         "Yes! We believe in transparency and community-driven security. Our code is available for review on GitHub, which means security experts worldwide can verify our security claims and help improve our platform.",
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-gray-800">
//       <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-16">
//         {/* Left Side Content */}
//         <div className="w-full md:w-2/3 text-left">
//           <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
//             Welcome to PassVault
//           </h1>
//           <p className="text-lg  mb-6 animate-fade-in">
//             Securely store, manage, and generate passwords with ease. Your
//             digital security starts here.
//           </p>

//           {/* Features Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
//             {/* Feature 1 */}
//             <div className="hover:cursor-pointer border-2 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105">
//               <h2 className="text-2xl font-bold mb-2">🔒 Secure Storage</h2>
//               <p className="text-gray-600">
//                 Your passwords are encrypted with military-grade security.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="hover:cursor-pointer border-2 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105">
//               <h2 className="text-2xl font-bold mb-2">⚡ Easy Access</h2>
//               <p className="text-gray-600">
//                 Access your passwords anytime, anywhere with our intuitive
//                 dashboard.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="hover:cursor-pointer border-2 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105">
//               <h2 className="text-2xl font-bold mb-2">
//                 🛡️ Two-Factor Authentication
//               </h2>
//               <p className="text-gray-600">
//                 Enhance your security with built-in 2FA support.
//               </p>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="mt-8">

//             <button className="hover:cursor-pointer bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg">
//               <Link to="/signup" className="inline-flex items-center gap-2" >Get Started <FaArrowRight /></Link>
//             </button>

//           </div>
//         </div>

//         {/* Right Side - Generate Password */}
//         <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
//           <div className=" p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-96 md:max-w-xs lg:max-w-sm">
//             <GeneratePassword />
//           </div>
//         </div>
//       </div>

//       {/* Master Password Security Flow Visualization */}
//       <div className=" border-2 rounded-xl p-4 sm:p-6 mb-8 bg-white shadow-sm border-gray-200">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
//           <FaKey
//             className={`text-yellow-600 mr-2 sm:mr-3 ${
//               animationStep === 0 ? "animate-pulse" : ""
//             }`}
//           />
//           Master Password Security
//         </h2>

//         <div className="flex flex-col items-center">
//           <div className="w-full">
//             <div className="relative mb-4 sm:mb-6">
//               <h3 className="text-center text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700">
//                 How Your Master Password Stays Secure
//               </h3>

//               {/* Master password flow visualization */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8">
//                 {/* Left side - what happens on your device */}
//                 <div className="bg-white p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <h4 className="text-center text-blue-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
//                     On Your Device
//                   </h4>

//                   <div className="space-y-4 sm:space-y-6">
//                     {/* Step 1: Enter Master Password */}
//                     <div
//                       className={`p-2 sm:p-3 rounded-lg ${
//                         animationStep === 0 ? "bg-blue-50" : ""
//                       } transition-colors duration-300`}
//                     >
//                       <div className="flex items-center mb-2">
//                         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3">
//                           <span className="text-blue-700 font-bold text-xs sm:text-sm">
//                             1
//                           </span>
//                         </div>
//                         <h5 className="font-semibold text-sm sm:text-base text-gray-700">
//                           Enter Master Password
//                         </h5>
//                       </div>

//                       <div className="pl-8 sm:pl-11">
//                         <div className="bg-gray-50 p-2 rounded border border-gray-200 flex flex-wrap">
//                           <span className="font-mono text-gray-500 text-xs sm:text-sm">
//                             Password:{" "}
//                           </span>
//                           <span className="font-mono text-blue-700 ml-1 sm:ml-2 text-xs sm:text-sm">
//                             {animationStep === 0
//                               ? "SuperSecret123!"
//                               : "•••••••••••••"}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Step 2: Generate Random Salt */}
//                     <div
//                       className={`p-2 sm:p-3 rounded-lg ${
//                         animationStep === 1 ? "bg-blue-50" : ""
//                       } transition-colors duration-300`}
//                     >
//                       <div className="flex items-center mb-2">
//                         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3">
//                           <span className="text-blue-700 font-bold text-xs sm:text-sm">
//                             2
//                           </span>
//                         </div>
//                         <h5 className="font-semibold text-sm sm:text-base text-gray-700">
//                           Generate Random Salt
//                         </h5>
//                       </div>

//                       <div className="pl-8 sm:pl-11">
//                         <div className="bg-gray-50 p-2 rounded border border-gray-200">
//                           <span className="font-mono text-gray-500 text-xs sm:text-sm">
//                             Salt:{" "}
//                           </span>
//                           <span
//                             className={`font-mono text-purple-700 text-xs sm:text-sm truncate block ${
//                               animationStep === 1 ? "animate-pulse" : ""
//                             }`}
//                           >
//                             a7f9ce56b3d2...
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Step 3: Key Derivation */}
//                     <div
//                       className={`p-2 sm:p-3 rounded-lg ${
//                         animationStep === 2 ? "bg-blue-50" : ""
//                       } transition-colors duration-300`}
//                     >
//                       <div className="flex items-center mb-2">
//                         <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3">
//                           <span className="text-blue-700 font-bold text-xs sm:text-sm">
//                             3
//                           </span>
//                         </div>
//                         <h5 className="font-semibold text-sm sm:text-base text-gray-700">
//                           Derive Key & Verification Hash
//                         </h5>
//                       </div>

//                       <div className="pl-8 sm:pl-11 relative">
//                         {/* Inputs: Password + Salt - Made responsive */}
//                         <div className="flex flex-col sm:flex-row items-center">
//                           <div className="w-full sm:w-1/2 bg-gray-50 p-2 rounded-t sm:rounded-l sm:rounded-tr-none border border-gray-200 mb-2 sm:mb-0">
//                             <div className="flex flex-col">
//                               <span className="font-mono text-gray-500 text-xs">
//                                 Password
//                               </span>
//                               <span className="font-mono text-blue-700 text-xs truncate">
//                                 SuperSecret123!
//                               </span>
//                             </div>
//                           </div>
//                           <div className="flex items-center justify-center w-8 mb-2 sm:mb-0">
//                             <FaPlus className="text-gray-400" />
//                           </div>
//                           <div className="w-full sm:w-1/2 bg-gray-50 p-2 rounded-b sm:rounded-r sm:rounded-bl-none border border-gray-200">
//                             <div className="flex flex-col">
//                               <span className="font-mono text-gray-500 text-xs">
//                                 Salt
//                               </span>
//                               <span className="font-mono text-purple-700 text-xs truncate">
//                                 a7f9ce56b3d2...
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         {/* PBKDF2 Process */}
//                         <div className="my-3 text-center p-2 bg-blue-50 rounded-lg border border-blue-100">
//                           <div className="font-mono text-xs text-blue-700 break-words">
//                             PBKDF2(password, salt, 100,000)
//                           </div>
//                           <div
//                             className={`${
//                               animationStep === 2 ? "animate-pulse" : ""
//                             }`}
//                           >
//                             ⚙️ ⚙️ ⚙️
//                           </div>
//                         </div>

//                         {/* Dual Outputs with Animation */}
//                         <div
//                           className={`flex justify-center text-center mt-1 ${
//                             animationStep === 2
//                               ? "text-yellow-600 animate-bounce"
//                               : "text-gray-400"
//                           }`}
//                         >
//                           <FaArrowDown />
//                         </div>

//                         {/* Two outputs - Made responsive */}
//                         <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                           {/* Encryption Key - Stays on Device */}
//                           <div className="bg-gray-50 p-2 rounded border border-green-100 relative">
//                             <div className="flex justify-between">
//                               <span className="font-mono text-gray-500 text-xs">
//                                 Master Key:
//                               </span>
//                               <span className="text-xs text-green-600">
//                                 Stays local
//                               </span>
//                             </div>
//                             <span
//                               className={`font-mono text-green-700 text-xs truncate block ${
//                                 animationStep === 2 ? "animate-pulse" : ""
//                               }`}
//                             >
//                               e8f2d6b9c7a3...
//                             </span>
//                             {animationStep === 2 && (
//                               <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-xs">
//                                 🔒
//                               </div>
//                             )}
//                           </div>

//                           {/* Verification Hash - Will be Stored */}
//                           <div className="bg-gray-50 p-2 rounded border border-yellow-100 relative">
//                             <div className="flex justify-between">
//                               <span className="font-mono text-gray-500 text-xs">
//                                 Verify Hash:
//                               </span>
//                               <span className="text-xs text-yellow-600">
//                                 To DB
//                               </span>
//                             </div>
//                             <span
//                               className={`font-mono text-yellow-600 text-xs truncate block ${
//                                 animationStep === 2 ? "animate-pulse" : ""
//                               }`}
//                             >
//                               f29a4b7d6e3c...
//                             </span>
//                             {animationStep === 2 && (
//                               <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-xs">
//                                 📤
//                               </div>
//                             )}
//                           </div>
//                         </div>

//                         {/* Animation showing verification hash traveling to database */}
//                         {animationStep === 2 && (
//                           <div className="hidden sm:block absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-1/2 transform -translate-y-1/2 animate-ping opacity-75"></div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right side - what's stored in database */}
//                 <div className="bg-white p-3 sm:p-4 rounded-lg border border-purple-100 mt-4 lg:mt-0">
//                   <h4 className="text-center text-purple-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
//                     In Database
//                   </h4>

//                   <div className="space-y-4 sm:space-y-6 relative">
//                     {/* Database storage visualization */}
//                     <div
//                       className={`p-3 sm:p-4 bg-gray-50 rounded-lg border ${
//                         animationStep === 3
//                           ? "border-green-200"
//                           : "border-gray-200"
//                       } transition-colors duration-300`}
//                     >
//                       <h5 className="font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base text-gray-700">
//                         User Record
//                       </h5>

//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
//                         <div className="col-span-1 sm:col-span-2 bg-white p-2 rounded">
//                           <span className="font-mono text-gray-500 text-xs">
//                             user_id:{" "}
//                           </span>
//                           <span className="font-mono text-blue-700 text-xs">
//                             u_839472
//                           </span>
//                         </div>

//                         <div className="bg-white p-2 rounded">
//                           <span className="font-mono text-gray-500 text-xs">
//                             email:{" "}
//                           </span>
//                           <span className="font-mono text-blue-700 text-xs truncate block">
//                             user@example.com
//                           </span>
//                         </div>

//                         <div className="bg-white p-2 rounded">
//                           <span className="font-mono text-gray-500 text-xs">
//                             created_at:{" "}
//                           </span>
//                           <span className="font-mono text-blue-700 text-xs">
//                             2023-04-15
//                           </span>
//                         </div>

//                         <div
//                           className={`col-span-1 sm:col-span-2 bg-white p-2 rounded ${
//                             animationStep === 3 ? "border border-green-200" : ""
//                           } transition-colors duration-300`}
//                         >
//                           <span className="font-mono text-gray-500 text-xs">
//                             salt:{" "}
//                           </span>
//                           <span
//                             className={`font-mono text-purple-700 text-xs truncate block ${
//                               animationStep === 3 ? "animate-pulse" : ""
//                             }`}
//                           >
//                             a7f9ce56b3d2...
//                           </span>
//                         </div>

//                         <div
//                           className={`col-span-1 sm:col-span-2 bg-white p-2 rounded ${
//                             animationStep === 3 ? "border border-green-200" : ""
//                           } transition-colors duration-300`}
//                         >
//                           <span className="font-mono text-gray-500 text-xs">
//                             verification_hash:{" "}
//                           </span>
//                           <span
//                             className={`font-mono text-green-700 text-xs truncate block ${
//                               animationStep === 3 ? "animate-pulse" : ""
//                             }`}
//                           >
//                             f29a4b7d6e3c...
//                           </span>
//                         </div>

//                         {/* What's NOT stored - Master Password */}
//                         <div className="col-span-1 sm:col-span-2 mt-2 flex items-center p-2 bg-red-100 rounded-lg">
//                           <FaExclamationCircle className="text-red-600 mr-2 flex-shrink-0" />
//                           <span className="text-red-600 text-xs sm:text-sm font-medium">
//                             Master password is <strong>never</strong> stored!
//                           </span>
//                         </div>

//                         {/* What's NOT stored - Master Key */}
//                         <div className="col-span-1 sm:col-span-2 flex items-center p-2 bg-red-100 rounded-lg">
//                           <FaExclamationCircle className="text-red-600 mr-2 flex-shrink-0" />
//                           <span className="text-red-600 text-xs sm:text-sm font-medium">
//                             Encryption key is <strong>never</strong> sent to
//                             server!
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Explanation of verification process */}
//                     <div
//                       className={`p-2 sm:p-3 bg-blue-50 rounded-lg border ${
//                         animationStep === 3 ? "" : "border-blue-100"
//                       }`}
//                     >
//                       <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-gray-700">
//                         How We Verify Your Password
//                       </h5>
//                       <ol className="list-decimal pl-4 sm:pl-5 text-xs sm:text-sm space-y-0.5 sm:space-y-1 text-gray-600">
//                         <li>When you enter your master password again</li>
//                         <li>We use the stored salt to derive the same key</li>
//                         <li>We try to decrypt the verification data</li>
//                         <li>If decryption works, your password is correct!</li>
//                       </ol>
//                     </div>

//                     {/* Explanation of security benefit */}
//                     <div
//                       className={`p-2 sm:p-3 bg-white border-l-4 ${
//                         animationStep === 3
//                           ? "border-green-200"
//                           : "border-gray-200"
//                       } transition-colors duration-300`}
//                     >
//                       <p className="text-xs sm:text-sm text-gray-600">
//                         Even if the database is compromised, attackers only get
//                         the salt and hash - they still can't decrypt your
//                         passwords without knowing your master password.
//                       </p>
//                     </div>

//                     {/* Animated security shield icon during final step */}
//                     {animationStep === 3 && (
//                       <div className="absolute -top-4 -right-4 bg-green-50 p-2 rounded-full animate-pulse hidden sm:block">
//                         <FaShieldAlt className="text-green-600 text-2xl" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Animation controls/indicators */}
//               <div className="mt-4 sm:mt-6 flex justify-center">
//                 <div className="flex flex-wrap justify-center space-x-1 sm:space-x-3">
//                   {[0, 1, 2, 3].map((step) => (
//                     <div
//                       key={step}
//                       className={`px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium mb-1 ${
//                         step === animationStep
//                           ? "bg-blue-600 text-white"
//                           : "bg-gray-200 text-gray-600"
//                       } transition-all duration-300`}
//                     >
//                       {step === 0 && "Enter Password"}
//                       {step === 1 && "Generate Salt"}
//                       {step === 2 && "Derive Key"}
//                       {step === 3 && "Store Securely"}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Technical explanation */}
//             <div className="bg-white p-3 sm:p-4 rounded-lg mt-4 shadow-sm border border-gray-200">
//               <h4 className="font-semibold mb-2 flex items-center text-sm sm:text-base text-gray-700">
//                 <FaCode className="text-blue-600 mr-2" />
//                 Technical Details
//               </h4>
//               <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-gray-600">
//                 <li>
//                   We use <span className="text-blue-700 font-mono">PBKDF2</span>{" "}
//                   with{" "}
//                   <span className="text-blue-700 font-mono">
//                     100,000 iterations
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-yellow-600 font-mono">
//                     Verification hash
//                   </span>{" "}
//                   confirms your password
//                 </li>
//                 <li>
//                   Your vault uses{" "}
//                   <span className="text-green-700 font-mono">AES-256-GCM</span>{" "}
//                   to encryption for all passwords
//                 </li>
//                 <li>
//                   Each password has its own{" "}
//                   <span className="text-blue-700 font-mono">
//                     initialization vector(IV)
//                   </span>
//                 </li>
//                 <li>
//                   The encrypted verification data contains a known string that
//                   can only be decrypted with the correct key
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Improved FAQ Section */}
//       <div className="bg-white rounded-xl p-6 mb-8 md:w-2/3 mt-16 w-full max-w-6xl shadow-sm border border-gray-200">
//         <h2 className="text-2xl font-bold mb-8 flex items-center justify-center text-gray-800">
//           <FaQuestionCircle className="text-blue-600 mr-3" />
//           Frequently Asked Questions
//         </h2>

//         <div className="space-y-4">
//           {faqData.map((faq, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
//                 activeFaq === index
//                   ? "border-l-4 border-blue-500"
//                   : "hover:bg-gray-50"
//               }`}
//             >
//               {/* Question (clickable header) */}
//               <div
//                 className="p-4 cursor-pointer flex justify-between items-center"
//                 onClick={() => toggleFaq(index)}
//               >
//                 <h3 className="text-lg font-semibold flex items-center text-gray-800">
//                   {activeFaq === index ? (
//                     <FaLockOpen className="mr-3 text-blue-600 transition-colors duration-300" />
//                   ) : (
//                     <FaLock className="mr-3 text-gray-400 transition-colors duration-300" />
//                   )}
//                   {faq.question}
//                 </h3>
//                 <div
//                   className={`transition-transform duration-300 ${
//                     activeFaq === index ? "transform rotate-180" : ""
//                   }`}
//                 >
//                   <FaChevronDown
//                     className={`${
//                       activeFaq === index ? "text-blue-600" : "text-gray-400"
//                     }`}
//                   />
//                 </div>
//               </div>

//               {/* Answer (collapsible content) */}
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   activeFaq === index ? "max-h-40" : "max-h-0"
//                 }`}
//               >
//                 <div className="p-4 pt-0 text-gray-700 bg-white border-t border-gray-200">
//                   {faq.answer}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* New Footer Section */}
//       <footer className="w-full bg-white mt-auto pt-12 pb-6 border-t border-gray-200">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             {/* About */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 text-gray-800">
//                 PassVault
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 Secure password management with end-to-end encryption. Keep your
//                 digital life protected with military-grade security.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <FaTwitter size={20} />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 hover:text-gray-800 transition-colors"
//                 >
//                   <FaGithub size={20} />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <FaLinkedin size={20} />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-600 hover:text-red-600 transition-colors"
//                 >
//                   <FaEnvelope size={20} />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 text-gray-800">
//                 Quick Links
//               </h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <Link
//                     to="/features"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Features
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/pricing"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Pricing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/blog"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/about"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Security Links */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 text-gray-800">Security</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <Link
//                     to="/security"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Security Practices
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/privacy"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/terms"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/bug-bounty"
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     Bug Bounty Program
//                   </Link>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="flex items-center hover:text-blue-600 transition-colors"
//                   >
//                     <FaShieldAlt className="mr-2" /> Security Audit Report
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Copyright and bottom links */}
//           <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-600 text-sm mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} PassVault. All rights reserved.
//             </div>
//             <div className="flex space-x-6">
//               <Link
//                 to="/privacy"
//                 className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
//               >
//                 Privacy
//               </Link>
//               <Link
//                 to="/terms"
//                 className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
//               >
//                 Terms
//               </Link>
//               <Link
//                 to="/sitemap"
//                 className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
//               >
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }

// GORK CODE
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GeneratePassword from "../components/GeneratePassword";
import SignUpModal from "../components/SignUpModal";
import LightRays from "@/components/LightRays";
import Flow_Visualization from "@/components/Master_Password_Security_Flow_Visualization";

import {
  FaQuestionCircle,
  FaCircle,
  FaChevronDown,
  FaChevronUp,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaKey,
  FaLock,
  FaShieldAlt,
  FaLockOpen,
  FaExclamationCircle,
  FaPlus,
  FaCode,
  FaArrowDown,
  FaUserShield,
  FaServer,
  FaExclamationTriangle,
  FaCheck,
  FaFingerprint,
  FaArrowRight,
} from "react-icons/fa";

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [animationStep, setAnimationStep] = useState(0);

  // Cycle through animation steps
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "Is PassVault really secure?",
      answer:
        "Yes, PassVault uses AES-256 encryption, which is virtually unbreakable with current technology. Your master password never leaves your device, and all encryption/decryption happens locally.",
    },
    {
      question: "What happens if I forget my master password?",
      answer:
        "Since we never store your master password and have no way to decrypt your data without it, it's crucial that you remember it. Consider creating a secure backup of your master password in a safe place.",
    },
    {
      question: "Can I use PassVault on multiple devices?",
      answer:
        "Yes, you can access your PassVault from any device. Your encrypted data syncs securely across devices, but you'll always need your master password to decrypt it.",
    },
    {
      question: "How does the two-factor authentication work?",
      answer:
        "Two-factor authentication adds an extra layer of security by requiring something you know (your master password) and something you have (like your phone). Even if someone knows your master password, they can't access your vault without the second factor.",
    },
    {
      question: "Is PassVault open source?",
      answer:
        "Yes! We believe in transparency and community-driven security. Our code is available for review on GitHub, which means security experts worldwide can verify our security claims and help improve our platform.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
<Prism
animationType="rotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={3.6}
    hueShift={0}
    colorFrequency={1}
    noise={0}
    glow={1}
  />

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 "></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 ">
                Pass
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Secure your digital world with military-grade encryption.
                Generate, store, and manage passwords effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Link
                    to="/signup"
                    className="flex items-center justify-center gap-2"
                  >
                    Get Started <FaArrowRight />
                  </Link>
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
      </div> */}

      {/* Hero Section */}
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        {/* Prism Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor={
              localStorage.getItem("vite-ui-theme") === "dark"
                ? "#00ffff"
                : "#00ffff"
                
            }
            raysSpeed={1.5}
            lightSpread={2}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.5}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-2xl ">
              PassVault
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-lg">
              Secure your digital world with military-grade encryption.
              <br />
              <p className="text-xl">
                Generate, store, and manage passwords effortlessly.
              </p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Link
                  to="/signup"
                  className="flex items-center justify-center gap-2"
                >
                  Get Started <FaArrowRight />
                </Link>
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm bg-slate-900/30">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
          <span className="text-white text-sm font-medium mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
          </div>
          <FaChevronDown className="text-white mt-2" />
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose PassVault?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4 text-cyan-400">🔒</div>
              <h3 className="text-2xl font-semibold mb-4">
                Unbreakable Security
              </h3>
              <p className="">
                AES-256 encryption ensures your passwords are protected against
                any threats.
              </p>
            </div>
            <div className=" backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4 text-purple-400">⚡</div>
              <h3 className="text-2xl font-semibold mb-4">Lightning Fast</h3>
              <p className="">
                Access your vault instantly across all devices with seamless
                synchronization.
              </p>
            </div>
            <div className=" backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4 text-green-400">🛡️</div>
              <h3 className="text-2xl font-semibold mb-4">Two-Factor Auth</h3>
              <p className="">
                Add an extra layer of protection with built-in 2FA support.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Password Generator */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 ">
            Generate Strong Passwords
          </h2>
          <div className=" backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <GeneratePassword />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto rounded-xl p-6 mb-8 md:w-2/3 mt-16 w-full max-w-6xl ">
        <h2 className="text-4xl font-bold mb-8 flex items-center justify-center ">
          <FaQuestionCircle className="text-blue-600 mr-3" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={` border-1 rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
                activeFaq === index ? "border-l-4 border-blue-500" : ""
              }`}
            >
              {/* Question (clickable header) */}
              <div
                className="p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold flex items-center ">
                  {activeFaq === index ? (
                    <FaLockOpen className="mr-3 text-blue-600 transition-colors duration-300" />
                  ) : (
                    <FaLock className="mr-3 transition-colors duration-300" />
                  )}
                  {faq.question}
                </h3>
                <div
                  className={`transition-transform duration-300 ${
                    activeFaq === index ? "transform rotate-180" : ""
                  }`}
                >
                  <FaChevronDown
                    className={`${
                      activeFaq === index ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>

              {/* Answer (collapsible content) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeFaq === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-4 pt-0   border-gray-200">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto pt-12 pb-6 border-t rounded-t-4xl border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 ">PassVault</h3>
              <p className=" mb-4">
                Secure password management with end-to-end encryption. Keep your
                digital life protected with military-grade security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className=" hover:text-blue-600 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className=" hover:text-gray-800 transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="#" className=" hover:text-blue-600 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className=" hover:text-red-600 transition-colors">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
              <ul className="space-y-2 ">
                <li>
                  <Link
                    to="/features"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Security Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 ">Security</h3>
              <ul className="space-y-2 ">
                <li>
                  <Link
                    to="/security"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Security Practices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bug-bounty"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Bug Bounty Program
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center hover:text-blue-600 transition-colors"
                  >
                    <FaShieldAlt className="mr-2" /> Security Audit Report
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright and bottom links */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className=" text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PassVault. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm hover:text-blue-600 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm hover:text-blue-600 transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/sitemap"
                className="text-sm hover:text-blue-600 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
