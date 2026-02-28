'use client'
import { useState, useEffect } from 'react'

const options = [
  { value: 'website', emoji: '🌐', label: 'Business Website' },
  { value: 'saas', emoji: '🚀', label: 'Software / SaaS' },
  { value: 'seo', emoji: '🔍', label: 'SEO / AI Visibility' },
  { value: 'playsa', emoji: '⚽', label: 'PlaySa (Sports OS)' },
]

export default function EnquiryPopup({ trigger = 'exit', delayMs = 30000 }) {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [triggeredThisSession, setTriggered] = useState(false)

  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const popped = sessionStorage.getItem('benext_popup')
    if (popped) { setTriggered(true); return }

    if (trigger === 'delay') {
      const t = setTimeout(() => {
        setOpen(true); sessionStorage.setItem('benext_popup', '1')
      }, delayMs)
      return () => clearTimeout(t)
    }

    if (trigger === 'exit') {
      const handleMouseLeave = (e) => {
        if (e.clientY <= 0 && !triggeredThisSession) {
          setOpen(true);
          setTriggered(true);
          sessionStorage.setItem('benext_popup', '1')
          document.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
      document.addEventListener('mouseleave', handleMouseLeave)
      return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [trigger, delayMs, triggeredThisSession])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, enquiryType: 'popup' })
      })
      setStatus('success')
      setTimeout(() => setOpen(false), 3000)
    } catch { setStatus('error') }
  }

  // Floating trigger button
  if (!open) {
    return (
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 reveal visible">
        {!minimized && (
          <div className="bg-[#030509] text-white border border-blue-500/30 shadow-[0_10px_30px_rgba(30,107,255,0.2)] px-5 py-3 rounded-2xl flex items-center justify-between gap-4 animate-bounce">
            <div>
              <p className="text-[13px] font-bold tracking-tight">Need a system built?</p>
              <p className="text-[11px] font-medium text-gray-400">We reply in 2 hours.</p>
            </div>
            <button onClick={() => setMinimized(true)} className="text-gray-500 hover:text-white text-lg">×</button>
          </div>
        )}
        <button onClick={() => setOpen(true)}
          className="w-16 h-16 bg-blue-600 rounded-full shadow-[0_0_30px_rgba(30,107,255,0.4)] flex items-center justify-center hover:scale-110 hover:bg-blue-500 transition-all border border-blue-400/50 glow">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    )
  }

  // the Popup UI matches glassmorphism perfectly
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="bg-gray-900 border border-[rgba(255,255,255,0.1)] rounded-2xl w-full max-w-lg relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-blue" />

        <button onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">×</button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-6 glow">✅</div>
              <h3 className="font-syne font-extrabold text-3xl text-white mb-2 tracking-tight">Enquiry Sent!</h3>
              <p className="text-gray-400 text-base font-medium">We'll review your details and message you on WhatsApp within 2 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="font-syne font-extrabold text-2xl text-white mb-2 tracking-tight">Let's Build Something Great.</h3>
              <p className="text-gray-400 text-sm font-medium mb-8">Skip the endless discovery calls. Tell us what you need, and we'll reply with a price and a plan.</p>

              <form onSubmit={submit} className="flex flex-col gap-5">
                <input required placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-5 py-4 text-white text-[15px] font-medium rounded-xl transition-all" />

                <input required placeholder="WhatsApp Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-5 py-4 text-white text-[15px] font-medium rounded-xl transition-all" />

                <div className="grid grid-cols-2 gap-3">
                  {options.map(o => (
                    <button key={o.value} type="button" onClick={() => setForm({ ...form, service: o.value })}
                      className={`text-left p-3 rounded-xl border text-[13px] font-medium transition-all ${form.service === o.value
                          ? 'border-blue-500 text-white bg-[rgba(30,107,255,0.1)] shadow-[0_0_15px_rgba(30,107,255,0.2)]'
                          : 'border-white/10 text-gray-400 bg-black/20 hover:border-blue-500/50 hover:text-gray-300'
                        }`}>
                      <span className="opacity-90">{o.emoji}</span> <span className="ml-1">{o.label}</span>
                    </button>
                  ))}
                </div>

                <textarea rows={3} placeholder="Briefly describe what you're trying to build or solve..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 focus:border-blue-500 focus:bg-[rgba(30,107,255,0.05)] focus:shadow-[0_0_15px_rgba(30,107,255,0.2)] outline-none px-5 py-4 text-white text-[15px] font-medium rounded-xl transition-all resize-none mt-2" />

                <button type="submit" disabled={status === 'loading'}
                  className="btn-premium w-full mt-2 font-syne text-lg py-5">
                  {status === 'loading' ? 'Sending...' : 'Get Your Quote →'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
