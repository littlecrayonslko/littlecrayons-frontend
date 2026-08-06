/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from 'react';
import { 
  FaArrowRight,
  FaCheckCircle,
  FaPuzzlePiece,
  FaMusic,
  FaPaintBrush,
  FaSmileWink,
  FaChild,
  FaClock
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function PlaygroupPage() {
  const [navOpen, setNavOpen] = useState(false);

  // Key stats - colors updated to new palette
  const programDetails = [
    { label: "Age Group", value: "1.5 – 2.5 Years", color: "#EC4899", bg: "#FCE7F3" }, // Pink
    { label: "Class Timings", value: "9:00 AM – 11:30 AM", color: "#2563EB", bg: "#DBEAFE" }, // Blue
    { label: "Teacher Ratio", value: "8 : 1", color: "#10B981", bg: "#D1FAE5" }, // Green
    { label: "Duration", value: "5 Days / Week", color: "#D97706", bg: "#FEF3C7" } // Yellow
  ];

  // Activities - icons updated to new palette
  const activities = [
    {
      title: "Sensory & Creative",
      desc: "Clay modeling, finger painting, and water play to develop fine motor skills.",
      icon: <FaPaintBrush size={30} color="#EC4899" />,
      bg: "#FCE7F3"
    },
    {
      title: "Rhythm & Movement",
      desc: "Nursery rhymes, instruments, and dancing to build auditory skills.",
      icon: <FaMusic size={30} color="#2563EB" />,
      bg: "#DBEAFE"
    },
    {
      title: "Cognitive Puzzles",
      desc: "Sorting shapes, color matching, and building blocks to stimulate problem-solving.",
      icon: <FaPuzzlePiece size={30} color="#10B981" />,
      bg: "#D1FAE5"
    },
    {
      title: "Socialization",
      desc: "Group sharing, circle time, and guided play to nurture emotional confidence.",
      icon: <FaSmileWink size={30} color="#D97706" />,
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

      {/* Dynamic Keyframes */}
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
      
      <Navbar />
      
      {/* Dynamic Title Gradient */}
      <h1 className="text-center mt-5 mb-0 display-4 fw-extrabold" style={{ 
        background: `linear-gradient(90deg, ${colors.pink}, ${colors.blue}, ${colors.green})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 800 
      }}>Playgroup Program</h1>
      
      <PageBanner />

      {/* --- MAIN PLAYGROUP CONTENT --- */}
      <section className="py-5 bg-white position-relative">
        {/* Wavy top divider for better transition */}
        <div className="wavy-divider wavy-top"></div>
        
        <div className="container py-4">

          {/* Intro Section - Updated to match kid-friendly layouts */}
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#FCE7F3', border: `2px solid ${colors.pink}`}}>
                <FaChild color={colors.pink} size={16} className='bounce-anim' />
                <span className="small fw-bold" style={{color: colors.pink}}>Early Learning Journey</span>
              </div>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0F172A', lineHeight: '1.2' }}>
                Where Joyful Discovery & Play Begin
              </h2>
              <p className="text-secondary lead fs-6 mb-4" style={{ lineHeight: '1.8', fontWeight: 500 }}>
                Our Playgroup program is specially tailored for toddlers stepping into their very first structured social environment. Through play-based learning, tactile activities, and warm guidance, we foster curiosity and independence in a safe, home-like setting.
              </p>
              
              <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
                <li className="d-flex align-items-center gap-2 text-secondary fw-500 fs-6">
                  <FaCheckCircle color={colors.green} size={20} /> Safe, child-proofed interactive play arenas
                </li>
                <li className="d-flex align-items-center gap-2 text-secondary fw-500 fs-6">
                  <FaCheckCircle color={colors.green} size={20} /> Nurturing staff trained in early childhood care
                </li>
                <li className="d-flex align-items-center gap-2 text-secondary fw-500 fs-6">
                  <FaCheckCircle color={colors.green} size={20} /> Regular parent updates & milestone tracking
                </li>
              </ul>

              <Link href="/contact" className="btn btn-crayon text-white fw-bold px-5 py-3 fs-6 shadow float-anim" style={{backgroundColor: colors.pink}}>
                Enroll Your Toddler Today <FaArrowRight className="ms-2" size={14}/>
              </Link>
            </div>

            <div className="col-lg-6 position-relative">
              {/* Decorative blobs */}
              <div className="position-absolute opacity-20" style={{width: '100px', height: '100px', backgroundColor: colors.blue, borderRadius: '50%', top: '-20px', left: '20px', zIndex: 0}}></div>
              <div className="position-absolute opacity-20" style={{width: '150px', height: '150px', backgroundColor: colors.yellow, borderRadius: '30% 70% 70% 30%', bottom: '-30px', right: '20px', zIndex: 0}}></div>
              
              <img 
                src="./playgroup.png" 
                alt="Playgroup Classroom" 
                className="img-fluid rounded-circle border-4 shadow-lg w-100 float-anim position-relative"
                style={{ objectFit: 'cover', height: '550px', width: '550px', borderColor: colors.blue, zIndex: 1 }}
              />
            </div>
          </div>

          {/* Highlights Grid - Made colorful and bubble-like */}
          <div className="row g-4 mb-5 pt-4">
            {programDetails.map((detail, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6">
                <div className="program-card text-center border-4 h-100 d-flex flex-column justify-content-center p-4 shadow-sm" style={{borderColor: detail.color, backgroundColor: '#fff'}}>
                   <FaClock className='mx-auto mb-2 icon-float' size={22} color={detail.color} />
                  <span className="small text-muted fw-bold mb-1">{detail.label}</span>
                  <h5 className="fw-bold m-0 fs-5" style={{ color: detail.color }}>{detail.value}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="text-center mb-5 pt-3 max-w-lg mx-auto">
             <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border-2" style={{borderColor: colors.blue}}>
                <FaSmileWink color={colors.blue} size={18} />
                <span className="small fw-bold text-primary">Classroom Life</span>
            </div>
            <h3 className="fw-bold display-6" style={{ color: '#0F172A' }}>What Little Ones Experience</h3>
            <p className="text-secondary fs-6 fw-500">Designed to engage all five senses and spark natural creativity</p>
          </div>

          <div className="row g-4 mb-5">
            {activities.map((act, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="program-card kid-card p-4 h-100 text-center border-4" style={{borderColor: act.bg}}>
                  <div className="mb-4 d-inline-block p-4 rounded-circle icon-float" style={{backgroundColor: act.bg}}>
                    {act.icon}
                  </div>
                  <h5 className="fw-bold mb-3 fs-5" style={{ color: '#0F172A' }}>{act.title}</h5>
                  <p className="text-secondary small m-0 fw-semibold" style={{ lineHeight: '1.7' }}>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enrollment Banner Box - Updated to new colorful style */}
          <div className="p-5 rounded-4 text-white text-center position-relative overflow-hidden float-anim" style={{ background: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.blue} 100%)`, borderRadius: '30px' }}>
             {/* Decorative shape */}
             <div className="position-absolute opacity-10 float-anim" style={{fontSize: '10rem', bottom: '-50px', left: '-50px'}}><FaChild/></div>

            <h3 className="fw-bold display-6 mb-3">Ready to give your toddler a head start?</h3>
            <p className="opacity-90 mb-5 mx-auto fs-6 fw-semibold" style={{ maxWidth: '600px', lineHeight: 1.7 }}>
              Schedule a visit to see our playgroup classroom in action and meet our loving teaching team!
            </p>
            <Link href="/enquiry" className="btn bg-white btn-crayon text-primary fw-bold px-5 py-3 fs-6">
              Book a Free Campus Tour <FaArrowRight className="ms-2" size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}