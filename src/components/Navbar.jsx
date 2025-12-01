import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaMusic, FaVideo, FaGamepad, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", icon: <FaHome size={16} />, label: "Home" },
    { path: "/artigo", icon: <FaBook size={16} />, label: "Artigo" },
    { path: "/audio", icon: <FaMusic size={16} />, label: "Áudio" },
    { path: "/video", icon: <FaVideo size={16} />, label: "Vídeo" },
    { path: "/jogos", icon: <FaGamepad size={16} />, label: "Jogos" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A192F]/95 backdrop-blur-md py-2 shadow-lg' : 'bg-[#0A192F] py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Compacta */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group flex-shrink-0 min-w-0"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-400 rounded flex items-center justify-center shadow group-hover:shadow-cyan-400/25 transition-all duration-300">
              <span className="text-[#0A192F] font-bold text-sm">HE</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold font-mono text-[#00E5FF] group-hover:text-[#00FF88] transition-colors duration-300 whitespace-nowrap truncate max-w-[120px] sm:max-w-none">
              Hacking Ethic
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-2 xl:gap-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                    isActive(item.path)
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "hover:bg-cyan-500/10 hover:text-cyan-300 text-gray-300"
                  }`}
                  to={item.path}
                >
                  {item.icon}
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-cyan-500/10 rounded transition-colors duration-300 text-cyan-400 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 text-base ${
                    isActive(item.path)
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "hover:bg-cyan-500/10 hover:text-cyan-300 text-gray-300"
                  }`}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}