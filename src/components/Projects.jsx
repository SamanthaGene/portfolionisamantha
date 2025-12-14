// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
// --- IMPORTANT: Ensure DOCUMENTATION_LOG_DATA is imported ---
import { PROJECTS_DATA, TRAVEL_LOG_DATA, DOCUMENTATION_LOG_DATA, getElementStyle, renderStars, PAGES } from '../data/constants'; 

// Destructure navigateTo from props here
export default function Projects({ setSelectedProject, navigateTo }) {
  return (
    <>
      {/* RECALL BUTTON SECTION */}
      <div className="flex justify-end mb-8">
        <button 
          onClick={() => navigateTo(PAGES.PROFILE)}
          className="bg-[#D3BC8E] hover:bg-[#c2a875] text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all flex items-center gap-2"
        >
          Recall 
        </button>
      </div>

      <section id="projects">
         <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-serif font-bold text-[#4A5061]">Artifacts & Projects</h2>
          <div className="h-0.5 flex-grow bg-[#D3BC8E]/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> 
          {PROJECTS_DATA.map(project => {
             const elementStyle = getElementStyle(project.element);
             return (
               <motion.div 
                 key={project.id} 
                 whileHover={{ scale: 1.02, translateY: -5 }}
                 onClick={() => setSelectedProject(project)}
                 className={`
                   relative cursor-pointer rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-lg border-2 border-[#EAD5AA]
                   bg-gradient-to-b ${project.rarity === 5 ? 'from-[#F3A535]/20 to-[#F9F6F2]' : 'from-[#A48EE6]/20 to-[#F9F6F2]'}
                 `}
               >
                 {/* Project Preview Image */}
                 {project.previewImage && (
                    <div className="w-full h-32 overflow-hidden bg-gray-100">
                      <img 
                        src={project.previewImage} 
                        alt={`${project.title} Preview`} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                 )}
                 {/* END Project Preview Image */}

                 <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex">{renderStars(project.rarity)}</div>
                    <img src={elementStyle.icon} alt={project.element} className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#4A5061] mb-2">{project.title}</h3>
                  <p className="text-sm text-[#687085] line-clamp-2">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-dashed border-gray-300">
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Enemies Overcome:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.enemies.map((enemy, idx) => (
                        <span key={idx} className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                          {enemy}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#EAD5AA] px-4 py-2 flex justify-between items-center">
                  <span className="text-xs font-bold text-[#6B5C3E] uppercase">HP: {project.hp.toLocaleString()}</span>
                  <span className="text-[#6B5C3E] font-bold">→</span>
                </div>
               </motion.div>
             );
          })}
        </div>
      </section>

      {/* --- TRAVEL LOG SECTION (Original Timeline - Details KEPT) --- */}
      <section id="travel-log" className="mt-24">
        <h2 className="text-3xl font-serif font-bold text-[#4A5061] mb-8">Travel Log</h2>
        <div className="space-y-6">
          {TRAVEL_LOG_DATA.map((log) => (
            <div key={log.day} className="flex gap-6 relative">
              <div className="absolute left-[19px] top-10 bottom-[-24px] w-0.5 bg-[#D3BC8E]/50 z-0"></div>
              <div className="relative z-10 w-10 h-10 rounded-full bg-[#F9F6F2] border-2 border-[#D3BC8E] flex items-center justify-center font-bold text-[#D3BC8E]">
                  {log.day}
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#D3BC8E]">
                  <h3 className="text-xl font-bold mb-2">{log.title}</h3>
                  {/* DETAILS ARE BACK HERE for Travel Log */}
                  <p className="text-sm text-gray-600 mb-4">{log.details}</p> 
                  
                  <div className="flex gap-2 overflow-x-auto pb-2 border-t border-gray-100">
                    {/* Image Mapping using TRAVEL_LOG_DATA */}
                    {log.images && log.images.map((imagePath, index) => (
                      <div 
                        key={index} 
                        className="w-64 h-40 rounded-lg flex-shrink-0 overflow-hidden border border-gray-300" 
                      >
                        <img 
                          src={imagePath} 
                          alt={`Travel Log image ${index + 1} for ${log.title}`} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DOCUMENTATION SECTION (Timeline 2 - Details REMOVED, Title/Pictures ONLY) --- */}
      <section id="documentation" className="mt-24">
        <h2 className="text-3xl font-serif font-bold text-[#4A5061] mb-8">Documentation</h2>
        
        <div className="space-y-6">
          {DOCUMENTATION_LOG_DATA.map((log) => (
            <div key={log.day} className="flex gap-6 relative">
              <div className="absolute left-[19px] top-10 bottom-[-24px] w-0.5 bg-[#D3BC8E]/50 z-0"></div>
              <div className="relative z-10 w-10 h-10 rounded-full bg-[#F9F6F2] border-2 border-[#D3BC8E] flex items-center justify-center font-bold text-[#D3BC8E]">
                  {log.day}
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#D3BC8E]">
                  <h3 className="text-xl font-bold mb-2">{log.title}</h3>
                  {/* DETAILS ARE REMOVED HERE for Documentation */}
                  
                  <div className="flex gap-2 overflow-x-auto pt-2 pb-2 border-t border-gray-100">
                    {/* Image Mapping using DOCUMENTATION_LOG_DATA */}
                    {log.images && log.images.map((imagePath, index) => (
                      <div 
                        key={index} 
                        className="w-64 h-40 rounded-lg flex-shrink-0 overflow-hidden border border-gray-300" 
                      >
                        <img 
                          src={imagePath} 
                          alt={`Documentation image ${index + 1} for ${log.title}`} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}