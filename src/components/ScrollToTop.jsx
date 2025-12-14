// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollToTop() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!showTopButton) return null;

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-white/90 backdrop-blur border-2 border-[#814638] rounded-full shadow-xl flex items-center justify-center text-[#814638] font-bold z-40 hover:bg-[#814638] hover:text-white transition-colors text-3xl"
    >
      <span className="animate-pulse">✦</span> 
    </motion.button>
  );
}