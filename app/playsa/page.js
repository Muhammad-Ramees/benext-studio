'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  { id: 'cal', icon: '📅', title: '3-View Booking Calendar', desc: 'Choose between Full Calendar, Timeline, or Slot View. Prevent double bookings automatically across all courts and time slots with our smart conflict-free system.' },
  { id: 'fin', icon: '💰', title: 'Income & Expense Accounts', desc: 'Complete financial control. Track revenue (daily, weekly, monthly), log expenses with built-in bills, calculate VAT automatically, and manage staff payroll.' },
  { id: 'vat', icon: '💸', title: 'VAT & Revenue Recovery', desc: 'Never miss a payment again. Get instant unpaid slot detection, track pending payments, and recover 10-25% of leaked revenue instantly.' },
  { id: 'inv', icon: '📦', title: 'Inventory & Stock Alerts', desc: 'Track sales of water, sports drinks, and equipment. Get low stock alerts and manage your inventory with real-time checkout tracking.' },
  { id: 'web', icon: '🌐', title: 'Your Public Booking Website', desc: 'Get a beautiful, SEO-optimized public website out-of-the-box for customers to book their courts online, view availability, and manage their reservations.' },
  { id: 'mul', icon: '🏢', title: 'Multi-Branch Support', desc: 'Own multiple locations? Switch branches instantly, compare performance side-by-side, and control global settings centrally.' },
  { id: 'rep', icon: '📊', title: 'Advanced Reports', desc: 'Generate high-level business intelligence. View top performers, customer history, income vs expense breakdowns, and custom date range financial reporting.' },
  { id: 'spt', icon: '🏆', title: 'All Sports Facilities', desc: 'Fully adaptable to Football, Padel, Cricket, Badminton, Basketball, Tennis, Volleyball, and multi-sport complexes. Customize courts to your exact needs.' }
]

function DashboardMockup() {
  const [tick, setTick] = useState(0)
  useEffect(() => { const t = setInterval(() => setTick(n => n + 1), 3000); return () => clearInterval(t) }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="card-premium border-blue-500/20 shadow-[0_0_50px_rgba(30,107,255,0.15)] text-left select-none overflow-hidden hover:border-blue-500/50 w-full"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(10,15,25,0.8)] backdrop-blur-xl gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full glow animate-pulse shrink-0" />
          <span className="text-white font-syne font-bold tracking-tight text-sm sm:text-[15px] truncate">PlaySa OS Dashboard</span>
        </div>
        <span className="text-gray-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Multi-Branch: Hub</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.05)]">
        {[
          { label: 'Daily Income', val: '4,800 AED', sub: 'Today', color: 'text-blue-400' },
          { label: 'Weekly Income', val: '28,400 AED', sub: 'This Week', color: 'text-white' },
          { label: 'Monthly Income', val: '112,000 AED', sub: 'This Month', color: 'text-white' },
          { label: 'Pending / VAT', val: '✓ Cleared', sub: 'Tax Ready', color: 'text-blue-500' },
        ].map(({ label, val, sub, color }) => (
          <div key={label} className="px-4 py-4 sm:px-5 sm:py-5 bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(30,107,255,0.05)] transition-colors">
            <p className="text-gray-500 text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] uppercase font-bold mb-1 sm:mb-2 truncate">{label}</p>
            <p className={`font-syne font-extrabold text-lg sm:text-xl truncate ${color}`}>{val}</p>
            <p className="text-gray-400 text-[10px] sm:text-xs mt-1 font-semibold truncate">{sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.05)] bg-[rgba(10,15,25,0.4)]">
        <div className="px-4 sm:px-6 py-5">
          <div className="flex justify-between items-center mb-5">
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">Live Timeline</p>
            <span className="text-[8px] sm:text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shrink-0">Slot View</span>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            {[
              { type: 'Recent', name: 'Al Nasr Team', sport: 'Football', time: '08:00', status: 'paid' },
              { type: 'Now', name: 'Walk-in Match', sport: 'Padel', time: '09:00', status: 'pending' },
              { type: 'Upcoming', name: 'Cricket Nets', sport: 'Cricket', time: '10:00', status: 'paid' },
            ].map((b, i) => (
              <motion.div
                key={i}
                animate={{ scale: b.status === 'pending' && tick % 2 === 0 ? 1.02 : 1 }}
                className={`flex items-center justify-between border p-2.5 sm:p-3 rounded-xl transition-all ${b.status === 'pending' && tick % 2 === 0 ? 'border-amber-500/30 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-[rgba(255,255,255,0.05)] bg-white/5'}`}
              >
                <div className="min-w-0 pr-2">
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                    <span className="text-[8px] sm:text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">{b.type}</span>
                    <p className="text-white text-xs sm:text-[13px] font-bold truncate">{b.name}</p>
                  </div>
                  <p className="text-gray-500 text-[10px] sm:text-[11px] font-semibold truncate">{b.sport} · {b.time}</p>
                </div>
                <span className={`text-[8px] sm:text-[9px] font-extrabold tracking-widest uppercase px-2 py-1 sm:px-2.5 rounded border shrink-0 ${b.status === 'paid' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' :
                  'border-amber-400/40 text-amber-400 bg-amber-400/10'
                  }`}>
                  {b.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="px-4 sm:px-6 py-5">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mb-5">Insights & Alerts</p>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-2">Top Performer</p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs sm:text-[14px] font-bold text-white truncate">Ahmed K.</p>
                <p className="text-[10px] sm:text-xs font-semibold text-blue-400 glow whitespace-nowrap">14 Bookings</p>
              </div>
            </div>

            <motion.div
              animate={{
                borderColor: tick % 2 === 0 ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.05)',
                backgroundColor: tick % 2 === 0 ? 'rgba(239,68,68,0.1)' : 'rgba(255,255,255,0.05)',
                boxShadow: tick % 2 === 0 ? '0 0 20px rgba(239,68,68,0.15)' : 'none'
              }}
              className="p-3 sm:p-4 rounded-xl border"
            >
              <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold flex items-center gap-2 mb-2">
                <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${tick % 2 === 0 ? 'bg-red-500 glow' : 'bg-gray-500'}`} />
                Stock Alert
              </p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs sm:text-[14px] font-bold text-white truncate">Padel Balls Set</p>
                <p className={`text-[10px] sm:text-xs font-bold whitespace-nowrap ${tick % 2 === 0 ? 'text-red-400' : 'text-gray-400'}`}>Only 2 left!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PlaySaPage() {
  const [formOpen, setFormOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: 'playsa', message: `PlaySa Demo Request:\n\n${form.message}`, enquiryType: 'playsa' }),
      })
      setSent(true)
    } catch { setSent(true) }
  }

  const [activeFeature, setActiveFeature] = useState(features[0].id)

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#030509]">
      <div className="absolute top-[-10%] sm:top-[-20%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[150px] -z-10 pointer-events-none" />

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
              Book Demo →
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl w-full"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass border border-blue-500/20 shadow-[0_0_20px_rgba(30,107,255,0.1)]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full glow animate-pulse flex-shrink-0" />
                <span className="text-blue-400 text-[9px] sm:text-[10px] font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase truncate">PlaySa Operating System</span>
              </div>
              <h1 className="font-syne font-extrabold text-[clamp(32px,8vw,72px)] leading-[1.05] sm:leading-[0.95] tracking-tight text-white mb-4 sm:mb-6 break-words">
                THE ULTIMATE OS FOR <br className="hidden sm:block" />
                <span className="text-gradient-blue text-glow">SPORTS FACILITIES.</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10 max-w-md">
                PlaySa replaces messy spreadsheets and lost revenue with a single, powerful platform. Turn your sports facility into an automated profit machine.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-5 w-full">
                <button onClick={() => setFormOpen(true)} className="btn-premium px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base shadow-[0_0_30px_rgba(30,107,255,0.5)] w-full sm:w-auto">
                  Book a Free Demo →
                </button>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-4 text-gray-500 text-[9px] sm:text-[11px] font-bold tracking-widest uppercase items-center justify-center sm:justify-start">
                <span>⚽ Football</span>
                <span>🎾 Padel</span>
                <span>🏏 Cricket</span>
                <span>🏀 Basketball</span>
              </div>
            </motion.div>

            <div className="relative z-10 mix-blend-lighten w-full mt-4 sm:mt-0">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Section */}
      <section className="py-16 sm:py-24 border-y border-[rgba(255,255,255,0.05)] bg-[rgba(10,15,25,0.3)] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <h2 className="font-syne font-extrabold text-[clamp(28px,6vw,48px)] text-white tracking-tight mb-4 break-words">Everything You Need.</h2>
            <p className="text-gray-400 text-base sm:text-lg font-medium px-2">Standard booking platforms don't understand the real complexities of running a sports facility in the UAE. We do.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 w-full">
            <div className="lg:w-1/3 flex overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0 snap-x hide-scrollbar">
              {features.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(f.id)}
                  className={`snap-start shrink-0 w-[85vw] lg:w-full text-left p-4 sm:p-5 rounded-xl border transition-all ${activeFeature === f.id ? 'glass border-blue-500 bg-[rgba(30,107,255,0.1)] shadow-[0_0_20px_rgba(30,107,255,0.1)]' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                >
                  <div className="font-syne font-bold text-base sm:text-lg mb-1 truncate">{f.icon} {f.title}</div>
                  {activeFeature !== f.id && <div className="text-xs font-semibold opacity-70 line-clamp-2">{f.desc}</div>}
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card-premium h-full min-h-[300px] sm:min-h-[400px] p-6 sm:p-12 flex flex-col justify-center border-blue-500/20 shadow-xl"
                >
                  {features.filter(f => f.id === activeFeature).map(f => (
                    <div key={f.id}>
                      <div className="text-4xl sm:text-6xl mb-4 sm:mb-8">{f.icon}</div>
                      <h3 className="font-syne font-extrabold text-2xl sm:text-4xl text-white mb-4 sm:mb-6 tracking-tight text-glow break-words leading-tight">{f.title}</h3>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{f.desc}</p>
                      <button onClick={() => setFormOpen(true)} className="btn-outline mt-6 sm:mt-10 hover:bg-blue-600 hover:text-white hover:border-blue-600 w-full sm:w-auto justify-center text-sm sm:text-base">
                        Ask about this feature →
                      </button>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 rounded-[100%] blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">
          <h2 className="font-syne font-extrabold text-[clamp(28px,7vw,60px)] leading-[1.05] sm:leading-[0.95] tracking-tight text-white mb-6 sm:mb-8 break-words">
            YOUR CUSTOMERS WANT TO BOOK FAST.<br className="hidden sm:block" />
            <span className="text-gradient-blue text-glow sm:block mt-2">WE GIVE YOU THE WEBSITE FOR IT.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-medium max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            Every facility gets a highly SEO-optimized public-facing website out of the box where athletes can view real-time availability and pay instantly online.
          </p>
          <button onClick={() => setFormOpen(true)} className="btn-premium px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-lg w-full sm:w-auto">
            See How The Website Works →
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
              className="bg-gray-900 border border-[rgba(255,255,255,0.1)] rounded-2xl w-full max-w-lg relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[95vh] hide-scrollbar"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-blue" />
              <button onClick={() => setFormOpen(false)} className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-400 hover:text-white transition-colors text-xl w-8 h-8 flex items-center justify-center rounded-full z-10 bg-black/50 hover:bg-white/10">×</button>

              <div className="p-6 sm:p-8 pt-10 sm:pt-8 w-full">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="text-5xl sm:text-6xl mb-6 glow">✅</div>
                    <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-2 tracking-tight">Demo Request Sent!</h3>
                    <p className="text-gray-400 text-sm sm:text-base font-medium">We'll confirm your slot via WhatsApp within 2 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-white mb-2 tracking-tight">Book Your PlaySa Demo</h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">A quick 15-minute walkthrough of the software. We'll show you exactly how to optimize your sports facility.</p>
                    <form onSubmit={submit} className="flex flex-col gap-4 sm:gap-5">
                      <input required placeholder="Your Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all" />
                      <input required type="email" placeholder="Work Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all" />
                      <input required placeholder="WhatsApp Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all" />
                      <textarea rows={3} placeholder="Tell us about your facility (sports/branches)"
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-4 sm:px-5 py-3.5 sm:py-4 text-white text-[13px] sm:text-[15px] font-medium rounded-xl transition-all resize-none mt-1 sm:mt-2" />
                      <button type="submit" className="btn-premium w-full mt-2 font-syne text-base sm:text-lg py-4 sm:py-5">
                        Confirm Demo Request →
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  )
}
