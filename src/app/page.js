/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from 'react';
import {
  FaGraduationCap,
  FaStar,
  FaBookReader,
  FaPuzzlePiece,
  FaMusic,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaLightbulb,
  FaQuestionCircle,
  FaChevronDown,
  FaSmileWink,
  FaCat,
  FaDog,
  FaCrow
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';

export default function EnhancedPreschoolHomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('stem');

  // State for FAQ toggle (stores index of open FAQ)
  const [openFaq, setOpenFaq] = useState(null);

  // State for Kids Animal Playground
  const [animalSound, setAnimalSound] = useState("Click a friend to hear them speak!");
  const [activeAnimal, setActiveAnimal] = useState(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
      title: "Interactive Play & Early Motor Skills",
      subtitle: "Safe, guided social spaces designed for curious minds."
    },
    {
      url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
      title: "Personalized Reading & Vocabulary",
      subtitle: "Nurturing early literacy through joyful storytelling."
    },
    {
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Arts & Expression",
      subtitle: "Encouraging self-confidence and visual exploration."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Eleanor Vance",
      role: "Parent & Child Psychologist",
      text: "The balanced focus between emotional security and cognitive growth at LittleSparks is exceptional. My daughter thrives here every day.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael & Clara Rossi",
      role: "Parents of Ethan (Age 3)",
      text: "Extremely professional leadership coupled with a genuine, warm teaching staff. The progress in Ethan's communication has been remarkable.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sophia Martinez",
      role: "Parent of Oliver (Age 4)",
      text: "Clean, secure, and thoughtfully designed facilities. The curriculum prepares kids for real-world confidence without rushing their childhood.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  ];

  // 5 Detailed Preschool FAQs
  const faqList = [
    {
      q: "What if my child gets separation anxiety on the first few days?",
      a: "That's completely normal! We offer a smooth transition program where parents can stay for short periods during week one. Our teachers are specially trained in warm emotional comfort and distraction through fun games!"
    },
    {
      q: "Does my child need to be 100% potty trained before enrolling?",
      a: "Not at all! We support potty training at your child's pace. Our classrooms feature child-sized, clean, private washrooms, and our staff works closely with parents to maintain consistency."
    },
    {
      q: "How do parents receive updates on daily activities and progress?",
      a: "You get access to our private Parent Portal app! Every afternoon, you receive real-time photos, activity highlights, nap times, meal logs, and direct chat access with lead teachers."
    },
    {
      q: "What security measures are in place on campus?",
      a: "Child safety is our #1 priority. We maintain biometric door entry, 24/7 HD CCTV monitoring, strictly verified pickup lists, background-checked staff, and first-aid certified teachers in every room."
    },
    {
      q: "Are meals and snacks provided by the school?",
      a: "Yes! We serve wholesome, organic morning snacks and balanced lunches prepared fresh daily by our campus chef. We cater easily to all dietary restrictions and peanut allergies."
    }
  ];

  // Kids Animal Mascot Interactive Zone
  const animals = [
    { id: 'bear', name: 'Barnaby Bear', sound: '🐻 "ROAR! I love honey, cookies, and high-fives!"', color: '#F59E0B' },
    { id: 'bunny', name: 'Pip the Bunny', sound: '🐰 "HOP HOP! Want to do a happy dance with me?"', color: '#EC4899' },
    { id: 'cat', name: 'Whiskers the Cat', sound: '🐱 "MEOW! Let\'s draw colorful rainbows together!"', color: '#8B5CF6' },
    { id: 'owl', name: 'Professor Owl', sound: '🦉 "HOOT HOOT! Did you know learning is super fun?"', color: '#10B981' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(timer);
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

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>

      {/* CSS Animations & Micro-Interactions */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }
        @keyframes bouncePlayful {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }

        .logo-float { animation: floatSlow 3.5s ease-in-out infinite; }
        .bounce-anim { animation: bouncePlayful 2s ease-in-out infinite; }

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

        .pro-card-hover {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pro-card-hover:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04) !important;
        }

        .animal-btn {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .animal-btn:hover {
          transform: scale(1.15) rotate(5deg);
          animation: wiggle 0.4s ease-in-out;
        }

        .faq-card {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }
        .faq-card.open {
          border-left-color: #2563EB;
          background-color: #FFFFFF !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .fun-tab-btn {
          border: none;
          background: #F1F5F9;
          color: #475569;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 30px;
          transition: all 0.25s ease;
        }
        .fun-tab-btn.active {
          background: #2563EB;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
      `}</style>

      {/* --- TOP ANNOUNCEMENT BAR --- */}
      <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open. <a href="#contact" className="text-warning text-decoration-underline ms-2">Book a Campus Tour</a>
      </div>

      {/* --- NAVIGATION BAR --- */}
      {/* <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#home" style={{ fontSize: '1.5rem', color: '#0F172A' }}>
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
        <HeroSection />

      {/* --- HERO SECTION --- */}
      {/* <section id="home" className="py-5" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #FAFAFA 100%)' }}>
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 border bg-white shadow-sm" style={{ borderColor: '#DBEAFE' }}>
                <FaStar color="#F59E0B" size={14} className="bounce-anim" />
                <span className="small fw-bold text-primary">A World-Class Foundation for Early Years</span>
              </div>
              <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0F172A', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Where Curiosity Meets <span style={{ color: '#2563EB' }}>Purposeful</span> Learning.
              </h1>
              <p className="lead text-secondary mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.6 }}>
                Combining structured play with cognitive milestone development. We provide a safe, modern environment where every child feels confident to explore.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#courses" className="btn text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-flex align-items-center gap-2 pro-card-hover" style={{ backgroundColor: '#2563EB', border: 'none' }}>
                  Explore Programs <FaArrowRight size={14} />
                </a>
                <a href="#about" className="btn btn-outline-secondary fw-bold px-4 py-3 rounded-pill pro-card-hover">
                  Our Educational Philosophy
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative p-2 bg-white rounded-4 shadow-lg border pro-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
                  alt="Teacher assisting kids with interactive learning"
                  className="img-fluid rounded-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- ABOUT US BRIEF SECTION --- */}
      <section id="about" className="py-5 bg-white border-top border-bottom">
        <div className="container py-3">
          <div className="row align-items-center gy-4">
            <div className="col-lg-5 text-center">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80"
                alt="Children engaging in collaborative tasks"
                className="img-fluid rounded-4 shadow pro-card-hover"
                style={{ maxHeight: '380px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-7">
              <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>About LittleSparks</h6>
              <h2 className="fw-bold mb-3" style={{ color: '#0F172A', fontSize: '2.2rem' }}>
                Thoughtfully Designed for Every Developmental Milestone
              </h2>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                We believe the early years set the trajectory for lifelong learning. Our certified educators combine age-appropriate science, emotional skill development, and creative play in purpose-built physical spaces.
              </p>
              <div className="row g-3 my-3">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border pro-card-hover">
                    <FaHeart size={22} color="#EF4444" />
                    <div>
                      <h6 className="fw-bold mb-0" style={{ color: '#0F172A' }}>Nurturing Environment</h6>
                      <small className="text-muted">1:6 Low Teacher-Child Ratio</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border pro-card-hover">
                    <FaBookReader size={22} color="#2563EB" />
                    <div>
                      <h6 className="fw-bold mb-0" style={{ color: '#0F172A' }}>Modern Curriculum</h6>
                      <small className="text-muted">STEM + Creative Literacy</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROGRAM / COURSE CATEGORIES --- */}
      <section id="courses" className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container py-3">
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Curriculum Options</h6>
            <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Our Learning Pathways</h2>
            <p className="text-muted">Structured specifically around developmental readiness.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4 pro-card-hover bg-white">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: '#EFF6FF', color: '#2563EB', fontWeight: 700 }}>Ages 1.5 - 2.5 yrs</span>
                  <FaPuzzlePiece size={24} color="#2563EB" />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: '#0F172A' }}>Toddler Discovery</h4>
                <p className="text-secondary small mb-4">Focuses on sensory play, foundational speech development, motor coordination, and social interaction.</p>
                <a href="#courses" className="text-primary text-decoration-none fw-bold mt-auto d-flex align-items-center gap-1">
                  View Syllabus <FaArrowRight size={12} />
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4 pro-card-hover bg-white">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: '#FEF3C7', color: '#D97706', fontWeight: 700 }}>Ages 2.5 - 4 yrs</span>
                  <FaLightbulb size={24} color="#D97706" />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: '#0F172A' }}>Junior Explorers</h4>
                <p className="text-secondary small mb-4">Introduction to early phonics, spatial logic, simple science observations, and collaborative group tasks.</p>
                <a href="#courses" className="text-warning text-decoration-none fw-bold mt-auto d-flex align-items-center gap-1" style={{ color: '#D97706' }}>
                  View Syllabus <FaArrowRight size={12} />
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4 pro-card-hover bg-white">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: '#ECFDF5', color: '#059669', fontWeight: 700 }}>Ages 4 - 6 yrs</span>
                  <FaGraduationCap size={24} color="#059669" />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: '#0F172A' }}>Kindergarten Readiness</h4>
                <p className="text-secondary small mb-4">Reading comprehension, mathematical concepts, problem-solving skills, and emotional resilience.</p>
                <a href="#courses" className="text-success text-decoration-none fw-bold mt-auto d-flex align-items-center gap-1" style={{ color: '#059669' }}>
                  View Syllabus <FaArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AUTOMATIC GALLERY SLIDER SECTION --- */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-3">
          <div className="text-center mb-4">
            <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Campus Environment</h6>
            <h2 className="fw-bold" style={{ color: '#0F172A' }}>Inside Our Classroom Spaces</h2>
          </div>

          <div className="position-relative overflow-hidden rounded-4 shadow-lg border bg-dark" style={{ height: '400px' }}>
            <img
              src={galleryImages[galleryIndex].url}
              alt={galleryImages[galleryIndex].title}
              className="w-100 h-100"
              style={{ objectFit: 'cover', transition: 'all 0.8s ease-in-out', opacity: 0.85 }}
            />
            <div className="position-absolute bottom-0 start-0 end-0 p-4" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.9) 100%)' }}>
              <h4 className="text-white fw-bold mb-1">{galleryImages[galleryIndex].title}</h4>
              <p className="text-light small mb-0">{galleryImages[galleryIndex].subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL SLIDER SECTION WITH BUTTON CONTROLS --- */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container py-3">
          <div className="text-center mb-5">
            <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>Parent Feedback</h6>
            <h2 className="fw-bold" style={{ color: '#0F172A' }}>Trusted by Local Families</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 bg-white text-center position-relative pro-card-hover">
                <div className="mb-3">
                  {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                    <FaStar key={i} color="#F59E0B" size={18} style={{ margin: '0 2px' }} />
                  ))}
                </div>
                <p className="lead fst-italic text-secondary mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.6 }}>
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="rounded-circle shadow-sm"
                    style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                  />
                  <div className="text-start">
                    <h6 className="fw-bold mb-0" style={{ color: '#0F172A' }}>{testimonials[activeTestimonial].name}</h6>
                    <small className="text-muted">{testimonials[activeTestimonial].role}</small>
                  </div>
                </div>

                {/* Slider Buttons */}
                <div className="d-flex justify-content-between position-absolute top-50 start-0 end-0 px-2 px-md-3 transform-middle-y">
                  <button
                    onClick={handlePrevTestimonial}
                    className="btn btn-white bg-white rounded-circle shadow-sm border p-2"
                    aria-label="Previous Testimonial"
                  >
                    <FaChevronLeft size={16} color="#0F172A" />
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="btn btn-white bg-white rounded-circle shadow-sm border p-2"
                    aria-label="Next Testimonial"
                  >
                    <FaChevronRight size={16} color="#0F172A" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUN KIDS INTERACTIVE ANIMAL PLAYGROUND --- */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #E0F2FE 100%)' }}>
        <div className="container py-3 text-center">
          <div className="d-inline-block p-2 px-3 rounded-pill bg-white shadow-sm mb-3">
            <span className="fw-bold text-dark small d-flex align-items-center gap-2">
              <FaSmileWink color="#F59E0B" size={18} /> Kids Fun Corner: Meet Our Class Mascots!
            </span>
          </div>
          <h2 className="fw-bold mb-2" style={{ color: '#0F172A' }}>Click an Animal Friend!</h2>
          <p className="text-secondary mb-4">Tap on any mascot below to hear what they have to say!</p>

          <div className="d-flex justify-content-center flex-wrap gap-4 mb-4">
            {animals.map((anim) => (
              <div
                key={anim.id}
                onClick={() => handleAnimalClick(anim)}
                className="animal-btn p-3 bg-white rounded-circle shadow border d-flex align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', border: activeAnimal === anim.id ? `3px solid ${anim.color}` : '1px solid #E2E8F0' }}
              >
                {anim.id === 'bear' && <FaDog size={36} color={anim.color} />}
                {anim.id === 'bunny' && <FaSmileWink size={36} color={anim.color} />}
                {anim.id === 'cat' && <FaCat size={36} color={anim.color} />}
                {anim.id === 'owl' && <FaCrow size={36} color={anim.color} />}
              </div>
            ))}
          </div>

          <div className="mx-auto p-4 bg-white rounded-4 shadow-sm border max-w-lg" style={{ maxWidth: '500px' }}>
            <h5 className="fw-bold text-primary mb-0 bounce-anim">{animalSound}</h5>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (5 QUESTIONS) --- */}
      <section id="faq" className="py-5 bg-white border-top border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 bg-light border">
              <FaQuestionCircle color="#2563EB" size={16} />
              <span className="small fw-bold text-primary">Got Questions?</span>
            </div>
            <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>Frequently Asked Questions</h2>
            <p className="text-muted">Everything parents need to know before enrolling.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="d-flex flex-column gap-3">
                {faqList.map((item, idx) => (
                  <div
                    key={idx}
                    className={`card border rounded-4 p-4 faq-card ${openFaq === idx ? 'open' : 'bg-light'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold mb-0" style={{ color: '#0F172A', fontSize: '1.1rem' }}>
                        {idx + 1}. {item.q}
                      </h5>
                      <FaChevronDown
                        size={16}
                        color="#2563EB"
                        style={{
                          transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>

                    {openFaq === idx && (
                      <div className="mt-3 pt-3 border-top text-secondary" style={{ lineHeight: 1.6 }}>
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
                <li className="mb-2"><a href="#home" className="text-decoration-none text-secondary">Home</a></li>
                <li className="mb-2"><a href="#about" className="text-decoration-none text-secondary">About Us</a></li>
                <li className="mb-2"><a href="#courses" className="text-decoration-none text-secondary">Programs</a></li>
                <li className="mb-2"><a href="#faq" className="text-decoration-none text-secondary">FAQ</a></li>
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