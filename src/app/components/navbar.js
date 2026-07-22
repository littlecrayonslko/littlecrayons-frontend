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
        /* Very Soft, Light & Larger Pastel Polka Dot Header Background */
.site-header {
  background-color: #ffffff;
  /* Soft pastel dots: light pink, cyan, yellow, mint, purple, and orange with subtle opacity */
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
          border-radius: 8px;
          color: #1e293b;
          transition: all 0.2s ease-in-out;
          font-size: 0.95rem;
        }
        
        /* Active Red Pill Button Effect */
        .custom-navbar .nav-link.active-link {
          background-color: #FF0000 !important;
          color: #FFFFFF !important;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(255, 0, 0, 0.3);
        }

        .custom-navbar .dropdown-menu {
          border-radius: 12px;
          border: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
        }

        .custom-navbar .dropdown-item {
          font-weight: 700;
          padding: 10px 20px;
        }

        .custom-navbar .dropdown-item:hover {
          background-color: #FFF2F2;
          color: #FF0000;
        }
      `}</style>

            <header className="site-header py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg custom-navbar p-0">
                                <div className="container-fluid p-0">

                                    {/* BRAND LOGO */}
                                    <Link className="navbar-brand" href="/">
                                        <img src="/images/logo.png" alt="Little Crayons Logo" height="60" />
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
                                                <Link className={`nav-link menucareer ${isActive('/career') ? 'active-link' : ''}`} href="/career">
                                                    Career
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