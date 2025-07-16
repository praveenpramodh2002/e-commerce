import React from "react";
import { Link } from "react-router-dom";

const bgUrl = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1470&q=80";

const handleGoogleLogin = () => {
  // TODO: Implement Google login logic
  alert('Google login coming soon!');
};

const Login = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-gray-900 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Illustration Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-800/80 to-blue-800/80 p-10 w-1/2 h-full">
          <svg width="100" height="100" fill="none" viewBox="0 0 24 24" className="mb-6">
            <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 21 12 17.27 7.82 21 9 12.91l-5-3.64 5.91-.01L12 2z" fill="#a78bfa"/>
          </svg>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Welcome Back!</h2>
          <p className="text-gray-200 text-center">Log in to access your personalized gaming dashboard and connect with the community.</p>
        </div>
        {/* Form Side */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In to GameHub</h2>
          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-2 rounded-lg shadow hover:bg-gray-100 transition mb-6 border border-gray-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.09 30.18 0 24 0 14.82 0 6.44 5.48 2.23 13.44l7.98 6.2C12.13 13.09 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.6C43.93 37.09 46.1 31.27 46.1 24.55z"/><path fill="#FBBC05" d="M10.21 28.65c-1.09-3.22-1.09-6.7 0-9.92l-7.98-6.2C.8 16.36 0 20.09 0 24c0 3.91.8 7.64 2.23 11.47l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.18 0 11.64-2.05 15.53-5.59l-7.19-5.6c-2.01 1.35-4.59 2.15-8.34 2.15-6.38 0-11.87-3.59-14.79-8.75l-7.98 6.2C6.44 42.52 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
            <span>Sign in with Google</span>
          </button>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none" required />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" className="w-full px-4 py-2 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none" required />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg transition">Login</button>
          </form>
          <div className="text-center mt-6">
            <span className="text-gray-300 text-sm">Don't have an account? </span>
            <Link to="/signup" className="text-purple-300 font-medium hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
