// src/components/Background.jsx
import React from 'react';

const random = (min, max) => Math.random() * (max - min) + min;

const FallingClover = ({ cloverImagePath }) => {
  const style = {
    left: `${random(0, 100)}%`,
    animationDuration: `${random(8, 20)}s`,
    animationDelay: `${random(0, 15)}s`,
    width: `${random(15, 30)}px`, 
    height: `${random(15, 30)}px`,
    opacity: random(0.1, 0.4), 
  };

  return (
    <img
      src={cloverImagePath}
      alt="Falling Clover"
      className="clover-fall absolute top-[-50px] object-contain pointer-events-none"
      style={style}
    />
  );
};

export default function Background() {
  const CLOVER_COUNT = 30;
  const CLOVER_IMAGE_PATH = "/clover.png";

  return (
    <>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg) translateX(0); }
          100% { transform: translateY(100vh) rotate(360deg) translateX(100px); }
        }
        .clover-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      {/* Layer 1: Static Dots */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(#4A5061 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Layer 2: Falling Clovers (Behind content, in front of dots) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: CLOVER_COUNT }).map((_, index) => (
          <FallingClover key={index} cloverImagePath={CLOVER_IMAGE_PATH} />
        ))}
      </div>
    </>
  );
}