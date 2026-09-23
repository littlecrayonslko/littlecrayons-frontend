/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaSearchPlus,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from 'react-icons/fa';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Backend se aane wale category / type text ko format karein (e.g., 'sports' -> 'Sports')
  const formatCategory = (cat) => {
    if (!cat) return 'General';
    const cleaned = String(cat).trim();
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  };

  // Unique category tabs extract karein
  const rawCategories = galleryItems.map(item => formatCategory(item.category || item.type || item.tag));
  const dynamicCategories = ['All', ...new Set(rawCategories)];

  // Filtered items (All me sab dikhenge, specific tab me match hone wale)
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => formatCategory(item.category || item.type || item.tag) === activeCategory);

  // Horizontal scroll controls agar > 5 images hon
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>

      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open. <a href="/contact" className="text-warning text-decoration-underline ms-2">Book a Campus Tour</a>
      </div>

      {/* --- HEADER & BANNER --- */}
      <Navbar />
      <h1 className="text-center my-4 fw-extrabold" style={{ color: '#FF5722' }}>Our Gallery</h1>
      <PageBanner />

      {/* --- GALLERY SECTION --- */}
      <section className="py-5 bg-white">
        <style>{`
          .filter-btn {
            border: 2px solid #E2E8F0;
            background: #FFFFFF;
            color: #475569;
            border-radius: 30px;
            padding: 8px 22px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.25s ease;
            text-transform: capitalize;
          }
          .filter-btn:hover {
            border-color: #FF5722;
            color: #FF5722;
          }
          .filter-btn.active {
            background-color: #FF5722;
            color: #FFFFFF;
            border-color: #FF5722;
            box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
          }

          .gallery-card {
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 4px 15px rgba(0,0,0,0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            background: #FFFFFF;
          }
          .gallery-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.12);
          }
          .gallery-img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
          }
          .gallery-card:hover .gallery-img {
            transform: scale(1.06);
          }
          .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%);
            display: flex;
            align-items: flex-end;
            padding: 18px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .gallery-card:hover .gallery-overlay {
            opacity: 1;
          }

          /* Slider Styles (when > 5 images) */
          .slider-wrapper {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            scroll-behavior: smooth;
            padding: 10px 4px 20px 4px;
            scrollbar-width: thin;
            scrollbar-color: #CBD5E1 transparent;
          }
          .slider-wrapper::-webkit-scrollbar {
            height: 6px;
          }
          .slider-wrapper::-webkit-scrollbar-thumb {
            background: #CBD5E1;
            border-radius: 10px;
          }
          .slider-item {
            flex: 0 0 300px;
          }
          @media (max-width: 768px) {
            .slider-item {
              flex: 0 0 82%;
            }
          }
          .slider-nav-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #0F172A;
            transition: all 0.2s ease;
            cursor: pointer;
          }
          .slider-nav-btn:hover {
            background: #FF5722;
            color: #FFFFFF;
            border-color: #FF5722;
            transform: scale(1.08);
          }
        `}</style>

        <div className="container py-3">
          
          {/* Category Filter Chips */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {dynamicCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Badge indicator */}
          <div className="d-flex justify-content-between align-items-center mb-4 px-2">
            <span className="text-secondary small fw-bold text-uppercase" style={{ letterSpacing: '0.8px' }}>
              Showing: <span className="text-dark">{activeCategory}</span> ({filteredItems.length} photos)
            </span>
            {filteredItems.length > 5 && (
              <span className="badge bg-warning-subtle text-dark border px-3 py-1 rounded-pill small">
                Interactive Carousel Mode (&gt;5 images)
              </span>
            )}
          </div>

          {/* Loading & Error State */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-danger" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-secondary mt-3 fw-semibold">Fetching gallery pictures...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center mx-auto rounded-4 shadow-sm" style={{ maxWidth: '600px' }}>
              <h5 className="fw-bold mb-1">Error</h5>
              <p className="mb-0 small">{error}</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-5 text-muted bg-light rounded-4 border p-5">
              <FaImages size={48} className="mb-3 text-secondary opacity-50" />
              <h5 className="fw-bold text-dark">No photos found in this category</h5>
              <p className="small mb-0">Admin will publish photos soon.</p>
            </div>
          ) : (
            <>
              {/* CONDITION: Agar 5 se zyada images hain -> Slider View */}
              {filteredItems.length > 5 ? (
                <div className="position-relative">
                  <div className="slider-wrapper" ref={sliderRef}>
                    {filteredItems.map((item) => {
                      const id = item.id || item._id;
                      const imageUrl = item.image_url || item.image || item.img || 'https://placehold.co/600x400?text=No+Image';
                      const itemTitle = item.title || item.caption || item.text || 'Campus Highlight';
                      const itemCat = formatCategory(item.category || item.type || item.tag);

                      return (
                        <div key={id} className="slider-item">
                          <div 
                            className="gallery-card h-100"
                            onClick={() => setSelectedImage({ ...item, img: imageUrl, title: itemTitle, category: itemCat })}
                          >
                            <img 
                              src={imageUrl} 
                              alt={itemTitle} 
                              className="gallery-img"
                              onError={(e) => {
                                e.target.src = 'https://placehold.co/600x400?text=Image+Unavailable';
                              }}
                            />
                            <div className="gallery-overlay text-white">
                              <div>
                                <span className="badge bg-warning text-dark mb-1">{itemCat}</span>
                                <h6 className="fw-bold m-0 d-flex align-items-center gap-2">
                                  {itemTitle} <FaSearchPlus size={14} />
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Slider Control Buttons */}
                  <div className="d-flex justify-content-end gap-2 mt-3 pe-2">
                    <button 
                      className="slider-nav-btn" 
                      onClick={() => scrollSlider('left')}
                      aria-label="Previous photos"
                    >
                      <FaChevronLeft size={16} />
                    </button>
                    <button 
                      className="slider-nav-btn" 
                      onClick={() => scrollSlider('right')}
                      aria-label="Next photos"
                    >
                      <FaChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                /* CONDITION: Agar 5 ya usse kam images hain -> Standard Clean Grid */
                <div className="row g-4">
                  {filteredItems.map((item) => {
                    const id = item.id || item._id;
                    const imageUrl = item.image_url || item.image || item.img || 'https://placehold.co/600x400?text=No+Image';
                    const itemTitle = item.title || item.caption || item.text || 'Campus Highlight';
                    const itemCat = formatCategory(item.category || item.type || item.tag);

                    return (
                      <div key={id} className="col-lg-3 col-md-4 col-sm-6">
                        <div 
                          className="gallery-card"
                          onClick={() => setSelectedImage({ ...item, img: imageUrl, title: itemTitle, category: itemCat })}
                        >
                          <img 
                            src={imageUrl} 
                            alt={itemTitle} 
                            className="gallery-img"
                            onError={(e) => {
                              e.target.src = 'https://placehold.co/600x400?text=Image+Unavailable';
                            }}
                          />
                          <div className="gallery-overlay text-white">
                            <div>
                              <span className="badge bg-warning text-dark mb-1">{itemCat}</span>
                              <h6 className="fw-bold m-0 d-flex align-items-center gap-2">
                                {itemTitle} <FaSearchPlus size={14} />
                              </h6>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.88)', zIndex: 1060 }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="position-relative bg-white p-2 rounded-4 shadow-2xl" 
            style={{ maxWidth: '780px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="btn btn-dark position-absolute top-0 end-0 m-3 rounded-circle shadow d-flex align-items-center justify-content-center"
              style={{ width: '38px', height: '38px', zIndex: 10 }}
            >
              <FaTimes size={16} />
            </button>
            <img 
              src={selectedImage.img} 
              alt={selectedImage.title} 
              className="w-100 rounded-3" 
              style={{ maxHeight: '75vh', objectFit: 'contain', backgroundColor: '#000' }}
            />
            <div className="p-3 text-center">
              <h5 className="fw-bold m-0" style={{ color: '#0F172A' }}>{selectedImage.title}</h5>
              <span className="badge mt-2 px-3 py-1 text-uppercase" style={{ backgroundColor: '#FF5722', color: '#fff' }}>
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}