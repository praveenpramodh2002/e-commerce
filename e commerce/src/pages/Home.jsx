import { useState, useEffect } from 'react';
import { FaSteam, FaPlaystation, FaXbox, FaApple, FaGamepad, FaTrophy, FaUsers, FaHeadset, FaSearch, FaUserCircle, FaTwitter, FaDiscord, FaYoutube, FaTwitch, FaStar, FaRegStar, FaTags, FaRocket, FaPuzzlePiece, FaHeart, FaShoppingCart, FaEye, FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import g1 from "../images/g1.jpeg";
import g2 from "../images/g2.jpeg";
import g3 from "../images/g3.jpeg";
import g4 from "../images/g4.jpeg";
import g5 from "../images/g5.jpeg";
import g6 from "../images/g6.jpeg";
import g7 from "../images/g7.jpeg";
import g8 from "../images/g8.jpeg";
import gamingBgVideo from "../Video/intro.mp4";
import { Play, ChevronDown, Star, Users, Gamepad2 } from 'lucide-react';

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

const heroImages = [
  'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080'
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalGame, setModalGame] = useState(null);
  const [statCounts, setStatCounts] = useState(stats.map(() => 0));
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [paymentErrors, setPaymentErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filtered games for Featured and New Games sections
  const filteredFeaturedGames = featuredGames.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const newGamesList = [
    { name: 'Night Arena', genre: 'Party, Arcade', image: g1, rating: 5, price: '$29.99' },
    { name: 'Dota Legends', genre: 'MOBA, Esports', image: g2, rating: 4, price: '$39.99' },
    { name: 'Spider Hero', genre: 'Action, Adventure', image: g3, rating: 5, price: '$49.99' },
    { name: 'Neon Road', genre: 'Sports, Racing', image: g4, rating: 4, price: '$34.99' },
    { name: 'Retro Racer', genre: 'Racing, Retro', image: g5, rating: 5, price: '$19.99' },
    { name: 'Shadowfall', genre: 'Action, Stealth', image: g6, rating: 3, price: '$24.99' },
    { name: 'Velocity Rush', genre: 'Racing, Arcade', image: g7, rating: 4, price: '$27.99' },
    { name: 'Ironclad Tactics', genre: 'Strategy, Tactics', image: g8, rating: 4, price: '$31.99' },
  ];
  const filteredNewGames = newGamesList.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-gray-800 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <Link
              to="/login"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition"
            >
              <FaUserCircle className="text-xl mr-1" />
              <span>Sign In</span>
            </Link>
            {/* In the navbar, make cart icon clickable */}
            <div className="relative ml-2">
              <button onClick={() => setShowCartModal(true)} className="focus:outline-none">
                <FaShoppingCart className="text-2xl text-pink-400" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cart.length}</span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modern Hero Section with Advanced Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentImage === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={image}
                alt={`Gaming Scene ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Advanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/60 to-pink-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-spin slow-spin" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fadeIn">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Premium Gaming Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight animate-slideUp">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Discover Your
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mt-2">
              Next Adventure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
            Explore thousands of games across all platforms. Find your perfect match with our 
            <span className="text-purple-300 font-semibold"> curated collections</span> and 
            <span className="text-pink-300 font-semibold"> AI-powered recommendations</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slideUp delay-400">
            <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                Browse Games
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity" />
            </button>
            
            <button className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-purple-400 hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Trailer
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 animate-slideUp delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50K+</div>
              <div className="text-gray-400 text-sm">Games Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">2M+</div>
              <div className="text-gray-400 text-sm">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">4.9★</div>
              <div className="text-gray-400 text-sm">User Rating</div>
            </div>
          </div>
        </div>

        {/* Enhanced Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                currentImage === idx 
                  ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setCurrentImage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {currentImage === idx && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 animate-shimmer" />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-medium rotate-90 origin-center mb-4">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-purple-300" />
          </div>
        </div>
        
        <div className="absolute top-40 right-16 animate-float delay-1000">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center">
            <Star className="w-6 h-6 text-pink-300 fill-current" />
          </div>
        </div>
      </section>

        {/* New Games Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            New <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Games</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredNewGames.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-12">No games found.</div>
          ) : (
            filteredNewGames.map((game, idx) => (
              <div
                key={game.name}
                className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-purple-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50"
              >
                {/* New badge */}
                <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 animate-pulse">
                  NEW
                </span>
                
                {/* Game image */}
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Card content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-center group-hover:text-purple-300 transition-colors duration-300">
                    {game.name}
                  </h3>
                  <p className="text-pink-400 text-lg font-semibold text-center mb-2">{game.price}</p>
                  <p className="text-gray-400 text-sm mb-4 text-center">{game.genre}</p>
                  
                  {/* Star rating */}
                  <div className="flex mb-6 justify-center">
                    {[...Array(5)].map((_, i) =>
                      i < game.rating ? (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ) : (
                        <FaRegStar key={i} className="text-gray-500 text-lg" />
                      )
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="mt-auto flex flex-row gap-3 justify-center">
                    <button
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 p-3 rounded-full transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-110"
                      title="View Details"
                      aria-label="View Details"
                      onClick={() => { setModalGame(game); setShowModal(true); }}
                    >
                      <FaEye className="text-lg" />
                    </button>
                    <button
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 p-3 rounded-full transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-110"
                      title="Buy Now"
                      aria-label="Buy Now"
                      onClick={() => { setSelectedGame(game); setShowPaymentModal(true); }}
                    >
                      <FaCreditCard className="text-lg" />
                    </button>
                    <button
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 p-3 rounded-full transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-110"
                      title="Add to Cart"
                      aria-label="Add to Cart"
                      onClick={() => setCart(prev => prev.find(item => item.name === game.name) ? prev : [...prev, game])}
                    >
                      <FaShoppingCart className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* New Games Videos Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            New <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Games Videos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Video 1 */}
          <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 transform hover:scale-105">
            <div className="relative overflow-hidden">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/2gUtfBmw86Y"
                title="Fortnite Chapter 5 Launch Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 md:h-56 lg:h-60 transition-all duration-300 group-hover:scale-105"
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                Fortnite Chapter 5 Launch Trailer
              </h3>
            </div>
          </div>
          
          {/* Video 2 */}
          <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 transform hover:scale-105">
            <div className="relative overflow-hidden">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/FYH9n37B7Yw"
                title="Forza Horizon – Official Gameplay"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 md:h-56 lg:h-60 transition-all duration-300 group-hover:scale-105"
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                Forza Horizon – Official Gameplay
              </h3>
            </div>
          </div>
          
          {/* Video 3 */}
          <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 transform hover:scale-105">
            <div className="relative overflow-hidden">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/1O6Qstncpnc"
                title="Call of Duty: Modern Warfare III - Official Launch Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 md:h-56 lg:h-60 transition-all duration-300 group-hover:scale-105"
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                COD: Modern Warfare III - Launch Trailer
              </h3>
            </div>
          </div>
          
          {/* Video 4 */}
          <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 transform hover:scale-105">
            <div className="relative overflow-hidden">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/uHGShqcAHlQ"
                title="The Legend of Zelda: Tears of the Kingdom - Official Trailer #3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 md:h-56 lg:h-60 transition-all duration-300 group-hover:scale-105"
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                Zelda: Tears of the Kingdom - Official Trailer #3
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-pink-900/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">GameHub</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-6 border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-300">
                <FaTrophy className="text-purple-400 text-3xl group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">Curated Selection</h3>
              <p className="text-gray-300 leading-relaxed">We handpick only the best games from all genres and platforms to ensure quality and unforgettable gaming experiences.</p>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-6 border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-300">
                <FaUsers className="text-purple-400 text-3xl group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">Community Driven</h3>
              <p className="text-gray-300 leading-relaxed">Join our vibrant community of gamers to share experiences, get recommendations, and connect with fellow players.</p>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-6 border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-300">
                <FaHeadset className="text-purple-400 text-3xl group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">24/7 Support</h3>
              <p className="text-gray-300 leading-relaxed">Our dedicated support team is always ready to help with any issues or questions you might have.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Games</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
         <Link to="/games">
  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
    View All Games →
  </button>
</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFeaturedGames.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-12">No games found.</div>
          ) : (
            filteredFeaturedGames.map(game => (
              <div key={game.id} className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700/50 transform hover:scale-105 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={game.image} alt={game.title} className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Discount badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    -{Math.round((parseFloat(game.price.substring(1)) - parseFloat(game.discount.substring(1))) / parseFloat(game.price.substring(1)) * 100)}%
                  </div>
                  
                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button 
                      onClick={() => { setModalGame(game); setShowModal(true); }} 
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Quick View
                    </button>
                  </div>
                  
                  <button className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 text-pink-400 hover:text-pink-300 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    <FaHeart className="text-lg" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-center group-hover:text-purple-300 transition-colors duration-300">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 text-center">{game.genre}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      {game.platforms.map((platform, index) => (
                        <span key={index} className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-gray-300 hover:text-white transition-colors duration-300">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="line-through text-gray-500 mr-2 text-sm">{game.price}</span>
                    <span className="font-bold text-lg text-green-400">{game.discount}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700/50">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Contact Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            
            <form className="space-y-6" onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              const name = form.name.value.trim();
              const email = form.email.value.trim();
              const message = form.message.value.trim();
              let error = '';
              if (!name) error = 'Name is required.';
              else if (!email || !/^\S+@\S+\.\S+$/.test(email)) error = 'Valid email is required.';
              else if (!message) error = 'Message is required.';
              if (error) {
                form.querySelector('.contact-error').textContent = error;
                form.querySelector('.contact-success').textContent = '';
              } else {
                form.querySelector('.contact-error').textContent = '';
                form.querySelector('.contact-success').textContent = 'Thank you for contacting us!';
                form.reset();
              }
            }}>
              <div className="space-y-4">
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full border border-gray-600/50 rounded-xl px-6 py-4 bg-gray-900/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-transparent focus:outline-none transition-all duration-300" 
                />
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full border border-gray-600/50 rounded-xl px-6 py-4 bg-gray-900/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-transparent focus:outline-none transition-all duration-300" 
                />
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows={5} 
                  className="w-full border border-gray-600/50 rounded-xl px-6 py-4 bg-gray-900/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-transparent focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </button>
              
              <div className="contact-error text-red-400 text-center mt-3 text-sm font-medium"></div>
              <div className="contact-success text-green-400 text-center mt-3 text-sm font-medium"></div>
            </form>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-pink-900/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Gamers</span> Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700/50 transform hover:scale-105">
                <div className="relative mb-6">
                  <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300" />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1">
                    <div className="bg-gray-900 rounded-full p-1">
                      <FaStar className="text-yellow-400 text-sm" />
                    </div>
                  </div>
                </div>
                
                <p className="text-lg italic mb-6 text-center text-gray-300 leading-relaxed">"{t.text}"</p>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => 
                    i < t.rating ? 
                      <FaStar key={i} className="text-yellow-400 text-lg" /> : 
                      <FaRegStar key={i} className="text-gray-500 text-lg" />
                  )}
                </div>
                
                <span className="font-semibold text-xl group-hover:text-purple-300 transition-colors duration-300">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {showModal && modalGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-md w-full relative shadow-2xl border border-gray-700/50 transform animate-pulse">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-3xl transition-colors duration-300 hover:rotate-90 transform"
            >
              ×
            </button>
            
            <div className="text-center">
              <img src={modalGame.image} alt={modalGame.title || modalGame.name} className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg" />
              <h3 className="text-2xl font-bold mb-3 text-white">{modalGame.title || modalGame.name}</h3>
              <p className="text-gray-400 mb-3">{modalGame.genre}</p>
              
              {modalGame.platforms && (
                <div className="flex justify-center space-x-2 mb-4">
                  {modalGame.platforms.map((platform, index) => (
                    <span key={index} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300">
                      {platform}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mb-6">
                {modalGame.price && modalGame.discount ? (
                  <>
                    <span className="line-through text-gray-500 mr-2">{modalGame.price}</span>
                    <span className="font-bold text-2xl text-green-400">{modalGame.discount}</span>
                  </>
                ) : (
                  <span className="font-bold text-2xl text-pink-400">{modalGame.price}</span>
                )}
              </div>
              
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold w-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative text-gray-900 border border-gray-200">
            <button 
              onClick={() => setShowPaymentModal(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-3xl transition-colors duration-300 hover:rotate-90 transform"
            >
              ×
            </button>
            
            <div className="flex flex-col items-center mb-8">
              <img src={selectedGame.image} alt={selectedGame.name} className="w-24 h-24 object-cover rounded-2xl mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold mb-2 text-center">{selectedGame.name}</h3>
              <p className="text-pink-500 text-xl font-bold mb-2">{selectedGame.price}</p>
              <p className="text-gray-500 text-center">{selectedGame.genre}</p>
            </div>
            
            <form
              className="space-y-6"
              onSubmit={e => {
                e.preventDefault();
                setPaymentSuccess(false);
                const form = e.target;
                const name = form.name.value.trim();
                const email = form.email.value.trim();
                const card = form.card.value.replace(/\s+/g, '');
                const expiry = form.expiry.value.trim();
                const cvv = form.cvv.value.trim();
                const errors = {};
                if (!name) errors.name = 'Name is required.';
                if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Valid email is required.';
                if (!card || !/^\d{16,19}$/.test(card)) errors.card = 'Valid card number is required.';
                if (!expiry || !/^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry)) errors.expiry = 'Expiry must be MM/YY.';
                if (!cvv || !/^\d{3,4}$/.test(cvv)) errors.cvv = 'CVV must be 3 or 4 digits.';
                setPaymentErrors(errors);
                if (Object.keys(errors).length === 0) {
                  setPaymentSuccess(true);
                  form.reset();
                  setCart(prev => prev.filter(g => g.name !== selectedGame.name));
                  setTimeout(() => setShowPaymentModal(false), 2000);
                }
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="name">Name on Card</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Name on Card" 
                    className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:outline-none transition-all duration-300 ${paymentErrors.name ? 'border-red-500' : 'border-gray-300'}`} 
                    required 
                  />
                  {paymentErrors.name && <div className="text-red-500 text-sm mt-1">{paymentErrors.name}</div>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">Email</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:outline-none transition-all duration-300 ${paymentErrors.email ? 'border-red-500' : 'border-gray-300'}`} 
                    required 
                  />
                  {paymentErrors.email && <div className="text-red-500 text-sm mt-1">{paymentErrors.email}</div>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="card">Card Number</label>
                  <input 
                    id="card" 
                    name="card" 
                    type="text" 
                    placeholder="Card Number" 
                    className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:outline-none transition-all duration-300 ${paymentErrors.card ? 'border-red-500' : 'border-gray-300'}`} 
                    maxLength={19} 
                    required 
                  />
                  {paymentErrors.card && <div className="text-red-500 text-sm mt-1">{paymentErrors.card}</div>}
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="expiry">MM/YY</label>
                    <input 
                      id="expiry" 
                      name="expiry" 
                      type="text" 
                      placeholder="MM/YY" 
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:outline-none transition-all duration-300 ${paymentErrors.expiry ? 'border-red-500' : 'border-gray-300'}`} 
                      maxLength={5} 
                      required 
                    />
                    {paymentErrors.expiry && <div className="text-red-500 text-sm mt-1">{paymentErrors.expiry}</div>}
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="cvv">CVV</label>
                    <input 
                      id="cvv" 
                      name="cvv" 
                      type="text" 
                      placeholder="CVV" 
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:outline-none transition-all duration-300 ${paymentErrors.cvv ? 'border-red-500' : 'border-gray-300'}`} 
                      maxLength={4} 
                      required 
                    />
                    {paymentErrors.cvv && <div className="text-red-500 text-sm mt-1">{paymentErrors.cvv}</div>}
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Pay Now
              </button>
              
              {paymentSuccess && (
                <div className="text-green-600 text-center font-semibold mt-4 text-lg animate-pulse">
                  Payment Successful! 🎉
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative text-gray-900 border border-gray-200">
            <button 
              onClick={() => setShowCartModal(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-3xl transition-colors duration-300 hover:rotate-90 transform"
            >
              ×
            </button>
            
            <h3 className="text-3xl font-bold mb-6 text-center">Your Cart</h3>
            
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <FaShoppingCart className="text-6xl mx-auto mb-4 text-gray-300" />
                <p className="text-lg">Your cart is empty.</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, idx) => (
                    <div key={item.name} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl shadow" />
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{item.name}</div>
                        <div className="text-pink-500 font-bold">{item.price}</div>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700 font-bold text-sm bg-red-50 hover:bg-red-100 px-3 py-1 rounded-full transition-all duration-300"
                        onClick={() => setCart(cart.filter(g => g.name !== item.name))}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    setShowCartModal(false);
                    setSelectedGame(cart[0]);
                    setShowPaymentModal(true);
                  }}
                >
                  Checkout ({cart.length} items)
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-gray-900/95 to-pink-900/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Start Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Gaming Journey?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Join thousands of gamers who discover, play, and share their favorite games every day. Your next adventure awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-white">
                Create Free Account
              </button>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105">
                Explore Games
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Icon Button (Fixed Position) */}
      <button
        onClick={() => setShowCartModal(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        <FaShoppingCart className="text-xl" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
    
    

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