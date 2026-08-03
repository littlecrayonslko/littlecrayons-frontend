/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from 'react';
import { 
  FaGraduationCap, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaSearchPlus,
  FaImages
} from 'react-icons/fa';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery items array
  const galleryItems = [
    { id: 1, title: 'Art & Craft Corner', category: 'Arts & Crafts', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800' },
    { id: 2, title: 'Outdoor Playground Fun', category: 'Playtime', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800' },
    { id: 3, title: 'Interactive Learning Lab', category: 'Classrooms', img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800' },
    { id: 4, title: 'Annual Day Celebrations', category: 'Events', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800' },
    { id: 5, title: 'Storytelling & Reading Time', category: 'Classrooms', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800' },
    { id: 6, title: 'Finger Painting Session', category: 'Arts & Crafts', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800' },
    { id: 7, title: 'Sports Day Race', category: 'Events', img: 'https://images.unsplash.com/photo-1472162072142-d544e73eebfb?q=80&w=800' },
    { id: 8, title: 'Sandpit & Toy Zone', category: 'Playtime', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800' },
  ];

  const categories = ['All', 'Classrooms', 'Playtime', 'Arts & Crafts', 'Events'];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
            transform: scale(1.05);
          }
          .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
            display: flex;
            align-items: flex-end;
            padding: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .gallery-card:hover .gallery-overlay {
            opacity: 1;
          }
        `}</style>

        <div className="container py-3">
          
          {/* Category Filter Chips */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                <div 
                  className="gallery-card cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.img} alt={item.title} className="gallery-img" />
                  <div className="gallery-overlay text-white">
                    <div>
                      <span className="badge bg-warning text-dark mb-1">{item.category}</span>
                      <h6 className="fw-bold m-0 d-flex align-items-center gap-2">
                        {item.title} <FaSearchPlus size={14} />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1050 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="position-relative bg-white p-2 rounded-4" style={{ maxWidth: '700px', width: '100%' }}>
            <img 
              src={selectedImage.img} 
              alt={selectedImage.title} 
              className="w-100 rounded-3" 
              style={{ maxHeight: '75vh', objectFit: 'cover' }}
            />
            <div className="p-3 text-center">
              <h5 className="fw-bold m-0" style={{ color: '#0F172A' }}>{selectedImage.title}</h5>
              <span className="badge bg-danger mt-2">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}