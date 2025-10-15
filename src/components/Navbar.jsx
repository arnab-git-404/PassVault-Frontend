import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
import ModeToggle from "./mode-toggle";
import { BsChatLeftTextFill } from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>

      

      <nav className="p-4 flex items-center gap-4">
        <h1>PassVault</h1>
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
        <ModeToggle />

        <button
          onClick={() => navigate("/support")}
          title="PassVault Chat Support"
        >
          <BsChatLeftTextFill className="text-2xl h-8 w-8 text-gray-300 hover:cursor-pointer " />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
