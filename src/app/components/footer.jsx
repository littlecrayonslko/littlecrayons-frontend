/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: '#0F172A', color: '#94A3B8' }} className="pt-5 pb-4 position-relative overflow-hidden">
      {/* Decorative top rainbow accent line */}
      <div
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, #3B82F6 0%, #EC4899 33%, #F59E0B 66%, #10B981 100%)'
        }}
      />

      <div className="container pt-4">
        <div className="row gy-4 mb-5">

          {/* Brand & Logo Section */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              {/* White Background Enclosure for Pure Image Logo */}
              <div
                className="bg-white rounded-3 p-2 d-inline-flex align-items-center justify-content-center shadow-sm"
                style={{ height: '60px', minWidth: '160px', maxWidth: '220px' }}
              >
                <img
                  src="/logo.png"
                  alt="Little Crayons Logo"
                  className="img-fluid"
                  style={{ maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

            <p className="small text-slate-400 pe-lg-3 lh-base">
              Nurturing young minds through play-based learning, creative exploration, and a safe, joyful environment designed for early development.
            </p>

            {/* Social Links */}
            <div className="d-flex gap-2 pt-2">
              {[
                { icon: <FaFacebookF />, color: '#1877F2', label: 'Facebook', url: 'https://www.facebook.com/share/193BguQDyZ/?mibextid=wwXIfr' },
                { icon: <FaInstagram />, color: '#E4405F', label: 'Instagram', url: 'https://www.instagram.com/littlecrayons2012?igsh=N3g1bDluejRlYWdn' },
                { icon: <FaYoutube />, color: '#FF0000', label: 'YouTube', url: 'https://youtube.com/@yourchannel' },
                { icon: <FaTwitter />, color: '#1DA1F2', label: 'Twitter', url: 'https://twitter.com/yourhandle' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: '#1E293B',
                    border: '1px solid #334155',
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1E293B'}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase tracking-wider" style={{ fontSize: '0.85rem' }}>
              Quick Links
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 m-0">
              {['Home', 'About Us', 'Admissions', 'FAQ', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-decoration-none text-slate-400 hover-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase tracking-wider" style={{ fontSize: '0.85rem' }}>
              Our Programs
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 m-0">
              {['Playgroup (1.5-2.5 yrs)', 'Nursery (2.5-3.5 yrs)', 'Junior KG', 'Senior KG', 'Daycare & Afterschool'].map((program, idx) => (
                <li key={idx}>
                  <a href="#programs" className="text-decoration-none text-slate-400 hover-white">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch & Hours */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase tracking-wider" style={{ fontSize: '0.85rem' }}>
              Get in Touch
            </h6>

            <ul className="list-unstyled small d-flex flex-column gap-2 mb-3">
              <li className="d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" color="#60A5FA" />
                <span>
                  Kanpur Road, Sector D1, LDA Colony, Lucknow, India, 226012</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaPhoneAlt className="flex-shrink-0" color="#34D399" />
                <a href="tel:+15550192834" className="text-decoration-none text-slate-400 hover-white">073795 03555</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaEnvelope className="flex-shrink-0" color="#FBBF24" />
                <a href="mailto:littlecrayonslko@gmail.com" className="text-decoration-none text-slate-400 hover-white">littlecrayonslko@gmail.com</a>
              </li>
            </ul>

            <div className="p-3 rounded-3" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
              <div className="d-flex align-items-center gap-2 mb-1 text-white small fw-semibold">
                <FaClock color="#F472B6" /> Campus Hours
              </div>
              <p className="small text-slate-400 m-0" style={{ fontSize: '0.8rem' }}>
                Mon - Fri: 8:00 AM – 4:30 PM <br />
                Sat: By Appointment Only
              </p>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: '#334155' }} className="my-4" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small gap-2 text-slate-400">
          <div>
            © {new Date().getFullYear()} Little Crayons Preschool. All rights reserved.
          </div>
          <div className="d-flex gap-3">
            <a href="#privacy" className="text-decoration-none text-slate-400 hover-white">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="text-decoration-none text-slate-400 hover-white">Terms of Service</a>
            <span>•</span>
            <a href="#sitemap" className="text-decoration-none text-slate-400 hover-white">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;