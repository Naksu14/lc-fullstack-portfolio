import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, LayoutGroup, useReducedMotion } from 'framer-motion';
import LCLogo from '../assets/LClogo.png';

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    // lock body scroll while mobile menu is open
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [mobileOpen]);
  const reduceMotion = useReducedMotion();

  return (
    <nav className="top-nav w-full bg-transparent bg-[rgba(0,0,0,0.2)] backdrop-blur-xs border-b border-gray-800/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="top-nav-brand text-purple-300 text-xl font-semibold flex items-center gap-3"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <img src={LCLogo} alt="Loel portfolio logo" className="h-10 w-10 inline-block" />
          <div className="text-white hidden sm:block">Loel's Portfolio</div>
        </div>

        {/* Desktop links */}
        <LayoutGroup>
          <ul className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <li key={link.to} className="relative">
                <NavLink to={link.to} end className="inline-block" onClick={() => setMobileOpen(false)}>
                  {({ isActive }) => (
                    <>
                      <span className={`top-nav-link relative z-10 px-2 py-1 text-sm font-medium transition-colors ${isActive ? 'text-purple-200' : 'text-gray-300'}`}>
                        {link.label}
                      </span>

                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 bottom-0 h-0.5 rounded"
                          style={{
                            pointerEvents: 'none',
                            background: 'linear-gradient(90deg, rgba(124,58,237,0.9), rgba(99,102,241,0.9))',
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </LayoutGroup>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center border border-gray-700/50 rounded-md bg-[rgba(255,255,255,0.05)]">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-200 hover:text-purple-200 hover:bg-white/3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay (full-screen) */}
      {mobileOpen && (
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1 }}
          exit={reduceMotion ? {} : { opacity: 0 }}
          className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[rgba(6,6,10,0.85)] h-full shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img src={LCLogo} alt="logo" className="h-8 w-8" />
                <div className="text-white font-semibold">Loel's Portfolio</div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded text-gray-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} end onClick={() => setMobileOpen(false)}>
                      {({ isActive }) => (
                        <span className={`top-nav-link w-full block text-left px-3 py-3 text-lg font-medium rounded ${isActive ? 'text-purple-400 bg-white/3' : 'text-gray-300 hover:text-purple-200'}`}>
                          {link.label}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
