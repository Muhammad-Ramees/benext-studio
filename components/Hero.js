'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setReady(true), 150); return () => clearTimeout(t) }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden pt-20">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,107,255,0.12) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(77,166,255,0.08) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        {/* Corner bracket — top left */}
        <div className="absolute top-32 left-10 w-24 h-24 border-l border-t border-[rgba(30,107,255,0.3)] opacity-50 transition-all duration-1000" />
        {/* Corner bracket — bottom right */}
        <div className="absolute bottom-32 right-10 w-24 h-24 border-r border-b border-[rgba(30,107,255,0.3)] opacity-50 transition-all duration-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 w-full z-10">
        {/* Location badge */}
        <div className={`inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full glass border border-[rgba(255,255,255,0.05)] transition-all duration-700 ${ready ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
          </div>
          <span className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Dubai, UAE — Digital Studio
          </span>
        </div>

        {/* Main headline */}
        <div className="overflow-hidden mb-8">
          <h1
            className={`transition-all duration-1000 delay-100 font-syne font-extrabold break-words ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              fontSize: 'clamp(36px, 10vw, 110px)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}
          >
            WE BUILD <br />
            <span className="text-gradient-blue text-glow">SOFTWARE</span> <br />
            THAT MAKES <br />
            <span className="text-gray-600" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>MONEY.</span>
          </h1>
        </div>

        {/* Sub + CTA row */}
        <div className={`mt-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 transition-all duration-1000 delay-300 ${ready ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-xl">
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 tracking-wide text-gradient">
              SaaS products, business websites, and AI visibility systems — beautifully designed, technically superior, built for UAE businesses that demand results.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="btn-premium">
                Start a Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#products" className="btn-outline glass hover:text-white">
                See Our Products
              </a>
            </div>
          </div>

          {/* Stats cluster */}
          <div className="flex flex-wrap gap-8 sm:gap-12 w-full sm:w-auto shrink-0 glass p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] justify-center sm:justify-start">
            {[
              { n: '3', label: 'SaaS Products' },
              { n: '48h', label: 'First Delivery' },
              { n: '#1', label: 'Google Rankings' },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <span className="font-syne font-bold text-4xl leading-none text-blue-500 glow">
                  {n}
                </span>
                <span className="text-gray-500 text-[10px] tracking-[0.2em] font-semibold uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Diagonal bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }} />
    </section>
  )
}
