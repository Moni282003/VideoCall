import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/authContext';
import reg from './assets/register.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert("Please fill all the fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await register(email, password);
      navigate('/');
      alert("Successfully registered!");
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message || "Registration failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-900">
      <h2 className="text-center text-4xl font-bold text-white">SIGN UP</h2>
      <div className="w-full max-w-md p-4 bg-gray-600 bg-opacity-50 rounded-2xl shadow-lg">
        <img src={reg} className="w-full mb-4" alt="Register" />
        <form onSubmit={handleRegister}>
          <div className="mb-4 flex items-center border rounded-lg p-2 bg-white">
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
          <div className="mb-4 flex items-center border rounded-lg p-2 bg-white">
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
          <div className="mb-4 flex items-center border rounded-lg p-2 bg-white">
            <RiLockPasswordFill size={25} color='gray' />
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="rounded-md px-3 py-2 mt-1 w-full outline-none"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold w-full">Sign Up</button>
        </form>
        <div className='flex justify-center'>
          <label className='text-lg text-white'>Already have an account?</label>
          <Link className='text-lg text-blue-300 underline ml-1' to='/signin'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
