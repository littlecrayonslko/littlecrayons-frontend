/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaPaperPlane, FaChild } from 'react-icons/fa';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        enquiryFor: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("🎉 Thank you! We have received your enquiry and will contact you shortly.");
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
                    }

                    .btn-submit-red:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 20px rgba(255, 23, 68, 0.4);
                        opacity: 0.95;
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
                `}</style>

                <div className="container py-4">
                    {/* Header Banner */}
                    <div className="text-center mb-5">
                        <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2 fs-6">
                            🎈 Reach Out To Us
                        </span>
                        <h1 className="contact-title m-0">Preschool Admissions & enquiry</h1>
                        <p className="contact-subtitle mt-2">
                            Have questions or want to schedule a school tour? We’d love to welcome your little one! ✨
                        </p>
                    </div>

                    {/* Form & Contact Details Grid */}
                    <div className="row g-4 align-items-stretch justify-content-center mb-5">
                        
                        {/* LEFT COLUMN: Preschool enquiry Form */}
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

                                <form onSubmit={handleSubmit}>
                                    {/* Parent / Full Name */}
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

                                    {/* Mobile No */}
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark mb-1">
                                            Mobile Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            placeholder="e.g. 9876543210"
                                            className="custom-input"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
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
                                        <button type="submit" className="btn-submit-red">
                                            <FaPaperPlane /> SUBMIT ENQUIRY
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Location Pin & School Details */}
                        <div className="col-lg-5 col-md-10 offset-lg-1">
                            <div className="info-card h-100 d-flex flex-column justify-content-center text-center text-lg-start">
                                
                                {/* Pin Graphic Container (Unchanged Image Link) */}
                                <div className="pin-container mb-3 text-center text-lg-start">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                                        alt="Location Pin"
                                        style={{ width: "95px", height: "auto" }}
                                    />
                                </div>

                                {/* Preschool Title */}
                                <h2 className="info-title mb-1">Little Crayons PreSchool</h2>
                                <p className="text-muted small mb-4 fw-bold">
                                    <FaChild className="text-warning me-1" /> Where Learning Begins With Fun!
                                </p>

                                {/* Address Details */}
                                <div className="d-flex flex-column gap-3">
                                    {/* Location */}
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

                                    {/* Phone */}
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="info-badge-icon bg-success-subtle text-success">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="text-start">
                                            <div className="info-label">Call Us</div>
                                            <a href="tel:7379503555" className="text-decoration-none text-muted small fw-bold">
                                                +91 7379 50 3555
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
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

                                    {/* Website */}
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

            {/* Bottom Graphic Banner */}
            <PageBanner />
        </div>
    );
}