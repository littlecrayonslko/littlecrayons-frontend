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
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaHandHoldingHeart,
  FaSmile,
  FaRocket,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';

export default function AboutUsPage() {
  const [navOpen, setNavOpen] = useState(false);

  // Timeline Milestones
  // const storyMilestones = [
  //   { year: "2018", title: "The Spark Begins", desc: "Started with just 15 toddlers and 3 passionate teachers in a humble cozy space." },
  //   { year: "2020", title: "STEM Integration", desc: "Introduced playful hands-on science and logic games designed specifically for early years." },
  //   { year: "2023", title: "Campus Expansion", desc: "Opened our modern 2-acre green campus equipped with biometric security and outdoor play zones." },
  //   { year: "2026", title: "Award-Winning Standard", desc: "Recognized as a leading innovative preschool with over 1,200+ happy alumni." }
  // ];
  // const teamMembers = [
  //   {
  //     name: "Sarah Jenkins",
  //     role: "Head of Preschool & Founder",
  //     exp: "15+ Yrs Experience",
  //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  //     quote: "Every child is a natural explorer. We just give them the compass!"
  //   },
  //   {
  //     name: "Marcus Thorne",
  //     role: "Lead STEM & Early Logic Coach",
  //     exp: "10+ Yrs Experience",
  //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  //     quote: "Building curiosity through play is how future innovators start."
  //   },
  //   {
  //     name: "Elena Rostova",
  //     role: "Child Psychology & Arts Lead",
  //     exp: "8+ Yrs Experience",
  //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  //     quote: "Art and storytelling unlock emotional intelligence like nothing else."
  //   }
  // ];

  // // Core Values
  // const values = [
  //   { title: "Safety First Always", icon: <FaShieldAlt size={28} color="#2563EB" />, bg: "#EFF6FF", desc: "Biometric access, 24/7 CCTV, and first-aid certified staff in every room." },
  //   { title: "Joyful Discovery", icon: <FaRocket size={28} color="#D97706" />, bg: "#FEF3C7", desc: "Learning should never feel like a chore. Play is our core teaching tool." },
  //   { title: "Emotional Warmth", icon: <FaHandHoldingHeart size={28} color="#EC4899" />, bg: "#FCE7F3", desc: "Nurturing empathy, kindness, and self-belief from day one." },
  //   { title: "Parent Collaboration", icon: <FaUsers size={28} color="#059669" />, bg: "#ECFDF5", desc: "Daily app updates, direct messaging, and open-door parent partnerships." }
  // ];
  // Team Members


  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>
      
      {/* Dynamic Keyframes & Micro-Interactions */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          50% { box-shadow: 0 0 0 14px rgba(37, 99, 235, 0); }
        }
        @keyframes wiggleHover {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-6deg); }
          75% { transform: rotate(6deg); }
          100% { transform: rotate(0deg); }
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

        /* Hover Card Effects */
        .hover-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.12) !important;
        }

        .team-card {
          transition: all 0.35s ease;
          overflow: hidden;
        }
        .team-card:hover .team-img {
          transform: scale(1.08);
        }
        .team-img {
          transition: transform 0.4s ease;
        }

        .icon-box {
          transition: all 0.3s ease;
        }
        .hover-card:hover .icon-box {
          animation: wiggleHover 0.5s ease-in-out;
        }

        .timeline-box {
          position: relative;
          transition: all 0.3s ease;
        }
        .timeline-box:hover {
          border-color: #2563EB !important;
          background-color: #FFFFFF !important;
        }
      `}</style>

      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open. <a href="#contact" className="text-warning text-decoration-underline ms-2">Book a Campus Tour</a>
      </div>

      {/* --- HEADER --- */}
      {/* <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom shadow-sm py-3">
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
      </nav> */}
      <Navbar />
      <h1 className="text-center">lkg</h1>
      <PageBanner />

      {/* --- ABOUT HERO SECTION --- */}
      {/* <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #FAFAFA 100%)' }}>
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white border shadow-sm mb-3 pulse-badge">
                <FaStar color="#F59E0B" size={16} />
                <span className="small fw-bold text-primary">Discover Our Story & Mission</span>
              </div>
              <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0F172A', fontWeight: 800, lineHeight: 1.15 }}>
                Inspiring <span style={{ color: '#2563EB' }}>Confidence</span>, Joy, and Curiosity Every Day.
              </h1>
              <p className="lead text-secondary mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                LittleSparks was founded on a simple belief: early childhood education should be an exciting journey of hands-on discovery, warm relationships, and tailored skill development.
              </p>
              
              <div className="row g-3">
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-white rounded-4 border shadow-sm hover-card text-center">
                    <h3 className="fw-bold mb-0 text-primary">1,200+</h3>
                    <small className="text-muted fw-semibold">Happy Kids</small>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-white rounded-4 border shadow-sm hover-card text-center">
                    <h3 className="fw-bold mb-0 text-warning">1:6</h3>
                    <small className="text-muted fw-semibold">Teacher Ratio</small>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-white rounded-4 border shadow-sm hover-card text-center">
                    <h3 className="fw-bold mb-0 text-success">100%</h3>
                    <small className="text-muted fw-semibold">Certified Staff</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative p-3 bg-white rounded-4 shadow-lg border hover-card">
                <img 
                  src="https://childclassroom.com/wp-content/uploads/2025/03/preschool-reading-room-design-1024x538.jpg" 
                  alt="Modern preschool learning room" 
                  className="img-fluid rounded-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 end-0 m-4 p-3 bg-white rounded-3 shadow border d-flex align-items-center gap-3" style={{ maxWidth: '280px' }}>
                  <FaAward size={32} color="#F59E0B" />
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#0F172A' }}>Top Preschool Award</h6>
                    <small className="text-muted">Ranked #1 Early Learning Center 2025</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- OUR CORE VALUES SECTION --- */}
      {/* <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Our Guiding Principles</h6>
            <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>What Makes LittleSparks Special</h2>
          </div>

          <div className="row g-4">
            {values.map((v, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 rounded-4 p-4 shadow-sm hover-card bg-white border">
                  <div className="icon-box d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3" style={{ backgroundColor: v.bg, width: '60px', height: '60px' }}>
                    {v.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{v.title}</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- OUR STORY TIMELINE --- */}
      {/* <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container py-3">
          <div className="text-center mb-5">
            <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>How We Grew</h6>
            <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Our Journey Over The Years</h2>
          </div>

          <div className="row g-4">
            {storyMilestones.map((m, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="timeline-box p-4 rounded-4 bg-light border shadow-sm h-100 hover-card">
                  <span className="badge px-3 py-2 rounded-pill bg-primary text-white fw-bold mb-3">{m.year}</span>
                  <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{m.title}</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- MEET OUR EDUCATORS SECTION --- */}
      {/* <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Leadership & Teachers</h6>
            <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Guided by Caring Experts</h2>
            <p className="text-muted">Our certified teachers bring warmth, patience, and high academic standards.</p>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card border-0 rounded-4 shadow-sm team-card bg-white h-100 hover-card">
                  <div className="overflow-hidden position-relative" style={{ height: '260px' }}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-100 h-100 team-img" 
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="position-absolute bottom-0 start-0 m-3 badge bg-white text-dark shadow-sm border font-semibold px-3 py-1">
                      {member.exp}
                    </span>
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold mb-1" style={{ color: '#0F172A' }}>{member.name}</h5>
                    <p className="text-primary fw-semibold small mb-3">{member.role}</p>
                    <p className="text-muted small fst-italic mb-0">{member.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- CALL TO ACTION BAR --- */}
      {/* <section className="py-5 text-white position-relative" style={{ backgroundColor: '#2563EB' }}>
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3">Ready to give your child the best start?</h2>
          <p className="lead opacity-90 mb-4 max-w-xl mx-auto" style={{ maxWidth: '600px' }}>
            Schedule a personalized campus walk-through and experience our vibrant classrooms firsthand.
          </p>
          <a href="#contact" className="btn bg-white text-primary fw-bold px-5 py-3 rounded-pill shadow hover-card">
            Schedule a School Tour <FaArrowRight className="ms-2" size={14} />
          </a>
        </div>
      </section> */}

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
                <li className="mb-2"><a href="/#courses" className="text-decoration-none text-secondary">Programs</a></li>
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