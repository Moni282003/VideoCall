// Home.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import conf from './assets/Conference.jpg';
import Navbar from './components/NavBar';

const Home = () => {
  const [roomCode, setRoomCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  const handleRoomCodeChange = (e) => {
    setRoomCode(e.target.value);
  };

  return (
    <div className="overflow-y-hidden">
      <Navbar />
      <div className="relative h-screen">
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={conf} className="object-cover w-full h-full" alt="Conference" />
        </div>
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          <div className="flex flex-col items-center justify-center pb-8">
            <h1 className="text-[50px] md:text-[80px] text-white font-bold pt-12">Conference Call</h1>
            <p className="text-[26px] text-white -mt-2">With ZegoCloud</p>
          </div>

          <div className="flex flex-row justify-center">
            <form onSubmit={handleSubmit} className="text-white md:pt-12 flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center">
                <label className="text-[30px] md:text-[40px] font-bold pt-6">Enter Room Code</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Room Code"
                  value={roomCode}
                  onChange={handleRoomCodeChange}
                  className="py-1.5 md:py-2 px-4 rounded-full w-[19rem] mt-2 text-black md:mt-6 outline-0 text-xl"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-10 md:mt-4"
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
