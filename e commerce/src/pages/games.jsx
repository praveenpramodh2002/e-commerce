import { Link } from 'react-router-dom';
import { FaGamepad, FaShoppingCart, FaTwitter, FaDiscord, FaTwitch, FaYoutube } from 'react-icons/fa';
import g1 from '../images/g1.jpeg';
import g2 from '../images/g2.jpeg';
import g3 from '../images/g3.jpeg';
import g4 from '../images/g4.jpeg';
import g5 from '../images/g5.jpeg';
import g6 from '../images/g6.jpeg';
import g7 from '../images/g7.jpeg';
import g8 from '../images/g8.jpeg';

const games = [
  { id: 1, title: 'Galaxy Quest', image: g1, url: 'https://www.crazygames.com/game/space-company' },
  { id: 2, title: 'Mystic Valley', image: g2, url: 'https://www.crazygames.com/game/magic-piano-tiles' },
  { id: 3, title: 'Cyber Runner', image: g3, url: 'https://www.crazygames.com/game/run-3' },
  { id: 4, title: 'Shadow Legends', image: g4, url: 'https://www.crazygames.com/game/temple-run-2' },
  { id: 5, title: 'Pixel Wars', image: g5, url: 'https://www.crazygames.com/game/pixel-gun-survival' },
  { id: 6, title: 'Neon Drive', image: g6, url: 'https://www.crazygames.com/game/neon-racer' },
  { id: 7, title: 'Dragon Realms', image: g7, url: 'https://www.crazygames.com/game/little-dragon-heroes-world-simulato' },
  { id: 8, title: 'Aqua Adventure', image: g8, url: 'https://www.crazygames.com/game/aquapark-io' },
];

function GameCard({ title, image, url }) {
  return (
    <div className="block bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-200 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 text-sm underline hover:text-purple-300 transition font-semibold"
        >
          Play Now
        </a>
      </div>
    </div>
  );
}

export default function GamesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-gray-950/90 to-purple-950/90 shadow-lg backdrop-blur-md">
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaGamepad className="text-purple-500 text-3xl animate-pulse" />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wider">GameHub</span>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link to="/" className="relative group transition text-gray-200 hover:text-purple-400">
              <span>Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/games" className="relative group transition text-purple-400 font-bold">
              <span>Games</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-500 transition-all"></span>
            </Link>
            <a href="#" className="relative group transition text-gray-200 hover:text-purple-400">
              <span>News</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group transition text-gray-200 hover:text-purple-400">
              <span>Reviews</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group transition text-gray-200 hover:text-purple-400">
              <span>About</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
          </div>
          {/* User/Login */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition"
            >
              <span>Sign In</span>
            </Link>
            <div className="relative ml-2">
              <button className="focus:outline-none">
                <FaShoppingCart className="text-2xl text-pink-400" />
              </button>
            </div>
          </div>
        </nav>
      </header>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-950 to-purple-950 py-12 border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Logo & Social */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaGamepad className="text-purple-500 text-2xl" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">GameHub</span>
              </div>
              <p className="text-gray-400 mb-4">Your ultimate destination for discovering and enjoying the best games across all platforms.</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-purple-400 transition"><FaTwitter /></a>
                <a href="#" className="hover:text-purple-400 transition"><FaDiscord /></a>
                <a href="#" className="hover:text-purple-400 transition"><FaTwitch /></a>
                <a href="#" className="hover:text-purple-400 transition"><FaYoutube /></a>
              </div>
            </div>
            {/* Explore */}
            <div>
              <h3 className="text-lg font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Popular Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">New Releases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Upcoming Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Top Rated</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Blog</a></li>
              </ul>
            </div>
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-3">Get the latest gaming news and deals delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                />
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-medium transition">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2023 GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
