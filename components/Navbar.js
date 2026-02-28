'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Services', 'Products', 'Why Us', 'Process', 'Blog', 'Contact']

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-[rgba(255,255,255,0.05)] shadow-lg shadow-[rgba(0,0,0,0.2)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/letter_logo.svg" alt="BN Logo" className="w-10 h-10 rounded-xl shadow-[0_0_20px_rgba(30,107,255,0.4)] group-hover:scale-105 transition-transform duration-500" />
          <span className="font-syne font-bold text-2xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
            BeNext Studio<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full border border-[rgba(255,255,255,0.05)]">
          {links.map(l => (
            <Link key={l} href={l === 'Contact' ? '/contact' : (l === 'Blog' ? '/blog' : `/#${l.toLowerCase().replace(' ', '-')}`)}
              className="text-gray-400 hover:text-white text-[13px] font-semibold tracking-wide transition-colors">
              {l}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://wa.me/+971542711288" target="_blank" rel="noreferrer"
            className="text-white bg-white/5 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(30,107,255,0.4)] border border-white/10 hover:border-transparent px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300">
            WhatsApp Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2 glass rounded-lg" onClick={() => setOpen(!open)}>
          <span className={`w-full h-[2px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`w-full h-[2px] bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-full h-[2px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-[96px] left-0 w-full glass border-b border-[rgba(255,255,255,0.05)] overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {links.map(l => (
                <Link key={l} href={l === 'Contact' ? '/contact' : (l === 'Blog' ? '/blog' : `/#${l.toLowerCase().replace(' ', '-')}`)}
                  onClick={() => setOpen(false)}
                  className="text-white text-xl font-syne font-bold hover:text-blue-500 transition-colors">
                  {l}
                </Link>
              ))}
              <a href="https://wa.me/+971542711288" className="btn-premium mt-4 w-full justify-center">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
