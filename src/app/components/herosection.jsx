/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroSection({
  bgColor = "#2563EB",
  heroImage = "http://www.littlecrayons.org/images/slider.png",
  secondImage = "/kids.jpeg", // Image inside the public folder
}) {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-container position-relative text-white overflow-hidden w-100"
        style={{
          backgroundColor: bgColor,
          paddingTop: "60px",
          paddingBottom: "0",
        }}
      >
        <style>{`
          .hero-container {
            background-image: radial-gradient(
              rgba(255, 255, 255, 0.18) 1.5px,
              transparent 0
            );
            background-size: 28px 28px;
          }

          .full-hero-image {
            width: 100%;
            height: auto;
            max-height: 80vh;
            object-fit: contain;
            display: block;
          }

          .second-banner {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }
        `}</style>

        {/* First Hero Image */}
        <div className="w-100 text-center">
          <img
            src={heroImage}
            alt="Hero Banner"
            className="full-hero-image"
          />
        </div>
      </div>

      {/* Second Full Width Image */}
      <div className="w-100">
        <img
          src={secondImage}
          alt="Second Banner"
          className="second-banner"
        />
      </div>
    </>
  );
}