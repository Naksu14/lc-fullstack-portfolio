import React from 'react';
import PictureMe from '../assets/images/me.png';
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaPhp,
    FaPython,
    FaJava,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiNestjs,
    SiMysql,
    SiVercel,
} from 'react-icons/si';
import { BiCodeCurly } from 'react-icons/bi';

export default function About() {
    const techStack = [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'Bootstrap', icon: FaBootstrap },
        { name: 'React', icon: FaReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'PHP', icon: FaPhp },
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'NestJS', icon: SiNestjs },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'REST APIs', icon: BiCodeCurly },
        { name: 'Vercel', icon: SiVercel },
    ];

    const layers = [
        {
            label: 'Front-end (Presentation Layer)',
            key: 'front-end',
            tech: ['HTML', 'CSS', 'Bootstrap', 'React', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
        },
        {
            label: 'Back-end (Application Layer)',
            key: 'back-end',
            tech: ['PHP', 'Python', 'Java', 'Node.js', 'NestJS', 'REST APIs'],
        },
        {
            label: 'Database Layer',
            key: 'database',
            tech: ['MySQL'],
        },
        {
            label: 'Infrastructure Layer',
            key: 'infrastructure',
            tech: ['Git', 'GitHub', 'Vercel'],
        },
    ];

    return (
        <section className="about-hero flex flex-col justify-center items-center min-h-screen">
            <div className="about-inner w-full flex justify-center items-center max-w-6xl mx-auto">
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
            </div>

            <div className="tech-stack">
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
            </div>

            <div className='w-full max-w-6xl'>
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
            </div>
        </section>
    );
}