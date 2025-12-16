import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order', path: '/order' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://static.readdy.ai/image/085e3e8e8fae5c3c13c744935514087c/6e5dc2c5dbadb1751d076debbf11fa47.png"
            alt="Flame & Stone Pizza"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-10' : 'h-12'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-inter font-medium text-base transition-colors duration-300 ${
                location.pathname === link.path
                  ? isScrolled
                    ? 'text-flame-orange'
                    : 'text-white'
                  : isScrolled
                  ? 'text-charcoal hover:text-flame-orange'
                  : 'text-white hover:text-flame-orange'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:01844345000"
            className={`font-inter text-sm transition-colors duration-300 flex items-center gap-2 ${
              isScrolled
                ? 'text-charcoal hover:text-flame-orange'
                : 'text-white hover:text-flame-orange'
            }`}
          >
            <i className="ri-phone-line"></i>
            <span className="whitespace-nowrap">Collection / Help</span>
          </a>
          <a
            href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu?shipping=pickup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-flame-orange text-white font-inter font-bold text-sm px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
          >
            ORDER NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden w-10 h-10 flex items-center justify-center ${
            isScrolled ? 'text-charcoal' : 'text-white'
          }`}
        >
          <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-inter font-medium text-base py-2 ${
                    location.pathname === link.path
                      ? 'text-flame-orange'
                      : 'text-charcoal hover:text-flame-orange'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:01844345000"
                className="block font-inter text-base py-2 text-charcoal hover:text-flame-orange flex items-center gap-2"
              >
                <i className="ri-phone-line"></i>
                Collection / Help: 01844 345000
              </a>
              <a
                href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu?shipping=pickup"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-flame-orange text-white font-inter font-bold text-base px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
              >
                ORDER NOW
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}