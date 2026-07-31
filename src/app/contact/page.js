/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
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
        alert("Thank you! Your message has been sent.");
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <Navbar />

            <section className="py-5 position-relative bg-white">
                <style>{`
                    .contact-title {
                        color: #FF5722;
                        font-weight: 800;
                        font-size: 2.5rem;
                    }

                    .form-card {
                        background: #FAFAFA;
                        border: 1px solid #EEEEEE;
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
                    }

                    .form-red-banner {
                        background-color: #FF0000;
                        color: #FFFFFF;
                        font-weight: 700;
                        font-size: 0.95rem;
                        border-radius: 4px;
                        padding: 8px 16px;
                    }

                    .custom-input, .custom-select {
                        border: 1px solid #D1D5DB;
                        border-radius: 6px;
                        padding: 10px 14px;
                        font-size: 0.9rem;
                        color: #374151;
                        width: 100%;
                        transition: border-color 0.2s ease;
                    }

                    .custom-input:focus, .custom-select:focus {
                        outline: none;
                        border-color: #FF5722;
                    }

                    .btn-submit-red {
                        background-color: #FF0000;
                        color: #FFFFFF;
                        font-weight: 700;
                        border: none;
                        border-radius: 6px;
                        padding: 10px 32px;
                        font-size: 0.95rem;
                        transition: opacity 0.2s ease;
                    }

                    .btn-submit-red:hover {
                        opacity: 0.9;
                    }

                    .info-title {
                        color: #FF5722;
                        font-weight: 800;
                        font-size: 1.5rem;
                    }

                    .info-label {
                        color: #1F2937;
                        font-weight: 700;
                        font-size: 1.05rem;
                    }

                    .info-text {
                        color: #4B5563;
                        font-size: 0.9rem;
                        line-height: 1.6;
                    }
                `}</style>

                <div className="container py-4">
                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h1 className="contact-title m-0">Contact Us</h1>
                    </div>

                    {/* Form & Contact Details Grid */}
                    <div className="row g-4 align-items-center justify-content-center mb-5">
                        
                        {/* LEFT COLUMN: Form Container */}
                        <div className="col-lg-6 col-md-10">
                            <div className="form-card p-4 p-md-5">
                                <p className="text-muted small text-center mb-3 fw-medium">
                                    Please fill out the quick form and we will be in touch with lightening speed.
                                </p>

                                {/* Red Banner Header */}
                                <div className="form-red-banner text-center mb-4">
                                    For more information please fill the form
                                </div>

                                <form onSubmit={handleSubmit}>
                                    {/* Full Name */}
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

                                    {/* Email ID */}
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

                                    {/* Mobile No */}
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

                                    {/* Enquiry for */}
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

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button type="submit" className="btn-submit-red">
                                            SUBMIT
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Location Pin & School Details */}
                        <div className="col-lg-5 col-md-10 offset-lg-1">
                            <div className="text-center text-lg-start">
                                {/* Pin Graphic */}
                                <div className="mb-3">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                                        alt="Location Pin"
                                        style={{ width: "90px", height: "auto" }}
                                    />
                                </div>

                                {/* Title */}
                                <h2 className="info-title mb-4">Little Crayons PreSchool</h2>

                                {/* Address Details */}
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

            {/* Bottom Graphic Banner */}
            <PageBanner />
        </div>
    );
}