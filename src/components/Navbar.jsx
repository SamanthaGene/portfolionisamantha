// src/components/Navbar.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PAGES } from '../data/constants';

export default function Navbar({ currentPage, navigateTo, open, setOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F9F6F2]/80 backdrop-blur-md border-b-2 border-[#D3BC8E]/50 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4"> 
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#D3BC8E] border border-white overflow-hidden flex-shrink-0">
            <img src="/paimon.png" alt="Traveler Avatar" className="w-full h-full object-cover"/>
          </div>
          <h1 className="text-2xl font-serif font-bold tracking-wide text-[#4A5061]">Welcome to Teyvat!</h1>
        </div>

        <div className="hidden md:flex space-x-10 text-[#4A5061] font-bold uppercase tracking-wider text-sm">
          {[{ name: 'Profile', page: PAGES.PROFILE }, { name: 'Projects & Log', page: PAGES.PROJECTS }].map((item) => (
            <button 
              key={item.name} 
              onClick={() => navigateTo(item.page)}
              className={`relative group transition-colors focus:outline-none ${
                currentPage === item.page ? 'text-[#D3BC8E] font-extrabold' : 'hover:text-[#D3BC8E]'
              }`}
            >
              {item.name}
              {currentPage === item.page && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D3BC8E] transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>

        <button className="md:hidden text-2xl text-[#4A5061]" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#ECE5D8] border-b border-[#D3BC8E]"
          >
            <div className="flex flex-col p-6 space-y-4 font-serif font-bold text-[#4A5061]">
              {[{ name: 'Profile', page: PAGES.PROFILE }, { name: 'Projects & Log', page: PAGES.PROJECTS }].map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => navigateTo(item.page)} 
                  className={`text-left hover:text-[#D3BC8E] ${currentPage === item.page ? 'font-extrabold text-[#D3BC8E]' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}