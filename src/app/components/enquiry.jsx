"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaPaperPlane, 
  FaCheckCircle, 
  FaTimes,
  FaShieldAlt
} from 'react-icons/fa';

export default function EnquiryPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    enquiryFor: ''
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    name: '',
    enquiryFor: ''
  });

  // Math Captcha States
  const [showMathModal, setShowMathModal] = useState(false);
  const [mathProblem, setMathProblem] = useState({ num1: 0, num2: 0, answer: 0 });
  const [userMathInput, setUserMathInput] = useState('');
  const [mathError, setMathError] = useState('');

  // Lock and unlock body scroll
useEffect(() => {
  if (!isOpen) return;

  // 1. Save original styles
  const originalBodyOverflow = document.body.style.overflow;
  const originalHtmlOverflow = document.documentElement.style.overflow;
  const originalTouchAction = document.body.style.touchAction;

  // 2. Lock both HTML and BODY
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  document.body.style.touchAction = 'none';

  // 3. Prevent touchmove on mobile background, but allow inside the modal card
  const preventTouchMove = (e) => {
    // If the scroll target is inside our card, allow it to scroll
    if (e.target.closest('.popup-card')) {
      return;
    }
    e.preventDefault();
  };

  document.addEventListener('touchmove', preventTouchMove, { passive: false });

  // 4. Restore on close/unmount
  return () => {
    document.body.style.overflow = originalBodyOverflow;
    document.documentElement.style.overflow = originalHtmlOverflow;
    document.body.style.touchAction = originalTouchAction;
    document.removeEventListener('touchmove', preventTouchMove);
  };
}, [isOpen]);

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

  const handlePreSubmit = (e) => {
    e.preventDefault();
    generateMathProblem();
    setShowMathModal(true);
  };

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

      setShowSuccessModal(true);
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

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .popup-backdrop {
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
          animation: popupFade 0.2s ease-out;
        }

        .popup-card {
          background: #FFFFFF;
          border: 3px solid #FFE0B2;
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(255, 152, 0, 0.15);
          position: relative;
          max-width: 520px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: popupScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

        .popup-close-btn {
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
          z-index: 10;
        }

        .popup-close-btn:hover {
          background: #E2E8F0;
          color: #0F172A;
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

        @keyframes popupFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popupScale {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Main Floating Form */}
      <div className="popup-backdrop" onClick={onClose}>
        <div className="popup-card p-4 p-md-5" onClick={(e) => e.stopPropagation()}>
          <button 
            className="popup-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes size={14} />
          </button>

          <div className="text-center mb-4">
            <div className="form-red-banner d-inline-block">
              📝 Quick Preschool Enquiry
            </div>
            <p className="text-muted small mt-2 mb-0">
              Submit your details and our admissions team will get back to you promptly!
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

            <div className="text-center pt-2">
              <button 
                type="submit" 
                className="btn-submit-red w-100 justify-content-center"
                disabled={loading}
              >
                <FaPaperPlane /> {loading ? "SENDING..." : "SUBMIT ENQUIRY"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Math Verification Modal */}
      {showMathModal && (
        <div className="popup-backdrop" style={{ zIndex: 1100 }} onClick={() => setShowMathModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="popup-close-btn" 
              onClick={() => setShowMathModal(false)}
              aria-label="Close math challenge"
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

      {/* Success Confirmation Modal */}
      {showSuccessModal && (
        <div className="popup-backdrop" style={{ zIndex: 1100 }} onClick={handleSuccessClose}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="popup-close-btn" 
              onClick={handleSuccessClose}
              aria-label="Close confirmation"
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
              onClick={handleSuccessClose}
            >
              Awesome, Thanks!
            </button>
          </div>
        </div>
      )}
    </>
  );
}