/* eslint-disable react-hooks/purity */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState } from 'react';
import {
    FaGraduationCap,
    FaStar,
    FaHeart,
    FaBars,
    FaTimes,
    FaArrowRight,
    FaLightbulb,
    FaPuzzlePiece,
    FaMusic,
    FaBookReader,
    FaCheckCircle,
    FaSmile,
    FaShapes,
    FaGamepad,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaintBrush,
    FaRocket
} from 'react-icons/fa';
import Link from 'next/link';

// Static shape list defined outside the component body (prevents render purity warnings)
const SHAPES_LIST = [
    { name: "Circle", color: "#EC4899", symbol: "⚪" },
    { name: "Square", color: "#2563EB", symbol: "🟦" },
    { name: "Triangle", color: "#10B981", symbol: "🔺" },
    { name: "Star", color: "#F59E0B", symbol: "⭐" }
];

export default function ProgramsPage() {
    const [navOpen, setNavOpen] = useState(false);

    // State for Curriculum Feature Filter Tabs
    const [activeTab, setActiveTab] = useState('stem');

    // Interactive Mini-Game State
    const [gameScore, setGameScore] = useState(0);
    const [gameFeedback, setGameFeedback] = useState("Click on the correct shape below!");
    const [targetShape, setTargetShape] = useState(SHAPES_LIST[0]);

    const handleShapeClick = (shapeName) => {
        if (shapeName === targetShape.name) {
            setGameScore((prev) => prev + 10);
            setGameFeedback("🎉 Great job! You matched the shape correctly!");

            // Select next random index safely inside click handler
            const nextIndex = Math.floor(Math.random() * SHAPES_LIST.length);
            setTargetShape(SHAPES_LIST[nextIndex]);
        } else {
            setGameFeedback(`Oops! That's a ${shapeName}. Try finding the ${targetShape.name}!`);
        }
    };

    // Program Details
    const programDetails = [
        {
            title: "Toddler Discovery",
            age: "Ages 1.5 - 2.5 Years",
            badgeBg: "#EFF6FF",
            badgeColor: "#2563EB",
            icon: <FaPuzzlePiece size={28} color="#2563EB" />,
            desc: "A gentle, play-based introduction to structured environments focusing on sensory exploration and social comfort.",
            features: [
                "Sensory & Tactile Play Stations",
                "Basic Vocabulary & Storytelling",
                "Fine Motor & Hand-Eye Skills",
                "Gentle Social Co-Play Guidance"
            ],
            timing: "Mon - Fri | 9:00 AM - 12:00 PM"
        },
        {
            title: "Junior Explorers",
            age: "Ages 2.5 - 4.0 Years",
            badgeBg: "#FEF3C7",
            badgeColor: "#D97706",
            icon: <FaLightbulb size={28} color="#D97706" />,
            desc: "Designed to fuel curiosity through hands-on STEM experiments, early math concepts, and expressive creative arts.",
            features: [
                "Interactive Early Phonics & Rhyming",
                "Counting & Pattern Recognition",
                "Guided Group Arts & Music",
                "Outdoor Balance & Physical Games"
            ],
            timing: "Mon - Fri | 8:30 AM - 1:30 PM"
        },
        {
            title: "Kindergarten Readiness",
            age: "Ages 4.0 - 6.0 Years",
            badgeBg: "#ECFDF5",
            badgeColor: "#059669",
            icon: <FaGraduationCap size={28} color="#059669" />,
            desc: "Comprehensive academic and social preparation ensuring children step confidently into primary elementary education.",
            features: [
                "Sentence Building & Early Reading",
                "Logic Puzzles & Elementary Math",
                "Scientific Observations & Nature",
                "Emotional Regulation & Teamwork"
            ],
            timing: "Mon - Fri | 8:30 AM - 3:00 PM"
        }
    ];

    // Tab Content for Learning Pillars
    const tabContent = {
        stem: [
            { title: "Building Block Engineering", detail: "Spatial reasoning and structure balance using safe wood blocks." },
            { title: "Nature & Plant Growth", detail: "Observing seed germination and learning basic biology outdoors." },
            { title: "Fun Math Patterns", detail: "Identifying sequences using colorful beads and visual puzzle boards." }
        ],
        literacy: [
            { title: "Story Circle Time", detail: "Daily expressive reading sessions encouraging vocal participation." },
            { title: "Phonics & Sound Tracing", detail: "Connecting letter sounds to everyday objects through songs." },
            { title: "Creative Drama & Roleplay", detail: "Puppet shows that expand imagination and descriptive vocabulary." }
        ],
        social: [
            { title: "Sharing & Turn-Taking", detail: "Cooperative games that build patience, kindness, and empathy." },
            { title: "Emotional Check-Ins", detail: "Helping kids identify and talk through feelings using emotion cards." },
            { title: "Group Rhythm & Dance", detail: "Coordination, musical rhythm, and joint physical expression." }
        ]
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>

            {/* CSS Micro-Interactions & Styling */}
            <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(37, 99, 235, 0); }
        }

        .logo-float { animation: floatSlow 3.8s ease-in-out infinite; }
        .pulse-badge { animation: pulseGlow 2.5s infinite; }

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

        /* Hover Cards */
        .hover-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12) !important;
        }

        /* Game Buttons */
        .game-btn {
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .game-btn:hover {
          transform: scale(1.15);
          animation: wiggle 0.4s ease-in-out;
        }

        .pillar-tab-btn {
          border: none;
          background: #F1F5F9;
          color: #475569;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 30px;
          transition: all 0.25s ease;
        }
        .pillar-tab-btn.active {
          background: #2563EB;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
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
                                <span className="small fw-bold text-primary">Tailored Early Learning Pathways</span>
                            </div>
                            <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0F172A', fontWeight: 800, lineHeight: 1.15 }}>
                                Programs Designed to <span style={{ color: '#2563EB' }}>Spark Genius</span> in Every Child.
                            </h1>
                            <p className="lead text-secondary mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                                Explore our age-specific curricula that seamlessly balance playful exploration, foundational literacy, STEM logic, and emotional development.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="#program-list" className="btn text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-flex align-items-center gap-2 hover-card" style={{ backgroundColor: '#2563EB', border: 'none' }}>
                                    View All Pathways <FaArrowRight size={14} />
                                </a>
                                <a href="#mini-game" className="btn btn-outline-secondary fw-bold px-4 py-3 rounded-pill hover-card d-flex align-items-center gap-2">
                                    <FaGamepad color="#EC4899" size={18} /> Play Mini-Game
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="position-relative p-3 bg-white rounded-4 shadow-lg border hover-card">
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                                    alt="Kids learning with educational blocks"
                                    className="img-fluid rounded-4 w-100"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INTERACTIVE KIDS MINI GAME ZONE --- */}
            <section id="mini-game" className="py-5" style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #E0F2FE 100%)' }}>
                <div className="container py-3">
                    <div className="max-w-xl mx-auto bg-white rounded-4 p-4 p-md-5 shadow-lg border text-center hover-card" style={{ maxWidth: '650px' }}>
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-light border mb-3">
                            <FaGamepad color="#2563EB" size={18} />
                            <span className="fw-bold small text-primary">Interactive Kids Corner</span>
                        </div>
                        <h3 className="fw-bold mb-1" style={{ color: '#0F172A' }}>Match the Shape!</h3>
                        <p className="text-secondary small mb-3">Try out our early learning shape recognition puzzle below!</p>

                        {/* Target Shape Banner */}
                        <div className="p-3 rounded-3 mb-4 text-white font-bold" style={{ backgroundColor: targetShape.color }}>
                            <h5 className="fw-bold m-0">Find the: <span className="text-decoration-underline">{targetShape.name}</span>!</h5>
                        </div>

                        {/* Game Buttons */}
                        <div className="d-flex justify-content-center gap-3 gap-md-4 mb-4">
                            {SHAPES_LIST.map((shape, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleShapeClick(shape.name)}
                                    className="game-btn border-0 rounded-4 shadow-sm p-3 bg-light d-flex flex-column align-items-center justify-content-center"
                                    style={{ width: '80px', height: '80px' }}
                                >
                                    <span style={{ fontSize: '2rem' }}>{shape.symbol}</span>
                                    <small className="fw-bold text-muted" style={{ fontSize: '0.75rem' }}>{shape.name}</small>
                                </button>
                            ))}
                        </div>

                        {/* Feedback & Score */}
                        <div className="p-3 bg-light rounded-3 border d-flex align-items-center justify-content-between">
                            <span className="small fw-bold text-primary">{gameFeedback}</span>
                            <span className="badge bg-success px-3 py-2 rounded-pill">Score: {gameScore}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE PROGRAM PATHWAYS LIST --- */}
            <section id="program-list" className="py-5 bg-white border-top border-bottom">
                <div className="container py-3">
                    <div className="text-center mb-5">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Our Core Curriculum</h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Educational Programs</h2>
                        <p className="text-muted">Structured around cognitive readiness, motor skills, and creative confidence.</p>
                    </div>

                    <div className="row g-4">
                        {programDetails.map((prog, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="card h-100 border rounded-4 p-4 shadow-sm hover-card bg-white d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="badge px-3 py-2 rounded-pill fw-bold" style={{ backgroundColor: prog.badgeBg, color: prog.badgeColor }}>
                                            {prog.age}
                                        </span>
                                        {prog.icon}
                                    </div>

                                    <h4 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{prog.title}</h4>
                                    <p className="text-secondary small mb-4">{prog.desc}</p>

                                    <h6 className="fw-bold small text-dark mb-2">Key Learning Highlights:</h6>
                                    <ul className="list-unstyled small text-secondary mb-4">
                                        {prog.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="mb-2 d-flex align-items-center gap-2">
                                                <FaCheckCircle color="#059669" size={14} /> {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-3 border-top">
                                        <small className="text-muted d-block mb-3 fw-semibold">📅 {prog.timing}</small>
                                        <a href="#contact" className="btn w-100 fw-bold py-2 rounded-pill text-white shadow-sm" style={{ backgroundColor: prog.badgeColor }}>
                                            Enroll in Program
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CURRICULUM PILLARS FILTER TABS --- */}
            <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container py-3">
                    <div className="text-center mb-4">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Methodology</h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>What Kids Learn Every Day</h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
                        <button
                            onClick={() => setActiveTab('stem')}
                            className={`pillar-tab-btn ${activeTab === 'stem' ? 'active' : ''}`}
                        >
                            🧪 STEM & Logic
                        </button>
                        <button
                            onClick={() => setActiveTab('literacy')}
                            className={`pillar-tab-btn ${activeTab === 'literacy' ? 'active' : ''}`}
                        >
                            📚 Literacy & Language
                        </button>
                        <button
                            onClick={() => setActiveTab('social')}
                            className={`pillar-tab-btn ${activeTab === 'social' ? 'active' : ''}`}
                        >
                            🎨 Social & Creative Arts
                        </button>
                    </div>

                    {/* Tab Display Grid */}
                    <div className="row g-4 justify-content-center">
                        {tabContent[activeTab].map((item, i) => (
                            <div key={i} className="col-md-4">
                                <div className="p-4 bg-white rounded-4 border shadow-sm h-100 hover-card text-center">
                                    <div className="d-inline-flex p-3 rounded-circle bg-light mb-3 text-primary">
                                        <FaRocket size={24} color="#2563EB" />
                                    </div>
                                    <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{item.title}</h5>
                                    <p className="text-secondary small mb-0">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SIMPLE 4-STEP ENROLLMENT PROCESS --- */}
            <section className="py-5 bg-white border-top border-bottom">
                <div className="container py-3">
                    <div className="text-center mb-5">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Easy Registration</h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>How to Join LittleSparks</h2>
                    </div>

                    <div className="row g-4 text-center">
                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="fw-extrabold text-primary display-6 mb-2">01</div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>Schedule Tour</h5>
                                <p className="text-secondary small mb-0">Visit our classrooms and meet our teaching team in person.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="fw-extrabold text-primary display-6 mb-2">02</div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>Submit Application</h5>
                                <p className="text-secondary small mb-0">Fill out our simple online enrollment form and medical record.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="fw-extrabold text-primary display-6 mb-2">03</div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>Meet & Greet</h5>
                                <p className="text-secondary small mb-0">Child play session to assess comfort and age placement.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="p-4 rounded-4 bg-light border hover-card h-100">
                                <div className="fw-extrabold text-primary display-6 mb-2">04</div>
                                <h5 className="fw-bold" style={{ color: '#0F172A' }}>Welcome Day!</h5>
                                <p className="text-secondary small mb-0">Your child starts their joyful journey at LittleSparks!</p>
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
                                <li className="mb-2"><a href="/#faq" className="text-decoration-none text-secondary">FAQ</a></li>
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