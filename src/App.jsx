// src/App.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PAGES } from "./data/constants";

// Components
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import CertificateModal from "./components/CertificateModal"; 
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.PROFILE);
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null); // <-- The critical state

  const navigateTo = (page) => {
    setCurrentPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' }); 
  };

  return (
    <div className="font-sans text-[#4A5061] bg-[#F9F6F2] min-h-screen relative overflow-x-hidden selection:bg-[#D3BC8E] selection:text-white">
      
      {/* 1. Background */}
      <Background />

      {/* 2. Navigation */}
      <Navbar 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
        open={open} 
        setOpen={setOpen} 
      />

      {/* 3. Hero Section (Conditional Visibility) */}
      <Hero currentPage={currentPage} navigateTo={navigateTo} />

      {/* UID Watermark */}
      <div className="fixed bottom-4 right-4 text-xs font-mono text-gray-400 z-50 pointer-events-none">
        UID: 868532598 | SERVER: ASIA
      </div>

      {/* 4. Main Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-24 pb-24">
        
        <AnimatePresence mode="wait">
          {/* PROFILE PAGE */}
          {currentPage === PAGES.PROFILE && (
            <motion.div
              key="profile-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="pt-12"
            >
              {/* PROP PASSED: Correctly passing the setter to Profile */}
              <Profile setSelectedCert={setSelectedCert} /> 
            </motion.div>
          )}

          {/* PROJECTS PAGE */}
          {currentPage === PAGES.PROJECTS && (
            <motion.div
              key="projects-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="pt-24" 
            >
              {/* Pass navigateTo prop here 👇 */}
              <Projects setSelectedProject={setSelectedProject} navigateTo={navigateTo} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. Footer & Interactive Elements */}
      <Footer />
      <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      {/* MODAL RENDERED: Correctly passing state and setter to the Modal */}
      <CertificateModal selectedCert={selectedCert} setSelectedCert={setSelectedCert} /> 
      <ScrollToTop />
    </div>
  );
}