import React from 'react';
import { motion } from 'framer-motion';
import PictureMe from '../assets/images/me.png';
import { techStack, layers } from '../data/techData';

export default function About() {
    return (
        <motion.section
            className="about-hero flex flex-col justify-center items-center min-h-screen"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
        >
            <motion.div
                className="about-inner w-full flex justify-center items-center max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            >
                <div className="about-left">
                    <div className="about-avatar-ring">
                        <img
                            src={PictureMe}
                            alt="Loel Campaña portrait"
                            className="about-avatar"
                        />
                    </div>
                </div>

                <div className="about-right">
                    <p className="about-pretitle font-bold">FULL-STACK DEVELOPER</p>

                    <h1 className="about-name flex items-center gap-3">
                        <span className="about-name-primary">LOEL</span>
                        <span className="about-name-secondary">CAMPAÑA</span>
                    </h1>

                    <p className="about-quote">
                        " Build with purpose; Scale with precision."
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="tech-stack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
            >
                <div className="tech-stack-inner">
                    {[...techStack, ...techStack].map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div key={index} className="tech-pill">
                                {Icon && <Icon className="tech-icon" />}
                                <span>{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div
                className='w-full max-w-6xl'
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.75, ease: 'easeOut' }}
            >
                <div className="about-ibuild flex items-center gap-3 mt-12 text-left">
                    <span className="hero-location-line" />
                    <span className="hero-location-text font-bold">WHAT I BUILD</span>
                </div>
                <div className="mt-6">
                    <p className="about-ibuild-desc ">
                        I specialize in crafting modern web applications that seamlessly blend
                        intuitive user interfaces with robust backend functionality. My focus is
                        on delivering digital solutions that are not only visually appealing but
                        also optimized for performance and scalability.
                    </p>
                </div>
                <div className="layers-grid mt-20">
                    {layers.map((layer) => (
                        <div key={layer.key} className="layer-card">
                            <p className="layer-title font-bold">
                                {layer.label}
                            </p>
                            <p className="layer-tech">
                                {layer.tech.join(', ')}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}