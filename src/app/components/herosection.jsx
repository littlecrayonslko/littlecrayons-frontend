/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroSection({
  bgColor = "#2563EB",
  cloudImage = "/cloud.png", // 1st: Cloud image
  firstImage = "/first.png", // 2nd: First image
  kidsImage = "/kids.png",   // 3rd: Kids image
}) {
  return (
    <>
      <style>{`
        .blue-pattern-bg {
          background-color: ${bgColor};
          background-image: radial-gradient(rgba(255, 255, 255, 0.18) 1.5px, transparent 0);
          background-size: 28px 28px;
        }

        /* Ensures images are full-width block elements with zero margin */
        .stacked-banner-img {
          width: 100%;
          height: auto;
          display: block;
          margin: 0;
          padding: 0;
          object-fit: cover;
        }

        /* Removes default inline layout gaps between image containers */
        .image-wrapper {
          margin: 0;
          padding: 0;
          line-height: 0;
        }
      `}</style>

      {/* Blue Background Container */}
      <div className="blue-pattern-bg position-relative text-white overflow-hidden w-100">
        
        {/* 1. cloud.png */}
        {cloudImage && (
          <div className="w-100 image-wrapper position-relative" style={{ zIndex: 2 }}>
            <img
              src={cloudImage}
              alt="Cloud Banner"
              className="stacked-banner-img"
            />
          </div>
        )}

        {/* 2. first.png */}
        {firstImage && (
          <div className="w-100 image-wrapper position-relative" style={{ zIndex: 2 }}>
            <img
              src={firstImage}
              alt="First Banner"
              className="stacked-banner-img"
            />
          </div>
        )}
      </div>

      {/* 3. THIRD IMAGE: kids.png (Original Colors) */}
      {kidsImage && (
        <div className="w-100 image-wrapper">
          <img
            src={kidsImage}
            alt="Kids Banner"
            className="stacked-banner-img"
          />
        </div>
      )}
    </>
  );
}