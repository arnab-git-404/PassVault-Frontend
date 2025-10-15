import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GeneratePassword from "../components/GeneratePassword";
import SignUpModal from "../components/SignUpModal";
import LightRays from "@/components/LightRays";

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

const Master_Password_Security_Flow_Visualization = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [animationStep, setAnimationStep] = useState(0);

  // Cycle through animation steps
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" rounded-xl sm:p-6 mb-8  shadow-sm px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-4 sm:mb-6 flex items-center justify-center">
        <FaKey
          className={`text-yellow-600 mr-2 sm:mr-3 ${
            animationStep === 0 ? "animate-pulse" : ""
          }`}
        />
        Master Password Security
      </h2>

      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="relative mb-4 sm:mb-6">
            <h3 className="text-center text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 ">
              How Your Master Password Stays Secure
            </h3>

            {/* Master password flow visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8">
              {/* Left side - what happens on your device */}
              <div className=" p-3 sm:p-4 rounded-lg border border-blue-100">
                <h4 className="text-center text-blue-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                  On Your Device
                </h4>

                <div className="space-y-4 sm:space-y-6">
                  {/* Step 1: Enter Master Password */}
                  <div
                    className={`p-2 sm:p-3 border-2 rounded-lg ${
                      animationStep === 0 ? "bg-blue-50" : ""
                    } transition-colors duration-300`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-700 font-bold text-xs sm:text-sm">
                          1
                        </span>
                      </div>
                      <h5 className="font-semibold text-sm sm:text-base text-gray-700">
                        Enter Master Password
                      </h5>
                    </div>

                    <div className="pl-8 sm:pl-11">
                      <div className="bg-gray-50 p-2 rounded border border-gray-200 flex flex-wrap">
                        <span className="font-mono text-gray-500 text-xs sm:text-sm">
                          Password:{" "}
                        </span>
                        <span className="font-mono text-blue-700 ml-1 sm:ml-2 text-xs sm:text-sm">
                          {animationStep === 0
                            ? "SuperSecret123!"
                            : "•••••••••••••"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Generate Random Salt */}
                  <div
                    className={`p-2 sm:p-3 border-2 rounded-lg ${
                      animationStep === 1 ? "bg-blue-50" : ""
                    } transition-colors duration-300`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-700 font-bold text-xs sm:text-sm">
                          2
                        </span>
                      </div>
                      <h5 className="font-semibold text-sm sm:text-base text-gray-700">
                        Generate Random Salt
                      </h5>
                    </div>

                    <div className="pl-8 sm:pl-11">
                      <div className="bg-gray-50 p-2 rounded border border-gray-200">
                        <span className="font-mono text-gray-500 text-xs sm:text-sm">
                          Salt:{" "}
                        </span>
                        <span
                          className={`font-mono text-purple-700 text-xs sm:text-sm truncate block ${
                            animationStep === 1 ? "animate-pulse" : ""
                          }`}
                        >
                          a7f9ce56b3d2...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Key Derivation */}
                  <div
                    className={`p-2 sm:p-3  border-2 rounded-lg ${
                      animationStep === 2 ? "bg-blue-300" : ""
                    } transition-colors duration-300`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-700 font-bold text-xs sm:text-sm">
                          3
                        </span>
                      </div>
                      <h5 className="font-semibold text-sm sm:text-base text-gray-700">
                        Derive Key & Verification Hash
                      </h5>
                    </div>

                    <div className="pl-8 sm:pl-11 relative">
                      {/* Inputs: Password + Salt - Made responsive */}
                      <div className="flex flex-col sm:flex-row items-center">
                        <div className="w-full sm:w-1/2 bg-gray-50 p-2 rounded-t sm:rounded-l sm:rounded-tr-none border border-gray-200 mb-2 sm:mb-0">
                          <div className="flex flex-col">
                            <span className="font-mono text-gray-500 text-xs">
                              Password
                            </span>
                            <span className="font-mono text-blue-700 text-xs truncate">
                              SuperSecret123!
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-8 mb-2 sm:mb-0">
                          <FaPlus className="text-gray-400" />
                        </div>
                        <div className="w-full sm:w-1/2 bg-gray-50 p-2 rounded-b sm:rounded-r sm:rounded-bl-none border border-gray-200">
                          <div className="flex flex-col">
                            <span className="font-mono text-gray-500 text-xs">
                              Salt
                            </span>
                            <span className="font-mono text-purple-700 text-xs truncate">
                              a7f9ce56b3d2...
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* PBKDF2 Process */}
                      <div className="my-3 text-center p-2 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="font-mono text-xs text-blue-700 break-words">
                          PBKDF2(password, salt, 100,000)
                        </div>
                        <div
                          className={`${
                            animationStep === 2 ? "animate-pulse" : ""
                          }`}
                        >
                          ⚙️ ⚙️ ⚙️
                        </div>
                      </div>

                      {/* Dual Outputs with Animation */}
                      <div
                        className={`flex justify-center text-center mt-1 ${
                          animationStep === 2
                            ? "text-yellow-600 animate-bounce"
                            : "text-gray-400"
                        }`}
                      >
                        <FaArrowDown />
                      </div>

                      {/* Two outputs - Made responsive */}
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Encryption Key - Stays on Device */}
                        <div className="bg-gray-50 p-2 rounded border border-green-100 relative">
                          <div className="flex justify-between">
                            <span className="font-mono text-gray-500 text-xs">
                              Master Key:
                            </span>
                            <span className="text-xs text-green-600">
                              Stays local
                            </span>
                          </div>
                          <span
                            className={`font-mono text-green-700 text-xs truncate block ${
                              animationStep === 2 ? "animate-pulse" : ""
                            }`}
                          >
                            e8f2d6b9c7a3...
                          </span>
                          {animationStep === 2 && (
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-xs">
                              🔒
                            </div>
                          )}
                        </div>

                        {/* Verification Hash - Will be Stored */}
                        <div className="bg-gray-50 p-2 rounded border border-yellow-100 relative">
                          <div className="flex justify-between">
                            <span className="font-mono text-gray-500 text-xs">
                              Verify Hash:
                            </span>
                            <span className="text-xs text-yellow-600">
                              To DB
                            </span>
                          </div>
                          <span
                            className={`font-mono text-yellow-600 text-xs truncate block ${
                              animationStep === 2 ? "animate-pulse" : ""
                            }`}
                          >
                            f29a4b7d6e3c...
                          </span>
                          {animationStep === 2 && (
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-xs">
                              📤
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Animation showing verification hash traveling to database */}
                      {animationStep === 2 && (
                        <div className="hidden sm:block absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-1/2 transform -translate-y-1/2 animate-ping opacity-75"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - what's stored in database */}
              <div className=" p-3 sm:p-4 rounded-lg border border-purple-100 mt-4 lg:mt-0">
                <h4 className="text-center text-purple-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                  In Database
                </h4>

                <div className="space-y-4 sm:space-y-6 relative">
                  {/* Database storage visualization */}
                  <div
                    className={`p-3 sm:p-4  rounded-lg border ${
                      animationStep === 3
                        ? "border-green-200"
                        : "border-gray-200"
                    } transition-colors duration-300`}
                  >
                    <h5 className="font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base text-gray-700">
                      User Record
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="col-span-1 sm:col-span-2 bg-white p-2 rounded">
                        <span className="font-mono text-gray-500 text-xs">
                          user_id:{" "}
                        </span>
                        <span className="font-mono text-blue-700 text-xs">
                          u_839472
                        </span>
                      </div>

                      <div className=" p-2 rounded">
                        <span className="font-mono text-gray-500 text-xs">
                          email:{" "}
                        </span>
                        <span className="font-mono text-blue-700 text-xs truncate block">
                          user@example.com
                        </span>
                      </div>

                      <div className="bg-white p-2 rounded">
                        <span className="font-mono text-gray-500 text-xs">
                          created_at:{" "}
                        </span>
                        <span className="font-mono text-blue-700 text-xs">
                          2023-04-15
                        </span>
                      </div>

                      <div
                        className={`col-span-1 sm:col-span-2 bg-white p-2 rounded ${
                          animationStep === 3 ? "border border-green-200" : ""
                        } transition-colors duration-300`}
                      >
                        <span className="font-mono text-gray-500 text-xs">
                          salt:{" "}
                        </span>
                        <span
                          className={`font-mono text-purple-700 text-xs truncate block ${
                            animationStep === 3 ? "animate-pulse" : ""
                          }`}
                        >
                          a7f9ce56b3d2...
                        </span>
                      </div>

                      <div
                        className={`col-span-1 sm:col-span-2 bg-white p-2 rounded ${
                          animationStep === 3 ? "border border-green-200" : ""
                        } transition-colors duration-300`}
                      >
                        <span className="font-mono text-gray-500 text-xs">
                          verification_hash:{" "}
                        </span>
                        <span
                          className={`font-mono text-green-700 text-xs truncate block ${
                            animationStep === 3 ? "animate-pulse" : ""
                          }`}
                        >
                          f29a4b7d6e3c...
                        </span>
                      </div>

                      {/* What's NOT stored - Master Password */}
                      <div className="col-span-1 sm:col-span-2 mt-2 flex items-center p-2 bg-red-100 rounded-lg">
                        <FaExclamationCircle className="text-red-600 mr-2 flex-shrink-0" />
                        <span className="text-red-600 text-xs sm:text-sm font-medium">
                          Master password is <strong>never</strong> stored!
                        </span>
                      </div>

                      {/* What's NOT stored - Master Key */}
                      <div className="col-span-1 sm:col-span-2 flex items-center p-2 bg-red-100 rounded-lg">
                        <FaExclamationCircle className="text-red-600 mr-2 flex-shrink-0" />
                        <span className="text-red-600 text-xs sm:text-sm font-medium">
                          Encryption key is <strong>never</strong> sent to
                          server!
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Explanation of verification process */}
                  <div
                    className={`p-2 sm:p-3 bg-blue-50 rounded-lg border ${
                      animationStep === 3 ? "" : "border-blue-100"
                    }`}
                  >
                    <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-gray-700">
                      How We Verify Your Password
                    </h5>
                    <ol className="list-decimal pl-4 sm:pl-5 text-xs sm:text-sm space-y-0.5 sm:space-y-1 text-gray-600">
                      <li>When you enter your master password again</li>
                      <li>We use the stored salt to derive the same key</li>
                      <li>We try to decrypt the verification data</li>
                      <li>If decryption works, your password is correct!</li>
                    </ol>
                  </div>

                  {/* Explanation of security benefit */}
                  <div
                    className={`p-2 sm:p-3 bg-white border-l-4 ${
                      animationStep === 3
                        ? "border-green-200"
                        : "border-gray-200"
                    } transition-colors duration-300`}
                  >
                    <p className="text-xs sm:text-sm text-gray-600">
                      Even if the database is compromised, attackers only get
                      the salt and hash - they still can't decrypt your
                      passwords without knowing your master password.
                    </p>
                  </div>

                  {/* Animated security shield icon during final step */}
                  {animationStep === 3 && (
                    <div className="absolute -top-4 -right-4 bg-green-50 p-2 rounded-full animate-pulse hidden sm:block">
                      <FaShieldAlt className="text-green-600 text-2xl" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Animation controls/indicators */}
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="flex flex-wrap justify-center space-x-1 sm:space-x-3">
                {[0, 1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium mb-1 ${
                      step === animationStep
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    } transition-all duration-300`}
                  >
                    {step === 0 && "Enter Password"}
                    {step === 1 && "Generate Salt"}
                    {step === 2 && "Derive Key"}
                    {step === 3 && "Store Securely"}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical explanation */}
          <div className="bg-white p-3 sm:p-4 rounded-lg mt-4 shadow-sm border border-gray-200">
            <h4 className="font-semibold mb-2 flex items-center text-sm sm:text-base text-gray-700">
              <FaCode className="text-blue-600 mr-2" />
              Technical Details
            </h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-gray-600">
              <li>
                We use <span className="text-blue-700 font-mono">PBKDF2</span>{" "}
                with{" "}
                <span className="text-blue-700 font-mono">
                  100,000 iterations
                </span>
              </li>
              <li>
                <span className="text-yellow-600 font-mono">
                  Verification hash
                </span>{" "}
                confirms your password
              </li>
              <li>
                Your vault uses{" "}
                <span className="text-green-700 font-mono">AES-256-GCM</span> to
                encryption for all passwords
              </li>
              <li>
                Each password has its own{" "}
                <span className="text-blue-700 font-mono">
                  initialization vector(IV)
                </span>
              </li>
              <li>
                The encrypted verification data contains a known string that can
                only be decrypted with the correct key
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master_Password_Security_Flow_Visualization;
