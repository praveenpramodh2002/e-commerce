import { useState, useEffect } from 'react';
import { FaSteam, FaPlaystation, FaXbox, FaApple, FaGamepad, FaTrophy, FaUsers, FaHeadset, FaSearch, FaUserCircle, FaTwitter, FaDiscord, FaYoutube, FaTwitch, FaStar, FaRegStar, FaTags, FaRocket, FaPuzzlePiece, FaHeart } from 'react-icons/fa';
import g1 from '../images/g1.jpeg';
import g2 from '../images/g2.jpeg';
import g3 from '../images/g3.jpeg';
import g4 from '../images/g4.jpeg';
import g5 from '../images/g5.jpeg';
import g6 from '../images/g6.jpeg';
import g7 from '../images/g7.jpeg';
import g8 from '../images/g8.jpeg';

const heroImages = [
  "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
];

const categories = [
  { name: 'Action', icon: <FaRocket className="text-2xl text-purple-500" /> },
  { name: 'Adventure', icon: <FaPuzzlePiece className="text-2xl text-pink-500" /> },
  { name: 'Racing', icon: <FaTags className="text-2xl text-blue-400" /> },
  { name: 'RPG', icon: <FaTrophy className="text-2xl text-yellow-400" /> },
  { name: 'Strategy', icon: <FaUsers className="text-2xl text-green-400" /> },
  { name: 'Indie', icon: <FaGamepad className="text-2xl text-red-400" /> },
];

const testimonials = [
  {
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'GameHub is my go-to for discovering new games. The recommendations are always spot on!',
    rating: 5,
  },
  {
    name: 'Maria Lee',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'I love the community and the deals. The UI is super modern and easy to use.',
    rating: 4,
  },
  {
    name: 'Chris Evans',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'The quick view feature is a game changer. I can check details without leaving the page!',
    rating: 5,
  },
];

const stats = [
  { label: 'Happy Gamers', value: 12000 },
  { label: 'Games Listed', value: 3500 },
  { label: 'Reviews', value: 8700 },
  { label: 'Active Deals', value: 120 },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalGame, setModalGame] = useState(null);
  const [statCounts, setStatCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate stats
    const intervals = stats.map((stat, i) => setInterval(() => {
      setStatCounts((prev) => {
        const next = [...prev];
        if (next[i] < stat.value) next[i] += Math.ceil(stat.value / 50);
        if (next[i] > stat.value) next[i] = stat.value;
        return next;
      });
    }, 30));
    return () => intervals.forEach(clearInterval);
  }, []);

  const featuredGames = [
    {
      id: 1,
      title: "Cyber Horizon",
      genre: "Action RPG",
      price: "$59.99",
      discount: "$39.99",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      platforms: [<FaSteam key="steam" />, <FaPlaystation key="ps" />, <FaXbox key="xbox" />]
    },
    {
      id: 2,
      title: "Stellar Odyssey",
      genre: "Space Adventure",
      price: "$49.99",
      discount: "$29.99",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      platforms: [<FaSteam key="steam" />, <FaXbox key="xbox" />, <FaApple key="apple" />]
    },
    {
      id: 3,
      title: "Shadow Tactics",
      genre: "Stealth Strategy",
      price: "$39.99",
      discount: "$19.99",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      platforms: [<FaSteam key="steam" />, <FaPlaystation key="ps" />]
    },
    {
      id: 4,
      title: "Neon Racing X",
      genre: "Racing",
      price: "$44.99",
      discount: "$24.99",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1470&q=80",
      platforms: [<FaSteam key="steam" />, <FaPlaystation key="ps" />, <FaXbox key="xbox" />, <FaApple key="apple" />]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Advanced Navigation Bar */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-gray-950/90 to-purple-950/90 shadow-lg backdrop-blur-md">
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaGamepad className="text-purple-500 text-3xl animate-pulse" />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wider">GameHub</span>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            {['Home', 'Games', 'News', 'Reviews', 'About'].map((item, idx) => (
              <a
                key={item}
                href="#"
                className="relative group transition text-gray-200 hover:text-purple-400"
              >
                <span>{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          {/* Search & User */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="bg-gray-800 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition">
              <FaUserCircle className="text-xl mr-1" />
              <span>Sign In</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Modern Hero Section with Image Slider */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden mb-16">
        <img
          src={heroImages[currentImage]}
          alt="Gaming Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_2px_12px_rgba(236,72,153,0.7)]">Discover Your Next <span className="text-purple-500">Adventure</span></h1>
          <p className="mb-8 text-xl md:text-2xl text-gray-200">Explore thousands of games across all platforms. Find your perfect match with our curated collections and personalized recommendations.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md font-medium transition">Browse Games</button>
            <button className="bg-transparent border-2 border-purple-500 hover:bg-purple-900/30 px-6 py-3 rounded-md font-medium transition">Join Now</button>
          </div>
        </div>
        {/* Dots for slider navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 border-purple-400 transition-all duration-300 ${currentImage === idx ? 'bg-purple-500 scale-125' : 'bg-gray-700'}`}
              onClick={() => setCurrentImage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Featured <span className="text-purple-500">Games</span></h2>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition mt-2">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredGames.map(game => (
            <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 relative">
              <div className="relative">
                <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-purple-600 px-2 py-1 rounded-md text-sm font-bold">
                  -{Math.round((parseFloat(game.price.substring(1)) - parseFloat(game.discount.substring(1))) / parseFloat(game.price.substring(1)) * 100)}%
                </div>
                <button onClick={() => { setModalGame(game); setShowModal(true); }} className="absolute bottom-2 right-2 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-xs font-semibold shadow-lg">Quick View</button>
                <button className="absolute bottom-2 left-2 bg-gray-700 hover:bg-gray-800 text-pink-400 px-2 py-1 rounded-full text-lg"><FaHeart /></button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 text-center">{game.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{game.genre}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1 text-gray-400">
                    {game.platforms.map((platform, index) => (
                      <span key={index} className="hover:text-white transition">{platform}</span>
                    ))}
                  </div>
                  <div>
                    <span className="line-through text-gray-500 mr-2">{game.price}</span>
                    <span className="font-bold">{game.discount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Games Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">New <span className="text-pink-500">Games</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Game cards with local images */}
          {[
            { name: 'Night Arena', genre: 'Party, Arcade', image: g1, rating: 5 },
            { name: 'Dota Legends', genre: 'MOBA, Esports', image: g2, rating: 4 },
            { name: 'Spider Hero', genre: 'Action, Adventure', image: g3, rating: 5 },
            { name: 'Neon Road', genre: 'Sports, Racing', image: g4, rating: 4 },
            { name: 'Retro Racer', genre: 'Racing, Retro', image: g5, rating: 5 },
            { name: 'Shadowfall', genre: 'Action, Stealth', image: g6, rating: 3 },
            { name: 'Velocity Rush', genre: 'Racing, Arcade', image: g7, rating: 4 },
            { name: 'Ironclad Tactics', genre: 'Strategy, Tactics', image: g8, rating: 4 },
          ].map((game, idx) => (
            <div key={game.name} className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition flex flex-col">
              <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-1 text-center">{game.name}</h3>
                <p className="text-gray-400 text-xs mb-2">{game.genre}</p>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => i < game.rating ? <FaStar key={i} className="text-yellow-400 text-sm" /> : <FaRegStar key={i} className="text-gray-500 text-sm" />)}
                </div>
                <button className="mt-auto bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded font-medium w-full transition text-sm">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose <span className="text-purple-500">GameHub</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Selection</h3>
              <p className="text-gray-400">We handpick only the best games from all genres and platforms to ensure quality.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-gray-400">Join our vibrant community of gamers to share experiences and get recommendations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-400">Our dedicated support team is always ready to help with any issues or questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Gaming Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join thousands of gamers who discover, play, and share their favorite games every day.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-md font-medium text-lg transition">
            Create Free Account
          </button>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Browse by <span className="text-purple-500">Category</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition cursor-pointer">
              {cat.icon}
              <span className="mt-3 font-semibold text-lg">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="bg-gray-800 rounded-lg py-8 shadow">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">{statCounts[i]}</div>
              <div className="text-lg font-medium text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">What Our <span className="text-pink-400">Gamers</span> Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-900/80 rounded-lg p-8 flex flex-col items-center shadow-lg">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-4 border-purple-500" />
                <p className="text-lg italic mb-4">"{t.text}"</p>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => i < t.rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-500" />)}
                </div>
                <span className="font-semibold">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup with Animation */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
          <p className="mb-6 text-lg text-gray-300 text-center">Subscribe to our newsletter for the latest news and exclusive deals.</p>
          <form className="flex flex-col sm:flex-row items-center w-full max-w-md animate-bounceIn">
            <input type="email" placeholder="Your email address" className="flex-1 bg-gray-700 rounded-l-full px-6 py-3 text-white focus:outline-none" />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-r-full font-medium transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Quick View Modal for Products */}
      {showModal && modalGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full relative animate-fadeIn">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-pink-400 text-2xl">&times;</button>
            <img src={modalGame.image} alt={modalGame.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-2xl font-bold mb-2">{modalGame.title}</h3>
            <p className="text-gray-400 mb-2">{modalGame.genre}</p>
            <div className="flex space-x-2 mb-2">{modalGame.platforms}</div>
            <div className="mb-4">
              <span className="line-through text-gray-500 mr-2">{modalGame.price}</span>
              <span className="font-bold text-lg">{modalGame.discount}</span>
            </div>
            <button className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded font-medium w-full">Add to Cart</button>
          </div>
        </div>
      )}

      {/* Advanced Footer */}
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
};

export default Home;