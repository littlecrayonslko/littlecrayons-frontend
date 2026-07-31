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
  FaBookReader,
  FaCalculator,
  FaPenFancy,
  FaGlobeAmericas
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';

export default function LKGPage() {
  const [navOpen, setNavOpen] = useState(false);

  // Key stats for the LKG program
  const programDetails = [
    { label: "Age Group", value: "3.5 – 4.5 Years", color: "#FF5722" },
    { label: "Class Timings", value: "9:00 AM – 12:30 PM", color: "#2563EB" },
    { label: "Student-Teacher Ratio", value: "12 : 1", color: "#059669" },
    { label: "Duration", value: "5 Days / Week", color: "#D97706" }
  ];

  // Core Learning Pillars for LKG
  const learningPillars = [
    {
      title: "Advanced Phonics & Vocabulary",
      desc: "Blending 2-3 letter words, sight word recognition, and reading simple sentences to boost early literacy.",
      icon: <FaBookReader size={24} color="#2563EB" />
    },
    {
      title: "Numeracy & Logic Skills",
      desc: "Counting up to 50, basic addition concepts, spatial awareness, and logical sequence matching.",
      icon: <FaCalculator size={24} color="#FF5722" />
    },
    {
      title: "Structured Writing & Handwriting",
      desc: "Mastering uppercase and lowercase letter formations, pencil control, and guided journaling.",
      icon: <FaPenFancy size={24} color="#059669" />
    },
    {
      title: "Environmental Studies (EVS)",
      desc: "Discovering nature, plants, animals, community helpers, and good habits through interactive experiments.",
      icon: <FaGlobeAmericas size={24} color="#D97706" />
    }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>
      
      <Navbar />
      <h1 className="text-center my-4 fw-extrabold" style={{ color: '#FF5722', fontWeight: 800 }}>LKG Program</h1>
      <PageBanner />

      {/* --- MAIN LKG CONTENT --- */}
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
              <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-bold mb-3">
                Junior Kindergarten Stage
              </span>
              <h2 className="display-6 fw-bold mb-3" style={{ color: '#0F172A' }}>
                Fostering Independence, Literacy & Creative Logic
              </h2>
              <p className="text-secondary lead fs-6 mb-4" style={{ lineHeight: '1.7' }}>
                In Lower Kindergarten (LKG), children step into structured learning that bridges play and formal education. Our balanced curriculum nurtures reading fluency, numerical reasoning, handwriting precision, and social leadership.
              </p>
              
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <FaCheckCircle color="#059669" /> Phonics-based reading program & vocabulary builder
                </li>
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <FaCheckCircle color="#059669" /> Hands-on math activities with visual learning aids
                </li>
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <FaCheckCircle color="#059669" /> Expressive arts, public speaking & confidence workshops
                </li>
              </ul>

              <Link href="/contact" className="btn btn-success fw-bold px-4 py-3 rounded-pill shadow-sm">
                Enroll in LKG Today <FaArrowRight className="ms-1" />
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800" 
                  alt="LKG Classroom Learning" 
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{ objectFit: 'cover', height: '380px' }}
                />
              </div>
            </div>
          </div>

          {/* Key Program Details Grid */}
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

          {/* Core Learning Pillars */}
          <div className="text-center mb-4 pt-3">
            <h3 className="fw-bold" style={{ color: '#0F172A' }}>LKG Curriculum Focus Areas</h3>
            <p className="text-muted small">Designed to build essential academic confidence and conceptual understanding</p>
          </div>

          <div className="row g-4 mb-5">
            {learningPillars.map((pillar, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="program-card p-4 h-100 text-center text-md-start">
                  <div className="mb-3 d-inline-block p-3 rounded-circle bg-light">
                    {pillar.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{pillar.title}</h5>
                  <p className="text-secondary small m-0" style={{ lineHeight: '1.6' }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-To-Action Banner */}
          <div className="p-4 p-md-5 rounded-4 text-white text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}>
            <h3 className="fw-bold mb-2">Give Your Child an Advantage in LKG</h3>
            <p className="opacity-90 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              Book an interactive campus tour to meet our expert LKG teachers and observe our active learning stations.
            </p>
            <Link href="/contact" className="btn btn-light text-dark fw-bold px-4 py-2 rounded-pill shadow-sm">
              Schedule a Campus Tour
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