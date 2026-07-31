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
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPuzzlePiece,
  FaMusic,
  FaPaintBrush,
  FaClock
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';

export default function PlaygroupPage() {
  const [navOpen, setNavOpen] = useState(false);

  // Key stats for the program
  const programDetails = [
    { label: "Age Group", value: "1.5 – 2.5 Years", color: "#FF5722" },
    { label: "Class Timings", value: "9:00 AM – 11:30 AM", color: "#2563EB" },
    { label: "Student-Teacher Ratio", value: "8 : 1", color: "#059669" },
    { label: "Duration", value: "5 Days / Week", color: "#D97706" }
  ];

  // Activities included in Playgroup
  const activities = [
    {
      title: "Sensory & Creative Play",
      desc: "Clay modeling, finger painting, and water/sand play to develop fine motor skills and tactile exploration.",
      icon: <FaPaintBrush size={24} color="#FF5722" />
    },
    {
      title: "Rhythm & Movement",
      desc: "Nursery rhymes, musical instruments, and interactive dancing to build auditory skills and motor coordination.",
      icon: <FaMusic size={24} color="#2563EB" />
    },
    {
      title: "Cognitive Puzzles",
      desc: "Sorting shapes, color matching, and building blocks to stimulate early problem-solving ability.",
      icon: <FaPuzzlePiece size={24} color="#059669" />
    },
    {
      title: "Socialization & Bonding",
      desc: "Group sharing, circle time, and guided play to nurture emotional confidence and early friendship building.",
      icon: <FaSmile size={24} color="#D97706" />
    }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>
      
      <Navbar />
      <h1 className="text-center my-4 fw-extrabold" style={{ color: '#FF5722', fontWeight: 800 }}>Playgroup Program</h1>
      <PageBanner />

      {/* --- MAIN PLAYGROUP CONTENT --- */}
      <section className="py-5 bg-white">
        <style>{`
          .program-card {
            background: #FFFFFF;
            border-radius: 16px;
            border: 1px solid #E2E8F0;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .program-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 20px rgba(0,0,0,0.08);
          }
          .feature-badge {
            background-color: #FFF5F2;
            border-radius: 12px;
            padding: 16px;
          }
        `}</style>

        <div className="container py-3">

          {/* Intro Section */}
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-bold mb-3">
                Early Learning Journey
              </span>
              <h2 className="display-6 fw-bold mb-3" style={{ color: '#0F172A' }}>
                Where Joyful Discovery & Play Begin
              </h2>
              <p className="text-secondary lead fs-6 mb-4" style={{ lineHeight: '1.7' }}>
                Our Playgroup program is specially tailored for toddlers stepping into their very first structured social environment. Through play-based learning, tactile activities, and warm guidance, we foster curiosity and independence in a safe, home-like setting.
              </p>
              
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <FaCheckCircle color="#059669" /> Safe, child-proofed interactive play arenas
                </li>
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <FaCheckCircle color="#059669" /> Nurturing staff trained in early child psychology
                </li>
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <FaCheckCircle color="#059669" /> Regular parent update reports & milestone tracking
                </li>
              </ul>

              <Link href="/contact" className="btn btn-danger fw-bold px-4 py-3 rounded-pill shadow-sm">
                Enroll Your Toddler Today <FaArrowRight className="ms-1" />
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800" 
                  alt="Playgroup Classroom" 
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{ objectFit: 'cover', height: '380px' }}
                />
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="row g-3 mb-5">
            {programDetails.map((detail, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6">
                <div className="feature-badge text-center border h-100 d-flex flex-column justify-content-center">
                  <span className="small text-muted fw-semibold mb-1">{detail.label}</span>
                  <h5 className="fw-bold m-0" style={{ color: detail.color }}>{detail.value}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="text-center mb-4 pt-3">
            <h3 className="fw-bold" style={{ color: '#0F172A' }}>What Our Little Ones Experience</h3>
            <p className="text-muted small">Designed to engage all five senses and spark natural creativity</p>
          </div>

          <div className="row g-4 mb-5">
            {activities.map((act, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="program-card p-4 h-100 text-center text-md-start">
                  <div className="mb-3 d-inline-block p-3 rounded-circle bg-light">
                    {act.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{act.title}</h5>
                  <p className="text-secondary small m-0" style={{ lineHeight: '1.6' }}>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enrollment Banner Box */}
          <div className="p-4 p-md-5 rounded-4 text-white text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' }}>
            <h3 className="fw-bold mb-2">Ready to give your toddler a head start?</h3>
            <p className="opacity-90 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              Schedule a visit to see our playgroup classroom in action and meet our loving teaching team!
            </p>
            <Link href="/contact" className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill">
              Book a Free Campus Tour
            </Link>
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