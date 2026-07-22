/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function HeroSection({ 
  bgColor = "#2563EB", // Rich Royal Blue
  heroImage = "http://www.littlecrayons.org/images/slider.png"
}) {
  return (
    <div 
      className="hero-container position-relative text-white overflow-hidden w-100"
      style={{
        backgroundColor: bgColor,
        paddingTop: '60px', // Space for the top clouds
        paddingBottom: '0px',
        width: '100%'
      }}
    >
      {/* 1. REAL CLOUD TOP DIVIDER (Organic, Soft Cloud Arcs) */}
      <div 
        className="position-absolute top-0 start-0 w-100 overflow-hidden" 
        style={{ lineHeight: 0, zIndex: 10, pointerEvents: 'none' }}
      >
        <svg 
          viewBox="0 0 1440 90" 
          preserveAspectRatio="none" 
          className="position-relative d-block w-100" 
          style={{ height: '55px' }}
        >
          {/* Natural Puffy Cloud Path */}
          <path 
            d="M0,0 
               C 50,45 100,50 160,10 
               C 220,55 290,50 340,15 
               C 400,60 480,55 530,10 
               C 590,50 660,55 720,15 
               C 780,60 850,50 910,10 
               C 970,55 1040,50 1100,15 
               C 1170,60 1250,55 1300,10 
               C 1360,50 1400,45 1440,0 
               L1440,0 L0,0 Z" 
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>

      {/* 2. CHALK DOODLE OVERLAY PATTERN */}
      <style>{`
        .hero-container {
          background-image: radial-gradient(rgba(255, 255, 255, 0.18) 1.5px, transparent 0);
          background-size: 28px 28px;
        }

        .full-hero-image {
          width: 100%;
          height: auto;
          max-height: 80vh;
          object-fit: contain;
          display: block;
        }
      `}</style>

      {/* 3. FULL WIDTH HERO IMAGE (NO TEXT) */}
      <div className="w-100 text-center position-relative" style={{ zIndex: 2 }}>
        {heroImage && (
          <img 
            src={heroImage} 
            alt="Hero Banner" 
            className="full-hero-image mx-auto"
          />
        )}
      </div>

    </div>
  );
}