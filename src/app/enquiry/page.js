/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaPaperPlane, 
  FaChild, 
  FaCheckCircle, 
  FaTimes,
  FaShieldAlt
} from 'react-icons/fa';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    enquiryFor: ''
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    name: '',
    enquiryFor: ''
  });

  // Math Captcha States
  const [showMathModal, setShowMathModal] = useState(false);
  const [mathProblem, setMathProblem] = useState({ num1: 0, num2: 0, answer: 0 });
  const [userMathInput, setUserMathInput] = useState('');
  const [mathError, setMathError] = useState('');

  // Restrict to digits only and maximum 10 digits
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      mobile: value
    }));
  };

  const generateMathProblem = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setMathProblem({ num1: n1, num2: n2, answer: n1 + n2 });
    setUserMathInput('');
    setMathError('');
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Step 1: User clicks submit -> Intercept and trigger Math Captcha Modal
  const handlePreSubmit = (e) => {
    e.preventDefault();
    generateMathProblem();
    setShowMathModal(true);
  };

  // Step 2: Verify answer -> If right submit data, if wrong regenerate
  const handleMathVerification = async (e) => {
    e.preventDefault();

    if (parseInt(userMathInput, 10) !== mathProblem.answer) {
      setMathError('Incorrect answer. Please try again.');
      generateMathProblem();
      return;
    }

    setShowMathModal(false);
    await sendFormData();
  };

  // Step 3: Send data to Google Script
  const sendFormData = async () => {
    setLoading(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzknKa2BU5p2Y46EpbEVbiglz7TwiEV1nl31SBE7MuRHfMpzyNJIsCsnXIfayn0WI/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      setSubmittedData({
        name: formData.fullName,
        enquiryFor: formData.enquiryFor
      });

      setShowModal(true);

      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        enquiryFor: ''
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Fredoka', 'Quicksand', system-ui, -apple-system, sans-serif" }}>
      <Navbar />

      <section className="py-5 position-relative" style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 100%)' }}>
        <style>{`
          .contact-title {
            color: #FF5722;
            font-weight: 800;
            font-size: 2.8rem;
            text-shadow: 2px 2px 0px #FFE0B2;
          }

          .contact-subtitle {
            color: #4B5563;
            font-size: 1.1rem;
            font-weight: 500;
          }

          .form-card {
            background: #FFFFFF;
            border: 3px solid #FFE0B2;
            border-radius: 24px;
            box-shadow: 0 10px 25px rgba(255, 152, 0, 0.08);
            position: relative;
            overflow: hidden;
          }

          .form-red-banner {
            background: linear-gradient(135deg, #FF5252 0%, #FF1744 100%);
            color: #FFFFFF;
            font-weight: 700;
            font-size: 1.05rem;
            border-radius: 50px;
            padding: 10px 20px;
            box-shadow: 0 4px 10px rgba(255, 23, 68, 0.25);
            letter-spacing: 0.3px;
          }

          .custom-input, .custom-select {
            border: 2px solid #E5E7EB;
            border-radius: 12px;
            padding: 12px 16px;
            font-size: 0.95rem;
            color: #374151;
            width: 100%;
            background-color: #FAFAFA;
            transition: all 0.25s ease-in-out;
          }

          .custom-input:focus, .custom-select:focus {
            outline: none;
            border-color: #FF9800;
            background-color: #FFFFFF;
            box-shadow: 0 0 0 4px rgba(255, 152, 0, 0.15);
          }

          .btn-submit-red {
            background: linear-gradient(135deg, #FF5252 0%, #FF1744 100%);
            color: #FFFFFF;
            font-weight: 800;
            border: none;
            border-radius: 50px;
            padding: 12px 36px;
            font-size: 1.05rem;
            letter-spacing: 0.5px;
            box-shadow: 0 6px 15px rgba(255, 23, 68, 0.3);
            transition: all 0.25s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
          }

          .btn-submit-red:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 23, 68, 0.4);
            opacity: 0.95;
          }

          .btn-submit-red:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
          }

          .info-card {
            background: #FFFFFF;
            border: 3px dashed #BBDEFB;
            border-radius: 24px;
            padding: 30px;
            box-shadow: 0 10px 25px rgba(33, 150, 243, 0.05);
          }

          .info-title {
            color: #0288D1;
            font-weight: 800;
            font-size: 1.8rem;
          }

          .info-label {
            color: #1E293B;
            font-weight: 700;
            font-size: 1.1rem;
          }

          .info-badge-icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            flex-shrink: 0;
          }

          .pin-container {
            transition: transform 0.3s ease;
          }

          .pin-container:hover {
            transform: translateY(-5px) rotate(3deg);
          }

          /* Modal Styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050;
            padding: 16px;
            animation: modalFadeIn 0.2s ease-out;
          }

          .modal-box {
            background: #FFFFFF;
            border-radius: 24px;
            border: 3px solid #FFE0B2;
            max-width: 440px;
            width: 100%;
            padding: 34px 28px;
            text-align: center;
            position: relative;
            box-shadow: 0 20px 30px rgba(255, 152, 0, 0.15);
            animation: modalPopUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .modal-close-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            background: #F3F4F6;
            border: none;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #64748B;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .modal-close-btn:hover {
            background: #E2E8F0;
            color: #0F172A;
          }

          .icon-badge-wrap {
            width: 76px;
            height: 76px;
            background: #EEF2FF;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px auto;
          }

          .success-icon-wrap {
            width: 76px;
            height: 76px;
            background: #ECFDF5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px auto;
          }

          .modal-confirm-btn {
            background: linear-gradient(135deg, #FF5252 0%, #FF1744 100%);
            color: #FFFFFF;
            font-weight: 800;
            border: none;
            border-radius: 50px;
            padding: 12px 28px;
            font-size: 1rem;
            width: 100%;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(255, 23, 68, 0.25);
            transition: all 0.2s ease;
          }

          .modal-confirm-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 15px rgba(255, 23, 68, 0.35);
          }

          @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes modalPopUp {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>

        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2 fs-6">
              🎈 Reach Out To Us
            </span>
            <h1 className="contact-title m-0">Preschool Admissions & enquiry</h1>
            <p className="contact-subtitle mt-2">
              Have questions or want to schedule a school tour? We’d love to welcome your little one! ✨
            </p>
          </div>

          <div className="row g-4 align-items-stretch justify-content-center mb-5">
            <div className="col-lg-6 col-md-10">
              <div className="form-card p-4 p-md-5 h-100">
                <div className="text-center mb-4">
                  <div className="form-red-banner d-inline-block">
                    📝 Fill Out The Enquiry Form
                  </div>
                  <p className="text-muted small mt-2 mb-0">
                    Submit your details below and our admissions team will get back to you promptly!
                  </p>
                </div>

                <form onSubmit={handlePreSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-dark mb-1">
                      Parents / Guardians Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Sarah Jenkins"
                      className="custom-input"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email ID */}
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-dark mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. sarah@example.com"
                      className="custom-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* 10-Digit Mobile No */}
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-dark mb-1">
                      Mobile Number (10 Digits) *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="e.g. 9876543210"
                      className="custom-input"
                      value={formData.mobile}
                      onChange={handlePhoneChange}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      required
                    />
                  </div>

                  {/* Enquiry for */}
                  <div className="mb-4">
                    <label className="form-label small fw-bold text-dark mb-1">
                      Enquiry For (Select Program / Option) *
                    </label>
                    <select
                      name="enquiryFor"
                      className="custom-select"
                      value={formData.enquiryFor}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose an enquiry type...</option>
                      <option value="Playgroup Admission">Playgroup (1.5 - 2.5 Yrs)</option>
                      <option value="Nursery Admission">Nursery (2.5 - 3.5 Yrs)</option>
                      <option value="Junior KG Admission">Junior KG (3.5 - 4.5 Yrs)</option>
                      <option value="Senior KG Admission">Senior KG (4.5 - 5.5 Yrs)</option>
                      <option value="Daycare">Daycare & After School</option>
                      <option value="Franchise enquiry">Franchise enquiry</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-2">
                    <button 
                      type="submit" 
                      className="btn-submit-red"
                      disabled={loading}
                    >
                      <FaPaperPlane /> {loading ? "SENDING..." : "SUBMIT ENQUIRY"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Location Pin & School Details */}
            <div className="col-lg-5 col-md-10 offset-lg-1">
              <div className="info-card h-100 d-flex flex-column justify-content-center text-center text-lg-start">
                <div className="pin-container mb-3 text-center text-lg-start">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                    alt="Location Pin"
                    style={{ width: "95px", height: "auto" }}
                  />
                </div>

                <h2 className="info-title mb-1">Little Crayons PreSchool</h2>
                <p className="text-muted small mb-4 fw-bold">
                  <FaChild className="text-warning me-1" /> Where Learning Begins With Fun!
                </p>

                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="info-badge-icon bg-danger-subtle text-danger">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="text-start">
                      <div className="info-label">Our Campus</div>
                      <span className="text-muted small">
                        M-291, Sec-D, LDA Colony (Parag Sabji Mandi), Kanpur Road, Lucknow.
                      </span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="info-badge-icon bg-success-subtle text-success">
                      <FaPhoneAlt />
                    </div>
                    <div className="text-start">
                      <div className="info-label">Call Us</div>
                      <a href="tel:7379503555" className="text-decoration-none text-muted small fw-bold">
                        +917379503555
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="info-badge-icon bg-warning-subtle text-warning">
                      <FaEnvelope />
                    </div>
                    <div className="text-start">
                      <div className="info-label">Email Us</div>
                      <a href="mailto:littlecrayonslko@gmail.com" className="text-decoration-none text-muted small">
                        littlecrayonslko@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="info-badge-icon bg-info-subtle text-info">
                      <FaGlobe />
                    </div>
                    <div className="text-start">
                      <div className="info-label">Official Website</div>
                      <a href="https://www.littlecrayons.org" target="_blank" rel="noreferrer" className="text-decoration-none text-primary small fw-semibold">
                        www.littlecrayons.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Math Verification Security Modal */}
      {showMathModal && (
        <div className="modal-overlay" onClick={() => setShowMathModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowMathModal(false)}
              aria-label="Close modal"
            >
              <FaTimes size={14} />
            </button>

            <div className="icon-badge-wrap">
              <FaShieldAlt color="#4F46E5" size={34} />
            </div>

            <h3 style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.4rem', marginBottom: '6px' }}>
              Quick Security Check
            </h3>
            
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '16px' }}>
              Please solve this math problem to complete your submission:
            </p>

            <form onSubmit={handleMathVerification}>
              <div className="p-3 mb-3" style={{ background: '#FFF3E0', borderRadius: '12px', fontSize: '1.4rem', fontWeight: 800, color: '#FF5722' }}>
                {mathProblem.num1} + {mathProblem.num2} = ?
              </div>

              <input
                type="number"
                placeholder="Your Answer"
                className="custom-input mb-2 text-center"
                style={{ fontSize: '1.15rem', fontWeight: 700 }}
                value={userMathInput}
                onChange={(e) => setUserMathInput(e.target.value)}
                autoFocus
                required
              />

              {mathError && (
                <p className="text-danger small fw-bold mb-2">{mathError}</p>
              )}

              <button 
                type="submit" 
                className="modal-confirm-btn mt-2"
              >
                Verify & Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <FaTimes size={14} />
            </button>

            <div className="success-icon-wrap">
              <FaCheckCircle color="#10B981" size={42} />
            </div>

            <h3 style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.5rem', marginBottom: '8px' }}>
              Enquiry Submitted! 🎉
            </h3>
            
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#0F172A' }}>{submittedData.name}</strong>! We have received your enquiry for <strong style={{ color: '#FF5722' }}>{submittedData.enquiryFor}</strong>. Our admissions team will reach out to you shortly.
            </p>

            <button 
              className="modal-confirm-btn" 
              onClick={() => setShowModal(false)}
            >
              Awesome, Thanks!
            </button>
          </div>
        </div>
      )}

      <PageBanner />
    </div>
  );
}