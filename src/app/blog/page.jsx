/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaUserEdit, 
  FaArrowRight, 
  FaBookOpen, 
  FaTimes,
  FaSearch
} from 'react-icons/fa';
import Navbar from '../components/navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/footer';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://littlecrayons-backend-jmmh.onrender.com/api';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`${API_BASE_URL}/blogs`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Failed to load blog posts.');
        }

        const list = Array.isArray(data) ? data : data?.data || [];
        setBlogs(list);
      } catch (err) {
        console.error('Blog fetch error:', err);
        setError(err.message || 'Failed to fetch blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [API_BASE_URL]);

  // Admin se aane wali body ko kisi bhi key se extract karein
  const getBlogBody = (post) => {
    if (!post) return '';
    return post.body || post.content || post.description || post.details || post.text || post.article || '';
  };

  // Card preview ke liye HTML tags hatakar clean plain text banayein
  const stripHtmlForSnippet = (htmlOrText) => {
    if (!htmlOrText) return '';
    return String(htmlOrText)
      .replace(/<[^>]*>?/gm, ' ') // Strip HTML tags if any
      .replace(/\s+/g, ' ')       // Remove extra spaces
      .trim();
  };

  const filteredBlogs = blogs.filter((b) => {
    const title = (b.title || '').toLowerCase();
    const body = stripHtmlForSnippet(getBlogBody(b)).toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || body.includes(query);
  });

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1E293B', backgroundColor: '#FAFAFA' }}>

      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="py-2 text-center text-white fw-semibold small" style={{ backgroundColor: '#1E293B' }}>
        ✨ Admissions for Academic Year 2026–2027 are now open. <a href="/contact" className="text-warning text-decoration-underline ms-2">Book a Campus Tour</a>
      </div>

      {/* --- HEADER & BANNER --- */}
      <Navbar />
      <h1 className="text-center my-4 fw-extrabold" style={{ color: '#FF5722' }}>Our Articles & Insights</h1>
      <PageBanner />

      {/* --- INLINE STYLES --- */}
      <style>{`
        .blog-card {
          border-radius: 18px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 16px 30px rgba(0,0,0,0.08);
          border-color: #CBD5E1;
        }
        .blog-img-box {
          position: relative;
          height: 220px;
          overflow: hidden;
          background-color: #F1F5F9;
        }
        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-card:hover .blog-img {
          transform: scale(1.06);
        }
        .blog-title-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.8rem;
          line-height: 1.4;
        }
        .blog-body-snippet {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 1.25rem;
          word-break: break-word;
        }
        .search-input {
          max-width: 440px;
          border-radius: 30px;
          padding: 10px 20px;
          border: 1px solid #CBD5E1;
          transition: all 0.2s ease;
        }
        .search-input:focus {
          border-color: #FF5722;
          box-shadow: 0 0 0 4px rgba(255, 87, 34, 0.15);
          outline: none;
        }
        .article-content {
          color: #334155;
          font-size: 1.05rem;
          line-height: 1.8;
          white-space: pre-line;
          word-break: break-word;
        }
        .article-content p {
          margin-bottom: 1.2rem;
        }
      `}</style>

      {/* --- BLOG SECTION --- */}
      <section className="py-5 bg-white">
        <div className="container py-3">

          {/* Subtitle & Search Bar */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-5 pb-3 border-bottom">
            <div>
              <h4 className="fw-bold text-dark mb-1">Latest Educational Stories</h4>
              <p className="text-secondary small mb-0">Parenting guides, early learning approaches, and preschool news.</p>
            </div>

            {/* Search filter */}
            <div className="position-relative w-100" style={{ maxWidth: '340px' }}>
              <input
                type="text"
                className="form-control search-input ps-4"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" size={14} />
            </div>
          </div>

          {/* State Handlers */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem', color: '#FF5722' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-secondary mt-3 fw-semibold">Loading blogs...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center mx-auto rounded-4 shadow-sm" style={{ maxWidth: '600px' }}>
              <h5 className="fw-bold mb-1">Failed to Load</h5>
              <p className="mb-0 small">{error}</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-5 text-muted bg-light rounded-4 p-5 mx-auto border" style={{ maxWidth: '600px' }}>
              <FaBookOpen size={46} className="mb-3 text-secondary opacity-50" />
              <h5 className="fw-bold text-dark">No Articles Found</h5>
              <p className="small text-secondary mb-0">
                {searchQuery ? `No posts matched "${searchQuery}". Try a different keyword.` : 'No blogs have been published by the admin yet.'}
              </p>
            </div>
          ) : (
            /* Blog Grid */
            <div className="row g-4">
              {filteredBlogs.map((post) => {
                const id = post.id || post._id;
                const coverImage = post.image || post.image_url || post.cover_image_url || 'https://placehold.co/600x400?text=Little+Crayons';
                const postTitle = post.title || 'Untitled Article';
                const rawBody = getBlogBody(post);
                const snippetText = stripHtmlForSnippet(rawBody);
                const postCategory = post.category || 'Preschool Guide';
                const postDate = post.created_at ? new Date(post.created_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                }) : 'Preschool Update';

                return (
                  <div key={id} className="col-lg-4 col-md-6">
                    <div 
                      className="blog-card" 
                      onClick={() => setSelectedBlog({ 
                        ...post, 
                        coverImage, 
                        postTitle, 
                        postBody: rawBody, 
                        postDate, 
                        postCategory 
                      })}
                    >
                      <div className="blog-img-box">
                        <img
                          src={coverImage}
                          alt={postTitle}
                          className="blog-img"
                          onError={(e) => {
                            e.target.src = 'https://placehold.co/600x400?text=No+Cover';
                          }}
                        />
                        <span className="position-absolute top-0 end-0 m-3 badge bg-white text-dark shadow-sm fw-bold px-3 py-2 rounded-pill small">
                          {postCategory}
                        </span>
                      </div>

                      <div className="p-4 d-flex flex-column flex-grow-1">
                        {/* Meta */}
                        <div className="d-flex align-items-center gap-3 small text-muted mb-2">
                          <span className="d-flex align-items-center gap-1">
                            <FaCalendarAlt size={12} color="#FF5722" /> {postDate}
                          </span>
                          <span className="d-flex align-items-center gap-1">
                            <FaUserEdit size={12} /> Editorial Team
                          </span>
                        </div>

                        {/* Title */}
                        <h5 className="fw-bold text-dark mb-2 blog-title-clamp" title={postTitle}>
                          {postTitle}
                        </h5>

                        {/* CARD BODY TEXT PREVIEW (Directly from Admin) */}
                        <p className="blog-body-snippet flex-grow-1">
                          {snippetText ? snippetText : <span className="fst-italic text-muted">Click to read this article...</span>}
                        </p>

                        {/* Action CTA */}
                        <div className="pt-3 border-top d-flex align-items-center justify-content-between mt-auto">
                          <span className="small text-muted fw-semibold">Full Story</span>
                          <button className="btn btn-sm btn-outline-danger rounded-pill fw-bold px-3 d-flex align-items-center gap-1">
                            Read More <FaArrowRight size={11} />
                          </button>
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

      {/* --- ARTICLE READER MODAL (EXACT ADMIN BODY TEXT) --- */}
      {selectedBlog && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.82)', zIndex: 1060 }}
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white rounded-4 overflow-hidden shadow-2xl w-100 position-relative"
            style={{ maxWidth: '820px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', zIndex: 20 }}
            >
              <FaTimes size={16} />
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-auto p-4 p-md-5">
              <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill mb-2">
                {selectedBlog.postCategory}
              </span>
              <h2 className="fw-bold text-dark display-6 mb-3">{selectedBlog.postTitle}</h2>

              <div className="d-flex align-items-center gap-3 text-muted small pb-3 border-bottom mb-4">
                <span className="d-flex align-items-center gap-1">
                  <FaCalendarAlt color="#FF5722" /> {selectedBlog.postDate}
                </span>
                <span>•</span>
                <span>By Editorial Team</span>
              </div>

              {/* Cover Photo */}
              <div className="rounded-3 overflow-hidden shadow-sm mb-4" style={{ maxHeight: '380px' }}>
                <img
                  src={selectedBlog.coverImage}
                  alt={selectedBlog.postTitle}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* FULL BODY FROM ADMIN */}
              <div className="article-content">
                {selectedBlog.postBody ? (
                  // Checks if admin passed HTML tags or plain multiline text
                  /<[a-z][\s\S]*>/i.test(selectedBlog.postBody) ? (
                    <div dangerouslySetInnerHTML={{ __html: selectedBlog.postBody }} />
                  ) : (
                    selectedBlog.postBody
                  )
                ) : (
                  <p className="text-muted fst-italic">No content provided for this article.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}