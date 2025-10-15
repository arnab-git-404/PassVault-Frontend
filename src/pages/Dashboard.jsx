import React, { useState, useRef, useEffect } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import ModeToggle from "../components/mode-toggle";
import {
  FaUserCircle,
  FaLock,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaKey,
  FaListAlt,
  FaShieldAlt,
  FaSignOutAlt,
  FaCog,
  FaWrench,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

import { toast } from "react-hot-toast";
import ProfileModal from "../components/ProfileModal";
import Profile from "../components/Profile";
import TwoFactorAuth from "../components/TwoFactorAuth";
import Home from "../components/Home";
import PasswordManager from "../components/PasswordManager";
import ShowAllPassword from "../components/ShowAllPassword";
import MasterPasswordSetup from "../utility/MasterPasswordSetup";
import VaultUnlock from "../components/VaultUnlock";

import { useGlobalContext } from "../context/context";
import { useMasterPassword } from "../context/MasterPasswordContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const sidebarRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { user, userLoggedIn, logoutUser, loginUser } = useGlobalContext();
  const { isSetup, isUnlocked, lockVault } = useMasterPassword();

  const serverURL = import.meta.env.VITE_APP_SERVER_URL;
  const token = localStorage.getItem("token");

  // Handle resize events for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  // Close sidebar on outside click for mobile & Desktop
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle sidebar"]')
      ) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  // Fetch user data
  const fetchUser = async () => {
    if (!token) {
      logoutUser();
      navigate("/signin");
      return;
    }

    try {
      const res = await fetch(`${serverURL}/api/user/user-info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        logoutUser();
        localStorage.clear();
        navigate("/signin");
        toast.error("Session expired. Please login again");
        return;
      }

      const data = await res.json();
      loginUser(data.user);
    } catch (error) {
      console.error("Unable To Fetch User Data For Dashboard: ", error);
      toast.error("Something Went Wrong. Please Try again");
    }
  };

  // Periodic user data refresh and initial fetch
  useEffect(() => {
    fetchUser();
    const intervalId = setInterval(fetchUser, 1000 * 60 * 2);
    return () => clearInterval(intervalId);
  }, []);

  // Handle vault status changes
  useEffect(() => {
    if (
      !isUnlocked &&
      (selectedOption === "GeneratePassword" ||
        selectedOption === "ShowAllPassword")
    ) {
      setSelectedOption("Home");
    }
  }, [isUnlocked]);

  // Navigation handler
  const handleNavigation = (option) => {
    setSelectedOption(option);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Content rendering logic
  const renderContent = () => {
    if (
      (!isSetup || !isUnlocked) &&
      (selectedOption === "GeneratePassword" ||
        selectedOption === "ShowAllPassword")
    ) {
      return (
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="bg-yellow-700 bg-opacity-30 inline-block p-3 rounded-full animate-pulse">
              <FaLock size={40} className="text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold mt-4">Vault Access Required</h2>
            <p className=" mt-2 mb-6">
              {!isSetup
                ? "You need to set up your master password first"
                : "You need to unlock your vault to access this feature"}
            </p>
          </div>

          <VaultUnlock
            onUnlockSuccess={() => {
              toast.success("Vault unlocked successfully!");
              setSelectedOption(selectedOption);
            }}
          />
        </div>
      );
    }

    switch (selectedOption) {
      case "Profile":
        return <Profile />;
      case "GeneratePassword":
        return <PasswordManager />;
      case "ShowAllPassword":
        return <ShowAllPassword />;
      case "2FA":
        return <TwoFactorAuth />;
      case "LogOut":
        return <div className="text-center">Logging out...</div>;
      case "MasterPasswordSetup":
        return <MasterPasswordSetup />;
      case "Settings":
        return navigate("/settings")
      case "Support":
        return navigate("/support");


      case "Home":
      default:
        return (
          <Home
            isSetup={isSetup}
            isUnlocked={isUnlocked}
            onSetupClick={() => setSelectedOption("MasterPasswordSetup")}
          />
        );
    }
  };

  // useEffect(() => {
  //   if (selectedOption === "Settings") {
  //     navigate("/settings");
  //   }
  // }, [selectedOption, navigate]);


  useEffect(() => {
    if (selectedOption === "LogOut") {
      lockVault();
      logoutUser();
      localStorage.clear();
      navigate("/signin");
      toast.success("Logged Out Successfully");
    }
  }, [selectedOption]);

  return (
    // <div className="flex min-h-screen bg-gray-800">
    <div className="flex min-h-screen">
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen
            ? isMobile
              ? "translate-x-0 w-64"
              : "translate-x-0 w-64"
            : isMobile
            ? "-translate-x-full w-64"
            : "-translate-x-full w-64"
        } fixed h-full bg-gray-900 text-white transition-all duration-300 ease-in-out transform z-30 overflow-y-auto`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <FaLock className="text-blue-400 w-8 h-8 " />
            <h1 className="text-xl font-bold">PassVault</h1>
          </div>
          <button
            className="p-2 hover:bg-gray-700 rounded-full transition-colors hover:cursor-pointer "
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar items */}
        <div className="p-4">
          <ul className="space-y-2">
            {[
              { name: "Home", icon: FaHome, color: "text-blue-400" },
              { name: "Profile", icon: FaUser, color: "text-purple-400" },
              {
                name: "GeneratePassword",
                icon: FaKey,
                color: "text-yellow-400",
                label: "Generate Password",
              },
              {
                name: "ShowAllPassword",
                icon: FaListAlt,
                color: "text-orange-400",
                label: "Show Passwords",
              },
              {
                name: "MasterPasswordSetup",
                icon: FaCog,
                color: "text-red-400",
                label: "Master Key",
              },
              {
                name: "2FA",
                icon: FaShieldAlt,
                color: "text-green-400",
                label: "2FA Authentication",
              },
              {
                name: "Settings",
                icon: FaWrench,
                color: "text-silver-400",
                label: "Settings",
              },
              {
                name: "Support",
                icon: BsChatLeftTextFill,
                color: "text-cyan-400",
                label: "Support",
              },
            ].map(({ name, icon: Icon, color, label }) => (
              <li key={name}>
                <button
                  className={`hover:cursor-pointer w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    selectedOption === name
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => handleNavigation(name)}
                >
                  <Icon
                    className={selectedOption === name ? "text-white" : color}
                  />
                  <span>{label || name}</span>
                </button>
              </li>
            ))}

            <li className="mt-8">
              <button
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:cursor-pointer hover:bg-red-900 hover:bg-opacity-30 transition-colors"
                onClick={() => handleNavigation("LogOut")}
              >
                <FaSignOutAlt className="text-red-400" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        {/* <div className=" mx-auto border-2 rounded-full text-white shadow-lg max-w-7xl my-4 ">

          <div className="container mx-auto px-4 py-3">

            <div className="flex justify-between ">

              <div className="flex items-center space-x-4">
                <button
                  className="p-2 hover:bg-gray-700 rounded-md transition-colors"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  aria-label="Toggle sidebar"
                >
                  <FaBars className="text-gray-300 h-8 w-8 hover:cursor-pointer " />
                </button>
                <h1
                  className="text-3xl font-bold cursor-pointer hidden md:block"
                  onClick={() => setSelectedOption("Home")}
                >
                  PassVault
                </h1>
              </div>

              <div className="flex items-center space-x-5">
                <ModeToggle/>
                <button
                  onClick={() => {
                    if (isUnlocked) {
                      lockVault();
                      setSelectedOption((prev) =>
                        ["GeneratePassword", "ShowAllPassword"].includes(prev)
                          ? "Home"
                          : prev
                      );
                    } else {
                      setSelectedOption("ShowAllPassword");
                      toast("Please Enter Your Master Password !", {
                        icon: "ℹ️",
                      });
                    }
                  }}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors ${
                    isUnlocked
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <FaLock className="text-sm" />
                  <span className="hidden sm:inline hover:cursor-pointer ">
                    {isUnlocked ? "Lock Vault" : "Unlock Vault"}
                  </span>
                </button>

                <button 
                onClick={() => navigate('/support')} title="PassVault Chat Support" >
                  <BsChatLeftTextFill className="text-2xl h-8 w-8 text-gray-300 hover:cursor-pointer " />
                </button>

                <button
                  className="p-1 rounded-full hover:bg-gray-700 transition-colors hover:cursor-pointer "
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  <FaUserCircle className="text-2xl h-8 w-8 text-gray-300" />
                </button>
              </div>

            </div>

          </div>
        </div> */}

        {/* Navbar */}
        <nav className="mx-6 md:mx-8 lg:mx-auto lg:w-5xl xl:w-6xl border-2 border-gray-700 rounded-full shadow-lg my-4">
          <div className="px-4 md:px-6 py-3">
            <div className="flex justify-between items-center">
              {/* Left Section */}
              <div className="flex items-center space-x-3 md:space-x-4">
                <button
                  className="p-2 hover:bg-gray-700 rounded-md transition-colors"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  aria-label="Toggle sidebar"
                >
                  <FaBars className=" h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" />
                </button>
                <h1
                  className="text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer hidden md:block"
                  onClick={() => setSelectedOption("Home")}
                >
                  PassVault
                </h1>
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-2 md:space-x-4">

                <button
                  onClick={() => {
                    if (isUnlocked) {
                      lockVault();
                      setSelectedOption((prev) =>
                        ["GeneratePassword", "ShowAllPassword"].includes(prev)
                          ? "Home"
                          : prev
                      );
                    } else {
                      setSelectedOption("ShowAllPassword");
                      toast("Please Enter Your Master Password !", {
                        icon: "ℹ️",
                      });
                    }
                  }}
                  className={`flex items-center space-x-1.5 md:space-x-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-colors ${
                    isUnlocked
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <FaLock className="text-xs md:text-sm" />
                  <span className="hidden sm:inline text-xs md:text-sm font-medium">
                    {isUnlocked ? "Lock Vault" : "Unlock Vault"}
                  </span>
                </button>

                <button
                  onClick={() => navigate("/support")}
                  title="PassVault Chat Support"
                  className="p-2  rounded-md transition-colors"
                >
                  <BsChatLeftTextFill className=" h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" />
                </button>

                <button
                  className="p-2 rounded-full  transition-colors"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  <FaUserCircle className=" h-5 w-5 md:h-6 md:w-6" />
                </button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </nav>

        <div ref={modalRef}>
          <ProfileModal
            isOpen={isModalOpen}
            onClick={() => setIsModalOpen(false)}
            user={user}
          />
        </div>

        {/* Content Rendering Based on Selection */}
        <div className="flex-1 p-4 md:p-6 flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
