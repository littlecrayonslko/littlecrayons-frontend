/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from 'react';
import { 
  FaGraduationCap, 
  FaStar, 
  FaArrowRight,
  FaCheckCircle,
  FaBookOpen,
  FaShapes,
  FaPencilAlt,
  FaComments,
  FaChild,
  FaClock,
  FaSmileWink 
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function NurseryPage() {
  const [navOpen, setNavOpen] = useState(false);

  // Key stats for the Nursery program - updated colors to match new palette
  const programDetails = [
    { label: "Age Group", value: "2.5 – 3.5 Years", color: "#EC4899", bg: "#FCE7F3" },
    { label: "Class Timings", value: "9:00 AM – 12:00 PM", color: "#2563EB", bg: "#DBEAFE" },
    { label: "Teacher Ratio", value: "10 : 1", color: "#10B981", bg: "#D1FAE5" },
    { label: "Duration", value: "5 Days / Week", color: "#D97706", bg: "#FEF3C7" }
  ];

  // Learning Focus & Activities for Nursery - updated icons/colors
  const learningPillars = [
    {
      title: "Early Phonics",
      desc: "Introducing letter sounds, vocabulary expansion, and interactive storytelling.",
      icon: <FaBookOpen size={30} color="#2563EB" />,
      bg: "#DBEAFE"
    },
    {
      title: "Numbers & Shapes",
      desc: "Fun counting games, pattern identification, and spatial awareness.",
      icon: <FaShapes size={30} color="#EC4899" />,
      bg: "#FCE7F3"
    },
    {
      title: "Pre-Writing Skills",
      desc: "Tracing, grip development, and pencil control through engaging coloring and mazes.",
      icon: <FaPencilAlt size={30} color="#10B981" />,
      bg: "#D1FAE5"
    },
    {
      title: "Social skills",
      desc: "Encouraging self-expression, listening, sharing, and collaborative play.",
      icon: <FaComments size={30} color="#D97706" />,
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
    // Import playful rounded fonts
    <div style={{ fontFamily: "'Fredoka', 'Quicksand', system-ui, sans-serif", color: colors.text, backgroundColor: '#FFFDFB' }}>
       <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      
      <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open. <a href="/enquiry" className="text-warning text-decoration-underline ms-2 btn-crayon">Book a Campus Tour</a>
      </div>

      <Navbar />
      
      {/* Dynamic Title Gradient */}
      <h1 className="text-center mt-5 mb-0 display-4 fw-extrabold px-3" style={{ 
        background: `linear-gradient(90deg, ${colors.pink}, ${colors.blue}, ${colors.green})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 800 
      }}>Nursery Program</h1>
      
      <PageBanner />

      {/* --- MAIN NURSERY CONTENT --- */}
      <section className="py-5 bg-white position-relative">
        {/* Wavy top divider for better transition */}
        <style>{`
          h1, h2, h3, h4, h5, h6 { font-family: 'Fredoka', sans-serif; font-weight: 700; }
          p, span, small, label, li, a { font-family: 'Quicksand', sans-serif; font-weight: 500; }

          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(-1deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
          @keyframes wiggleHover {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-3deg); }
            75% { transform: rotate(3deg); }
            100% { transform: rotate(0deg); }
          }

          .float-anim { animation: floatSlow 4s ease-in-out infinite; }
          .icon-float { animation: floatSlow 3s ease-in-out infinite; }

          .program-card {
            background: #FFFFFF;
            border-radius: 25px !important;
            border: 4px solid #fff;
            box-shadow: 0 10px 25px rgba(0,0,0,0.04);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .program-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 30px rgba(0,0,0,0.08);
            animation: wiggleHover 0.5s ease;
          }

          .btn-crayon {
            border-radius: 50px;
            font-weight: 700;
            transition: all 0.3s ease;
            border: none;
          }
          .btn-crayon:hover {
            transform: translateY(-3px) rotate(-1deg);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .wavy-divider {
            position: absolute;
            width: 100%;
            left: 0;
            height: 50px;
            background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%23FFFFFF" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
            background-size: cover;
            background-repeat: no-repeat;
          }
          .wavy-top { top: -49px; transform: rotate(180deg); }
        `}</style>
        
        <div className="wavy-divider wavy-top"></div>
        
        <div className="container py-4">

          {/* Intro Section - Updated for better responsiveness */}
          <div className="row align-items-center g-5 mb-5 flex-col-reverse-mobile">
            <div className="col-lg-6 col-12">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#FCE7F3', border: `2px solid ${colors.pink}`}}>
                <FaChild color={colors.pink} size={16} className='bounce-anim' />
                <span className="small fw-bold" style={{color: colors.pink}}>Foundational Learning</span>
              </div>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0F172A', lineHeight: '1.2' }}>
                Building Confidence, Language & Curiosity
              </h2>
              <p className="text-secondary lead fs-6 mb-4" style={{ lineHeight: '1.8', fontWeight: 500 }}>
                Our Nursery program transitions young learners into structured inquiry and expression. We focus on developing core cognitive abilities, early literacy, pre-writing skills, and social independence through structured play and interactive projects.
              </p>
              
              <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
                <li className="d-flex align-items-center gap-3 text-secondary fw-500 fs-6">
                  <FaCheckCircle color={colors.green} size={20} className='flex-shrink-0' /> Interactive phonics & early literacy curriculum
                </li>
                <li className="d-flex align-items-center gap-3 text-secondary fw-500 fs-6">
                  <FaCheckCircle color={colors.green} size={20} className='flex-shrink-0' /> Hands-on STEM-based sensory stations
                </li>
                <li className="d-flex align-items-center gap-3 text-secondary fw-500 fs-6">
                  <FaCheckCircle color={colors.green} size={20} className='flex-shrink-0' /> Guided social-emotional growth & independence
                </li>
              </ul>

              <Link href="/contact" className="btn btn-crayon text-white fw-bold px-5 py-3 fs-6 shadow float-anim" style={{backgroundColor: colors.pink}}>
                Enroll Your Child Today <FaArrowRight className="ms-2" size={14}/>
              </Link>
            </div>

            <div className="col-lg-6 col-12 position-relative mb-lg-0 mb-5">
              {/* Decorative blobs - hidden on mobile for cleaner look */}
              <div className="position-absolute opacity-20 d-none d-lg-block" style={{width: '100px', height: '100px', backgroundColor: colors.blue, borderRadius: '50%', top: '-20px', left: '20px', zIndex: 0}}></div>
              <div className="position-absolute opacity-20 d-none d-lg-block" style={{width: '150px', height: '150px', backgroundColor: colors.yellow, borderRadius: '30% 70% 70% 30%', bottom: '-30px', right: '20px', zIndex: 0}}></div>
              
              <img 
                src="./Nursery.png" 
                alt="Nursery Classroom Activity" 
                className="img-fluid rounded-4 shadow-lg w-100 float-anim position-relative kid-rounded"
                style={{ objectFit: 'cover', height: 'auto', maxHeight: '550px', border: `8px solid ${colors.blue}`, zIndex: 1 }}
              />
            </div>
          </div>

          {/* Key Program Details Grid */}
          <div className="row g-4 mb-5 pt-4">
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

          {/* Learning Pillars */}
          <div className="text-center mb-5 pt-3 max-w-lg mx-auto px-3">
             <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border-2" style={{borderColor: colors.blue}}>
                <FaSmileWink color={colors.blue} size={18} />
                <span className="small fw-bold text-primary">Classroom Life</span>
            </div>
            <h3 className="fw-bold display-6" style={{ color: '#0F172A' }}>Core Curriculum Pillars</h3>
            <p className="text-secondary fs-6 fw-500">Designed to develop critical early academic and developmental milestones</p>
          </div>

          <div className="row g-4 mb-5">
            {learningPillars.map((pillar, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div className="program-card kid-card p-4 h-100 text-center text-md-start border-4" style={{borderColor: pillar.bg}}>
                  <div className="mb-4 d-inline-block p-4 rounded-circle icon-float mx-auto mx-md-0" style={{backgroundColor: pillar.bg}}>
                    {pillar.icon}
                  </div>
                  <h5 className="fw-bold mb-3 fs-5" style={{ color: '#0F172A' }}>{pillar.title}</h5>
                  <p className="text-secondary small m-0 fw-semibold" style={{ lineHeight: '1.7' }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-To-Action Banner - Updated styling */}
          <div className="p-4 p-md-5 rounded-4 text-white text-center position-relative overflow-hidden float-anim kid-rounded" style={{ background: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.blue} 100%)` }}>
             {/* Decorative shape */}
             <div className="position-absolute opacity-10 float-anim d-none d-md-block" style={{fontSize: '10rem', bottom: '-50px', left: '-50px'}}><FaGraduationCap/></div>

            <h3 className="fw-bold display-6 mb-3 position-relative" style={{zIndex: 1}}>Want to see our Nursery class in action?</h3>
            <p className="opacity-90 mb-5 mx-auto fs-6 fw-semibold position-relative" style={{ maxWidth: '600px', lineHeight: 1.7, zIndex: 1 }}>
              Schedule a visit to see our playgroup classroom in action and meet our loving teaching team!
            </p>
            <Link href="/enquiry" className="btn bg-white btn-crayon text-primary fw-bold px-5 py-3 fs-6 position-relative shadow" style={{zIndex: 1}}>
              Book a Free Campus Tour <FaArrowRight className="ms-2" size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* --- FOOTER Kept Same --- */}
      <Footer />
    </div>
  );
}