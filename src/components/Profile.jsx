// src/components/Profile.jsx
import React from 'react';
import { getElementStyle, CERTIFICATES_DATA } from '../data/constants';

// PROP RECEIVED: Destructure setSelectedCert from props
export default function Profile({ setSelectedCert }) {
  return (
    <section id="profile">
      {/* --- TRAVELER STATS CARD --- 
      (No changes to this section)
      */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-[#D3BC8E] to-transparent opacity-50"></div>
        <h2 className="text-3xl font-serif font-bold text-[#4A5061]">Traveler Stats</h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-[#D3BC8E] to-transparent opacity-50"></div>
      </div>

      <div className="bg-[#ECE5D8] rounded-3xl p-8 shadow-xl border border-[#D3BC8E]/30 relative overflow-hidden flex flex-col md:flex-row gap-10 items-center">
        
        <img 
          src={getElementStyle("Pyro").icon} 
          alt="Pyro Element Background" 
          className="absolute -right-10 -bottom-10 w-[250px] h-[250px] opacity-5 rotate-12 object-contain pointer-events-none" 
        />
        <div className="relative w-[210px] h-[210px] flex items-center justify-center flex-shrink-0"> 
          <div className="relative w-40 h-40 rounded-full border-4 border-[#88524F] shadow-lg bg-white overflow-hidden z-10">
              <div className="w-full h-full bg-gray-300">
                  <img src="/sam2.png" alt="Sam" className="w-full h-full object-cover" /> 
              </div>
          </div>
          <div className="absolute inset-0 z-20 pointer-events-none" 
              style={{ backgroundImage: 'url(/klee_avatar.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          </div>
        </div>
        <div className="flex-1 z-10">
          <h3 className="text-4xl font-serif font-bold text-[#4A5061] mb-2">Samantha Gene V. Cruspero</h3>
          <p className="text-xl font-semibold mb-4 text-[#814638]">Backend Developer</p>
          <div className="mb-4 bg-gray-300 rounded-full h-3">
              <div className="bg-[#BD411D] rounded-full h-full" style={{ width: '90%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mb-6">Current Exp: 90% (Deep understanding of the database environment)</p>
          <p className="text-[#687085] italic mb-6 border-l-4 border-[#BD411D] pl-4">
            "Hi! I'm an aspiring back-end developer currently expanding my knowledge..."
          </p>
        </div>
      </div>


      {/* --- CERTIFICATES/ACHIEVEMENTS SECTION --- 
      */}
      <section id="certifications" className="mt-24">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#ECE5D8] p-4 border-b border-[#D3BC8E]">
              <h2 className="text-xl font-serif font-bold text-[#4A5061]">Artifacts of Knowledge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-gray-100">
              {CERTIFICATES_DATA.map((cert) => (
                <button 
                  key={cert.id} 
                  // CRITICAL: Call the setter with the certificate object
                  onClick={() => setSelectedCert(cert)} 
                  className="p-6 flex flex-col items-center gap-4 hover:bg-gray-50 transition group focus:outline-none w-full text-left"
                >
                  <div className="w-full flex justify-center flex-shrink-0">
                    <img 
                      src={cert.previewImage} 
                      alt={`${cert.title} Preview`}
                      className="w-48 h-32 object-cover border-4 border-transparent group-hover:border-[#BD411D] transition-all duration-300 rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="flex-grow w-full text-center">
                      <h4 className="font-extrabold text-[#4A5061] text-lg group-hover:text-[#BD411D] transition">{cert.title}</h4>
                      <p className="text-xs text-gray-400 mb-2">{cert.date}</p>
                      <div className="px-3 py-1 bg-[#F9F6F2] border border-[#D3BC8E] rounded-full text-xs font-bold text-[#D3BC8E] inline-block mt-2">
                          {cert.reward}
                      </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>
    </section>
  );
}