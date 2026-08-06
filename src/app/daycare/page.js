/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { 
  FaArrowRight,
  FaCheckCircle,
  FaUtensils,
  FaBed,
  FaVideo,
  FaClock,
  FaChild,
  FaHeart
} from 'react-icons/fa';
// Note: Changed FaChild/FaHeart for better mascot/icon representation where appropriate
import Link from 'next/link';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function DaycarePage() {
  const [navOpen, setNavOpen] = useState(false);

  // Key stats for the Daycare program - Updated palette
  const programDetails = [
    { label: "Age Group", value: "1.0 – 6.0 Years", color: "#EC4899", bg: "#FCE7F3" }, // Pink
    { label: "Daycare Hours", value: "8:00 AM – 6:30 PM", color: "#2563EB", bg: "#DBEAFE" }, // Blue
    { label: "Care Ratio", value: "5 : 1 (Caregivers)", color: "#10B981", bg: "#D1FAE5" }, // Green
    { label: "Plans", value: "Half / Full-Day Plans", color: "#D97706", bg: "#FEF3C7" } // Yellow
  ];

  // Core Pillars for Daycare Facilities - Icons/Backgrounds updated
  const facilityPillars = [
    {
      title: "Cozy Rest & Nap Pods",
      desc: "Individual sanitized cots in quiet, climate-controlled rest zones.",
      icon: <FaBed size={30} color="#2563EB" />,
      bg: "#DBEAFE"
    },
    {
      title: "Nutritious Yummy Meals",
      desc: "Freshly prepared vegetarian meals and evening snacks designed by nutritionists.",
      icon: <FaUtensils size={30} color="#EC4899" />,
      bg: "#FCE7F3"
    },
    {
      title: "24/7 CCTV & Security",
      desc: "Secure campus with live parent monitoring updates for peace of mind.",
      icon: <FaVideo size={30} color="#10B981" />,
      bg: "#D1FAE5"
    },
    {
      title: "Guided Activity & Play",
      desc: "Reading, drawing, puzzle solving, and homework assistance.",
      icon: <FaChild size={30} color="#D97706" />,
      bg: "#FEF3C7"
    }
  ];

  // Colors theme variables used in inline styles
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
      
      <Navbar />
      
      {/* Dynamic Title Gradient with responsive padding */}
      <h1 className="text-center mt-5 mb-0 px-3 display-4 fw-extrabold" style={{ 
        background: `linear-gradient(90deg, ${colors.pink}, ${colors.blue}, ${colors.green})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 800,
        textShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}>Daycare Program</h1>
      
      <PageBanner />

      {/* --- MAIN DAYCARE CONTENT --- */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        {/* Playful top Wave curve */}
        <div className="wavy-divider wavy-top"></div>
        
        <style>{`
          h1, h2, h3, h4, h5, h6 { font-family: 'Fredoka', sans-serif; font-weight: 700; }
          p, span, small, label, li, a { font-family: 'Quicksand', sans-serif; font-weight: 500; }

          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
            50% { transform: translateY(-15px) rotate(1.5deg); }
          }
          @keyframes bouncePlayful {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(1.02); }
          }
          @keyframes wiggleHover {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-3deg); }
            75% { transform: rotate(3deg); }
            100% { transform: rotate(0deg); }
          }

          .float-anim { animation: floatSlow 4.5s ease-in-out infinite; }
          .bounce-anim { animation: bouncePlayful 2.5s ease-in-out infinite; }
          .icon-float { animation: floatSlow 3s ease-in-out infinite; }

          /* Kid-friendly card styling */
          .kid-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-radius: 30px !important;
            border: 5px solid #fff !important;
            background: #fff;
          }
          .kid-card:hover {
            transform: translateY(-12px) scale(1.03);
            box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.1) !important;
          }

          /* Hover Card Specifics */
          .kid-card-blue:hover { border-color: ${colors.blue} !important; box-shadow: 0 20px 30px rgba(37, 99, 235, 0.1) !important;}
          .kid-card-pink:hover { border-color: ${colors.pink} !important; box-shadow: 0 20px 30px rgba(236, 72, 153, 0.1) !important;}
          .kid-card-green:hover { border-color: ${colors.green} !important; box-shadow: 0 20px 30px rgba(16, 185, 129, 0.1) !important;}
          .kid-card-yellow:hover { border-color: ${colors.yellow} !important; box-shadow: 0 20px 30px rgba(245, 158, 11, 0.1) !important;}

          .icon-box {
            transition: transform 0.3s ease;
            animation: floatSlow 3s ease-in-out infinite;
          }
          .kid-card:hover .icon-box { transform: scale(1.1) rotate(5deg); animation: wiggleHover 0.5s ease; }

          /* Playful rounded utility */
          .kid-rounded { border-radius: 30px !important; }

          /* Buttons */
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

          /* Wavy divider */
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

          /* Responsive Flex Column Reverse for mobile */
          @media (max-width: 991px) {
            .flex-col-reverse-mobile { flex-direction: column-reverse; }
          }
        `}</style>
        
        <div className="container py-4 px-md-5">

          {/* Intro Section - Updated to match kid-friendly layouts and high responsiveness */}
          <div className="row align-items-center g-5 mb-5 flex-col-reverse-mobile">
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#E2F1E1', border: `2px solid ${colors.green}`}}>
                <FaHeart color={colors.green} size={16} className='bounce-anim' />
                <span className="small fw-bold" style={{color: '#059669'}}>Extended Care & Comfort</span>
              </div>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0F172A', lineHeight: '1.2' }}>
                A Safe, Loving & Nurturing Home Away From Home
              </h2>
              <p className="text-secondary lead fs-6 mb-4 fw-500" style={{ lineHeight: '1.8' }}>
                Our Daycare program provides working parents with ultimate peace of mind. We balance structured play, healthy meal times, quiet rest routines, and social engagement in a hygienic, secured environment.
              </p>
              
              <ul className="list-unstyled d-flex flex-column gap-3 mb-5 mx-auto mx-lg-0 text-start" style={{maxWidth: '500px'}}>
                <li className="d-flex align-items-center gap-3 text-secondary fw-semibold fs-6">
                  <FaCheckCircle color={colors.pink} size={20} className='flex-shrink-0' /> Flexible timing options (Full, Half, Hourly)
                </li>
                <li className="d-flex align-items-center gap-3 text-secondary fw-semibold fs-6">
                  <FaCheckCircle color={colors.pink} size={20} className='flex-shrink-0' /> Nutritious vegetarian meals & Snacks
                </li>
                <li className="d-flex align-items-center gap-3 text-secondary fw-semibold fs-6">
                  <FaCheckCircle color={colors.pink} size={20} className='flex-shrink-0' /> Strict hygiene & Sanitized play areas
                </li>
              </ul>

              <Link href="/contact" className="btn btn-crayon text-white fw-bold px-5 py-3 fs-6 shadow float-anim" style={{backgroundColor: colors.pink}}>
                Reserve a Daycare Slot <FaArrowRight className="ms-2" size={14}/>
              </Link>
            </div>

            <div className="col-lg-6 col-12 position-relative mb-lg-0 mb-5">
              {/* Decorative blobs - hidden on mobile for cleaner look */}
              <div className="position-absolute opacity-20 d-none d-lg-block" style={{width: '100px', height: '100px', backgroundColor: colors.blue, borderRadius: '50%', top: '-20px', left: '20px', zIndex: 0}}></div>
              <div className="position-absolute opacity-20 d-none d-lg-block" style={{width: '150px', height: '150px', backgroundColor: colors.green, borderRadius: '30% 70% 70% 30%', bottom: '-30px', right: '20px', zIndex: 0}}></div>
              
              <img 
                src="./daycare.png" 
                alt="Daycare Play & Rest Area" 
                className="img-fluid rounded-circle border-4 shadow-lg w-100 float-anim position-relative mx-auto mx-lg-0"
                style={{ objectFit: 'cover', height: 'auto', maxHeight: '550px', maxWidth: '550px', borderColor: colors.green, zIndex: 1 }}
              />
            </div>
          </div>

          {/* Highlights Grid - made colorful and bubble-like */}
          <div className="row g-4 mb-5 pt-4 px-2">
            {programDetails.map((detail, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6 col-12">
                <div className="program-card text-center border-4 h-100 d-flex flex-column justify-content-center p-4 shadow-sm kid-rounded" style={{borderColor: detail.color, backgroundColor: '#fff'}}>
                   <FaClock className='mx-auto mb-2 icon-float flex-shrink-0' size={22} color={detail.color} />
                  <span className="small text-muted fw-bold mb-1">{detail.label}</span>
                  <h5 className="fw-bold m-0 fs-5" style={{ color: detail.color }}>{detail.value}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Core Facility Pillars */}
          <div className="text-center mb-5 pt-3 max-w-lg mx-auto px-3">
             <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border-2" style={{borderColor: colors.blue}}>
                <FaHeart color={colors.blue} size={18} />
                <span className="small fw-bold text-primary">Trust Our Daycare</span>
            </div>
            <h3 className="fw-bold display-6" style={{ color: '#0F172A' }}>Safe, Happy, and Healthy Environment</h3>
            <p className="text-secondary fs-6 fw-500">Designed for extended comfort and development throughout the day</p>
          </div>

          <div className="row g-4 mb-5 px-2 px-md-0">
            {facilityPillars.map((pillar, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div className="program-card kid-card p-4 h-100 text-center text-md-start border-4 kid-rounded" style={{borderColor: pillar.bg}}>
                  <div className="mb-4 d-inline-block p-4 rounded-circle icon-float mx-auto mx-md-0" style={{backgroundColor: pillar.bg}}>
                    {pillar.icon}
                  </div>
                  <h5 className="fw-bold mb-3 fs-5" style={{ color: '#0F172A' }}>{pillar.title}</h5>
                  <p className="text-secondary small m-0 fw-semibold" style={{ lineHeight: '1.7' }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-To-Action Banner - Updated styling to match other pages */}
          <div className="p-4 p-md-5 rounded-4 text-white text-center position-relative overflow-hidden float-anim kid-rounded mx-2" style={{ background: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.blue} 100%)` }}>
             {/* Decorative shape */}
             <div className="position-absolute opacity-10 float-anim d-none d-md-block" style={{fontSize: '10rem', bottom: '-50px', left: '-50px'}}><FaChild/></div>

            <h3 className="fw-bold display-6 mb-3 position-relative" style={{zIndex: 1}}>Looking for Trusted Extended Care?</h3>
            <p className="opacity-90 mb-5 mx-auto fs-6 fw-semibold position-relative" style={{ maxWidth: '600px', lineHeight: 1.7, zIndex: 1 }}>
              Schedule a visit to tour our daycare facilities, inspect our meal plans, and meet our warm caregiving staff!
            </p>
            <Link href="/enquiry" className="btn bg-white btn-crayon text-primary fw-bold px-5 py-3 fs-6 position-relative shadow" style={{zIndex: 1}}>
              Schedule a Daycare Tour <FaArrowRight className="ms-2" size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* --- FOOTER Kept Same --- */}
      <Footer />
    </div>
  );
}