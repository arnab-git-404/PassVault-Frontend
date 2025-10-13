import React, { use } from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMasterPassword } from "../context/MasterPasswordContext";
// import { toast } from "react-toastify";

import { toast } from "react-hot-toast";

export default function Profile() {
  const { logoutUser, user } = useGlobalContext();
  const { lockVault } = useMasterPassword();
  const navigate = useNavigate();

  return (
    <div className=" mx-auto p-4">
      <div className=" md:w-lg bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>

        <div className="mb-4">
          <p className="text-gray-400">Name:</p>
          <p className="text-lg font-semibold">{user.name}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-400">Email:</p>
          <p className="text-lg font-semibold">{user.email}</p>
        </div>


        <div className="mb-4">
          <p className="text-gray-400">Two-Factor Authentication:</p>
          <p className="text-lg font-semibold">
            {user.is_2FA_Enabled ? "Enabled" : "Disabled"}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded hover:cursor-pointer">
            <Link to="/forget-password"
            
            >Change Password</Link>
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded hover:cursor-pointer "
            onClick={() => {
              lockVault();
              logoutUser();
              localStorage.clear();
              toast.success("Logged Out Successfully");
              navigate("/signin");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    //  <div className="max-w-md mx-auto p-4">
    //   <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
    //     <h2 className="text-2xl font-bold mb-4 text-center">
    //       Two-Factor Authentication
    //     </h2>

    //     {is2FAEnabled ? (
    //       <div className="text-center">
    //         <div className="flex items-center justify-center mb-4">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6 text-green-500 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M5 13l4 4L19 7"
    //             />
    //           </svg>
    //           <p className="text-green-500 font-bold">2FA is Enabled</p>
    //         </div>

    //         <button
    //           onClick={handleReset2FA}
    //           className="hover:cursor-pointer font-bold bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded mt-2"
    //         >
    //           Reset 2FA
    //         </button>
    //       </div>
    //     ) : (
    //       <>
    //         {!qrCode && !loading && (
    //           <div className="text-center">
    //             <p className="mb-4 text-gray-300">
    //               Enable two-factor authentication to add an extra layer of
    //               security to your account.
    //             </p>
    //             <button
    //               className="hover:cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded mb-4 font-medium"
    //               onClick={enable2FA}
    //             >
    //               Enable 2FA
    //             </button>
    //           </div>
    //         )}

    //         {loading && (
    //           <div className="text-center py-8">
    //             <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    //             <p className="mt-2">Generating QR code...</p>
    //           </div>
    //         )}

    //         {qrCode && (
    //           <div className="flex flex-col items-center">
    //             <div className="bg-white p-3 rounded-lg mb-4">
    //               <img
    //                 src={qrCode}
    //                 alt="QR Code"
    //                 className="max-w-full h-auto"
    //               />
    //             </div>

    //             <div className="w-full space-y-4">
    //               <div className="bg-gray-800 p-4 rounded-lg">
    //                 <h3 className="font-medium text-lg mb-2">
    //                   Setup Instructions:
    //                 </h3>
    //                 <ol className="list-decimal pl-5 space-y-1 text-gray-300">
    //                   <li>Install Google Authenticator or another TOTP app</li>
    //                   <li>Scan the QR code with the app</li>
    //                   <li>Enter the 6-digit code from the app below</li>
    //                 </ol>
    //               </div>

    //               <div className="space-y-3">
    //                 <input
    //                   type="text"
    //                   placeholder="Enter 6-digit verification code"
    //                   className="p-3 text-white rounded w-full bg-gray-800 border border-gray-600 focus:border-blue-500 focus:outline-none text-center text-lg tracking-wider"
    //                   value={verificationCode}
    //                   onChange={(e) =>
    //                     setVerificationCode(
    //                       e.target.value.replace(/[^0-9]/g, "").slice(0, 6)
    //                     )
    //                   }
    //                   maxLength={6}
    //                 />

    //                 <div className="flex space-x-3">
    //                   <button
    //                     className={`flex-1 hover:cursor-pointer font-medium bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded ${
    //                       verifying ? "opacity-70 cursor-not-allowed" : ""
    //                     }`}
    //                     onClick={verify2FA}
    //                     disabled={verifying}
    //                   >
    //                     {verifying ? (
    //                       <span className="flex items-center justify-center">
    //                         <span className="inline-block animate-spin h-4 w-4 border-2 border-t-transparent border-white rounded-full mr-2"></span>
    //                         Verifying...
    //                       </span>
    //                     ) : (
    //                       "Verify & Enable"
    //                     )}
    //                   </button>

    //                   <button
    //                     className="hover:cursor-pointer bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded"
    //                     onClick={() => {
    //                       setQrCode("");
    //                       setVerificationCode("");
    //                     }}
    //                   >
    //                     Cancel
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         )}
    //       </>
    //     )}
    //   </div>
    // </div>
  );
}
