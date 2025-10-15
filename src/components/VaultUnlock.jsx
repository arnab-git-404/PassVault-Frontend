import { useState } from "react";
// import { toast } from "react-toastify";

import { useLoadingBar } from "react-top-loading-bar";

import { toast } from 'react-hot-toast';
import { useMasterPassword } from "../context/MasterPasswordContext";
import { Button } from "@/components/ui/button";


const VaultUnlock = () => {
  const [password, setPassword] = useState("");
  const {verifyMasterPassword } = useMasterPassword();
  const [Loading , setIsLoading] = useState(false);

  // Loading bar
    const { start, complete } = useLoadingBar({ color: "blue", height: 3 });


  const { 
    isSetup, 
    isUnlocked, 
    unlockVault, 
    setupMasterPassword,
  masterKey } = useMasterPassword();
    
  const handleUnlock = async () => {
    
    setIsLoading(true);
    start();
    
    if (!password) {
      toast.error("Please enter your master password");
      return;
    }

    try {
      const isCorrect = await verifyMasterPassword(password);

      if (isCorrect) {
        // Password is correct, unlock the vault
        const vaultStatus =  await unlockVault(password);
        console.log("Is Vault Unlocked?:", isUnlocked);
        

        // if( vaultStatus ){
        //   toast.success("Vault unlocked!");
        //   setPassword("");
        // }
        
      } else {
        toast.error("Incorrect master password");
        setPassword("");
      }
    } catch (error) {
      console.error("Error unlocking vault:", error);
      toast.error("Failed to unlock vault");
    } finally {
      setIsLoading(false);
        complete();
    }


  };


  if (!isUnlocked) {
    return (
      <div className="w-full max-w-md p-6  border-2 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">Unlock Your Vault</h2>
        <p className="mb-4">
          Enter your master password to access your saved passwords.
        </p>  

        <input
          type="password"
          placeholder="Master Password"
          className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleUnlock()}
        />

        <Button
          className="hover:cursor-pointer w-full"
          onClick={handleUnlock}
        >
          Unlock Vault
        </Button>

      </div>
    );
  }

  return null; // If unlocked, don't render anything
};

export default VaultUnlock;