import React, { use } from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMasterPassword } from "../context/MasterPasswordContext";
import { toast } from "react-toastify";

export default function Profile() {

  const { logoutUser,user } = useGlobalContext();
  const {lockVault} = useMasterPassword(); 
  const navigate = useNavigate();


  return (

    <div className="w-full max-w-xl p-6">  
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
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
        <p className="text-lg font-semibold">{user.is_2FA_Enabled ? "Enabled" : "Disabled"}</p>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded hover:cursor-pointer"
          
        >
          <Link to="/forget-password" >Change Password</Link>
          
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded hover:cursor-pointer "
          onClick={() => {
            
            lockVault();
            logoutUser();
            localStorage.clear();
            toast.success("Logged Out Successfully");
            navigate("/signin");
          }
          }
        >
          Logout
        </button>
      </div>
    </div>
    </div>
  );
}
