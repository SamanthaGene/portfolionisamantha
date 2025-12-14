// src/components/ProjectModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getElementStyle, renderStars } from '../data/constants';

export default function ProjectModal({ selectedProject, setSelectedProject }) {
  if (!selectedProject) return null;

  const elementStyle = getElementStyle(selectedProject.element);
  const videoUrl = selectedProject.videoUrl;
  const screenshots = selectedProject.screenshots || [];

  // State to manage which screenshot is currently visible in the main viewer
  const [selectedScreenshot, setSelectedScreenshot] = useState(screenshots[0]);
  
  // Reset screenshot state when the project changes
  React.useEffect(() => {
    if (selectedProject) {
        setSelectedScreenshot(screenshots[0]);
    }
  }, [selectedProject]);


  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white w-full max-w-5xl max-h-[95vh] rounded-xl overflow-hidden shadow-2xl border-4 border-[#EAD5AA] relative flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#ECE5D8] p-4 flex justify-between items-start flex-shrink-0 border-b border-[#D3BC8E]">
            <div>
              <div className="flex items-center gap-2">
                <img src={elementStyle.icon} alt={selectedProject.element} className="w-8 h-8 object-contain" />
                <h3 className="text-3xl font-serif font-bold text-[#4A5061]">{selectedProject.title}</h3>
              </div>
              <div className="mt-1 flex items-center gap-3">
                {renderStars(selectedProject.rarity)}
                <span className="text-sm font-semibold text-[#814638]">{selectedProject.element} Artifact</span>
              </div>
            </div>
            <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-[#4A5061] transition text-2xl">✕</button>
          </div>
          
          {/* Main Content (Scrollable) */}
          <div className="p-6 flex-grow overflow-y-auto">
            
            {/* 1. MEDIA SECTION (Video & Screenshots) */}
            {(videoUrl || screenshots.length > 0) && (
              <div className="mb-8">
                <h4 className="text-xl font-serif font-bold text-[#4A5061] mb-4 border-b border-gray-200 pb-2">Archived Footage</h4>
                
                {/* Main Viewer: Video or Selected Screenshot */}
                <div className="bg-gray-900 rounded-lg overflow-hidden w-full aspect-video mb-4 shadow-xl">
                  {videoUrl && !selectedScreenshot ? (
                    // Display Video Player if available and no screenshot is explicitly selected
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${videoUrl}?autoplay=0&rel=0`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={selectedProject.title}
                    ></iframe>
                  ) : (
                    // Display selected screenshot
                    <img 
                      src={selectedScreenshot || screenshots[0]}
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Screenshot Thumbnails (Gallery) */}
                {screenshots.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {screenshots.map((imgUrl, index) => (
                      <img
                        key={index}
                        src={imgUrl}
                        alt={`Screenshot ${index + 1}`}
                        className={`
                          w-24 h-16 object-cover rounded-md cursor-pointer border-2 transition
                          ${selectedScreenshot === imgUrl ? 'border-[#D3BC8E] shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}
                        `}
                        onClick={() => setSelectedScreenshot(imgUrl)}
                      />
                    ))}
                    {/* Add video thumbnail if a video exists */}
                    {videoUrl && (
                        <div 
                           className={`
                              w-24 h-16 bg-gray-700 rounded-md cursor-pointer border-2 transition flex items-center justify-center text-white text-xs font-bold
                              ${!selectedScreenshot ? 'border-[#D3BC8E] shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}
                            `}
                            onClick={() => setSelectedScreenshot(null)} // De-selects screenshot to show video
                        >
                            <span className="text-2xl">▶️</span>
                        </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {/* END MEDIA SECTION */}

            {/* 2. DETAILS SECTION (Description and Stats) */}
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* Description Column */}
                <div className="md:w-3/5">
                    <h4 className="text-xl font-serif font-bold text-[#4A5061] mb-2">Artifact Description</h4>
                    <p className="text-[#687085] mb-4">{selectedProject.description}</p>
                </div>
                
                {/* Stats/Enemies Column */}
                <div className="md:w-2/5 p-4 bg-[#F9F6F2] rounded-lg border border-[#EAD5AA]">
                    <h4 className="text-xl font-bold mb-3 text-[#4A5061]">Battle Summary</h4>
                    
                    <p className="font-semibold text-sm mb-1 text-gray-700">HP:</p>
                    <p className="font-bold text-lg text-[#BD411D] mb-4">{selectedProject.hp.toLocaleString()}</p>
                    
                    <p className="font-semibold text-sm mb-1 text-gray-700">Enemies Overcome:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.enemies.map((enemy, idx) => (
                            <span key={idx} className="text-xs bg-[#EAD5AA] text-[#6B5C3E] px-2 py-1 rounded-full font-bold">
                                {enemy}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          {/* Footer Button */}
          <div className="p-4 bg-gray-100 flex justify-end flex-shrink-0">
             <button 
               onClick={() => setSelectedProject(null)}
               className="bg-[#D3BC8E] text-[#3B4255] font-bold px-6 py-2 rounded-full hover:bg-[#c2a875] transition"
             >
               DISMISS
             </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}