// src/components/Hero.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PAGES } from '../data/constants';

export default function Hero({ currentPage, navigateTo }) {
  // Use AnimatePresence to manage the unmounting animation
  return (
    <AnimatePresence>
      {currentPage === PAGES.PROFILE && (
        <motion.section 
          key="hero-section"
          // We set the initial state (height: 600px) and the exit state (height: 0)
          initial={{ opacity: 0, height: 600 }}
          animate={{ opacity: 1, height: 600 }}
          exit={{ opacity: 0, height: 0, paddingBottom: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="relative z-10 pt-24 overflow-hidden flex items-center justify-center" 
          // Set pt-24 here to account for the Navbar on the profile page
        >
          {/* Background and Vignette */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src="/everyone.jpg" 
              alt="Hero Background"
              className="w-full h-full object-cover brightness-[0.7] blur-[2px]"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F2] via-transparent to-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[#D3BC8E] font-serif italic text-xl mb-2 tracking-widest">ADVENTURE RANK 60</h2>
              <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-white drop-shadow-lg mb-6">
                Journey with Samantha
              </h1>
              <button 
                onClick={() => navigateTo(PAGES.PROJECTS)}
                className="bg-[#D3BC8E] hover:bg-[#c2a875] text-white font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(211,188,142,0.6)] transition-all transform hover:scale-105"
              >
                Start Expedition
              </button>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}