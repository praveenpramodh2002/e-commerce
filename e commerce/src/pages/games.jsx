import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaShoppingCart, FaTwitter, FaDiscord, FaTwitch, FaYoutube, FaPlay, FaStar, FaHeart, FaShare } from 'react-icons/fa';
import { Search, Filter, Grid, List, TrendingUp, Award, Clock, Users } from 'lucide-react';

// Using Pexels images for game cards
const games = [
  { 
    id: 1, 
    title: 'Galaxy Quest', 
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/space-company',
    genre: 'Space Adventure',
    rating: 4.8,
    players: '2.5M',
    featured: true
  },
  { 
    id: 2, 
    title: 'Mystic Valley', 
    image: 'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/magic-piano-tiles',
    genre: 'Fantasy RPG',
    rating: 4.6,
    players: '1.8M',
    featured: false
  },
  { 
    id: 3, 
    title: 'Cyber Runner', 
    image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/run-3',
    genre: 'Cyberpunk Action',
    rating: 4.9,
    players: '3.2M',
    featured: true
  },
  { 
    id: 4, 
    title: 'Shadow Legends', 
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/temple-run-2',
    genre: 'Dark Fantasy',
    rating: 4.7,
    players: '2.1M',
    featured: false
  },
  { 
    id: 5, 
    title: 'Pixel Wars', 
    image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/pixel-gun-survival',
    genre: 'Retro Shooter',
    rating: 4.5,
    players: '1.9M',
    featured: false
  },
  { 
    id: 6, 
    title: 'Neon Drive', 
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/neon-racer',
    genre: 'Racing',
    rating: 4.8,
    players: '2.7M',
    featured: true
  },
  { 
    id: 7, 
    title: 'Dragon Realms', 
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/little-dragon-heroes-world-simulato',
    genre: 'Fantasy Adventure',
    rating: 4.6,
    players: '1.5M',
    featured: false
  },
  { 
    id: 8, 
    title: 'Aqua Adventure', 
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    url: 'https://www.crazygames.com/game/aquapark-io',
    genre: 'Underwater Exploration',
    rating: 4.4,
    players: '1.3M',
    featured: false
  },
];

function GameCard({ title, image, url, genre, rating, players, featured }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Award className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
      >
        <FaHeart className={`w-4 h-4 transition-colors ${isLiked ? 'text-red-500' : 'text-white/70'}`} />
      </button>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Play Button Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="w-16 h-16 bg-purple-600/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110">
            <FaPlay className="w-6 h-6 text-white ml-1" />
          </button>
        </div>

        {/* Genre Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full">
            {genre}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        
        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <FaStar className="w-3 h-3 text-yellow-400 fill-current" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{players}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Play Now
          </a>
          <button className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <FaShare className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === 'all' || game.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
  );

  const genres = ['all', 'space', 'fantasy', 'cyberpunk', 'racing', 'shooter'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-spin slow-spin" />
      </div>

      {/* Navigation Bar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <FaGamepad className="text-purple-500 text-3xl group-hover:text-purple-400 transition-colors animate-pulse" />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-400/30 transition-all" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent tracking-wider">
                GameHub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Games', 'News', 'Reviews', 'About'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative group text-lg font-medium transition-all duration-300 ${
                    item === 'Games' 
                      ? 'text-purple-400 font-bold' 
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  <span>{item}</span>
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                    item === 'Games' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Sign In
              </Link>
              <button className="relative p-2 text-pink-400 hover:text-pink-300 transition-colors">
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">Trending Games</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Discover Epic
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mt-2">
              Gaming Adventures
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of premium games across all genres. 
            From indie gems to AAA blockbusters, find your next gaming obsession.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>

              {/* Genre Filter */}
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre} className="bg-gray-900 text-white">
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <main className="relative z-10 px-6 pb-20">
        <div className="container mx-auto">
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {filteredGames.length}
              </div>
              <div className="text-gray-400 text-sm">Games Found</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-gray-400 text-sm">Total Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2M+
              </div>
              <div className="text-gray-400 text-sm">Active Players</div>
            </div>
          </div>

          {/* Games Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              Load More Games
            </button>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-r from-gray-950/90 to-purple-950/90 backdrop-blur-xl border-t border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <FaGamepad className="text-purple-500 text-2xl" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  GameHub
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your ultimate destination for discovering and enjoying the best games across all platforms.
              </p>
              <div className="flex space-x-4">
                {[FaTwitter, FaDiscord, FaTwitch, FaYoutube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {[
              { title: 'Explore', links: ['Popular Games', 'New Releases', 'Upcoming Games', 'Top Rated'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Contact', 'Blog'] },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Get the latest gaming news and exclusive deals delivered to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 GameHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}