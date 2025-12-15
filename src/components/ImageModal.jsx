// src/components/ImageModal.jsx

import React from 'react';
import { motion } from 'framer-motion';

export default function ImageModal({ imagePath, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose} // Allows clicking outside to close
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="relative max-w-5xl max-h-[90vh] w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image/content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all text-lg font-bold"
          aria-label="Close Journal"
        >
          &times;
        </button>
        
        <div className="w-full h-full overflow-y-auto">
          <img 
            src={imagePath} 
            alt="Journal Insight Documentation" 
            className="w-full h-auto object-contain" 
          />
        </div>

      </motion.div>
    </motion.div>
  );
}