/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaCheckCircle, 
  FaTimes 
} from 'react-icons/fa';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2tD9thXOCoAiKmRsmLJH2ofd0NP0bTZCGOcs9VI1y05WGVTwIIyMgNDoZckcvy5Qg/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      // Store submitted data for the modal display
      setSubmittedData({
        name: formData.fullName,
        enquiryFor: formData.enquiryFor
      });

      // Open designed modal
      setShowModal(true);

      // Reset form fields
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
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Navbar />

      <section className="py-5 position-relative bg-white">
        <style>{`
          .contact-title { color: #FF5722; font-weight: 800; font-size: 2.5rem; }
          .form-card { background: #FAFAFA; border: 1px solid #EEEEEE; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03); }
          .form-red-banner { background-color: #FF0000; color: #FFFFFF; font-weight: 700; font-size: 0.95rem; border-radius: 4px; padding: 8px 16px; }
          .custom-input, .custom-select { border: 1px solid #D1D5DB; border-radius: 6px; padding: 10px 14px; font-size: 0.9rem; width: 100%; transition: border-color 0.2s ease; }
          .custom-input:focus, .custom-select:focus { outline: none; border-color: #FF5722; }
          .btn-submit-red { background-color: #FF0000; color: #FFFFFF; font-weight: 700; border: none; border-radius: 6px; padding: 10px 32px; font-size: 0.95rem; cursor: pointer; transition: all 0.2s ease; }
          .btn-submit-red:hover { opacity: 0.9; }
          .btn-submit-red:disabled { opacity: 0.6; cursor: not-allowed; }
          .info-title { color: #FF5722; font-weight: 800; font-size: 1.5rem; }
          .info-label { color: #1F2937; font-weight: 700; font-size: 1.05rem; }
          .info-text { color: #4B5563; font-size: 0.9rem; line-height: 1.6; }

          /* Modal Styling */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(17, 24, 39, 0.6);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050;
            padding: 16px;
            animation: fadeIn 0.2s ease-out;
          }

          .modal-box {
            background: #ffffff;
            border-radius: 16px;
            max-width: 440px;
            width: 100%;
            padding: 32px 28px;
            text-align: center;
            position: relative;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            animation: slideUp 0.3s ease-out;
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
            color: #6B7280;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .modal-close-btn:hover {
            background: #E5E7EB;
            color: #111827;
          }

          .success-icon-wrap {
            width: 70px;
            height: 70px;
            background: #ECFDF5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto;
          }

          .modal-btn-confirm {
            background: #FF0000;
            color: #FFFFFF;
            font-weight: 700;
            border: none;
            border-radius: 8px;
            padding: 12px 24px;
            font-size: 0.95rem;
            width: 100%;
            cursor: pointer;
            transition: opacity 0.2s ease;
          }

          .modal-btn-confirm:hover {
            opacity: 0.9;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        <div className="container py-4">
          <div className="text-center mb-5">
            <h1 className="contact-title m-0">Contact Us</h1>
          </div>

          <div className="row g-4 align-items-center justify-content-center mb-5">
            <div className="col-lg-6 col-md-10">
              <div className="form-card p-4 p-md-5">
                <p className="text-muted small text-center mb-3 fw-medium">
                  Please fill out the quick form and we will be in touch with lightening speed.
                </p>

                <div className="form-red-banner text-center mb-4">
                  For more information please fill the form
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-secondary mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="custom-input"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-secondary mb-1">Email ID</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      className="custom-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-secondary mb-1">Mobile No.</label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile No"
                      className="custom-input"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-semibold text-secondary mb-1">Enquiry for</label>
                    <select
                      name="enquiryFor"
                      className="custom-select"
                      value={formData.enquiryFor}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Open this select menu</option>
                      <option value="Admission">Admission</option>
                      <option value="Franchise">Franchise</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="btn-submit-red"
                      disabled={loading}
                    >
                      {loading ? "SENDING..." : "SUBMIT"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5 col-md-10 offset-lg-1">
              <div className="text-center text-lg-start">
                <div className="mb-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                    alt="Location Pin"
                    style={{ width: "90px", height: "auto" }}
                  />
                </div>

                <h2 className="info-title mb-4">Little Crayons PreSchool</h2>

                <div className="info-text">
                  <p className="info-label mb-2">Address</p>
                  
                  <p className="d-flex align-items-start justify-content-center justify-content-lg-start gap-2 mb-2">
                    <FaMapMarkerAlt className="text-danger mt-1 flex-shrink-0" />
                    <span>M-291, Sec-D, LDA Colony (Parag Sabji Mandi), Kanpur Road, Lucknow.</span>
                  </p>

                  <p className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-2">
                    <FaPhoneAlt className="text-danger flex-shrink-0" />
                    <span>7379 50 3555</span>
                  </p>

                  <p className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-2">
                    <FaEnvelope className="text-danger flex-shrink-0" />
                    <a href="mailto:littlecrayonslko@gmail.com" className="text-decoration-none text-secondary">
                      littlecrayonslko@gmail.com
                    </a>
                  </p>

                  <p className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-0">
                    <FaGlobe className="text-danger flex-shrink-0" />
                    <a href="https://www.littlecrayons.org" target="_blank" rel="noreferrer" className="text-decoration-none text-secondary">
                      www.littlecrayons.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <FaCheckCircle color="#10B981" size={38} />
            </div>

            <h3 style={{ color: '#111827', fontWeight: 800, fontSize: '1.45rem', marginBottom: '8px' }}>
              Enquiry Submitted!
            </h3>
            
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.5 }}>
              Thank you, <strong style={{ color: '#111827' }}>{submittedData.name}</strong>. We have received your request for <strong style={{ color: '#111827' }}>{submittedData.enquiryFor}</strong> and our team will get in touch shortly.
            </p>

            <button 
              className="modal-btn-confirm" 
              onClick={() => setShowModal(false)}
            >
              Okay, Got it
            </button>
          </div>
        </div>
      )}

      <PageBanner />
    </div>
  );
}