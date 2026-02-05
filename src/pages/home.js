import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';
import DownloadButton from '../components/DownloadButton';


export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, scale: 0.985, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99, y: -4 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <motion.div
        className="hero-inner max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="hero-title">
          Loel is a <span className="text-highlight">full-stack developer</span> specializing in 
          <span className="text-[#c4b6e4]"> modern web systems</span> and 
          <span className="text-[#bfc6d4]"> digital experiences</span>.
        </h1>

        <p className="hero-sub mt-6">
          He combines clean UI design with optimized backend logic to deliver reliable digital solutions.
        </p>

        <div className="hero-cta mt-10">
          <button className="btn-primary" onClick={() => navigate('/projects')}>
            Explore Projects <RxArrowRight className="inline-block ml-2" />
          </button>

          <DownloadButton />
        </div>
      </motion.div>

      <div className="hero-ghost">LOEL CAMPAÑA</div>
      <div className="hero-location">
        <span className="hero-location-line" />
        <span className="hero-location-text">BASED IN PHILIPPINES</span>
      </div>
    </motion.section>
  );
}
