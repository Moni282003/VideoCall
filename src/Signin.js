import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/authContext';
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
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-900">
      <div>
        <img src={logins} className='w-full mb-8 md:w-[600px]' alt="Login" />
      </div>
      <div className="w-full max-w-md p-4 bg-gray-700 bg-opacity-70 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
          <h2 className="text-center text-4xl font-semibold text-white">Sign In</h2>
          <div className="flex items-center border rounded-lg p-2 bg-white">
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
          <div className="flex items-center border rounded-lg p-2 bg-white">
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
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold w-full">Sign In</button>
          <div className='flex justify-center'>
            <label className='text-lg text-white'>New to VideoCall?</label>
            <Link className='text-lg text-blue-300 underline ml-1' to='/signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
