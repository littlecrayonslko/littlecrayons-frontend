/* eslint-disable @next/next/no-page-custom-font */

/* eslint-disable @next/next/no-img-element */
"use client";
import Link from 'next/link'; // <--- ADD THIS LINE
import React, { useState } from 'react';
import { 
  FaStar, 
  FaHeart, 
  FaArrowRight,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaHandHoldingHeart,
  FaRocket,
  FaPencilAlt,
  FaChild,
  FaGraduationCap,
  FaSmile,
  FaLightbulb
} from 'react-icons/fa';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function AboutUsPage() {
  const [navOpen, setNavOpen] = useState(false);

  const storyMilestones = [
    { year: "2018", title: "The Spark Begins", desc: "Started with just 15 toddlers and 3 passionate teachers in a cozy space." },
    { year: "2020", title: "STEM Integration", desc: "Introduced playful hands-on science and logic games designed for early years." },
    { year: "2023", title: "Campus Expansion", desc: "Opened our modern green campus with biometric security and outdoor play zones." },
    { year: "2026", title: "Award-Winning Standard", desc: "Recognized as a leading innovative preschool with over 1,200+ happy alumni." }
  ];
  
  const teamMembers = [
    {
      name: "Sarah Jenkins",
      role: "Head of Preschool & Founder",
      exp: "15+ Yrs Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      quote: "Every child is a natural explorer. We just give them the compass!"
    },
    {
      name: "Marcus Thorne",
      role: "Lead STEM & Early Logic Coach",
      exp: "10+ Yrs Experience",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      quote: "Building curiosity through play is how future innovators start."
    },
    {
      name: "Elena Rostova",
      role: "Child Psychology & Arts Lead",
      exp: "8+ Yrs Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
      quote: "Art and storytelling unlock emotional intelligence like nothing else."
    }
  ];

  // Core Values - Updated icons/colors to match new theme
  const values = [
    { title: "Safety First Always", icon: <FaShieldAlt size={28} color="#2563EB" />, bg: "#DBEAFE", desc: "Biometric access, 24/7 CCTV, and first-aid certified staff." },
    { title: "Joyful Discovery", icon: <FaRocket size={28} color="#D97706" />, bg: "#FEF3C7", desc: "Learning should never feel like a chore. Play is our core teaching tool." },
    { title: "Emotional Warmth", icon: <FaHandHoldingHeart size={28} color="#EC4899" />, bg: "#FCE7F3", desc: "Nurturing empathy, kindness, and self-belief from day one." },
    { title: "Parent Collaboration", icon: <FaUsers size={28} color="#059669" />, bg: "#D1FAE5", desc: "Daily app updates, direct messaging, and open-door partnerships." }
  ];


  return (
    // Import playful rounded fonts
    <div style={{ fontFamily: "'Fredoka', 'Quicksand', system-ui, sans-serif", color: '#1E293B', backgroundColor: '#FFFDFB' }}>
       <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      
      {/* Dynamic Keyframes & Micro-Interactions */}
      <style>{`
        /* Apply font rules globally inside this component */
        h1, h2, h3, h4, h5, h6 { font-family: 'Fredoka', sans-serif; font-weight: 700; }
        p, span, small, label, li, a { font-family: 'Quicksand', sans-serif; font-weight: 500; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4); }
          50% { box-shadow: 0 0 0 14px rgba(236, 72, 153, 0); }
        }
        @keyframes wiggleHover {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-4deg); }
          75% { transform: rotate(4deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .logo-float { animation: floatSlow 3.8s ease-in-out infinite; }
        .pulse-badge { animation: pulseGlow 2.5s infinite; }
        .icon-box { animation: floatSlow 3s ease-in-out infinite; }

        /* General playful rounded corner utility */
        .kid-rounded { border-radius: 25px !important; }

        /* Hover Card Effects */
        .hover-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: popIn 0.5s ease-out;
        }
        .hover-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 25px 30px -10px rgba(15, 23, 42, 0.1) !important;
        }

        .team-card {
          transition: all 0.35s ease;
          overflow: hidden;
          border: 4px solid #fff;
        }
        .team-card:hover .team-img {
          transform: scale(1.08);
        }
        .team-img {
          transition: transform 0.4s ease;
        }

        .hover-card:hover .icon-box {
          animation: wiggleHover 0.5s ease-in-out;
        }

        .timeline-box {
          position: relative;
          transition: all 0.3s ease;
        }
        .timeline-box:hover {
          border-color: #EC4899 !important; /* Preschool Pink */
          background-color: #FFFFFF !important;
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
          animation: wiggleHover 0.5s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* --- ANNOUNCEMENT BAR - Kept Same but updated colors --- */}
      <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open. <a href="/enquiry" className="text-warning text-decoration-underline ms-2 btn-crayon">Book a Campus Tour</a>
      </div>
      
      {/* Kept Same */}
      <Navbar />
      <PageBanner />

      {/* --- DISCOVER OUR STORY & MISSION --- */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F9FF 0%, #FFFDFB 100%)' }}>
        <div className="container py-4">
          <div className="row align-items-center gy- gy-md-5">
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white border shadow-sm mb-3 pulse-badge">
                <FaStar color="#F59E0B" size={16} />
                <span className="small fw-bold" style={{color: '#EC4899'}}>Discover Our Story</span>
              </div>
              <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0F172A', lineHeight: 1.15 }}>
                Inspiring <span style={{ color: '#EC4899' }}>Confidence</span>, Joy, and Curiosity Every Day.
              </h1>
              <p className="lead text-secondary mb-4 fs-5" style={{ lineHeight: 1.7 }}>
                Little Crayons was founded on a simple belief: early childhood education should be an exciting journey of hands-on discovery, warm relationships, and tailored skill development.
              </p>
              
              <div className="row g-3">
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-white rounded-4 border shadow-sm hover-card kid-rounded text-center">
                    <div className="p-3 bg-light rounded-circle d-inline-block mb-2 text-primary" style={{backgroundColor: '#DBEAFE'}}><FaUsers size={24}/></div>
                    <h3 className="fw-bold mb-0 text-primary">1,200+</h3>
                    <small className="text-muted fw-semibold">Happy Kids</small>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-white rounded-4 border shadow-sm hover-card kid-rounded text-center">
                     <div className="p-3 bg-light rounded-circle d-inline-block mb-2 text-warning" style={{backgroundColor: '#FEF3C7'}}><FaChild size={24}/></div>
                    <h3 className="fw-bold mb-0" style={{color: '#D97706'}}>1:6</h3>
                    <small className="text-muted fw-semibold">Teacher Ratio</small>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-3 bg-white rounded-4 border shadow-sm hover-card kid-rounded text-center">
                     <div className="p-3 bg-light rounded-circle d-inline-block mb-2 text-success" style={{backgroundColor: '#D1FAE5'}}><FaGraduationCap size={24}/></div>
                    <h3 className="fw-bold mb-0 text-success">100%</h3>
                    <small className="text-muted fw-semibold">Certified Staff</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative p-3 bg-white shadow-lg border hover-card float-anim" style={{borderRadius: '40px'}}>
                <img 
                  src="./about-us.png" 
                  alt="Modern preschool learning room" 
                  className="img-fluid w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover', borderRadius: '30px' }}
                />
                <div className="position-absolute bottom-0 end-0 m-4 p-3 bg-white shadow border d-flex align-items-center gap-3 kid-rounded" style={{ maxWidth: '280px' }}>
                  <FaAward size={32} color="#F59E0B" className='bounce-anim'/>
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#0F172A' }}>Top Preschool Award</h6>
                    <small className="text-muted fw-semibold">Early Learning Center 2025</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* --- OUR CORE VALUES SECTION --- */}
      <section className="py-5" style={{backgroundColor: '#fff'}}>
        <div className="container py-3 position-relative">
          {/* Decorative shapes */}
          <div className='position-absolute opacity-10 float-anim' style={{fontSize: '10rem', color: '#8B5CF6', top: '10%', right: '5%', zIndex: 0}}><FaSmile/></div>
          
          <div className="text-center mb-5 position-relative" style={{zIndex: 1}}>
             <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border" style={{borderColor: '#2563EB', backgroundColor: '#DBEAFE'}}>
               <FaLightbulb color="#2563EB" size={16} />
               <span className="small fw-bold text-primary">Our Guiding Principles</span>
            </div>
            <h2 className="fw-bold display-5" style={{ color: '#0F172A' }}>What Makes Little Crayons Special</h2>
          </div>

          <div className="row g-4 position-relative" style={{zIndex: 1}}>
            {values.map((v, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm hover-card bg-white border-4 kid-rounded p-4" style={{borderColor: v.bg}}>
                  <div className="icon-box d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3" style={{ backgroundColor: v.bg, width: '60px', height: '60px' }}>
                    {v.icon}
                  </div>
                  <h5 className="fw-bold mb-2 fs-5" style={{ color: '#0F172A' }}>{v.title}</h5>
                  <p className="text-secondary mb-0 fw-semibold" style={{ lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR STORY TIMELINE --- */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC', borderTop: '8px solid #F1F5F9', borderBottom: '8px solid #F1F5F9' }}>
        <div className="container py-3 position-relative">
           {/* Decorative shape */}
          <div className='position-absolute opacity-10 float-anim' style={{fontSize: '12rem', color: '#FF5722', bottom: '10%', left: '2%', zIndex: 0}}><FaPencilAlt/></div>

          <div className="text-center mb-5 position-relative" style={{zIndex: 1}}>
             <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border" style={{borderColor: '#EC4899', backgroundColor: '#FCE7F3'}}>
                <FaRocket color="#EC4899" size={16} />
                <span className="small fw-bold" style={{color: '#EC4899'}}>How We Grew</span>
            </div>
            <h2 className="fw-bold display-5" style={{ color: '#0F172A' }}>Our Journey Over The Years</h2>
          </div>

          <div className="row g-4 position-relative" style={{zIndex: 1}}>
            {storyMilestones.map((m, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="timeline-box p-4 bg-white border-4 shadow h-100 hover-card kid-rounded" style={{borderColor: '#E2E8F0'}}>
                  <span className="badge px-4 py-2 rounded-pill fw-bold mb-3 fs-6 btn-crayon" style={{background: `linear-gradient(90deg, #EC4899, ${idx === 0 ? '#10B981': idx === 1 ? '#D97706' : idx === 2 ? '#8B5CF6' : '#2563EB'})`}}>{m.year}</span>
                  <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{m.title}</h5>
                  <p className="text-secondary mb-0" style={{ lineHeight: 1.7, fontWeight: 500 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEET OUR EDUCATORS SECTION --- */}
      <section className="py-5 bg-white position-relative" style={{borderBottom: `8px solid #F1F5F9`}}>
        <div className="container py-3">
          <div className="text-center mb-5">
             <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border" style={{borderColor: '#10B981', backgroundColor: '#D1FAE5'}}>
                <FaGraduationCap color="#10B981" size={16} />
                <span className="small fw-bold" style={{color: '#059669'}}>Leadership & Teachers</span>
            </div>
            <h2 className="fw-bold display-5" style={{ color: '#0F172A' }}>Guided by Caring Experts</h2>
            <p className="text-muted fw-semibold fs-6">Our certified teachers bring warmth, patience, and high academic standards.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-10">
                <div className="card shadow-lg team-card bg-white h-100 hover-card kid-rounded">
                  <div className="overflow-hidden position-relative" style={{ height: '260px', borderRadius: '21px 21px 0 0' }}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-100 h-100 team-img" 
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="position-absolute bottom-0 start-0 m-3 badge bg-white text-dark shadow-sm border font-semibold px-3 py-2 btn-crayon">
                      {member.exp}
                    </span>
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="fw-bold mb-1" style={{ color: '#0F172A' }}>{member.name}</h5>
                    <p className="fw-bold small mb-3 badge px-3 py-1" style={{backgroundColor: idx===0 ? '#FCE7F3' : idx ===1 ? '#DBEAFE' : '#FFFBEB', color: idx===0 ? '#EC4899' : idx ===1 ? '#2563EB' : '#D97706'}}>{member.role}</p>
                    <p className="text-muted small fst-italic mb-0 fw-semibold" style={{lineHeight: 1.7}}>{member.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION BAR - Kept Same but updated colors and styles --- */}
       <section className="py-5 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #2563EB 100%)' }}>
         {/* Kept Same */}
         <div className="container py-3 text-center position-relative" style={{zIndex: 1}}>
          <h2 className="fw-bold display-6 mb-3">Ready to give your child the best start?</h2>
          <p className="lead opacity-90 mb-4 max-w-xl mx-auto fs-5" style={{ maxWidth: '600px' }}>
            Schedule a personalized campus walk-through and experience our vibrant classrooms firsthand.
          </p>
          <a href="/enquiry" className="btn bg-white btn-crayon text-primary fw-bold px-5 py-3 shadow hover-card">
            Schedule a School Tour <FaArrowRight className="ms-2 bounce-anim" size={14} />
          </a>
        </div>
      </section>
      
      {/* Kept Same */}
      <Footer />

    </div>
  );
}