/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const isActive = (path) => pathname === path;

    return (
        <>
            <style>{`
        /* Colorful Polka Dot Header Background */
        .site-header {
          background-color: #ffffff;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="20" cy="20" r="8" fill="%237DD3FC" opacity="0.35"/><circle cx="70" cy="25" r="10" fill="%23F472B6" opacity="0.3"/><circle cx="90" cy="70" r="9" fill="%23FDE047" opacity="0.35"/><circle cx="35" cy="80" r="8" fill="%236EE7B7" opacity="0.35"/><circle cx="85" cy="15" r="6" fill="%23FB923C" opacity="0.3"/><circle cx="25" cy="50" r="7" fill="%23C084FC" opacity="0.3"/></svg>');
          background-repeat: repeat;
          background-position: center;
          border-bottom: 2px solid #f8fafc;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }

        .custom-navbar .nav-link {
          font-weight: 800;
          text-transform: uppercase;
          padding: 8px 16px !important;
          border-radius: 6px;
          color: #1e293b;
          transition: all 0.2s ease-in-out;
          font-size: 0.95rem;
        }

        /* Common active text styling */
        .custom-navbar .nav-link.active-link {
          color: #FFFFFF !important;
        }

        /* --- INDIVIDUAL NAVLINK COLORS --- */
        
        /* 1. Home - Red */
        .custom-navbar .nav-link.menuhome.active-link {
          background-color: #EF4444 !important;
          box-shadow: 0 4px 10px rgba(239, 68, 68, 0.35);
        }
        .custom-navbar .nav-link.menuhome:hover {
          color: #EF4444;
        }

        /* 2. About - Orange */
        .custom-navbar .nav-link.menuabout.active-link {
          background-color: #F97316 !important;
          box-shadow: 0 4px 10px rgba(249, 115, 22, 0.35);
        }
        .custom-navbar .nav-link.menuabout:hover {
          color: #F97316;
        }

        /* 3. Academics - Purple */
        .custom-navbar .nav-link.menuacademics.active-link {
          background-color: #8B5CF6 !important;
          box-shadow: 0 4px 10px rgba(139, 92, 246, 0.35);
        }
        .custom-navbar .nav-link.menuacademics:hover {
          color: #8B5CF6;
        }

        /* 4. Gallery - Emerald Green */
        .custom-navbar .nav-link.menugallery.active-link {
          background-color: #10B981 !important;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.35);
        }
        .custom-navbar .nav-link.menugallery:hover {
          color: #10B981;
        }

        /* 5. Franchise - Sky Blue */
        .custom-navbar .nav-link.menuFranchise.active-link {
          background-color: #0EA5E9 !important;
          box-shadow: 0 4px 10px rgba(14, 165, 233, 0.35);
        }
        .custom-navbar .nav-link.menuFranchise:hover {
          color: #0EA5E9;
        }

        /* 6. Contact - Pink */
        .custom-navbar .nav-link.menucontact.active-link {
          background-color: #EC4899 !important;
          box-shadow: 0 4px 10px rgba(236, 72, 153, 0.35);
        }
        .custom-navbar .nav-link.menucontact:hover {
          color: #EC4899;
        }

        /* --- DROPDOWN MENU STYLES --- */
        .custom-navbar .dropdown-menu {
          border-radius: 12px;
          border: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          padding: 8px;
        }

        .custom-navbar .dropdown-item {
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        /* Individual Dropdown Item Hover Colors */
        .custom-navbar .dropdown-item.menuplaygroup:hover { background-color: #FEF2F2; color: #EF4444; }
        .custom-navbar .dropdown-item.menunursery:hover   { background-color: #FFF7ED; color: #F97316; }
        .custom-navbar .dropdown-item.menulkg:hover       { background-color: #FEFCE8; color: #EAB308; }
        .custom-navbar .dropdown-item.menuukg:hover       { background-color: #ECFDF5; color: #10B981; }
        .custom-navbar .dropdown-item.menudaycare:hover   { background-color: #F0F9FF; color: #0EA5E9; }
      `}</style>

            <header className="site-header py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg custom-navbar p-0">
                                <div className="container-fluid p-0">

                                    {/* BRAND LOGO */}
                                    <Link className="navbar-brand" href="/">
                                        <img src="/logo.png" alt="Little Crayons Logo" height="60" />
                                    </Link>

                                    {/* MOBILE TOGGLER */}
                                    <button
                                        className="navbar-toggler border-0 shadow-none"
                                        type="button"
                                        onClick={() => setNavOpen(!navOpen)}
                                        aria-label="Toggle Navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    {/* NAVIGATION LINKS */}
                                    <div className={`collapse navbar-collapse justify-content-end ${navOpen ? 'show' : ''}`}>
                                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center gap-1">

                                            <li className="nav-item">
                                                <Link className={`nav-link menuhome ${isActive('/') ? 'active-link' : ''}`} href="/">
                                                    Home
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link menuabout ${isActive('/about') ? 'active-link' : ''}`} href="/about">
                                                    About
                                                </Link>
                                            </li>

                                            {/* ACADEMICS DROPDOWN */}
                                            <li
                                                className="nav-item dropdown"
                                                onMouseEnter={() => setDropdownOpen(true)}
                                                onMouseLeave={() => setDropdownOpen(false)}
                                            >
                                                <a
                                                    className={`nav-link dropdown-toggle menuacademics ${pathname.includes('/academics') ||
                                                        ['/playgroup', '/nursery', '/lkg', '/ukg', '/daycare'].includes(pathname)
                                                        ? 'active-link'
                                                        : ''
                                                        }`}
                                                    href="#"
                                                    role="button"
                                                    onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}
                                                >
                                                    Academics
                                                </a>
                                                <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                                    <li><Link className="dropdown-item menuplaygroup" href="/playgroup">Playgroup</Link></li>
                                                    <li><Link className="dropdown-item menunursery" href="/nursery">Nursery</Link></li>
                                                    <li><Link className="dropdown-item menulkg" href="/lkg">LKG</Link></li>
                                                    <li><Link className="dropdown-item menuukg" href="/ukg">UKG</Link></li>
                                                    <li><Link className="dropdown-item menudaycare" href="/daycare">Daycare</Link></li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link menugallery ${isActive('/gallery') ? 'active-link' : ''}`} href="/gallery">
                                                    Gallery
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link menuFranchise ${isActive('/franchise') ? 'active-link' : ''}`} href="/franchise">
                                                    Franchise
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link menucontact ${isActive('/contact') ? 'active-link' : ''}`} href="/contact">
                                                    Contact
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className={`nav-link menucontact ${isActive('/enquiry') ? 'active-link' : ''}`} href="/enquiry">
                                                    enquiry
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}