// Navbar.js

import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      alert("LogOut successfully")
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const generateRoomCode = (email) => {
    const prefix = email.slice(0, 2).toLowerCase();
    const randomNumbers = Math.floor(100 + Math.random() * 900); 
    return `${prefix}${randomNumbers}`;
  };

  const handleStartMeeting = () => {
    const roomCode = generateRoomCode(user.email);
    navigate(`/room/${roomCode}`);
    alert(`This is your room code for the meeting: ${roomCode}`);
  };

  return (
    <div className="bg-blue-800/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Conference Call App</p>
          </div>
        </div>

        <div className="">
          <ul className="text-white font-bold flex items-center gap-10 cursor-pointer">
            {user ? (
              <>
                <li><button onClick={handleStartMeeting} className="hover:border-2 border-transparent border-white p-2">Start Meeting</button></li>
                <li><button onClick={handleLogout} className="hover:border-2 border-transparent border-white p-2">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to='/signup' className="hover:border-2 border-transparent border-white p-2">Register</Link></li>
                <li><Link to='/signin' className="hover:border-2 border-transparent border-white p-2">Login</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
