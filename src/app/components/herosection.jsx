/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroSection({
  bgColor = "#2563EB",
  heroImage = "http://www.littlecrayons.org/images/slider.png",
  secondImage = "/kids.jpeg", // your second image
}) {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-container position-relative text-white overflow-hidden w-100"
        style={{
          backgroundColor: bgColor,
          paddingTop: "60px",
          paddingBottom: "0px",
          width: "100%",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 overflow-hidden"
          style={{ lineHeight: 0, zIndex: 10, pointerEvents: "none" }}
        >
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="position-relative d-block w-100"
            style={{ height: "55px" }}
          ></svg>
        </div>

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

          .full-width-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }
        `}</style>

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

      {/* Second Full Width Image */}
      {secondImage && (
        <img
          src={secondImage}
          alt="Second Banner"
          className="full-width-image"
        />
      )}
    </>
  );
}