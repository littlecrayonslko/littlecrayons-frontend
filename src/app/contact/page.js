/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState } from 'react';
import {
    FaGraduationCap,
    FaStar,
    FaBars,
    FaTimes,
    FaArrowRight,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaPaperPlane,
    FaSmile,
    FaHeart,
    FaClock,
    FaCheckCircle,
    FaComments
} from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
    const [navOpen, setNavOpen] = useState(false);

    // Form State
    const [mascot, setMascot] = useState("🦁 Leo the Lion");
    const [inquiryType, setInquiryType] = useState("Excited to Visit!");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="contact-page-wrapper position-relative overflow-hidden" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#F8FAFC' }}>

            {/* Dynamic Background Animations & Custom FX */}
            <style>{`
        /* Smooth Floating Background Particles */
        @keyframes floatUp {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-40px) rotate(180deg) scale(1.1); }
          100% { transform: translateY(0px) rotate(360deg) scale(1); }
        }

        @keyframes driftSlow {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(30px) translateY(-20px); }
          100% { transform: translateX(0px) translateY(0px); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
        }

        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Animated Background Elements */
        .bg-blob-1 {
          position: absolute;
          top: 5%;
          left: -5%;
          width: 350px;
          height: 350px;
          background: rgba(236, 72, 153, 0.18);
          filter: blur(60px);
          border-radius: 50%;
          animation: floatUp 8s ease-in-out infinite;
          pointer-events: none;
        }

        .bg-blob-2 {
          position: absolute;
          top: 40%;
          right: -5%;
          width: 400px;
          height: 400px;
          background: rgba(37, 99, 235, 0.18);
          filter: blur(70px);
          border-radius: 50%;
          animation: floatUp 10s ease-in-out infinite reverse;
          pointer-events: none;
        }

        .bg-blob-3 {
          position: absolute;
          bottom: 10%;
          left: 20%;
          width: 300px;
          height: 300px;
          background: rgba(245, 158, 11, 0.15);
          filter: blur(50px);
          border-radius: 50%;
          animation: driftSlow 12s ease-in-out infinite;
          pointer-events: none;
        }

        /* Nav Link Hover FX */
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

        /* Interactive Cards */
        .hover-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12) !important;
        }

        /* Form Controls */
        .form-control-custom {
          border: 2px solid #E2E8F0;
          border-radius: 14px;
          padding: 12px 18px;
          transition: all 0.25s ease;
          font-weight: 500;
        }
        .form-control-custom:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
          outline: none;
        }

        /* Mascot Chip Selectors */
        .mascot-chip {
          border: 2px solid #E2E8F0;
          background: #FFFFFF;
          border-radius: 30px;
          padding: 8px 18px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.25s ease;
          user-select: none;
        }
        .mascot-chip:hover {
          border-color: #2563EB;
          transform: scale(1.05);
        }
        .mascot-chip.selected {
          background: #2563EB;
          color: #FFFFFF;
          border-color: #2563EB;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        /* Pulse Badge */
        .pulse-badge { animation: pulseGlow 2.5s infinite; }
      `}</style>

            {/* Floating Background Visuals */}
            <div className="bg-blob-1"></div>
            <div className="bg-blob-2"></div>
            <div className="bg-blob-3"></div>

            {/* --- ANNOUNCEMENT BAR --- */}
            <div className="py-2 text-center text-white fw-semibold small position-relative z-1" style={{ backgroundColor: '#1E293B' }}>
                ✨ Admissions for Academic Year 2026–2027 are now open. <a href="#contact-form" className="text-warning text-decoration-underline ms-2">Book a Campus Tour</a>
            </div>

            {/* --- HEADER --- */}
            <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom shadow-sm py-3 position-relative z-1">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="/" style={{ fontSize: '1.5rem', color: '#0F172A' }}>
                        <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '42px', height: '42px', backgroundColor: '#EFF6FF' }}>
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
            <section className="py-5 position-relative z-1">
                <div className="container py-4 text-center">
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white border shadow-sm mb-3 pulse-badge">
                        <FaComments color="#2563EB" size={16} />
                        <span className="small fw-bold text-primary">We’d Love to Hear From You!</span>
                    </div>
                    <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0F172A', fontWeight: 800, lineHeight: 1.15 }}>
                        Say Hello to <span style={{ color: '#2563EB' }}>LittleSparks</span> Preschool
                    </h1>
                    <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '650px', fontSize: '1.15rem', lineHeight: 1.7 }}>
                        Have questions about our early learning programs, admissions, or want to schedule a fun campus tour? Send us a message below!
                    </p>
                </div>
            </section>

            {/* --- MAIN CONTACT CONTENT (INFO CARDS & FORM) --- */}
            <section id="contact-form" className="py-4 position-relative z-1 mb-5">
                <div className="container">
                    <div className="row g-4">

                        {/* LEFT COLUMN: Contact Cards & Campus Details */}
                        <div className="col-lg-5">
                            <div className="d-flex flex-column gap-4">

                                {/* Phone Card */}
                                <div className="p-4 bg-white rounded-4 border shadow-sm hover-card d-flex align-items-start gap-3">
                                    <div className="p-3 rounded-circle text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#2563EB', minWidth: '54px', height: '54px' }}>
                                        <FaPhoneAlt size={22} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1" style={{ color: '#0F172A' }}>Call Our Desk</h5>
                                        <p className="text-secondary small mb-2">Speak directly with our warm admissions coordinator.</p>
                                        <a href="tel:+15550192834" className="fw-bold text-primary text-decoration-none" style={{ fontSize: '1.1rem' }}>
                                            +1 (555) 019-2834
                                        </a>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="p-4 bg-white rounded-4 border shadow-sm hover-card d-flex align-items-start gap-3">
                                    <div className="p-3 rounded-circle text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#EC4899', minWidth: '54px', height: '54px' }}>
                                        <FaEnvelope size={22} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1" style={{ color: '#0F172A' }}>Send an Email</h5>
                                        <p className="text-secondary small mb-2">We typically respond within 2 business hours!</p>
                                        <a href="mailto:admissions@littlesparks.edu" className="fw-bold text-decoration-none" style={{ color: '#EC4899', fontSize: '1.05rem' }}>
                                            admissions@littlesparks.edu
                                        </a>
                                    </div>
                                </div>

                                {/* Address & Hours Card */}
                                <div className="p-4 bg-white rounded-4 border shadow-sm hover-card d-flex align-items-start gap-3">
                                    <div className="p-3 rounded-circle text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#059669', minWidth: '54px', height: '54px' }}>
                                        <FaMapMarkerAlt size={22} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1" style={{ color: '#0F172A' }}>Campus Location</h5>
                                        <p className="text-secondary small mb-2">123 Education Boulevard, Sunshine Valley, CA 90210</p>
                                        <div className="d-flex align-items-center gap-2 small text-muted">
                                            <FaClock color="#059669" /> Mon - Fri: 8:00 AM - 4:30 PM
                                        </div>
                                    </div>
                                </div>

                                {/* Interactive Tour Banner */}
                                <div className="p-4 rounded-4 text-white hover-card" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <FaCalendarAlt size={20} />
                                        <h5 className="fw-bold m-0">In-Person Campus Tours</h5>
                                    </div>
                                    <p className="small opacity-90 mb-3">Tours are conducted every Tuesday and Thursday at 10:00 AM. Bring your little one along!</p>
                                    <span className="badge bg-white text-dark fw-bold px-3 py-2 rounded-pill">
                                        🎈 Free Interactive Goodie Bag Included
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT COLUMN: Kid-Friendly Interactive Contact Form */}
                        <div className="col-lg-7">
                            <div className="p-4 p-md-5 bg-white rounded-4 border shadow-lg hover-card">

                                {formSubmitted ? (
                                    /* SUCCESS MESSAGE STATE */
                                    <div className="text-center py-5" style={{ animation: 'popIn 0.5s ease-out' }}>
                                        <div className="d-inline-flex p-4 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                                            <FaCheckCircle size={56} />
                                        </div>
                                        <h2 className="fw-bold mb-2" style={{ color: '#0F172A' }}>Hooray! Message Sent! 🎉</h2>
                                        <p className="text-secondary lead mb-4" style={{ fontSize: '1.1rem' }}>
                                            Thank you so much! {mascot} and our admissions team received your message and will reach out shortly.
                                        </p>
                                        <button
                                            onClick={() => setFormSubmitted(false)}
                                            className="btn text-white fw-bold px-4 py-3 rounded-pill shadow-sm"
                                            style={{ backgroundColor: '#2563EB', border: 'none' }}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    /* CONTACT FORM */
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4 text-center text-md-start">
                                            <h3 className="fw-bold mb-1" style={{ color: '#0F172A' }}>Send Us a Message</h3>
                                            <p className="text-muted small">Fill out the form below and pick a buddy to deliver it!</p>
                                        </div>

                                        {/* KID FRIENDLY MASCOT SELECTOR */}
                                        <div className="mb-4">
                                            <label className="fw-bold small text-secondary d-block mb-2">1. Choose Your Preschool Companion:</label>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["🦁 Leo the Lion", "🦉 Ollie the Owl", "🎨 Bella the Bear"].map((m, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => setMascot(m)}
                                                        className={`mascot-chip ${mascot === m ? 'selected' : ''}`}
                                                    >
                                                        {m}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* MOOD / INQUIRY TYPE SELECTOR */}
                                        <div className="mb-4">
                                            <label className="fw-bold small text-secondary d-block mb-2">2. What brings you here today?</label>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["Excited to Visit!", "General Question", "Enrollment Info"].map((type, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => setInquiryType(type)}
                                                        className={`mascot-chip ${inquiryType === type ? 'selected' : ''}`}
                                                    >
                                                        {type}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* INPUT FIELDS */}
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-dark">Parent / Guardian Name *</label>
                                                <input
                                                    type="text"
                                                    name="parentName"
                                                    required
                                                    value={formData.parentName}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. Sarah Jenkins"
                                                    className="form-control form-control-custom w-100"
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-dark">Childs Name & Age</label>
                                                <input
                                                    type="text"
                                                    name="childName"
                                                    value={formData.childName}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. Leo (Age 3)"
                                                    className="form-control form-control-custom w-100"
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-dark">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="name@example.com"
                                                    className="form-control form-control-custom w-100"
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-dark">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="(555) 000-0000"
                                                    className="form-control form-control-custom w-100"
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label className="form-label fw-bold small text-dark">Your Message or Question</label>
                                                <textarea
                                                    name="message"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Tell us about your child or any questions regarding our programs..."
                                                    className="form-control form-control-custom w-100"
                                                />
                                            </div>
                                        </div>

                                        {/* SUBMIT BUTTON */}
                                        <button
                                            type="submit"
                                            className="btn w-100 text-white fw-bold py-3 mt-4 rounded-pill shadow-sm d-flex align-items-center justify-content-center gap-2 hover-card"
                                            style={{ backgroundColor: '#2563EB', border: 'none', fontSize: '1.05rem' }}
                                        >
                                            <FaPaperPlane size={16} /> Send Message with {mascot.split(' ')[1]}!
                                        </button>
                                    </form>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer id="contact" style={{ backgroundColor: '#0F172A', color: '#94A3B8' }} className="pt-5 pb-4 position-relative z-1">
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
                                <li className="mb-2"><a href="/activity" className="text-decoration-none text-secondary">Activities</a></li>
                                <li className="mb-2"><a href="/contact" className="text-decoration-none text-secondary">Contact</a></li>
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