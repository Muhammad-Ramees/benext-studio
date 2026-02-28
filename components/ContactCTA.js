export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background styling for CTA */}
      <div className="absolute inset-0 bg-blue-600/5 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 rounded-full glass border border-blue-500/20 shadow-[0_0_20px_rgba(30,107,255,0.1)]">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)] shrink-0" />
          <span className="text-gray-300 text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] font-bold uppercase truncate">Available for New Projects</span>
        </div>

        <h2 className="font-syne font-extrabold text-white text-[clamp(32px,8vw,84px)] leading-[0.9] tracking-tight mb-6 break-words">
          STOP LOSING<br />MONEY TO <span className="text-gradient-blue text-glow">BAD SYSTEMS.</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12">
          Tell us about your operational bottleneck. We'll give you a concrete execution plan and a price within 24 hours. No endless sales calls.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="/contact" className="btn-premium w-full sm:w-auto text-lg px-10 py-5">
            Start Your Project →
          </a>
          <a href="https://wa.me/+971542711288" target="_blank" rel="noreferrer" className="btn-outline glass w-full sm:w-auto px-10 py-5 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all">
            <span className="text-xl">📱</span> WhatsApp Us Directly
          </a>
        </div>

        <p className="text-gray-500 text-sm font-semibold mt-8 tracking-widest uppercase">
          Based in Dubai • Working Globally
        </p>
      </div>
    </section>
  )
}
