/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FaSearchPlus,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSmile,
  FaChild,
  FaGraduationCap,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaHeart
} from 'react-icons/fa';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sliderRef = useRef(null);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://littlecrayons-backend-jmmh.onrender.com/api';

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`${API_BASE_URL}/gallery`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Gallery fetch karne me problem aayi.');
        }

        const list = Array.isArray(data) ? data : data?.data || [];
        setGalleryItems(list);
      } catch (err) {
        console.error('Gallery Fetch Error:', err);
        setError(err.message || 'Images load nahi ho payi.');
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [API_BASE_URL]);

  const formatCategory = (cat) => {
    if (!cat) return 'General';
    const cleaned = String(cat).trim();
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  };

  const rawCategories = galleryItems.map(item => formatCategory(item.category || item.type || item.tag));
  const dynamicCategories = ['All', ...new Set(rawCategories)];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => formatCategory(item.category || item.type || item.tag) === activeCategory);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Lightbox navigation handlers
  const handleNextImage = useCallback(() => {
    if (selectedIndex !== null && filteredItems.length > 0) {
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  const handlePrevImage = useCallback(() => {
    if (selectedIndex !== null && filteredItems.length > 0) {
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNextImage, handlePrevImage]);

  return (
    <div style={{ fontFamily: '"Comic Neue", "Fredoka", system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FFFDF9', overflowX: 'hidden' }}>

      {/* Modern High-Performance Keyframe Animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 87, 34, 0.4); }
          50% { box-shadow: 0 0 30px rgba(255, 87, 34, 0.8); }
        }
        @keyframes zoomInCard {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-float-1 { animation: floatSlow 4s ease-in-out infinite; }
        .animate-float-2 { animation: floatReverse 5s ease-in-out infinite; }
        .animate-card { animation: zoomInCard 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .kids-hero-bg {
          background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 40%, #FFC107 100%);
          position: relative;
          overflow: hidden;
        }

        .filter-btn-kid {
          border: 3px solid #E2E8F0;
          background: #FFFFFF;
          color: #475569;
          border-radius: 50px;
          padding: 10px 26px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 10px rgba(0,0,0,0.04);
        }
        .filter-btn-kid:hover {
          transform: translateY(-4px) scale(1.04);
          border-color: #FF5722;
          color: #FF5722;
        }
        .filter-btn-kid.active {
          background: #FF5722;
          color: #FFFFFF;
          border-color: #FF5722;
          box-shadow: 0 8px 20px rgba(255, 87, 34, 0.4);
          transform: translateY(-2px) scale(1.05);
        }

        .gallery-card-kid {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          background: #FFFFFF;
          border: 4px solid #FFFFFF;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .gallery-card-kid:hover {
          transform: translateY(-10px) rotate(1deg);
          box-shadow: 0 20px 35px rgba(255, 87, 34, 0.25);
          border-color: #FF8E53;
        }
        .gallery-img-kid {
          width: 100%;
          height: 270px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .gallery-card-kid:hover .gallery-img-kid {
          transform: scale(1.1);
        }
        .gallery-overlay-kid {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15,23,42,0.2) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .gallery-card-kid:hover .gallery-overlay-kid {
          opacity: 1;
        }

        /* Slider View CSS */
        .slider-wrapper-kid {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 15px 5px 25px 5px;
          scrollbar-width: thin;
          scrollbar-color: #FF8E53 #FFF;
        }
        .slider-wrapper-kid::-webkit-scrollbar {
          height: 8px;
        }
        .slider-wrapper-kid::-webkit-scrollbar-thumb {
          background: #FF8E53;
          border-radius: 20px;
        }
        .slider-item-kid {
          flex: 0 0 320px;
        }
        @media (max-width: 576px) {
          .slider-item-kid {
            flex: 0 0 88%;
          }
        }
        .slider-nav-kid {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 3px solid #FF5722;
          color: #FF5722;
          font-size: 1.2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 6px 15px rgba(255, 87, 34, 0.2);
          cursor: pointer;
        }
        .slider-nav-kid:hover {
          background: #FF5722;
          color: #FFFFFF;
          transform: scale(1.15) rotate(5deg);
        }
      `}</style>

      {/* --- TOP NAVBAR --- */}
      <Navbar />

      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="py-2 text-center text-white fw-bold small shadow-sm" style={{ backgroundColor: '#1E293B', letterSpacing: '0.5px' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open! 
        <a href="/contact" className="text-warning text-decoration-underline ms-2 fw-extrabold">Book a Campus Tour &rarr;</a>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="kids-hero-bg text-white py-5 position-relative">
        {/* Floating Decorative Playful Shapes */}
        <div className="position-absolute top-0 start-0 m-4 animate-float-1 opacity-75 d-none d-md-block">
          <FaSmile size={56} className="text-warning" />
        </div>
        <div className="position-absolute bottom-0 end-0 m-5 animate-float-2 opacity-75 d-none d-md-block">
          <FaChild size={64} className="text-white" />
        </div>
        <div className="position-absolute top-50 end-10 translate-middle-y animate-float-1 opacity-50 d-none d-lg-block">
          <FaGraduationCap size={72} className="text-light" />
        </div>

        <div className="container py-4 text-center position-relative" style={{ zIndex: 2 }}>
          <span className="badge bg-white text-danger fw-extrabold px-4 py-2 rounded-pill text-uppercase shadow-sm mb-3 fs-6 animate-float-1">
            🎈 Welcome to Little Crayons
          </span>
          <h1 className="display-3 fw-black mb-3 text-white drop-shadow" style={{ fontWeight: 900, textShadow: '2px 4px 10px rgba(0,0,0,0.2)' }}>
            Moments of Joy & Learning
          </h1>
          <p className="lead fw-bold mx-auto text-light opacity-90 mb-4" style={{ maxWidth: '720px', fontSize: '1.25rem' }}>
            Explore colorful memories, fun activity sessions, cultural events, and smiling faces from our lively campus!
          </p>

          {/* Dynamic Stats Badges */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
            <div className="bg-white text-dark px-4 py-2 rounded-4 shadow-sm d-flex align-items-center gap-2 fw-bold">
              <FaImages className="text-danger" size={20} />
              <span>{galleryItems.length}+ Total Memories</span>
            </div>
            <div className="bg-white text-dark px-4 py-2 rounded-4 shadow-sm d-flex align-items-center gap-2 fw-bold">
              <FaStar className="text-warning" size={20} />
              <span>{dynamicCategories.length - 1} Special Categories</span>
            </div>
            <div className="bg-white text-dark px-4 py-2 rounded-4 shadow-sm d-flex align-items-center gap-2 fw-bold">
              <FaHeart className="text-danger" size={20} />
              <span>100% Happy Kids</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="py-5">
        <div className="container py-2">

          {/* Category Filter Chips */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {dynamicCategories.map((cat, idx) => {
              const count = cat === 'All' 
                ? galleryItems.length 
                : galleryItems.filter(i => formatCategory(i.category || i.type || i.tag) === cat).length;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-btn-kid d-flex align-items-center gap-2 ${activeCategory === cat ? 'active' : ''}`}
                >
                  <span>{cat}</span>
                  <span className={`badge rounded-pill ${activeCategory === cat ? 'bg-white text-danger' : 'bg-light text-dark'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Indicator Info */}
          <div className="d-flex justify-content-between align-items-center mb-4 px-3">
            <span className="text-secondary fw-extrabold text-uppercase small" style={{ letterSpacing: '1px' }}>
              Showing: <span className="text-danger fw-black">{activeCategory}</span> ({filteredItems.length} photos)
            </span>
            {filteredItems.length > 5 && (
              <span className="badge bg-warning text-dark border border-warning px-3 py-2 rounded-pill fw-bold shadow-sm">
                🎡 Scrollable Interactive Carousel (&gt;5 photos)
              </span>
            )}
          </div>

          {/* Loading & Error State */}
          {loading ? (
            <div className="text-center py-5 my-5">
              <div className="spinner-grow text-danger mb-3" role="status" style={{ width: '4rem', height: '4rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
              <h4 className="fw-extrabold text-dark">Bringing your memories to life...</h4>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center mx-auto rounded-4 shadow-sm p-4" style={{ maxWidth: '600px' }}>
              <h4 className="fw-bold mb-2">Oops! Couldnt load photos</h4>
              <p className="mb-0 fw-semibold">{error}</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-5 my-4 bg-white rounded-5 border-3 border-dashed border-warning p-5 shadow-sm">
              <FaImages size={64} className="mb-3 text-warning opacity-75" />
              <h3 className="fw-black text-dark">No photos found here yet!</h3>
              <p className="text-secondary fw-bold mb-0">Check back soon for new activity pictures!</p>
            </div>
          ) : (
            <>
              {/* CONDITION 1: > 5 photos -> Interactive Carousel */}
              {filteredItems.length > 5 ? (
                <div className="position-relative">
                  <div className="slider-wrapper-kid" ref={sliderRef}>
                    {filteredItems.map((item, index) => {
                      const id = item.id || item._id;
                      const imageUrl = item.image_url || item.image || item.img || 'https://placehold.co/600x400?text=No+Image';
                      const itemTitle = item.title || item.caption || item.text || 'Campus Highlight';
                      const itemCat = formatCategory(item.category || item.type || item.tag);

                      return (
                        <div key={id} className="slider-item-kid animate-card" style={{ animationDelay: `${index * 0.05}s` }}>
                          <div
                            className="gallery-card-kid h-100"
                            onClick={() => setSelectedIndex(index)}
                          >
                            <img
                              src={imageUrl}
                              alt={itemTitle}
                              className="gallery-img-kid"
                              onError={(e) => {
                                e.target.src = 'https://placehold.co/600x400?text=Image+Unavailable';
                              }}
                            />
                            <div className="gallery-overlay-kid text-white">
                              <div>
                                <span className="badge bg-warning text-dark fw-bold mb-2">{itemCat}</span>
                                <h5 className="fw-black m-0 d-flex align-items-center gap-2">
                                  {itemTitle} <FaSearchPlus size={16} className="text-warning" />
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Slider Control Buttons */}
                  <div className="d-flex justify-content-center gap-3 mt-4">
                    <button
                      className="slider-nav-kid"
                      onClick={() => scrollSlider('left')}
                      aria-label="Previous photos"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="slider-nav-kid"
                      onClick={() => scrollSlider('right')}
                      aria-label="Next photos"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              ) : (
                /* CONDITION 2: <= 5 photos -> Grid View */
                <div className="row g-4 justify-content-center">
                  {filteredItems.map((item, index) => {
                    const id = item.id || item._id;
                    const imageUrl = item.image_url || item.image || item.img || 'https://placehold.co/600x400?text=No+Image';
                    const itemTitle = item.title || item.caption || item.text || 'Campus Highlight';
                    const itemCat = formatCategory(item.category || item.type || item.tag);

                    return (
                      <div key={id} className="col-lg-4 col-md-6 animate-card" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div
                          className="gallery-card-kid"
                          onClick={() => setSelectedIndex(index)}
                        >
                          <img
                            src={imageUrl}
                            alt={itemTitle}
                            className="gallery-img-kid"
                            onError={(e) => {
                              e.target.src = 'https://placehold.co/600x400?text=Image+Unavailable';
                            }}
                          />
                          <div className="gallery-overlay-kid text-white">
                            <div>
                              <span className="badge bg-warning text-dark fw-bold mb-2">{itemCat}</span>
                              <h5 className="fw-black m-0 d-flex align-items-center gap-2">
                                {itemTitle} <FaSearchPlus size={16} className="text-warning" />
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

        </div>
      </section>

      {/* --- MOVED PAGE BANNER AT BOTTOM BEFORE FOOTER --- */}
      <div className="my-5">
        <PageBanner />
      </div>

      {/* Lightbox Modal with Full Next/Prev Navigation */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.93)', zIndex: 2000, backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="btn btn-warning position-absolute top-0 end-0 m-4 rounded-circle shadow-lg d-flex align-items-center justify-content-center"
            style={{ width: '48px', height: '48px', zIndex: 2010 }}
            aria-label="Close"
          >
            <FaTimes size={20} className="text-dark" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
            className="btn btn-light position-absolute start-0 ms-3 rounded-circle shadow d-none d-md-flex align-items-center justify-content-center"
            style={{ width: '50px', height: '50px', zIndex: 2010 }}
            aria-label="Previous image"
          >
            <FaArrowLeft size={20} className="text-dark" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
            className="btn btn-light position-absolute end-0 me-3 rounded-circle shadow d-none d-md-flex align-items-center justify-content-center"
            style={{ width: '50px', height: '50px', zIndex: 2010 }}
            aria-label="Next image"
          >
            <FaArrowRight size={20} className="text-dark" />
          </button>

          {/* Main Lightbox Content Card */}
          <div
            className="position-relative bg-white p-3 rounded-5 shadow-2xl animate-card"
            style={{ maxWidth: '850px', width: '100%', border: '6px solid #FF8E53' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedIndex].image_url || filteredItems[selectedIndex].image || filteredItems[selectedIndex].img || 'https://placehold.co/600x400?text=No+Image'}
              alt={filteredItems[selectedIndex].title || 'Campus Photo'}
              className="w-100 rounded-4"
              style={{ maxHeight: '70vh', objectFit: 'contain', backgroundColor: '#000' }}
            />

            <div className="pt-3 px-2 d-flex flex-wrap justify-content-between align-items-center gap-2">
              <div>
                <h4 className="fw-black m-0 text-dark">
                  {filteredItems[selectedIndex].title || filteredItems[selectedIndex].caption || 'Campus Highlight'}
                </h4>
                <span className="badge mt-2 px-3 py-1 text-uppercase fw-bold" style={{ backgroundColor: '#FF5722', color: '#fff' }}>
                  {formatCategory(filteredItems[selectedIndex].category || filteredItems[selectedIndex].type || filteredItems[selectedIndex].tag)}
                </span>
              </div>

              <div className="text-secondary fw-extrabold small">
                {selectedIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}