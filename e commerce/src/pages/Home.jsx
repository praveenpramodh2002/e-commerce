import { useState, useEffect } from 'react';
import { FaSteam, FaPlaystation, FaXbox, FaApple, FaGamepad, FaTrophy, FaUsers, FaHeadset, FaSearch, FaUserCircle, FaTwitter, FaDiscord, FaYoutube, FaTwitch, FaStar, FaRegStar, FaTags, FaRocket, FaPuzzlePiece, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import g1 from '../images/g1.jpeg';
import g2 from '../images/g2.jpeg';
import g3 from '../images/g3.jpeg';
import g4 from '../images/g4.jpeg';
import g5 from '../images/g5.jpeg';
import g6 from '../images/g6.jpeg';
import g7 from '../images/g7.jpeg';
import g8 from '../images/g8.jpeg';
import gamingBgVideo from '../Video/intro.mp4';

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
  // Add state for payment modal
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  // Add state for payment form validation
  const [paymentErrors, setPaymentErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  // Add cart state
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

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
      {/* In the Featured Games section, add advanced background */}
      <section className="relative container mx-auto px-6 py-16 overflow-hidden">
        {/* Advanced SVG/gradient background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/80 via-gray-900/80 to-pink-900/80 absolute inset-0" />
          <svg className="absolute opacity-20 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320"><path fill="#a78bfa" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
        <div className="relative z-10">
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
            { name: 'Night Arena', genre: 'Party, Arcade', image: g1, rating: 5, price: '$29.99' },
            { name: 'Dota Legends', genre: 'MOBA, Esports', image: g2, rating: 4, price: '$39.99' },
            { name: 'Spider Hero', genre: 'Action, Adventure', image: g3, rating: 5, price: '$49.99' },
            { name: 'Neon Road', genre: 'Sports, Racing', image: g4, rating: 4, price: '$34.99' },
            { name: 'Retro Racer', genre: 'Racing, Retro', image: g5, rating: 5, price: '$19.99' },
            { name: 'Shadowfall', genre: 'Action, Stealth', image: g6, rating: 3, price: '$24.99' },
            { name: 'Velocity Rush', genre: 'Racing, Arcade', image: g7, rating: 4, price: '$27.99' },
            { name: 'Ironclad Tactics', genre: 'Strategy, Tactics', image: g8, rating: 4, price: '$31.99' },
          ].map((game, idx) => (
            <div key={game.name} className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition flex flex-col">
              <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-1 text-center">{game.name}</h3>
                <p className="text-pink-400 text-base font-semibold text-center mb-1">{game.price}</p>
                <p className="text-gray-400 text-xs mb-2">{game.genre}</p>
                <div className="flex mb-3 justify-center">
                  {[...Array(5)].map((_, i) => i < game.rating ? <FaStar key={i} className="text-yellow-400 text-sm" /> : <FaRegStar key={i} className="text-gray-500 text-sm" />)}
                </div>
                <div className="mt-auto flex flex-col gap-2">
                  <button className="bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded font-medium w-full transition text-sm mb-1">View Details</button>
                  <button
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded font-medium w-full transition text-sm"
                    onClick={() => { setSelectedGame(game); setShowPaymentModal(true); }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="bg-purple-500 hover:bg-purple-700 px-3 py-1 rounded font-medium w-full transition text-sm"
                    onClick={() => setCart(prev => prev.find(item => item.name === game.name) ? prev : [...prev, game])}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      {/* In the Why Choose GameHub section, add advanced background */}
      <section className="relative bg-gray-800 py-16 overflow-hidden">
        {/* Advanced SVG/gradient background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/80 via-gray-900/80 to-pink-900/80 absolute inset-0" />
          <svg className="absolute opacity-20 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320"><path fill="#ec4899" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
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

     

      
{/* Add About section above the footer */}
<section className="relative container mx-auto px-6 py-16 overflow-hidden">
  {/* Advanced SVG/gradient background */}
  <div className="absolute inset-0 w-full h-full z-0">
    <div className="w-full h-full bg-gradient-to-br from-pink-900/80 via-gray-900/80 to-purple-900/80 absolute inset-0" />
    <svg className="absolute opacity-20 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320"><path fill="#a78bfa" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  </div>
  <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-4 text-purple-500">About GameHub</h2>
      <p className="text-lg text-gray-300 mb-4">GameHub is your ultimate destination for discovering, playing, and sharing the best games across all platforms. We are passionate about building a vibrant gaming community and providing curated selections, exclusive deals, and 24/7 support for gamers worldwide.</p>
      <ul className="list-disc list-inside text-gray-400 mb-4">
        <li>Curated game collections</li>
        <li>Community-driven reviews</li>
        <li>Exclusive offers and events</li>
        <li>Modern, user-friendly experience</li>
      </ul>
    </div>
    <div className="flex-1 flex justify-center">
      <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="About GameHub" className="rounded-2xl shadow-lg w-80 h-64 object-cover" />
    </div>
  </div>
</section>

      {/* Add Contact Me section below About */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Contact Me</h2>
          <form className="space-y-4" onSubmit={e => {
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
            <input name="name" type="text" placeholder="Your Name" className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:ring-2 focus:ring-pink-400 focus:outline-none" />
            <input name="email" type="email" placeholder="Your Email" className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:ring-2 focus:ring-pink-400 focus:outline-none" />
            <textarea name="message" placeholder="Your Message" rows={4} className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:ring-2 focus:ring-pink-400 focus:outline-none"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg text-lg transition">Send Message</button>
            <div className="contact-error text-red-500 text-center mt-2 text-sm"></div>
            <div className="contact-success text-green-500 text-center mt-2 text-sm"></div>
          </form>
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

      {/* Payment Modal */}
      {showPaymentModal && selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fadeIn text-gray-900 border border-gray-200">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-pink-400 text-2xl">&times;</button>
            <div className="flex flex-col items-center mb-6">
              <img src={selectedGame.image} alt={selectedGame.name} className="w-24 h-24 object-cover rounded-lg mb-2 shadow" />
              <h3 className="text-xl font-bold mb-1 text-center">{selectedGame.name}</h3>
              <p className="text-pink-500 text-lg font-semibold mb-1">{selectedGame.price}</p>
              <p className="text-gray-500 mb-2 text-center">{selectedGame.genre}</p>
            </div>
            <form
              className="space-y-4"
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
                  setTimeout(() => setShowPaymentModal(false), 1500);
                }
              }}
            >
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="name">Name on Card</label>
                <input id="name" name="name" type="text" placeholder="Name on Card" className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none ${paymentErrors.name ? 'border-red-500' : ''}`} required />
                {paymentErrors.name && <div className="text-red-500 text-xs mt-1">{paymentErrors.name}</div>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400"><svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z' /></svg></span>
                  <input id="email" name="email" type="email" placeholder="Email" className={`w-full border border-gray-300 rounded-lg px-10 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none ${paymentErrors.email ? 'border-red-500' : ''}`} required />
                </div>
                {paymentErrors.email && <div className="text-red-500 text-xs mt-1">{paymentErrors.email}</div>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="card">Card Number</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400"><svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><rect width='20' height='12' x='2' y='6' rx='2' /><path d='M2 10h20' /></svg></span>
                  <input id="card" name="card" type="text" placeholder="Card Number" className={`w-full border border-gray-300 rounded-lg px-10 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none ${paymentErrors.card ? 'border-red-500' : ''}`} maxLength={19} required />
                </div>
                {paymentErrors.card && <div className="text-red-500 text-xs mt-1">{paymentErrors.card}</div>}
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-1" htmlFor="expiry">MM/YY</label>
                  <input id="expiry" name="expiry" type="text" placeholder="MM/YY" className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none ${paymentErrors.expiry ? 'border-red-500' : ''}`} maxLength={5} required />
                  {paymentErrors.expiry && <div className="text-red-500 text-xs mt-1">{paymentErrors.expiry}</div>}
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-1" htmlFor="cvv">CVV</label>
                  <input id="cvv" name="cvv" type="text" placeholder="CVV" className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none ${paymentErrors.cvv ? 'border-red-500' : ''}`} maxLength={4} required />
                  {paymentErrors.cvv && <div className="text-red-500 text-xs mt-1">{paymentErrors.cvv}</div>}
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg shadow-lg text-lg transition">Pay Now</button>
              {paymentSuccess && <div className="text-green-600 text-center font-semibold mt-2">Payment Successful!</div>}
            </form>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fadeIn text-gray-900 border border-gray-200">
            <button onClick={() => setShowCartModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-pink-400 text-2xl">&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-center">Your Cart</h3>
            {cart.length === 0 ? (
              <div className="text-center text-gray-500">Your cart is empty.</div>
            ) : (
              <>
                <div className="space-y-4 mb-4">
                  {cart.map((item, idx) => (
                    <div key={item.name} className="flex items-center gap-4 border-b pb-3">
                      <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                      <div className="flex-1">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-pink-500 font-bold">{item.price}</div>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700 font-bold text-sm"
                        onClick={() => setCart(cart.filter(g => g.name !== item.name))}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg shadow-lg text-lg transition mt-2"
                  onClick={() => {
                    setShowCartModal(false);
                    setSelectedGame(cart[0]);
                    setShowPaymentModal(true);
                  }}
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
 {/* Call to Action */}
      <section className="relative py-20">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={gamingBgVideo}
        />
        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Gaming Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join thousands of gamers who discover, play, and share their favorite games every day.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-md font-medium text-lg transition text-white">
            Create Free Account
          </button>
        </div>
      </section>
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