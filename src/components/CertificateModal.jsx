// src/components/CertificateModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateModal({ selectedCert, setSelectedCert }) {
  if (!selectedCert) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={() => setSelectedCert(null)}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white w-full max-w-4xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl border-4 border-[#BD411D] relative flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#BD411D] p-4 flex justify-between items-center flex-shrink-0">
            <h3 className="text-white font-serif text-xl font-bold">📜 Achievement Unlocked: {selectedCert.title}</h3>
            <button onClick={() => setSelectedCert(null)} className="text-white hover:text-gray-200 transition text-2xl">✕</button>
          </div>
          
          {/* Content (Scrollable if image is large) */}
          <div className="p-4 flex-grow overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* Full Certificate Image */}
                <div className="md:w-3/5 w-full flex-shrink-0">
                    <img 
                        src={selectedCert.fullImage} 
                        alt={`Full Certificate for ${selectedCert.title}`} 
                        className="w-full h-auto object-contain border border-gray-300 shadow-md" 
                    />
                </div>
                
                {/* Details Sidebar */}
                <div className="md:w-2/5 p-4 bg-[#F9F6F2] rounded-lg border border-[#D3BC8E]">
                    <h4 className="text-2xl font-bold mb-3 text-[#4A5061]">{selectedCert.title}</h4>
                    <p className="text-sm mb-4 italic text-gray-600 border-b pb-2">Issued by: **{selectedCert.issuer}**</p>
                    
                    <p className="text-[#687085] mb-4 text-md">{selectedCert.details}</p>

                    <div className="mt-6 border-t pt-4">
                        <p className="font-semibold text-sm mb-1 text-gray-700">Date Earned:</p>
                        <p className="font-bold text-[#BD411D] text-lg">{selectedCert.date}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-semibold text-sm mb-1 text-gray-700">Reward:</p>
                        <span className="text-base bg-[#D3BC8E] text-white font-extrabold px-3 py-1 rounded-full inline-block">
                            {selectedCert.reward}
                        </span>
                    </div>
                </div>
            </div>
          </div>

          {/* Footer Button */}
          <div className="p-4 bg-gray-100 flex justify-end flex-shrink-0">
             <button 
               onClick={() => setSelectedCert(null)}
               className="bg-[#D3BC8E] text-[#3B4255] font-bold px-6 py-2 rounded-full hover:bg-[#c2a875] transition"
             >
               CLOSE
             </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}