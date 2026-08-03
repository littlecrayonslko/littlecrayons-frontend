/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from 'next/link'; // <--- ADD THIS LINE
import React, { useState, useEffect } from 'react';
import {
  FaGraduationCap,
  FaStar,
  FaBookReader,
  FaPuzzlePiece,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaLightbulb,
  FaQuestionCircle,
  FaChevronDown,
  FaSmileWink,
  FaCat,
  FaCrow,
  FaPencilAlt,
  FaShapes,
  FaAppleAlt,
  FaFrog,
  FaFeather
} from 'react-icons/fa';
// Note: Changed FaDog to FaFrog and added FaFeather, FaShapes for better mascot/icon representation

import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import Footer from './components/footer';

export default function EnhancedPreschoolHomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // State for FAQ toggle
  const [openFaq, setOpenFaq] = useState(0); // Open first one by default for engagement

  // State for Kids Animal Playground
  const [animalSound, setAnimalSound] = useState("Click a friend to hear them speak!");
  const [activeAnimal, setActiveAnimal] = useState(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
      title: "Interactive Play & Early Motor Skills",
      subtitle: "Safe, guided social spaces designed for curious minds.",
      color: "#EC4899" // Pink accent
    },
    {
      url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
      title: "Personalized Reading & Vocabulary",
      subtitle: "Nurturing early literacy through joyful storytelling.",
      color: "#2563EB" // Blue accent
    },
    {
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Arts & Expression",
      subtitle: "Encouraging self-confidence and visual exploration.",
      color: "#F59E0B" // Yellow accent
    }
  ];

  const testimonials = [
    {
      name: "Dr. Eleanor Vance",
      role: "Parent & Child Psychologist",
      text: "The balanced focus between emotional security and cognitive growth at Little Crayons is exceptional. My daughter thrives here every day.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      bgColor: "#DBEAFE" // Light Blue
    },
    {
      name: "Michael & Clara Rossi",
      role: "Parents of Ethan (Age 3)",
      text: "Extremely professional leadership coupled with a genuine, warm teaching staff. The progress in Ethan's communication has been remarkable.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      bgColor: "#FCE7F3" // Light Pink
    },
    {
      name: "Sophia Martinez",
      role: "Parent of Oliver (Age 4)",
      text: "Clean, secure, and thoughtfully designed facilities. The curriculum prepares kids for real-world confidence without rushing their childhood.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      bgColor: "#FEF3C7" // Light Yellow
    }
  ];

  const faqList = [
    {
      q: "What if my child gets separation anxiety?",
      a: "That's completely normal! We offer a smooth transition program where parents can stay for short periods during week one. Our teachers are specially trained in warm emotional comfort and distraction through fun games!",
      icon: <FaHeart />
    },
    {
      q: "Do they need to be potty trained?",
      a: "Not at all! We support potty training at your child's pace. Our classrooms feature child-sized, clean, private washrooms, and our staff works closely with parents to maintain consistency.",
      icon: <FaShapes />
    },
    {
      q: "How do parents receive updates?",
      a: "You get access to our private Parent Portal app! Every afternoon, you receive real-time photos, activity highlights, nap times, meal logs, and direct chat access with lead teachers.",
      icon: <FaPencilAlt />
    },
    {
      q: "What security measures are in place?",
      a: "Child safety is our #1 priority. We maintain biometric door entry, 24/7 HD CCTV monitoring, strictly verified pickup lists, background-checked staff, and first-aid certified teachers in every room.",
      icon: <FaStar />
    },
    {
      q: "Are meals and snacks provided?",
      a: "Yes! We serve wholesome, organic morning snacks and balanced lunches prepared fresh daily by our campus chef. We cater easily to all dietary restrictions and peanut allergies.",
      icon: <FaAppleAlt />
    }
  ];

  const animals = [
    { id: 'frog', name: 'Freddy Frog', sound: '🐸 "RIBBIT! Let\'s jump into learning!"', color: '#10B981', icon: <FaFrog size={40}/> },
    { id: 'bunny', name: 'Pip the Bunny', sound: '🐰 "HOP HOP! Want to do a happy dance with me?"', color: '#EC4899', icon: <FaSmileWink size={40}/> },
    { id: 'cat', name: 'Whiskers the Cat', sound: '🐱 "MEOW! Let\'s draw colorful rainbows together!"', color: '#8B5CF6', icon: <FaCat size={40}/> },
    { id: 'owl', name: 'Professor Owl', sound: '🦉 "HOOT HOOT! Did you know learning is super fun?"', color: '#F59E0B', icon: <FaFeather size={40}/> }
  ];

  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(galleryTimer);
  }, [galleryImages.length]);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAnimalClick = (animal) => {
    setActiveAnimal(animal.id);
    setAnimalSound(animal.sound);
  };

  // Define main colorful theme variables used in inline styles
  const colors = {
    pink: '#EC4899',
    blue: '#2563EB',
    yellow: '#F59E0B',
    green: '#10B981',
    purple: '#8B5CF6',
    text: '#1E293B',
    bg: '#FFFDFB' // Warm white
  };

  return (
    // Import playful rounded fonts
    <div style={{ fontFamily: "'Quicksand', 'Fredoka', system-ui, sans-serif", color: colors.text, backgroundColor: colors.bg }}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        /* Global playful adjustments */
        h1, h2, h3, h4, h5, h6 { font-family: 'Fredoka', sans-serif; font-weight: 700; }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes bouncePlayful {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pulseSoft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(236, 72, 153, 0); }
        }

        .float-anim { animation: floatSlow 4s ease-in-out infinite; }
        .bounce-anim { animation: bouncePlayful 2.5s ease-in-out infinite; }
        .pulse-anim { animation: pulseSoft 2s infinite; }

        /* Kid-friendly card styling */
        .kid-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border-radius: 30px !important;
          border: 4px solid transparent !important;
          background: #fff;
        }
        
        /* Different hover colors for variety */
        .kid-card-pink:hover { border-color: ${colors.pink} !important; transform: translateY(-12px) scale(1.02); box-shadow: 0 20px 30px rgba(236, 72, 153, 0.15) !important; }
        .kid-card-blue:hover { border-color: ${colors.blue} !important; transform: translateY(-12px) scale(1.02); box-shadow: 0 20px 30px rgba(37, 99, 235, 0.15) !important; }
        .kid-card-yellow:hover { border-color: ${colors.yellow} !important; transform: translateY(-12px) scale(1.02); box-shadow: 0 20px 30px rgba(245, 158, 11, 0.15) !important; }
        .kid-card-green:hover { border-color: ${colors.green} !important; transform: translateY(-12px) scale(1.02); box-shadow: 0 20px 30px rgba(16, 185, 129, 0.15) !important; }

        .icon-box {
          transition: transform 0.3s ease;
          animation: floatSlow 3s ease-in-out infinite;
        }
        .kid-card:hover .icon-box { transform: scale(1.1) rotate(5deg); animation: wiggle 0.5s ease; }

        /* Animal Button styling */
        .animal-btn {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          border: 5px solid #fff !important;
        }
        .animal-btn:hover {
          transform: scale(1.2) rotate(5deg);
          box-shadow: 0 15px 25px rgba(0,0,0,0.1) !important;
        }

        /* FAQ Styling */
        .faq-card {
          transition: all 0.3s ease;
          border: 3px solid #E2E8F0 !important;
          border-radius: 20px !important;
        }
        .faq-card:hover {
          border-color: ${colors.blue} !important;
          background-color: #fff !important;
          transform: translateX(5px);
        }
        .faq-card.open {
          border-color: ${colors.green} !important;
          background-color: #fff !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        /* Playful buttons */
        .btn-crayon {
          border-radius: 50px;
          font-weight: 700;
          transition: all 0.3s ease;
          border: none;
        }
        .btn-crayon:hover {
          transform: scale(1.05) rotate(-1deg);
          animation: wiggle 0.5s ease;
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
        .wavy-bottom { bottom: -1px; }

      `}</style>

      {/* Top Bar - Made more colorful */}
      <div className="py-2 text-center text-white fw-bold small" style={{ background: `linear-gradient(90deg, ${colors.pink}, ${colors.purple}, ${colors.blue}, ${colors.green})` }}>
        <FaStar className="me-2" /> Admissions open for 2026–2027! <FaArrowRight className="mx-2" /> 
        <Link href="/contact" className="text-white text-decoration-underline p-1 rounded btn-crayon" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
          Book a Campus Tour
        </Link>
        <FaSmileWink className="ms-2" />
      </div>

      <Navbar />
      <HeroSection />

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-5 position-relative" style={{backgroundColor: '#fff', borderBottom: `8px solid ${colors.yellow}`}}>
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5 text-center position-relative float-anim">
              {/* Decorative blobs */}
              <div className="position-absolute opacity-20" style={{width: '100px', height: '100px', backgroundColor: colors.pink, borderRadius: '50%', top: '-20px', left: '20px'}}></div>
              <div className="position-absolute opacity-20" style={{width: '150px', height: '150px', backgroundColor: colors.blue, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', bottom: '-30px', right: '20px'}}></div>
              
              <img
                src="https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/744858734_122213766806544287_5565503532272254473_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=keISSTTaxd0Q7kNvwGuJ_K3&_nc_oc=AdrwTTjUJmvAuJB_VHaPd6ZSIlo7oa0Yb68Lxe3w25nVlolIPlBeRZhr76bqooy5QHDQebowWEoiIiX6pk5QXXdm&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=Q8c3C7saJ3cbzZo56SLNcQ&_nc_ss=7b2a8&oh=00_AQEsrpKjY8fxx50wfy3ayWKPdj1xFgw4YHIn2vBsJeIo2Q&oe=6A76BF1C"
                alt="Children playing together"
                className="img-fluid rounded-circle shadow-lg border-4"
                style={{ width: '380px', height: '380px', objectFit: 'cover', borderColor: colors.yellow }}
              />
            </div>
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#FFFBEB', border: `2px solid ${colors.yellow}`}}>
                <FaPencilAlt className="me-2" style={{color: colors.yellow}} />
                <h6 className="fw-bold text-uppercase m-0" style={{ color: colors.yellow, letterSpacing: '1px', fontSize: '0.85rem' }}>About Little Crayons</h6>
              </div>
              <h2 className="fw-bold mb-3 display-5" style={{ color: colors.text }}>
                Thoughtfully Designed for Little Milestones
              </h2>
              <p className="text-secondary fs-5" style={{ lineHeight: 1.7, fontWeight: 500 }}>
                Early years set the stage for lifelong learning! Our smiling educators combine playful science, emotional growth, and creative exploration in colorful, safe spaces built just for curious minds.
              </p>
              <div className="row g-4 my-3">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 p-3 kid-card kid-card-pink border shadow-sm">
                    <div className="p-3 rounded-circle" style={{backgroundColor: '#FCE7F3', color: colors.pink}}><FaHeart size={25} /></div>
                    <div>
                      <h6 className="fw-bold mb-0 fs-5" style={{ color: colors.text }}>Nurturing Spot</h6>
                      <small className="text-muted fw-bold">1:6 Low Teacher Ratio</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 p-3 kid-card kid-card-blue border shadow-sm">
                    <div className="p-3 rounded-circle" style={{backgroundColor: '#DBEAFE', color: colors.blue}}><FaBookReader size={25} /></div>
                    <div>
                      <h6 className="fw-bold mb-0 fs-5" style={{ color: colors.text }}>Fun Lessons</h6>
                      <small className="text-muted fw-bold">STEM + Storytelling</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROGRAMS SECTION --- */}
      <section id="courses" className="py-5 position-relative" style={{ backgroundColor: '#F0F9FF', borderBottom: `8px solid ${colors.green}` }}>
        <div className="wavy-divider wavy-top"></div>
        <div className="container py-5 position-relative">
          <div className="text-center mb-5 max-w-2xl mx-auto position-relative">
            <div className="position-absolute top-0 start-50 translate-middle-x opacity-10 float-anim" style={{fontSize: '10rem', color: colors.blue, zIndex: 0}}><FaShapes/></div>
            <div className="position-relative" style={{zIndex: 1}}>
              <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#DBEAFE', border: `2px solid ${colors.blue}`}}>
                <FaShapes className="me-2" style={{color: colors.blue}} />
                <h6 className="fw-bold text-uppercase m-0" style={{ color: colors.blue, letterSpacing: '1px', fontSize: '0.85rem' }}>Learning Pathways</h6>
              </div>
              <h2 className="fw-bold display-5" style={{ color: colors.text }}>Our Creative Classes</h2>
              <p className="text-muted fs-5 fw-500">Structured specifically around developmental readiness and big smiles!</p>
            </div>
          </div>

          <div className="row g-4 position-relative" style={{zIndex: 1}}>
            <div className="col-md-4">
              <div className="card h-100 kid-card kid-card-blue p-4 shadow bg-white text-center">
                <div className="icon-box d-inline-flex mx-auto p-4 rounded-circle mb-4 shadow-sm" style={{ backgroundColor: '#DBEAFE', color: colors.blue }}>
                  <FaPuzzlePiece size={40} />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: colors.blue }}>Toddler Discovery</h4>
                <div className="badge px-3 py-2 rounded-pill mb-3 fs-6" style={{ backgroundColor: '#EFF6FF', color: colors.blue }}>Ages 1.5 - 2.5 yrs</div>
                <p className="text-secondary mb-4 flex-grow-1">Sensory play, foundational speech, motor coordination, and happy social interactions.</p>
                <button className="btn btn-primary btn-crayon w-100 p-3 fs-6 d-flex align-items-center justify-content-center gap-2">
                  View Syllabus <FaArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 kid-card kid-card-yellow p-4 shadow bg-white text-center">
                <div className="icon-box d-inline-flex mx-auto p-4 rounded-circle mb-4 shadow-sm" style={{ backgroundColor: '#FEF3C7', color: colors.yellow }}>
                  <FaLightbulb size={40} />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: colors.yellow }}>Junior Explorers</h4>
                <div className="badge px-3 py-2 rounded-pill mb-3 fs-6" style={{ backgroundColor: '#FFFBEB', color: colors.yellow }}>Ages 2.5 - 4 yrs</div>
                <p className="text-secondary mb-4 flex-grow-1">Early phonics, spatial logic, simple science observations, and collaborative group tasks.</p>
                <button className="btn btn-warning btn-crayon text-white w-100 p-3 fs-6 d-flex align-items-center justify-content-center gap-2" style={{backgroundColor: colors.yellow}}>
                  View Syllabus <FaArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 kid-card kid-card-green p-4 shadow bg-white text-center">
                <div className="icon-box d-inline-flex mx-auto p-4 rounded-circle mb-4 shadow-sm" style={{ backgroundColor: '#ECFDF5', color: colors.green }}>
                  <FaGraduationCap size={40} />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: colors.green }}>Ready for School</h4>
                <div className="badge px-3 py-2 rounded-pill mb-3 fs-6" style={{ backgroundColor: '#F0FDF4', color: colors.green }}>Ages 4 - 6 yrs</div>
                <p className="text-secondary mb-4 flex-grow-1">Reading comprehension, math concepts, problem-solving skills, and emotional resilience.</p>
                <button className="btn btn-success btn-crayon w-100 p-3 fs-6 d-flex align-items-center justify-content-center gap-2" style={{backgroundColor: colors.green}}>
                  View Syllabus <FaArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="wavy-divider wavy-bottom wavy-divider-white"></div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="py-5 bg-white position-relative">
        <div className="container py-5">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#FCE7F3', border: `2px solid ${colors.pink}`}}>
              <FaStar className="me-2" style={{color: colors.pink}} />
              <h6 className="fw-bold text-uppercase m-0" style={{ color: colors.pink, letterSpacing: '1px', fontSize: '0.85rem' }}>Campus Life</h6>
            </div>
            <h2 className="fw-bold display-5" style={{ color: colors.text }}>Inside Our Colorful World</h2>
          </div>

          <div className="position-relative overflow-hidden shadow-lg border-4 float-anim" style={{ height: '450px', borderRadius: '40px', borderColor: galleryImages[galleryIndex].color, transition: 'border-color 0.8s ease' }}>
            <img
              src={galleryImages[galleryIndex].url}
              alt={galleryImages[galleryIndex].title}
              className="w-100 h-100 position-absolute top-0 start-0"
              style={{ objectFit: 'cover', transition: 'opacity 1s ease-in-out', opacity: 1, zIndex: 1 }}
            />
            {/* Previous Image for cross-fade */}
            <img
              src={galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length].url}
              alt="Previous setup"
              className="w-100 h-100 position-absolute top-0 start-0"
              style={{ objectFit: 'cover', zIndex: 0 }}
            />
            
            {/* Overlay Gradient */}
            <div className="position-absolute bottom-0 start-0 end-0 p-5" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)', zIndex: 2 }}>
              <h3 className="text-white fw-bold mb-2 display-6">{galleryImages[galleryIndex].title}</h3>
              <p className="text-light fs-5 mb-0" style={{fontWeight: 500}}>{galleryImages[galleryIndex].subtitle}</p>
            </div>
            
            {/* Subtle Slide Indicators */}
            <div className="position-absolute top-50 end-0 translate-middle-y d-flex flex-column gap-2 p-3" style={{zIndex: 3}}>
                {galleryImages.map((_, idx) => (
                    <div key={idx} className="rounded-circle" style={{
                        width: '12px', height: '12px', 
                        backgroundColor: idx === galleryIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                        border: '2px solid rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease'
                    }}></div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#FDF2F8', borderTop: `8px solid ${colors.pink}`, borderBottom: `8px solid ${colors.pink}` }}>
        <div className="wavy-divider wavy-top wavy-divider-white"></div>
        <div className="container py-5 position-relative">
          <div className="text-center mb-5 position-relative">
            <div className="position-absolute top-0 start-50 translate-middle-x opacity-10 float-anim" style={{fontSize: '10rem', color: colors.pink, zIndex: 0}}><FaHeart/></div>
            <div className="position-relative" style={{zIndex: 1}}>
                <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-3 shadow-sm" style={{backgroundColor: '#FCE7F3', border: `2px solid ${colors.pink}`}}>
                  <FaHeart className="me-2" style={{color: colors.pink}} />
                  <h6 className="fw-bold text-uppercase m-0" style={{ color: colors.pink, letterSpacing: '1px', fontSize: '0.85rem' }}>Parent Feedback</h6>
                </div>
                <h2 className="fw-bold display-5" style={{ color: colors.text }}>Happy Families</h2>
            </div>
          </div>

          <div className="row justify-content-center position-relative" style={{zIndex: 1}}>
            <div className="col-lg-8">
              <div className="card kid-card shadow-lg p-5 text-center position-relative border-0 float-anim" style={{ backgroundColor: '#fff' }}>
                {/* Big decorative Quote marks */}
                <div className="position-absolute opacity-10 fw-bold" style={{fontSize: '15rem', color: colors.pink, top: '-50px', left: '20px', fontFamily: 'serif'}}>“</div>
                
                <div className="mb-4 position-relative" style={{zIndex: 1}}>
                  {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                    <FaStar key={i} color={colors.yellow} size={25} className="mx-1 bounce-anim" style={{animationDelay: `${i*0.1}s`}} />
                  ))}
                </div>
                <p className="fst-italic text-secondary mb-5 position-relative fs-4" style={{ lineHeight: 1.6, fontWeight: 500, zIndex: 1 }}>
                  {testimonials[activeTestimonial].text}
                </p>
                
                <div className="d-inline-flex align-items-center gap-3 p-3 rounded-pill mx-auto shadow-sm" style={{backgroundColor: testimonials[activeTestimonial].bgColor}}>
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="rounded-circle border-4 shadow-sm"
                    style={{ width: '65px', height: '65px', objectFit: 'cover', borderColor: '#fff' }}
                  />
                  <div className="text-start pe-3">
                    <h5 className="fw-bold mb-0 fs-5" style={{ color: colors.text }}>{testimonials[activeTestimonial].name}</h5>
                    <small className="text-muted fw-bold">{testimonials[activeTestimonial].role}</small>
                  </div>
                </div>

                {/* Playful Slider Buttons */}
                <div className="d-flex justify-content-between position-absolute top-50 start-0 end-0 px-3 transform-middle-y" style={{zIndex: 2}}>
                  <button
                    onClick={handlePrevTestimonial}
                    className="btn btn-light rounded-circle shadow border-0 p-3 btn-crayon"
                    style={{color: colors.pink, backgroundColor: '#fff'}}
                    aria-label="Previous Testimonial"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="btn btn-light rounded-circle shadow border-0 p-3 btn-crayon"
                    style={{color: colors.pink, backgroundColor: '#fff'}}
                    aria-label="Next Testimonial"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wavy-divider wavy-bottom divider-purple"></div>
      </section>

      {/* --- INTERACTIVE ANIMAL PLAYGROUND --- */}
      <section className="py-5 position-relativedivider-purple" style={{ background: `linear-gradient(135deg, ${colors.yellow}10 0%, ${colors.purple}15 100%)`, borderBottom: `8px solid ${colors.purple}` }}>
        <div className="container py-5 text-center position-relative">
          <div className="d-inline-block p-2 px-4 rounded-pill bg-white shadow-sm mb-3 border-2" style={{borderColor: colors.yellow}}>
            <span className="fw-bold text-dark fs-5 d-flex align-items-center gap-2 w-100 justify-content-center">
              <FaSmileWink color={colors.yellow} size={25} className="bounce-anim" /> Kids Fun Corner: Meet Our Class Mascots!
            </span>
          </div>
          <h2 className="fw-bold mb-3 display-5" style={{ color: colors.text }}>Click an Animal Friend!</h2>
          <p className="text-secondary mb-5 fs-5 fw-500">Tap Freddy, Pip, Whiskers, or Professor Owl to hear what they have to say!</p>

          <div className="d-flex justify-content-center flex-wrap gap-5 mb-5">
            {animals.map((anim) => (
              <div key={anim.id} className="text-center">
                <div
                    onClick={() => handleAnimalClick(anim)}
                    className={`animal-btn p-3 bg-white rounded-circle shadow-lg d-flex align-items-center justify-content-center ${activeAnimal === anim.id ? 'pulse-anim' : ''}`}
                    style={{ width: '120px', height: '120px', border: activeAnimal === anim.id ? `6px solid ${anim.color}` : '6px solid #fff', color: anim.color }}
                >
                    {anim.icon}
                </div>
                <h5 className="fw-bold mt-3" style={{color: anim.color}}>{anim.name}</h5>
              </div>
            ))}
          </div>

          <div className="mx-auto p-4 bg-white rounded-pill shadow-lg border-4 kid-card max-w-lg pulse-anim" style={{ maxWidth: '600px', borderColor: activeAnimal ? animals.find(a=>a.id===activeAnimal).color : '#E2E8F0' }}>
            <h4 className="fw-bold m-0" style={{ color: activeAnimal ? animals.find(a=>a.id===activeAnimal).color : colors.text, transition: 'color 0.3s ease' }}>
                {animalSound}
            </h4>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-5 bg-white position-relative divider-purple">
        <div className="wavy-divider wavy-top divider-purple"></div>
        <div className="container py-5 mt-4">
          <div className="text-center mb-5 position-relative">
            <div className="position-absolute top-0 start-50 translate-middle-x opacity-10 float-anim" style={{fontSize: '10rem', color: colors.purple, zIndex: 0}}><FaQuestionCircle/></div>
            <div className="position-relative" style={{zIndex: 1}}>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 bg-light border-2" style={{borderColor: colors.purple}}>
                  <FaQuestionCircle color={colors.purple} size={20} />
                  <span className="fs-6 fw-bold" style={{color: colors.purple}}>Got Questions?</span>
                </div>
                <h2 className="fw-bold display-5" style={{ color: colors.text }}>Parents Want To Know</h2>
                <p className="text-muted fs-5 fw-500">Everything you need to know before joining the fun!</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="d-flex flex-column gap-3">
                {faqList.map((item, idx) => (
                  <div
                    key={idx}
                    className={`card p-4 faq-card shadow-sm ${openFaq === idx ? 'open' : 'bg-light'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="p-2 rounded-circle d-flex align-items-center justify-content-center" style={{backgroundColor: openFaq === idx ? '#ECFDF5' : '#fff', color: openFaq === idx ? colors.green : colors.purple, width: '40px', height: '40px'}}>
                            {item.icon}
                        </div>
                        <h5 className="fw-bold mb-0 fs-5" style={{ color: colors.text }}>
                          {item.q}
                        </h5>
                      </div>
                      <FaChevronDown
                        size={20}
                        color={openFaq === idx ? colors.green : colors.purple}
                        style={{
                          transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          flexShrink: 0
                        }}
                      />
                    </div>

                    {openFaq === idx && (
                      <div className="mt-4 pt-3 border-top text-secondary fs-6" style={{ lineHeight: 1.7, fontWeight: 500 }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}