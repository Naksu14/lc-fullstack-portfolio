import React from 'react';
import { motion } from 'framer-motion';
import iQueueImage from '../assets/images/projects/iqueue.jpg';
import ChatRoomLight from '../assets/images/projects/chat-room-light.jpg';
import Portfolio from '../assets/images/projects/portfolio.jpg';
import RizalInfo from '../assets/images/projects/rizal-infographic.jpg';
import JobConnext from '../assets/images/projects/jobconnext.png';
import ArduinoBasedQueue from '../assets/images/projects/ardunoBased-queueing.jpg';
import ScholarshipSystem from '../assets/images/projects/scholarship.png';

export default function Projects() {
    const categories = [
    'All',
    'Full-Stack Systems',
    'Real-Time Apps',
    'Dashboards & Platforms',
    'Educational & Info Apps',
    'Hardware-Integrated'
    ];

    const projects = [
        {
            title: 'iQueue: Smart Queue Management System',
            role: 'Full-stack development project with hardware integration',
            year: 'Dec 2025',
            summary:
                'Smart queue management system powered by a Raspberry Pi 5 kiosk, mobile application, and web dashboard. Built with React.js and Tailwind CSS on the frontend, NestJS with WebSockets and TypeORM on the backend, and MySQL for data storage. Features include real-time queue updates, QR code validation, online appointments, walk-in ticket generation, and live service monitoring to streamline campus operations.',
            image: iQueueImage,
        },
        {
            title: 'Activity Real-Time Chat Room',
            role: 'Full‑stack development project',
            year: 'Jan 2026',
            summary:
                'Simple real-time chat room built with NestJS, TypeORM, and MySQL using Socket.IO for real-time communication, plus a React + Tailwind frontend enhanced with TanStack Query for efficient state and data management, featuring JWT auth, private/group rooms, member management, and live messaging.',
            image: ChatRoomLight,
        },
        
        {
            title: 'Rizal Infographic Web-based',
            role: 'Frontend development project',
            year: 'Jun 2025',
            summary:
                'A Group Project for our Web Programming class that presents the life and works of Dr. Jose Rizal through an interactive infographic web application. Developed using React.js and Tailwind CSS, the platform offers a visually engaging experience with smooth animations powered by Framer Motion. The infographic highlights key events, achievements, and contributions of Rizal, providing users with an educational and immersive journey through Philippine history.',
            image: RizalInfo,
        },
        {
            title: 'JobConnext: Job Portal Web Application',
            role: 'Full‑stack development project',
            year: 'Jun 2025',
            summary: 'A group project for our Web Programming class that serves as a job portal connecting job seekers with employers. Built with PHP, HTML, CSS, MySQL, and Bootstrap, the application features user authentication, job listings, application tracking, and employer dashboards. The platform aims to streamline the job search process and enhance the user experience for both job seekers and employers.',
            image: JobConnext,
        },
        {
            title: 'Interactive Web-based Portfolio Platform',
            role: 'Frontend development project',
            year: 'Apr 2025',
            summary:
                'A Group Project for our Web Programming class that showcases my skills and projects through an engaging and interactive web platform. Built with React.js and Tailwind CSS for a responsive and visually appealing design, featuring smooth animations and transitions using Framer Motion. The portfolio highlights various projects, skills, and experiences, providing visitors with an immersive browsing experience.',
            image: Portfolio,
        },
        {
            title: 'Smart Queue Management System for School Uniforms',
            role: 'Full-stack development project with hardware integration',
            year: 'Jan 2025',
            summary:
                    'Queue management system for uniform purchasing and fitting at Cavite State University – Imus Campus. Built with Arduino for ticketing and queue assignments, and a web-based dashboard for real-time queue display and stock updates. Students can choose between buying uniforms or lining up for fitting, ensuring a smoother, organized, and efficient process.',
            image: ArduinoBasedQueue,
        },
        {
            title: 'Scholarship Management System',
            role: 'Full-stack Developer',
            year: 'Aug 2024',
            summary: 'A web-based platform developed for Cavite State University (CvSU) students to streamline the scholarship application process. The system enables users to track available listings, view requirements, and submit documents online while providing real-time status updates and announcements. Built using a robust stack of PHP and MySQL for backend management, with a responsive frontend designed in Figma and implemented using HTML, CSS, and Bootstrap.',
            image: ScholarshipSystem,
        }
    ];

    return (
        <motion.section
            className="about-hero flex flex-col justify-center items-center min-h-screen px-6 py-20"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
        >
            <motion.div
                className="max-w-6xl mx-auto px-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7, ease: 'easeOut' }}
            >
               

                <h1 className="hero-title mb-4">
                    Crafted digital products and systems that
                    <span className="text-[#c4b6e4]"> solve real problems</span>.
                </h1>

                <p className="hero-sub text-center max-w-2xl mx-auto">
                    A collection of full‑stack projects ranging from clean marketing
                    sites to robust backend services. Each build balances visual polish
                    with performance and maintainability.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-700/80 bg-white/0 text-[0.68rem] tracking-[0.2em] uppercase text-gray-300 hover:border-purple-400/90 hover:text-purple-100 hover:bg-white/5 transition-colors"
                        >
                            {cat}
                        </button>
                    ))}

                    <span className="text-[0.7rem] text-gray-400/90 ml-1">
                        Portfolio header • more projects coming soon
                    </span>
                </div>
            </motion.div>
            <motion.div
                className="projects-grid"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.75, ease: 'easeOut' }}
            >
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        {project.year && <span className="project-year-floating">{project.year}</span>}
                        <div className="project-card-inner">
                            <div className="project-card-media">
                                <div className="project-card-media-frame">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-card-image"
                                        />
                                    )}
                                    <div className="project-card-media-overlay" />
                                    <div className="project-card-media-fade" />
                                    <div className="project-card-cta">VIEW PROJECT</div>
                                </div>
                                <p className="project-preview-label">PROJECT PREVIEW</p>
                            </div>

                            <div className="project-card-body">
                                <div>
                                    <div className="project-meta">
                                        <p className="project-role">{project.role}</p>
                                    </div>
                                    <h2 className="project-title">{project.title}</h2>
                                    <p className="project-summary">{project.summary}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </motion.div>
        </motion.section>
    );
}