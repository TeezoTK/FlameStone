import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=artisan%20pizza%20chef%20stretching%20fresh%20dough%20in%20rustic%20italian%20stone%20oven%20pizzeria%20kitchen%20with%20warm%20ambient%20lighting%20flames%20visible%20in%20background%20professional%20food%20photography%20shallow%20depth%20of%20field%20authentic%20craftsmanship%20scene%20capturing%20traditional%20pizza%20making%20process%20with%20wooden%20pizza%20peel%20and%20flour%20dust%20in%20air%20cozy%20warm%20tones&width=1920&height=1080&seq=hero001&orientation=landscape"
          alt="Stone-baked pizza at Flame & Stone"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-flame-orange font-bebas text-sm tracking-[0.3em] mb-4">
            PRINCES RISBOROUGH'S FINEST
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair font-bold text-6xl md:text-8xl text-white mb-6 leading-tight"
        >
          Stone-Baked Perfection
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-xl md:text-2xl text-off-white mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Handcrafted pizzas made with fresh dough, quality ingredients, and baked fast in our Italian stone oven
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
        >
          <a
            href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu?shipping=pickup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-flame-orange text-white font-inter font-bold text-lg px-12 py-5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-2xl flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            ORDER COLLECTION
            <i className="ri-shopping-bag-3-line text-xl"></i>
          </a>

          <a
            href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-charcoal font-inter font-bold text-lg px-12 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            ORDER DELIVERY
            <i className="ri-e-bike-2-line text-xl"></i>
          </a>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 text-off-white text-sm font-inter"
        >
          <span className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-flame-orange"></i>
            Fresh dough daily
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-flame-orange"></i>
            24h ferment
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-flame-orange"></i>
            Baked fast in a stone oven
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}