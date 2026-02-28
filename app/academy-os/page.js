'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const benefits = [
    { icon: '🧑‍🎓', title: 'Student Management', desc: 'Secure centralized database for player profiles, medical history, & emergency info.' },
    { icon: '📝', title: 'Attendance Tracking', desc: 'Coaches mark attendance in 5 seconds. Automated WhatsApp absent alerts to parents.' },
    { icon: '💳', title: 'Billing & Invoicing', desc: 'Automate weekly/monthly fee collection. Track partial payments and handle VAT cleanly.' },
    { icon: '🏆', title: 'Coach App', desc: 'Give coaches specialized access to view schedules, manage specific batches, & log metrics.' },
    { icon: '📊', title: 'Financial Analytics', desc: 'Real-time dashboard showing collected fees, pending payments, and academy profitability.' },
    { icon: '📅', title: 'Batch Scheduling', desc: 'Organize by age and sport. Manage complex recurring schedules without visual conflicts.' }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0, opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
}

export default function AcademyOSPage() {

    const [formOpen, setFormOpen] = useState(false)
    const [sent, setSent] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

    const submit = async (e) => {
        e.preventDefault()
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, service: 'academy-os', message: `Academy OS Demo Request:\n\n${form.message}`, enquiryType: 'academy-os' }),
            })
            setSent(true)
        } catch { setSent(true) }
    }


    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#030509]">
            <div className="absolute top-0 right-0 sm:right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[150px] -z-10 pointer-events-none" />

            <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgba(255,255,255,0.05)]">
                <div className="max-w-7xl mx-auto flex items-center justify-between h-20 sm:h-24 px-4 sm:px-6">
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                        <img src="/letter_logo.svg" alt="BN Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl shadow-[0_0_20px_rgba(30,107,255,0.4)] group-hover:scale-105 transition-transform duration-500" />
                        <span className="font-syne font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
                            BeNext<span className="text-blue-500">.</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-4 sm:gap-6 glass px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[rgba(255,255,255,0.05)]">
                        <Link href="/" className="text-gray-400 hover:text-white text-[11px] sm:text-[13px] font-semibold tracking-wide transition-colors hidden md:block">← Back to Digital Studio</Link>
                        <button onClick={() => setFormOpen(true)} className="text-white hover:text-blue-400 font-bold text-[11px] sm:text-[13px] tracking-wide transition-colors whitespace-nowrap">
                            Request Access →
                        </button>
                    </div>
                </div>
            </header>

            <section className="relative pt-32 sm:pt-48 pb-20 sm:pb-32 text-center px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto w-full"
                >
                    <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass border border-blue-500/20 shadow-[0_0_20px_rgba(30,107,255,0.1)]">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full glow animate-pulse shrink-0" />
                        <span className="text-blue-400 text-[9px] sm:text-[10px] font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase truncate">Academy Operations System</span>
                    </div>
                    <h1 className="font-syne font-extrabold text-[clamp(28px,7vw,84px)] leading-[1.05] sm:leading-[0.95] tracking-tight text-white mb-6 sm:mb-8 break-words px-2">
                        RUN YOUR ENTIRE SPORTS ACADEMY WITHOUT<br className="hidden lg:block" />
                        <span className="text-gradient-blue text-glow sm:block sm:mt-2">WHATSAPP CHAOS.</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-xl font-medium leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-2 text-balance">
                        Join top football, swimming, and multi-sport academies using Academy OS to streamline admissions, automate fee collection, and track real-time attendance perfectly.
                    </p>
                    <button onClick={() => setFormOpen(true)} className="btn-premium px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-lg shadow-[0_0_30px_rgba(30,107,255,0.3)] w-full sm:w-auto">
                        Get Started Today →
                    </button>
                </motion.div>
            </section>

            <section className="py-20 sm:py-32 bg-[rgba(10,15,25,0.3)] border-t border-[rgba(255,255,255,0.05)] relative overflow-hidden w-full">
                <div className="absolute top-1/2 left-0 sm:left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full">

                    <div className="mb-12 sm:mb-20">
                        <h2 className="font-syne font-extrabold text-[clamp(28px,6vw,56px)] leading-[1.05] sm:leading-[0.95] tracking-tight text-white mb-4 sm:mb-6 break-words">
                            A Custom Dashboard<br className="hidden sm:block" /> For Every Role.
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg font-medium max-w-2xl mx-auto px-2">
                            Stop forcing your coaches and admin staff to use the same messy spreadsheets. Academy OS provides distinct, streamlined portal access for Admin, Coaches, and Parents.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 text-left w-full"
                    >
                        {benefits.map((b) => (
                            <motion.div key={b.title} variants={itemVariants} className="card-premium p-6 sm:p-10 group hover:border-blue-500/30 w-full flex flex-col justify-between">
                                <div>
                                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">{b.icon}</div>
                                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mb-3 sm:mb-4 tracking-tight group-hover:text-blue-400 transition-colors break-words">{b.title}</h3>
                                    <p className="text-gray-400 text-sm sm:text-[14px] font-medium leading-relaxed">{b.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            <section className="py-20 sm:py-32 relative overflow-hidden w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 rounded-[100%] blur-[80px] sm:blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">
                    <h2 className="font-syne font-extrabold text-[clamp(28px,6vw,60px)] leading-[1.05] sm:leading-[0.95] tracking-tight text-white mb-6 sm:mb-8 break-words text-balance">
                        YOUR ACADEMY DESERVES BETTER.<br className="hidden sm:block" />
                        <span className="text-gradient-blue text-glow sm:block sm:mt-2">UPGRADE FROM SPREADSHEETS.</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-medium max-w-2xl mx-auto mb-8 sm:mb-12 px-2 text-balance">
                        Secure your financial data, professionalize your parent communications, and free up hundreds of hours of administrative time every single month.
                    </p>
                    <button onClick={() => setFormOpen(true)} className="btn-premium px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-lg w-full sm:w-auto text-balance justify-center">
                        Request Implementation Access →
                    </button>
                </div>
            </section>

            <AnimatePresence>
                {formOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                            className="bg-gray-900 border border-[rgba(255,255,255,0.1)] rounded-2xl w-full max-w-lg relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[95vh]"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-blue" />
                            <button onClick={() => setFormOpen(false)} className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-400 hover:text-white transition-colors text-xl w-8 h-8 flex items-center justify-center rounded-full z-10 bg-black/50 hover:bg-white/10">×</button>

                            <div className="p-6 sm:p-8 pt-10 sm:pt-8 w-full">
                                {sent ? (
                                    <div className="text-center py-10">
                                        <div className="text-5xl sm:text-6xl mb-6 glow">✅</div>
                                        <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-2 tracking-tight">Access Request Sent!</h3>
                                        <p className="text-gray-400 text-sm sm:text-base font-medium">We'll review your details and contact you via WhatsApp shortly to setup your academy.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-white mb-2 tracking-tight">Request Academy OS</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">Provide a few quick details about your setup so we can prep a customized demo for you.</p>
                                        <form onSubmit={submit} className="flex flex-col gap-4 sm:gap-5">
                                            <input required placeholder="Your Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all" />
                                            <input required type="email" placeholder="Work Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all" />
                                            <input required placeholder="WhatsApp Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all" />
                                            <textarea rows={3} placeholder="How many players and branches?"
                                                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all resize-none mt-1 sm:mt-2" />
                                            <button type="submit" className="btn-premium w-full mt-2 font-syne text-base sm:text-lg py-4 sm:py-5">
                                                Submit Request →
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
