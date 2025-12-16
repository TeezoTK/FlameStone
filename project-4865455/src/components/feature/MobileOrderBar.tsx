
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileOrderBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="px-4 py-3 flex items-center gap-2">
            <a
              href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu?shipping=pickup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-flame-orange text-white font-inter font-bold text-sm py-3 px-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <span className="truncate">COLLECTION</span>
              <i className="ri-shopping-bag-3-line text-base flex-shrink-0"></i>
            </a>
            <a
              href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-charcoal text-white font-inter font-bold text-sm py-3 px-2 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <span className="truncate">DELIVERY</span>
              <i className="ri-e-bike-2-line text-base flex-shrink-0"></i>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
