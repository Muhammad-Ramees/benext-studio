'use client'
import { useState } from 'react'
import Link from 'next/link'

// Chatbot-style / Wizard conversational UI for contact mapped onto premium styling
export default function ConversationalContact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ need: '', budget: '', name: '', contact: '', details: '' });
  const [status, setStatus] = useState('idle');

  const update = (key, val) => {
    setForm(prev => ({ ...prev, [key]: val }));
    setTimeout(() => {
      if (step < 4) setStep(step + 1);
    }, 400); // slight delay for feel
  };

  const submit = async () => {
    setStatus('loading');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.contact.includes('@') ? form.contact : '',
          phone: !form.contact.includes('@') ? form.contact : '',
          message: form.details,
          budget: form.budget,
          service: form.need,
          enquiryType: 'conversational'
        }),
      })
      setStatus('success');
      setStep(5);
    } catch {
      setStatus('error');
    }
  }

  const goBack = () => setStep(Math.max(0, step - 1));

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center">
      {/* Dynamic Background */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center glass border-b border-[rgba(255,255,255,0.05)]">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/letter_logo.svg" alt="BN Logo" className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(30,107,255,0.4)] group-hover:scale-105 transition-transform duration-500" />
          <span className="font-syne font-bold text-2xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
            BeNext<span className="text-blue-500">.</span>
          </span>
        </Link>
        <Link href="/" className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors glass px-5 py-2 rounded-full border border-[rgba(255,255,255,0.05)]">
          ✕ Close
        </Link>
      </header>

      <div className="flex-1 flex flex-col justify-center w-full max-w-2xl px-6 pt-32 pb-20 z-10">

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[rgba(255,255,255,0.05)] rounded-full mb-16 overflow-hidden">
          <div className="h-full bg-blue-500 glow transition-all duration-700 ease-out" style={{ width: `${(step / 4) * 100}%` }} />
        </div>

        {/* Form Container */}
        <div className="w-full reveal visible max-w-xl mx-auto">
          {step > 0 && step < 5 && (
            <button onClick={goBack} className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-8 hover:text-blue-400 transition-colors flex items-center gap-2">
              ← Go Back
            </button>
          )}

          {step === 0 && (
            <div className="space-y-8">
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Hi! What brings you to <span className="text-blue-500 text-glow">BeNext</span> today?
              </h1>
              <p className="text-gray-400 text-lg font-medium">Select the option that best describes your needs.</p>
              <div className="grid gap-4">
                {[
                  { id: 'PlaySa', label: 'Sports Facility OS (PlaySa)', desc: 'Booking platform for turfs & courts' },
                  { id: 'Academy OS', label: 'Academy Operations', desc: 'Manage students, coaches & billing' },
                  { id: 'Custom Software', label: 'Custom Software', desc: 'A bespoke SaaS product or internal tool' },
                  { id: 'High-end Website', label: 'High-End Website', desc: 'Professional custom website & SEO' },
                  { id: 'Other', label: 'Something Else', desc: "I'm not exactly sure / general inquiry" }
                ].map((item, i) => (
                  <button key={item.id} onClick={() => update('need', item.id)}
                    className="w-full text-left p-6 rounded-2xl glass border border-[rgba(255,255,255,0.05)] hover:border-blue-500/50 hover:bg-[rgba(30,107,255,0.05)] hover:shadow-[0_0_20px_rgba(30,107,255,0.15)] transition-all transform hover:-translate-y-1 active:scale-[0.98]">
                    <div className="font-syne font-bold text-xl text-white mb-2">{item.label}</div>
                    <div className="text-sm font-medium text-gray-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8 animate-[fadeSlide_0.5s_ease_forwards]">
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-tight">Great. What's your estimated budget?</h1>
              <p className="text-gray-400 text-lg font-medium">This helps us propose the most realistic solution for you.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Under 5k AED', '5k - 15k AED', '15k - 50k AED', '50k+ AED', 'Not sure yet'].map(b => (
                  <button key={b} onClick={() => update('budget', b)}
                    className="p-5 rounded-2xl glass border border-[rgba(255,255,255,0.05)] font-syne font-bold text-white hover:border-blue-500/50 hover:bg-[rgba(30,107,255,0.05)] hover:shadow-[0_0_20px_rgba(30,107,255,0.15)] transition-all active:scale-[0.98] text-center text-lg">
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-[fadeSlide_0.5s_ease_forwards]">
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-tight">Tell us about your project.</h1>
              <p className="text-gray-400 text-lg font-medium">Don't worry about being perfectly structured. Just brain-dump your ideas!</p>

              <textarea
                rows={6}
                placeholder="We run a business and need to automate..."
                className="w-full bg-[rgba(10,15,25,0.6)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 text-white outline-none focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_20px_rgba(30,107,255,0.1)] text-[15px] font-medium resize-none transition-all"
                value={form.details}
                onChange={e => setForm(prev => ({ ...prev, details: e.target.value }))}
              />
              <button
                onClick={() => setStep(3)}
                disabled={form.details.trim().length < 5}
                className="btn-premium w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                Continue →
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-[fadeSlide_0.5s_ease_forwards]">
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-tight">Almost done! How can we reach you?</h1>
              <p className="text-gray-400 text-lg font-medium">We will get back to you with a concrete plan within 24 hours.</p>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Your Name</label>
                  <input
                    type="text" required
                    className="w-full bg-[rgba(10,15,25,0.6)] border border-[rgba(255,255,255,0.1)] rounded-2xl px-6 py-5 text-white outline-none focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_20px_rgba(30,107,255,0.1)] text-[15px] font-medium transition-all"
                    value={form.name}
                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Email or WhatsApp</label>
                  <input
                    type="text" required
                    placeholder="hello@company.com"
                    className="w-full bg-[rgba(10,15,25,0.6)] border border-[rgba(255,255,255,0.1)] rounded-2xl px-6 py-5 text-white outline-none focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_20px_rgba(30,107,255,0.1)] text-[15px] font-medium transition-all"
                    value={form.contact}
                    onChange={e => setForm(prev => ({ ...prev, contact: e.target.value }))}
                  />
                </div>
              </div>

              {status === 'error' && <p className="text-red-500 text-sm font-bold glow">Something went wrong. Please refresh.</p>}

              <button
                onClick={submit}
                disabled={!form.name || !form.contact || status === 'loading'}
                className="btn-premium w-full mt-4 justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Sending...' : 'Send Request 🚀'}
              </button>
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-8 animate-[fadeSlide_0.5s_ease_forwards]">
              <div className="w-24 h-24 bg-blue-500 border border-blue-400 rounded-[2rem] flex items-center justify-center mx-auto text-5xl mb-8 rotate-12 shadow-[0_0_40px_rgba(30,107,255,0.4)]">
                📦
              </div>
              <h1 className="font-syne font-extrabold text-5xl md:text-6xl text-white tracking-tight">We got it.</h1>
              <p className="text-gray-400 text-lg font-medium max-w-md mx-auto leading-relaxed">
                Thanks, <span className="text-white">{form.name.split(' ')[0]}</span>! Our engineering team will review your requirements for <strong className="text-blue-400 glow">{form.need}</strong> and get back to you at {form.contact} within hours.
              </p>
              <div className="pt-10">
                <Link href="/" className="btn-outline glass px-10 py-5 hover:text-white">
                  Return to Digital Studio
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
