// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#3B4255] text-[#ECE5D8] py-12 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-serif text-2xl mb-4">Ad Astra Abyssosque</h2>
        <p className="opacity-60 text-sm">@ 2025 All Rights Reserved, Made by the Sprakly Knight!🍀</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D3BC8E] to-transparent"></div>
    </footer>
  );
}