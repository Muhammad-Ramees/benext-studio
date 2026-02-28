export default function TrustBar() {
  const clients = [
    { label: 'Real Estate', note: 'Top 10 Agencies' },
    { label: 'Sports Academies', note: '15,000+ Athletes' },
    { label: 'B2B Services', note: 'Enterprise Level' },
    { label: 'Padel Courts', note: '2.5M+ AED Booked' }
  ]

  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.05)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full glow animate-pulse" />
            <p className="text-blue-500 text-xs tracking-[0.2em] font-bold uppercase">Trusted Expertise</p>
          </div>
          <h2 className="font-syne font-extrabold text-white text-[clamp(28px,6vw,48px)] leading-[1.1] tracking-tight mb-8 max-w-lg break-words text-balance">
            WE'VE BUILT SYSTEMS<br className="hidden sm:block" />PROCESSING <span className="text-gradient-blue text-glow">MILLIONS.</span>
          </h2>

          <div className="card-premium p-8 glass border-blue-500/20 shadow-[0_0_30px_rgba(30,107,255,0.1)] relative">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/10 to-transparent pointer-events-none" />
            <p className="text-white text-base font-semibold mb-2 flex items-center gap-3">
              <span className="text-blue-500 text-xl">🏆</span> PlaySa System
            </p>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Serving sports facilities across the UAE, recovering up to 25% leaked revenue through our automated booking ledger system and real-time dashboard tracking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 reveal delay-200">
          {clients.map((c, i) => (
            <div key={i} className="card-premium p-4 sm:p-8 flex flex-col items-center justify-center text-center gap-2 group hover:border-blue-500/30">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-widest uppercase mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors">{c.label}</span>
              <span className="font-syne font-extrabold text-sm sm:text-xl text-white group-hover:text-glow transition-all">{c.note}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
