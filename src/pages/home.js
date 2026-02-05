import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';
import DownloadButton from '../components/DownloadButton';


export default function Home() {
    const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-inner max-w-6xl mx-auto px-6">
        <h1 className="hero-title">
            Loel is a <span className="text-highlight">full-stack developer</span> specializing in 
            <span className="text-[#c4b6e4]"> modern web systems</span> and 
            <span className="text-[#bfc6d4]"> digital experiences</span>.
        </h1>

        <p className="hero-sub mt-6">He combines clean UI design with optimized backend logic to deliver reliable digital solutions.</p>

        <div className="hero-cta mt-10">
          <button className="btn-primary" onClick={() => navigate('/projects')}>Explore Projects <RxArrowRight className="inline-block ml-2" /></button>

          <DownloadButton />
        </div>
      </div>

      <div className="hero-ghost">LOEL CAMPAÑA</div>
      <div className="hero-location">
        <span className="hero-location-line" />
        <span className="hero-location-text">BASED IN PHILIPPINES</span>
      </div>
    </section>
  );
}
