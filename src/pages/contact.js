import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className="contact-hero min-h-screen px-6 py-20 flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-full max-w-xl text-left space-y-6">
                    <p className="text-xs tracking-[0.25em] uppercase text-indigo-300">Get in touch</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        Let&apos;s build something <span className="text-indigo-400">exceptional</span> together.
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                        Whether you&apos;re planning a new product, need help improving an existing
                        application, or just want to say hi, my inbox is always open.
                    </p>

                    <div className="space-y-3 text-sm text-slate-300">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gradient-to-r from-slate-500/10 to-slate-400" />
                            <span className="uppercase tracking-[0.2em] text-xs text-slate-400">
                                Preferred channel
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            
                            <a
                                href="mailto:youremail@example.com"
                                className="flex gap-2 text-indigo-300 hover:text-indigo-200 text-sm font-medium underline underline-offset-4 decoration-indigo-500/60"
                            ><FaEnvelope className="h-4 w-4 text-indigo-300" />
                                loelcampana14@gmail.com
                            </a>
                            <a
                                href="tel:your-phone-number"
                                className="flex items-center gap-3 text-slate-300 hover:text-indigo-200 transition-colors"
                            >
                                <FaPhoneAlt className="h-4 w-4 text-indigo-300" />
                                <span>(+63) 960 559 7803</span>
                            </a>
                            <span className="text-xs text-slate-500">
                                I usually respond within 12-24 hours.
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3 text-sm text-slate-300">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Other channels</p>
                        <div className="space-y-2">
                            
                            <a
                                href="https://github.com/Naksu14"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-slate-300 hover:text-indigo-200 transition-colors"
                            >
                                <FaGithub className="h-4 w-4 text-indigo-300" />
                                <span>@Naksu14</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/loel-campaña-4282b5334"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-slate-300 hover:text-indigo-200 transition-colors"
                            >
                                <FaLinkedinIn className="h-4 w-4 text-indigo-300" />
                                <span>/in/loel-campaña-4282b5334</span>
                            </a>
                            <a
                                href="https://www.instagram.com/kairos.clm/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-slate-300 hover:text-indigo-200 transition-colors"
                            >
                                <FaInstagram className="h-4 w-4 text-indigo-300" />
                                <span>@kairos.clm</span>
                            </a>
                        </div>
                        <div className="flex gap-4 pt-4 text-xs text-slate-400 uppercase tracking-[0.2em]">
                            <span>Open to remote</span>
                            <span className="opacity-40">•</span>
                            <span>Freelance &amp; full‑time</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-full max-w-md">
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/40 via-purple-500/20 to-cyan-400/30 opacity-50 blur-xl" />
                    <form
                        className="relative rounded-2xl border border-slate-700/70 bg-[rgba(10,10,24,0.95)]/20 px-6 py-7 shadow-[0_24px_80px_rgba(15,23,42,0.9)] space-y-5"
                    >
                        <div className="flex items-center justify-between gap-4 pb-2">
                            <p className="text-xs tracking-[0.25em] uppercase text-slate-400">Contact form</p>
                            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[0.65rem] font-medium text-emerald-300 uppercase tracking-[0.18em]">
                                Always on
                            </span>
                        </div>

                        <div className="space-y-1 text-left">
                            <label className="text-xs font-medium tracking-wide text-slate-300" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="What should I call you?"
                                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40 transition"
                            />
                        </div>

                        <div className="space-y-1 text-left">
                            <label className="text-xs font-medium tracking-wide text-slate-300" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40 transition"
                            />
                        </div>

                        <div className="space-y-1 text-left">
                            <label className="text-xs font-medium tracking-wide text-slate-300" htmlFor="message">
                                Project details
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Tell me a bit about what you&apos;re building..."
                                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40 transition"
                            />
                        </div>

                        <button
                            type="button"
                            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(99,102,241,0.45)] transition hover:shadow-[0_24px_60px_rgba(129,140,248,0.7)] hover:translate-y-[-1px] active:translate-y-[0px]"
                        >
                            Send message
                        </button>
                        <p className="text-[0.65rem] text-slate-500 text-left pt-1">
                            This form is for demo purposes — feel free to reach me directly via email for real projects.
                        </p>
                    </form>
                </div>

        </section>
    )
}