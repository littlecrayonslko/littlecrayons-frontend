/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { 
  FaStar, 
  FaArrowRight,
  FaCheckCircle,
  FaBookReader,
  FaCalculator,
  FaPenFancy,
  FaGlobeAmericas,
  FaRocket,
  FaChild,
  FaClock
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function LKGPage() {
  const [navOpen, setNavOpen] = useState(false);

  // Key stats for the LKG program - updated palette
  const programDetails = [
    { label: "Age Group", value: "3.5 – 4.5 Years", color: "#EC4899", bg: "#FCE7F3" }, // Pink
    { label: "Class Timings", value: "9:00 AM – 12:30 PM", color: "#2563EB", bg: "#DBEAFE" }, // Blue
    { label: "Teacher Ratio", value: "12 : 1", color: "#10B981", bg: "#D1FAE5" }, // Green
    { label: "Duration", value: "5 Days / Week", color: "#D97706", bg: "#FEF3C7" } // Yellow
  ];

  // Core Learning Pillars for LKG - icons/backgrounds updated
  const learningPillars = [
    {
      title: "Reading & Vocabulary",
      desc: "Blending words, sight word recognition, and reading simple sentences to boost early literacy.",
      icon: <FaBookReader size={30} color="#2563EB" />,
      bg: "#DBEAFE"
    },
    {
      title: "Numeracy & Logic",
      desc: "Counting up to 50, basic addition, spatial awareness, and logic matching games.",
      icon: <FaCalculator size={30} color="#EC4899" />,
      bg: "#FCE7F3"
    },
    {
      title: "Handwriting Fun",
      desc: "Mastering uppercase and lowercase letters, pencil control, and guided journaling.",
      icon: <FaPenFancy size={30} color="#10B981" />,
      bg: "#D1FAE5"
    },
    {
      title: "EVS Adventures",
      desc: "Discovering nature, community helpers, and good habits through interactive experiments.",
      icon: <FaGlobeAmericas size={30} color="#D97706" />,
      bg: "#FEF3C7"
    }
  ];

  const colors = {
    pink: '#EC4899',
    blue: '#2563EB',
    yellow: '#F59E0B',
    green: '#10B981',
    text: '#1E293B',
  };

  return (
    // Import playful rounded fonts and apply Quicksand as base
    <div style={{ fontFamily: "'Fredoka', 'Quicksand', system-ui, sans-serif", color: colors.text, backgroundColor: '#FFFDFB' }}>
       <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      
      <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open. <a href="/enquiry" className="text-warning text-decoration-underline ms-2 btn-crayon">Book a Campus Tour</a>
      </div>

      <Navbar />
      
      {/* Dynamic Title Gradient with Responsive Sizing */}
      <h1 className="text-center mt-5 mb-0 px-3 display-4 fw-extrabold" style={{ 
        background: `linear-gradient(90deg, ${colors.pink}, ${colors.blue}, ${colors.green})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 800,
        textShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}>LKG Program</h1>
      
      <PageBanner />

      {/* --- MAIN LKG CONTENT --- */}
      <section className="py-5 position-relative overflow-hidden" style={{backgroundColor: '#fff'}}>
        {/* Playful top curve */}
        <style>{`
          h1, h2, h3, h4, h5, h6 { font-family: 'Fredoka', sans-serif; font-weight: 700; }
          p, span, small, label, li, a { font-family: 'Quicksand', sans-serif; font-weight: 500; }

          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
            50% { transform: translateY(-15px) rotate(1.5deg); }
          }
          @keyframes wiggleHover {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-3deg); }
            75% { transform: rotate(3deg); }
            100% { transform: rotate(0deg); }
          }

          .float-anim { animation: floatSlow 4.5s ease-in-out infinite; }
          .icon-float { animation: floatSlow 3s ease-in-out infinite; }

          .program-card {
            background: #FFFFFF;
            border-radius: 30px !important; /* Bubble Corners */
            border: 5px solid #fff;
            box-shadow: 0 10px 25px rgba(0,0,0,0.04);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .program-card:hover {
            transform: translateY(-12px) scale(1.03);
            box-shadow: 0 20px 30px rgba(0,0,0,0.08);
            animation: wiggleHover 0.5s ease;
          }

          .btn-crayon {
            border-radius: 50px;
            font-weight: 700;
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          .btn-crayon:hover {
            transform: translateY(-3px) rotate(-1deg);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }

          .kid-rounded { border-radius: 30px !important; }

          /* Responsive Flex Column Reverse for mobile */
          @media (max-width: 991px) {
            .flex-col-reverse-mobile { flex-direction: column-reverse; }
          }
        `}</style>
        
        <div className="container py-4 px-md-5">

          {/* Intro Section - Updated to match kid-friendly layouts and high responsiveness */}
          <div className="row align-items-center g-5 flex-col-reverse-mobile">
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#E2F1E1', border: `2px solid ${colors.green}`}}>
                <FaChild color={colors.green} size={16} className='bounce-anim' />
                <span className="small fw-bold" style={{color: '#059669'}}>Junior Kindergarten Stage</span>
              </div>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0F172A', lineHeight: '1.2' }}>
                Fostering Independence, Literacy & Creative Logic
              </h2>
              <p className="text-secondary lead fs-6 mb-4 fw-500" style={{ lineHeight: '1.8' }}>
                In Lower Kindergarten (LKG), children step into structured learning that bridges play and formal education. Our balanced curriculum nurtures reading fluency, numerical reasoning, handwriting precision, and social leadership.
              </p>
              
              <ul className="list-unstyled d-flex flex-column gap-3 mb-5 mx-auto mx-lg-0 text-start" style={{maxWidth: '500px'}}>
                <li className="d-flex align-items-center gap-3 text-secondary fw-semibold fs-6">
                  <FaCheckCircle color={colors.pink} size={20} className='flex-shrink-0' /> Reading fluency program & vocabulary builder
                </li>
                <li className="d-flex align-items-center gap-3 text-secondary fw-semibold fs-6">
                  <FaCheckCircle color={colors.pink} size={20} className='flex-shrink-0' /> Hands-on math activities with visual learning aids
                </li>
                <li className="d-flex align-items-center gap-3 text-secondary fw-semibold fs-6">
                  <FaCheckCircle color={colors.pink} size={20} className='flex-shrink-0' /> Expressive arts, public speaking & confidence workshops
                </li>
              </ul>

              <Link href="/contact" className="btn btn-crayon text-white fw-bold px-5 py-3 fs-6 shadow float-anim" style={{backgroundColor: colors.blue}}>
                Enroll in LKG Today <FaArrowRight className="ms-2" size={14}/>
              </Link>
            </div>

            <div className="col-lg-6 col-12 position-relative mb-lg-0 mb-5">
              {/* Decorative blobs - hidden on very small screens for cleaner look */}
              <div className="position-absolute opacity-20 d-none d-md-block" style={{width: '100px', height: '100px', backgroundColor: colors.pink, borderRadius: '50%', top: '-20px', left: '20px', zIndex: 0}}></div>
              <div className="position-absolute opacity-20 d-none d-md-block" style={{width: '150px', height: '150px', backgroundColor: colors.green, borderRadius: '30% 70% 70% 30%', bottom: '-30px', right: '20px', zIndex: 0}}></div>
              
              <img 
                src="./LKG.png" 
                alt="LKG Classroom Learning" 
                className="img-fluid rounded-circle border-4 shadow-lg w-100 float-anim position-relative mx-auto"
                style={{ objectFit: 'cover', height: 'auto', maxHeight: '550px', maxWidth: '550px', borderColor: colors.green, zIndex: 1 }}
              />
            </div>
          </div>

          {/* Highlights Grid - made colorful and bubble-like */}
          <div className="row g-4 mb-5 pt-4 px-2">
            {programDetails.map((detail, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6 col-12">
                <div className="program-card text-center border-4 h-100 d-flex flex-column justify-content-center p-4 shadow-sm" style={{borderColor: detail.color, backgroundColor: '#fff'}}>
                   <FaClock className='mx-auto mb-2 icon-float flex-shrink-0' size={22} color={detail.color} />
                  <span className="small text-muted fw-bold mb-1">{detail.label}</span>
                  <h5 className="fw-bold m-0 fs-5" style={{ color: detail.color }}>{detail.value}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="text-center mb-5 pt-3 max-w-lg mx-auto px-3">
             <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border-2" style={{borderColor: colors.blue}}>
                <FaStar color={colors.blue} size={18} />
                <span className="small fw-bold text-primary">Core Learning Pillars</span>
            </div>
            <h3 className="fw-bold display-6" style={{ color: '#0F172A' }}>LKG Curriculum Focus Areas</h3>
            <p className="text-secondary fs-6 fw-500">Designed to build academic confidence and conceptual understanding</p>
          </div>

          <div className="row g-4 mb-5 px-2 px-md-0">
            {learningPillars.map((act, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div className="program-card kid-card p-4 h-100 text-center text-md-start border-4" style={{borderColor: act.bg}}>
                  <div className="mb-4 d-inline-block p-4 rounded-circle icon-float mx-auto mx-md-0" style={{backgroundColor: act.bg}}>
                    {act.icon}
                  </div>
                  <h5 className="fw-bold mb-3 fs-5" style={{ color: '#0F172A' }}>{act.title}</h5>
                  <p className="text-secondary small m-0 fw-semibold" style={{ lineHeight: '1.7' }}>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enrollment Banner Box - Updated styling to match other pages */}
          <div className="p-4 p-md-5 text-white text-center position-relative overflow-hidden float-anim kid-rounded mx-2" style={{ background: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.blue} 100%)` }}>
             {/* Decorative shape */}
             <div className="position-absolute opacity-10 float-anim d-none d-md-block" style={{fontSize: '10rem', bottom: '-50px', left: '-50px'}}><FaRocket/></div>

            <h3 className="fw-bold display-6 mb-3 position-relative" style={{zIndex: 1}}>Give Your Child an Advantage in LKG</h3>
            <p className="opacity-90 mb-5 mx-auto fs-6 fw-semibold position-relative" style={{ maxWidth: '600px', lineHeight: 1.7, zIndex: 1 }}>
              Book an interactive campus tour to meet our expert LKG teachers and observe our active learning stations firsthand!
            </p>
            <Link href="/enquiry" className="btn bg-white btn-crayon text-primary fw-bold px-5 py-3 fs-6 position-relative shadow" style={{zIndex: 1}}>
              Book a School Tour <FaArrowRight className="ms-2" size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* --- FOOTER Kept Same --- */}
      <Footer />
    </div>
  );
}