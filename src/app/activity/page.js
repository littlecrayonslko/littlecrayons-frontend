/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState } from 'react';
import {
    FaGraduationCap,
    FaStar,
    FaBars,
    FaTimes,
    FaArrowRight,
    FaPaintBrush,
    FaRocket,
    FaRunning,
    FaMusic,
    FaExpand,
    FaChevronLeft,
    FaChevronRight,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaSmile,
    FaCamera
} from 'react-icons/fa';
import Link from 'next/link';

// Static Data defined outside component (prevents React Compiler purity errors)
const ACTIVITY_CATEGORIES = [
    { id: 'all', label: 'All Activities' },
    { id: 'arts', label: '🎨 Arts & Crafts' },
    { id: 'stem', label: '🧪 STEM & Robotics' },
    { id: 'sports', label: '⚽ Sports & Movement' },
    { id: 'music', label: '🎵 Music & Drama' }
];

const ACTIVITIES_LIST = [
    {
        id: 1,
        title: "Finger Painting & Sensory Art",
        category: "arts",
        ageGroup: "Ages 2-4",
        time: "Every Mon & Wed | 10:00 AM",
        image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80",
        desc: "Children express imagination through tactile textures, color blending, and messy freedom in safe, washable environments."
    },
    {
        id: 2,
        title: "Junior Robotics & Lego Build",
        category: "stem",
        ageGroup: "Ages 4-6",
        time: "Every Tue & Thu | 11:30 AM",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
        desc: "Developing problem-solving and basic mechanical concepts with building blocks and simple motorized gears."
    },
    {
        id: 3,
        title: "Mini Olympians & Obstacle Course",
        category: "sports",
        ageGroup: "All Ages",
        time: "Fridays | 9:30 AM",
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
        desc: "Outdoor physical agility tracks, balance games, and relay races designed to develop gross motor coordination."
    },
    {
        id: 4,
        title: "Rhythm Band & Singing Circle",
        category: "music",
        ageGroup: "Ages 2-5",
        time: "Daily | 2:00 PM",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        desc: "Exploring musical scales, hand percussion, and rhythmic movement to boost auditory processing and confidence."
    },
    {
        id: 5,
        title: "Clay Sculpting & Pottery Fun",
        category: "arts",
        ageGroup: "Ages 3-6",
        time: "Wednesdays | 1:30 PM",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
        desc: "Enhancing fine motor precision and 3D artistic spatial awareness with non-toxic modeling clay."
    },
    {
        id: 6,
        title: "Little Gardeners Botanical Exploration",
        category: "stem",
        ageGroup: "Ages 3-6",
        time: "Thursdays | 10:00 AM",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
        desc: "Planting seeds, observing root growth, and understanding ecosystems right in our school greenhouse."
    }
];

const GALLERY_PHOTOS = [
    { id: 1, title: "Painting Wall Display", category: "Art", src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Outdoor Splash & Play Day", category: "Sports", src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Story Theater Performance", category: "Drama", src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "STEM Physics Track Lab", category: "STEM", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Puppet Show Corner", category: "Arts", src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Yoga & Stretching Class", category: "Sports", src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80" }
];

const FEATURED_SLIDES = [
    {
        title: "Annual Science & Wonder Expo",
        tag: "Upcoming Event",
        desc: "A day filled with volcano eruptions, magnet challenges, and floating bubble shows presented by our young inventors!",
        date: "October 15, 2026",
        bg: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
        img: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Autumn Costume & Drama Festival",
        tag: "Parent Favorite",
        desc: "Kids take the stage with creative story plays, custom-made costumes, and vibrant musical performances.",
        date: "November 02, 2026",
        bg: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Mud Kitchen & Splash Carnival",
        tag: "Outdoor Outdoor Play",
        desc: "Sensory-rich messy play stations where children build mud pies, water wheels, and botanical potions.",
        date: "Weekly Event",
        bg: "linear-gradient(135deg, #059669 0%, #047857 100%)",
        img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80"
    }
];

export default function ActivitiesPage() {
    const [navOpen, setNavOpen] = useState(false);

    // Filtering state for activities
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Slider state
    const [currentSlide, setCurrentSlide] = useState(0);

    // Lightbox Modal state
    const [previewImage, setPreviewImage] = useState(null);

    const filteredActivities = selectedCategory === 'all'
        ? ACTIVITIES_LIST
        : ACTIVITIES_LIST.filter(act => act.category === selectedCategory);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % FEATURED_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>

            {/* Dynamic Keyframes & Hover FX */}
            <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(37, 99, 235, 0); }
        }
        @keyframes floatHorizontal {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(8px); }
        }

        .logo-float { animation: floatSlow 3.8s ease-in-out infinite; }
        .pulse-badge { animation: pulseGlow 2.5s infinite; }
        .slide-arrow { animation: floatHorizontal 2s ease-in-out infinite; }

        .nav-item-link {
          color: #475569;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 24px;
          transition: all 0.25s ease-in-out;
          text-decoration: none;
        }
        .nav-item-link:hover {
          color: #2563EB;
          background-color: #EFF6FF;
          transform: translateY(-2px);
        }

        /* Hover Card Animations */
        .hover-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12) !important;
        }

        /* Image Zoom FX */
        .img-container {
          overflow: hidden;
          position: relative;
        }
        .img-container img {
          transition: transform 0.5s ease;
        }
        .hover-card:hover .img-container img {
          transform: scale(1.08);
        }

        /* Category Filter Buttons */
        .cat-tab-btn {
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          color: #475569;
          font-weight: 700;
          padding: 10px 22px;
          border-radius: 30px;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .cat-tab-btn:hover {
          border-color: #2563EB;
          color: #2563EB;
          transform: translateY(-2px);
        }
        .cat-tab-btn.active {
          background: #2563EB;
          color: #FFFFFF;
          border-color: #2563EB;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        /* Gallery Overlay */
        .gallery-item {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 16px;
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.55);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-column;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-item img {
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
      `}</style>

            {/* --- ANNOUNCEMENT BAR --- */}
            <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
                ✨ Admissions for Academic Year 2026–2027 are now open. <a href="#contact" className="text-warning text-decoration-underline ms-2">Book a Campus Tour</a>
            </div>

            {/* --- HEADER --- */}
            <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom shadow-sm py-3">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="/" style={{ fontSize: '1.5rem', color: '#0F172A' }}>
                        <div className="logo-float d-flex align-items-center justify-content-center rounded-circle" style={{ width: '42px', height: '42px', backgroundColor: '#EFF6FF' }}>
                            <FaGraduationCap size={24} color="#2563EB" />
                        </div>
                        <span>Little<span style={{ color: '#2563EB' }}>Sparks</span></span>
                    </a>

                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        onClick={() => setNavOpen(!navOpen)}
                        aria-label="Toggle Navigation"
                    >
                        {navOpen ? <FaTimes size={24} color="#0F172A" /> : <FaBars size={24} color="#0F172A" />}
                    </button>

                    <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
                            <li className="nav-item">
                                <Link className="nav-item-link d-block" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item-link d-block" href="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item-link d-block" href="/program">Program</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item-link d-block" href="/activity">activity</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item-link d-block text-primary fw-bold" href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                                <Link
                                    href="/contact"
                                    className="btn text-white fw-bold px-4 py-2 rounded-pill shadow-sm"
                                    style={{ backgroundColor: '#2563EB', border: 'none' }}
                                >
                                    Enroll Today
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="py-5" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #FAFAFA 100%)' }}>
                <div className="container py-4">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white border shadow-sm mb-3 pulse-badge">
                                <FaStar color="#F59E0B" size={16} />
                                <span className="small fw-bold text-primary">Vibrant Daily Adventures</span>
                            </div>
                            <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0F172A', fontWeight: 800, lineHeight: 1.15 }}>
                                Where Learning Meets <span style={{ color: '#2563EB' }}>Joyful Play</span> Every Day.
                            </h1>
                            <p className="lead text-secondary mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                                From messy finger painting and robotics labs to garden ecology and stage music, discover the rich tapestry of daily experiences that nourish young minds.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="#activities-grid" className="btn text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-flex align-items-center gap-2 hover-card" style={{ backgroundColor: '#2563EB', border: 'none' }}>
                                    Explore Activities <FaArrowRight size={14} />
                                </a>
                                <a href="#photo-gallery" className="btn btn-outline-secondary fw-bold px-4 py-3 rounded-pill hover-card d-flex align-items-center gap-2">
                                    <FaCamera color="#EC4899" size={18} /> View Photo Gallery
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="position-relative p-3 bg-white rounded-4 shadow-lg border hover-card">
                                <img
                                    src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
                                    alt="Children engaging in group activity"
                                    className="img-fluid rounded-4 w-100"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FEATURED EVENTS CAROUSEL / SLIDER --- */}
            <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container py-3">
                    <div className="text-center mb-4">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Special Highlights</h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Featured Activity Spotlight</h2>
                    </div>

                    <div className="position-relative rounded-4 overflow-hidden shadow-lg border hover-card" style={{ background: FEATURED_SLIDES[currentSlide].bg }}>
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6 p-4 p-md-5 text-white">
                                <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill mb-3">
                                    {FEATURED_SLIDES[currentSlide].tag}
                                </span>
                                <h2 className="fw-bold display-6 mb-3">{FEATURED_SLIDES[currentSlide].title}</h2>
                                <p className="lead opacity-90 mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    {FEATURED_SLIDES[currentSlide].desc}
                                </p>
                                <div className="d-flex align-items-center gap-2 mb-4">
                                    <FaCalendarAlt size={18} />
                                    <span className="fw-semibold">{FEATURED_SLIDES[currentSlide].date}</span>
                                </div>

                                <a href="#contact" className="btn btn-light fw-bold px-4 py-2 rounded-pill shadow-sm text-dark d-inline-flex align-items-center gap-2">
                                    Inquire Event Details <FaArrowRight size={14} className="slide-arrow" />
                                </a>
                            </div>

                            <div className="col-lg-6">
                                <img
                                    src={FEATURED_SLIDES[currentSlide].img}
                                    alt="Featured Activity Event"
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover', minHeight: '340px', maxHeight: '420px' }}
                                />
                            </div>
                        </div>

                        {/* Slider Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous Slide"
                            className="position-absolute top-50 start-0 translate-middle-y btn btn-dark bg-opacity-50 text-white rounded-circle ms-3 d-flex align-items-center justify-content-center border-0 shadow"
                            style={{ width: '48px', height: '48px' }}
                        >
                            <FaChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next Slide"
                            className="position-absolute top-50 end-0 translate-middle-y btn btn-dark bg-opacity-50 text-white rounded-circle me-3 d-flex align-items-center justify-content-center border-0 shadow"
                            style={{ width: '48px', height: '48px' }}
                        >
                            <FaChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- FILTERABLE ACTIVITIES GRID --- */}
            <section id="activities-grid" className="py-5 bg-white border-top border-bottom">
                <div className="container py-3">
                    <div className="text-center mb-4">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Daily Offerings</h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Interactive Learning Clubs</h2>
                        <p className="text-muted">Explore activities designed for creative, logical, and physical growth.</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
                        {ACTIVITY_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`cat-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Activity Cards */}
                    <div className="row g-4">
                        {filteredActivities.map((act) => (
                            <div key={act.id} className="col-lg-4 col-md-6">
                                <div className="card h-100 border rounded-4 overflow-hidden shadow-sm hover-card bg-white d-flex flex-column">
                                    <div className="img-container" style={{ height: '220px' }}>
                                        <img
                                            src={act.image}
                                            alt={act.title}
                                            className="w-100 h-100"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <span className="position-absolute top-0 end-0 m-3 badge bg-white text-primary fw-bold px-3 py-2 rounded-pill shadow-sm">
                                            {act.ageGroup}
                                        </span>
                                    </div>

                                    <div className="p-4 d-flex flex-column flex-grow-1">
                                        <small className="text-primary fw-bold mb-1 text-uppercase">{act.category} Club</small>
                                        <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{act.title}</h5>
                                        <p className="text-secondary small mb-4 flex-grow-1">{act.desc}</p>

                                        <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                                            <small className="text-muted fw-semibold">🕒 {act.time}</small>
                                            <a href="#contact" className="btn btn-sm btn-outline-primary fw-bold rounded-pill">
                                                Join Activity
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PHOTO GALLERY GRID WITH POPUP PREVIEW --- */}
            <section id="photo-gallery" className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container py-3">
                    <div className="text-center mb-5">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Snapshots of Joy</h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Activity Photo Gallery</h2>
                        <p className="text-muted">Click any photo to view in high definition.</p>
                    </div>

                    <div className="row g-4">
                        {GALLERY_PHOTOS.map((photo) => (
                            <div key={photo.id} className="col-lg-4 col-md-6">
                                <div
                                    className="gallery-item shadow-sm border"
                                    onClick={() => setPreviewImage(photo)}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        className="w-100"
                                        style={{ height: '260px', objectFit: 'cover' }}
                                    />
                                    <div className="gallery-overlay">
                                        <FaExpand size={28} className="mb-2" />
                                        <h5 className="fw-bold m-0">{photo.title}</h5>
                                        <small className="text-warning fw-semibold">{photo.category}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            {previewImage && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center p-3"
                    style={{ zIndex: 1050 }}
                    onClick={() => setPreviewImage(null)}
                >
                    <div className="position-relative bg-white rounded-4 overflow-hidden shadow-2xl max-w-2xl w-100" style={{ maxWidth: '700px' }} onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setPreviewImage(null)}
                            className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px', zIndex: 10 }}
                        >
                            <FaTimes size={18} />
                        </button>
                        <img src={previewImage.src} alt={previewImage.title} className="w-100" style={{ maxHeight: '480px', objectFit: 'cover' }} />
                        <div className="p-4 bg-white text-center">
                            <h4 className="fw-bold mb-1" style={{ color: '#0F172A' }}>{previewImage.title}</h4>
                            <span className="badge bg-primary rounded-pill px-3 py-1">{previewImage.category} Session</span>
                        </div>
                    </div>
                </div>
            )}

            {/* --- WEEKLY TIMELINE SCHEDULE --- */}
            <section className="py-5 bg-white border-top border-bottom">
                <div className="container py-3">
                    <div className="text-center mb-5">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Daily Rhythm</h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>A Typical Activity Day</h2>
                    </div>

                    <div className="row g-4 text-center">
                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="d-inline-flex p-3 rounded-circle bg-primary bg-opacity-10 text-primary mb-3">
                                    <FaSmile size={24} color="#2563EB" />
                                </div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>9:00 AM</h5>
                                <h6 className="text-primary fw-bold small">Morning Circle & Song</h6>
                                <p className="text-secondary small mb-0">Greeting songs, emotion sharing, and weather observation.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="d-inline-flex p-3 rounded-circle bg-warning bg-opacity-10 text-warning mb-3">
                                    <FaPaintBrush size={24} color="#D97706" />
                                </div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>10:30 AM</h5>
                                <h6 className="text-warning fw-bold small">Creative Activity Stations</h6>
                                <p className="text-secondary small mb-0">Rotational hands-on stations for arts, building, or biology.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                                    <FaRunning size={24} color="#059669" />
                                </div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>1:00 PM</h5>
                                <h6 className="text-success fw-bold small">Outdoor Movement</h6>
                                <p className="text-secondary small mb-0">Obstacle courses, playground games, and outdoor sports balance.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="d-inline-flex p-3 rounded-circle bg-danger bg-opacity-10 text-danger mb-3">
                                    <FaMusic size={24} color="#EC4899" />
                                </div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>2:30 PM</h5>
                                <h6 className="text-danger fw-bold small">Story & Music Wind Down</h6>
                                <p className="text-secondary small mb-0">Puppet storytelling, acoustic melodies, and calm reflections.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer id="contact" style={{ backgroundColor: '#0F172A', color: '#94A3B8' }} className="pt-5 pb-4">
                <div className="container">
                    <div className="row gy-4 mb-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <FaGraduationCap size={26} color="#2563EB" />
                                <h4 className="fw-bold text-white m-0">LittleSparks</h4>
                            </div>
                            <p className="small text-secondary">
                                Empowering children through balanced development, modern facilities, and a supportive educational environment.
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-bold text-white mb-3">Navigation</h6>
                            <ul className="list-unstyled small">
                                <li className="mb-2"><a href="/" className="text-decoration-none text-secondary">Home</a></li>
                                <li className="mb-2"><a href="/about" className="text-decoration-none text-secondary">About Us</a></li>
                                <li className="mb-2"><a href="/programs" className="text-decoration-none text-secondary">Programs</a></li>
                                <li className="mb-2"><a href="/activities" className="text-decoration-none text-secondary">Activities</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h6 className="fw-bold text-white mb-3">Get in Touch</h6>
                            <ul className="list-unstyled small text-secondary">
                                <li className="mb-2 d-flex align-items-center gap-2">
                                    <FaMapMarkerAlt color="#2563EB" /> 123 Education Boulevard
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-2">
                                    <FaPhoneAlt color="#059669" /> +1 (555) 019-2834
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-2">
                                    <FaEnvelope color="#D97706" /> admissions@littlesparks.edu
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h6 className="fw-bold text-white mb-3">Campus Hours</h6>
                            <p className="small text-secondary mb-1">Mon - Fri: 8:00 AM - 4:30 PM</p>
                            <p className="small text-secondary mb-3">Saturday: By Appointment</p>
                            <span className="badge p-2 px-3 fw-normal" style={{ backgroundColor: '#1E293B', color: '#F1F5F9', border: '1px solid #334155' }}>
                                Tour Reservations Available
                            </span>
                        </div>
                    </div>

                    <hr style={{ borderColor: '#334155' }} />
                    <div className="text-center small text-secondary">
                        © {new Date().getFullYear()} LittleSparks Preschool. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}