/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState, useEffect } from 'react';
import {
    FaGraduationCap,
    FaTimes,
    FaArrowRight,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaExpand,
    FaCoins,
    FaRulerCombined,
    FaBuilding
} from 'react-icons/fa';
import Link from 'next/link';
import PageBanner from '../components/PageBanner';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function FranchisePage() {
    const [franchises, setFranchises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // State for Selected Franchise Modal
    const [selectedFranchise, setSelectedFranchise] = useState(null);
    const [activeModalImg, setActiveModalImg] = useState('');

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://littlecrayons-backend-jmmh.onrender.com/api';

    useEffect(() => {
        const fetchFranchises = async () => {
            try {
                setLoading(true);
                setError('');
                const res = await fetch(`${API_BASE_URL}/franchise`);
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || 'Failed to fetch franchise records');
                }

                const list = Array.isArray(data) ? data : data?.data || [];
                setFranchises(list);
            } catch (err) {
                console.error('Fetch Error:', err);
                setError(err.message || 'Could not load franchises.');
            } finally {
                setLoading(false);
            }
        };

        fetchFranchises();
    }, [API_BASE_URL]);

    const handleOpenModal = (item) => {
        setSelectedFranchise(item);
        setActiveModalImg(item.image_1_url || 'https://placehold.co/600x400?text=No+Photo');
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>

            {/* Dynamic Keyframes & Hover FX */}
            <style>{`
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(3deg); }
                }
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
                    50% { box-shadow: 0 0 0 12px rgba(37, 99, 235, 0); }
                }
                @keyframes floatHorizontal {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(8px); }
                }

                .logo-float { animation: floatSlow 3.8s ease-in-out infinite; }
                .pulse-badge { animation: pulseGlow 2.5s infinite; }
                .slide-arrow { animation: floatHorizontal 2s ease-in-out infinite; }

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

                /* Hover Card Animations */
                .hover-card {
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                }
                .hover-card:hover {
                    transform: translateY(-8px) scale(1.015);
                    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12) !important;
                }

                /* Image Zoom FX */
                .img-container {
                    overflow: hidden;
                    position: relative;
                }
                .img-container img {
                    transition: transform 0.5s ease;
                }
                .hover-card:hover .img-container img {
                    transform: scale(1.08);
                }

                .modal-thumb {
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 2px solid transparent;
                }
                .modal-thumb:hover, .modal-thumb.active {
                    border-color: #2563EB;
                    transform: scale(1.05);
                }
            `}</style>

            <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
                ✨ Admissions for Academic Year 2026–2027 are now open. <a href="/enquiry" className="text-warning text-decoration-underline ms-2 btn-crayon">Book a Campus Tour</a>
            </div>
            <Navbar />
            <PageBanner />

            {/* Franchise Intro Banner */}
            <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container py-3">
                    <div className="text-center mb-4">
                        <h6 className="fw-bold text-uppercase text-primary" style={{ letterSpacing: '1.2px', fontSize: '0.85rem' }}>
                            Our Network
                        </h6>
                        <h2 className="fw-bold" style={{ color: '#0F172A', fontSize: '2.2rem' }}>
                            Explore Little Crayons Franchises
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '620px' }}>
                            Approved preschool partner locations across multiple regions. Click on any franchise to view property pictures and specifications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dynamic Franchise Cards Grid */}
            <section id="franchise-grid" className="py-5 bg-white border-top border-bottom">
                <div className="container py-3">
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="text-secondary mt-3 fw-semibold">Loading registered franchises...</p>
                        </div>
                    ) : error ? (
                        <div className="alert alert-danger text-center mx-auto rounded-4 shadow-sm" style={{ maxWidth: '600px' }}>
                            <h5 className="fw-bold mb-1">Failed to Load</h5>
                            <p className="mb-0 small">{error}</p>
                        </div>
                    ) : franchises.length === 0 ? (
                        <div className="text-center py-5 bg-light rounded-4 border shadow-sm mx-auto p-5" style={{ maxWidth: '600px' }}>
                            <FaBuilding size={48} className="text-muted mb-3" />
                            <h4 className="fw-bold text-dark mb-2">No Franchises Found</h4>
                            <p className="text-muted small mb-4">Become our first regional partner and establish your campus.</p>
                            <a href="/enquiry" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                                Apply For Franchise
                            </a>
                        </div>
                    ) : (
                        <div className="row g-4">
                            {franchises.map((f) => {
                                const id = f.id || f._id;
                                const heroImg = f.image_1_url || 'https://placehold.co/600x400?text=Property+Photo';

                                return (
                                    <div key={id} className="col-lg-4 col-md-6">
                                        <div
                                            className="card h-100 border rounded-4 overflow-hidden shadow-sm hover-card bg-white d-flex flex-column"
                                            onClick={() => handleOpenModal(f)}
                                        >
                                            <div className="img-container" style={{ height: '220px' }}>
                                                <img
                                                    src={heroImg}
                                                    alt={f.applicant_name}
                                                    className="w-100 h-100"
                                                    style={{ objectFit: 'cover' }}
                                                    onError={(e) => {
                                                        e.target.src = 'https://placehold.co/600x400?text=No+Photo';
                                                    }}
                                                />
                                                <span className="position-absolute top-0 end-0 m-3 badge bg-white text-primary fw-bold px-3 py-2 rounded-pill shadow-sm d-flex align-items-center gap-1">
                                                    <FaMapMarkerAlt color="#2563EB" /> {f.city}, {f.state}
                                                </span>
                                            </div>

                                            <div className="p-4 d-flex flex-column flex-grow-1">
                                                <small className="text-primary fw-bold mb-1 text-uppercase">Branch Partner</small>
                                                <h5 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{f.applicant_name}</h5>

                                                <p className="text-secondary small mb-3 flex-grow-1 text-truncate-2">
                                                    {f.message || 'Complete franchise premises outfitted with early development infrastructure and classrooms.'}
                                                </p>

                                                <div className="d-flex flex-wrap gap-2 mb-3">
                                                    <span className="badge bg-light text-secondary border px-2 py-1 rounded small d-flex align-items-center gap-1">
                                                        <FaRulerCombined size={12} /> {f.available_space_sqft} sq ft
                                                    </span>
                                                    <span className="badge bg-light text-secondary border px-2 py-1 rounded small d-flex align-items-center gap-1">
                                                        <FaCoins size={12} /> {f.investment_budget}
                                                    </span>
                                                </div>

                                                <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                                                    <small className="text-muted fw-semibold">Click to View Details</small>
                                                    <span className="btn btn-sm btn-outline-primary fw-bold rounded-pill d-inline-flex align-items-center gap-1">
                                                        View <FaExpand size={11} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Franchise Details & Images Modal */}
            {selectedFranchise && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center p-3"
                    style={{ zIndex: 1060 }}
                    onClick={() => setSelectedFranchise(null)}
                >
                    <div
                        className="bg-white rounded-4 overflow-hidden shadow-2xl w-100 position-relative animate__animated animate__fadeIn"
                        style={{ maxWidth: '850px', maxHeight: '92vh', overflowY: 'auto' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedFranchise(null)}
                            className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px', zIndex: 20 }}
                        >
                            <FaTimes size={18} />
                        </button>

                        <div className="row g-0">
                            {/* Images Section */}
                            <div className="col-lg-7 bg-light d-flex flex-column justify-content-between p-3 border-end">
                                <div className="rounded-3 overflow-hidden shadow-sm bg-black" style={{ height: '380px' }}>
                                    <img
                                        src={activeModalImg}
                                        alt="Main Property View"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>

                                {/* Thumbnail Switcher */}
                                <div className="d-flex gap-2 mt-3 justify-content-center">
                                    {selectedFranchise.image_1_url && (
                                        <img
                                            src={selectedFranchise.image_1_url}
                                            alt="View 1"
                                            className={`rounded-3 modal-thumb ${activeModalImg === selectedFranchise.image_1_url ? 'active' : ''}`}
                                            style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                                            onClick={() => setActiveModalImg(selectedFranchise.image_1_url)}
                                        />
                                    )}
                                    {selectedFranchise.image_2_url && (
                                        <img
                                            src={selectedFranchise.image_2_url}
                                            alt="View 2"
                                            className={`rounded-3 modal-thumb ${activeModalImg === selectedFranchise.image_2_url ? 'active' : ''}`}
                                            style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                                            onClick={() => setActiveModalImg(selectedFranchise.image_2_url)}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="col-lg-5 p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-primary rounded-pill px-3 py-1 mb-2">Franchise Branch</span>
                                    <h4 className="fw-bold mb-1" style={{ color: '#0F172A' }}>{selectedFranchise.applicant_name}</h4>

                                    <p className="text-muted small d-flex align-items-center gap-1 mb-3">
                                        <FaMapMarkerAlt color="#2563EB" /> {selectedFranchise.city}, {selectedFranchise.state}
                                    </p>

                                    <hr className="my-3" />

                                    <h6 className="fw-bold text-dark mb-2">Property Specifications</h6>
                                    <div className="row g-2 mb-3">
                                        <div className="col-6">
                                            <div className="p-2 bg-light rounded-3 border">
                                                <small className="text-muted d-block">Available Space</small>
                                                <span className="fw-bold text-dark">{selectedFranchise.available_space_sqft} sq ft</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="p-2 bg-light rounded-3 border">
                                                <small className="text-muted d-block">Budget Range</small>
                                                <span className="fw-bold text-dark">{selectedFranchise.investment_budget}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 className="fw-bold text-dark mb-1">Remarks / Location Note</h6>
                                    <p className="text-secondary small mb-4" style={{ lineHeight: 1.6 }}>
                                        {selectedFranchise.message || 'No additional remarks submitted. Campus conforms to preschool safety standards.'}
                                    </p>
                                </div>

                                {/* Contact Footer in Modal */}
                                <div className="pt-3 border-top bg-white">
                                    <small className="text-muted d-block mb-2 fw-semibold">Branch Contact Details</small>
                                    <div className="d-flex align-items-center gap-2 small text-secondary mb-1">
                                        <FaEnvelope color="#D97706" /> {selectedFranchise.email}
                                    </div>
                                    <div className="d-flex align-items-center gap-2 small text-secondary">
                                        <FaPhoneAlt color="#059669" /> {selectedFranchise.phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- FOOTER (UNCHANGED) --- */}
            <Footer />

        </div>
    );
}