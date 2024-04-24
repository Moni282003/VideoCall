// Signin.js

import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/authContext';
import conf from './assets/conf.jpg';
import logins from './assets/login.png';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields!");
      return;
    }

    try {
      await login(email, password);
      navigate('/');
      alert("Successfully Login!");
    } catch (error) {
      console.error('Login error:', error);
      alert(error.message || "Login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen gap-40" style={{ backgroundImage: `url(${conf})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>
        <img src={logins} className='w-[600px]' alt="Login" />
      </div>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-gray-700 bg-opacity-70 rounded-2xl p-4 shadow-lg gap-8'>
          <h2 className="text-center mb-4 text-4xl font-semibold text-white">Sign In</h2>
          <div className="mb-4 flex gap-2 items-center border rounded-lg p-2 bg-white w-96">
            <MdOutlineEmail size={25} color='gray' />
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="rounded-md px-3 py-2 mt-1 w-full outline-none"
            />
          </div>
          <div className="mb-4 flex gap-2 items-center border rounded-lg p-2 bg-white w-96">
            <RiLockPasswordFill size={25} color='gray' />
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="rounded-md px-3 py-2 mt-1 w-full outline-none"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold">Sign In</button>
          <div className='flex gap-2 items-center justify-center'>
            <label className='text-xl text-white'>New to VideoCall?</label>
            <Link className='text-xl text-blue-300 underline' to='/signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
