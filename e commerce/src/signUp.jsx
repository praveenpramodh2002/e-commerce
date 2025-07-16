import React from "react";
import { Link } from "react-router-dom";

const bgUrl = "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80";

const SignUp = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-gray-900 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Illustration Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-800/80 to-purple-800/80 p-10 w-1/2 h-full">
          <svg width="100" height="100" fill="none" viewBox="0 0 24 24" className="mb-6">
            <circle cx="12" cy="12" r="10" fill="#6366f1"/>
            <path d="M12 6a4 4 0 100 8 4 4 0 000-8zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#a78bfa"/>
          </svg>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Join GameHub!</h2>
          <p className="text-gray-200 text-center">Create your account to unlock exclusive features and join the gaming community.</p>
        </div>
        {/* Form Side */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Your Account</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Enter your name" className="w-full px-4 py-2 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Create a password" className="w-full px-4 py-2 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg transition">Sign Up</button>
          </form>
          <div className="text-center mt-6">
            <span className="text-gray-300 text-sm">Already have an account? </span>
            <Link to="/login" className="text-blue-300 font-medium hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
