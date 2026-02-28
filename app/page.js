// Updated app/page.js — replace your current one with this
// Added: EnquiryPopup + TrustBar

'use client'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Services from '../components/Services'
import TrustBar from '../components/TrustBar'        // ← NEW
import Products from '../components/Products'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'
import EnquiryPopup from '../components/EnquiryPopup' // ← NEW

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    const cursor = document.getElementById('cursor')
    const move = (e) => {
      if (cursor) { cursor.style.left = e.clientX - 4 + 'px'; cursor.style.top = e.clientY - 4 + 'px' }
    }
    window.addEventListener('mousemove', move)
    return () => { observer.disconnect(); window.removeEventListener('mousemove', move) }
  }, [])

  return (
    <>
      <div id="cursor" />
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <TrustBar />        {/* ← Proof: Touchline, client types, rankings */}
      <Products />
      <WhyUs />
      <Process />
      <ContactCTA />
      <Footer />
      <EnquiryPopup trigger="exit" />  {/* ← Popup on exit intent + floating button */}
    </>
  )
}
