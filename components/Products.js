import Link from 'next/link'

const products = [
  {
    name: 'PlaySa',
    tagline: 'The Operating System for Sports Facilities',
    desc: 'Recovers 10–25% of leaked revenue from football turfs, padel courts, and sports academies. Booking management, payment tracking, staff payroll, and real-time P&L — in one system.',
    tags: ['Football Turfs', 'Padel Courts', 'Academies', 'Multi-branch'],
    status: 'Live',
    highlight: true,
    features: ['Conflict-free booking calendar', 'Unpaid slot detection', 'Auto commission calculation', 'Live revenue dashboard'],
    link: '/playsa',
    btnText: 'Explore Product →'
  },
  {
    name: 'Academy OS',
    tagline: 'Sports Academy Daily Operations',
    desc: 'Admissions, batch management, attendance, coach tracking, income & expense — built for football, swimming, martial arts, and multi-sport academies.',
    tags: ['Football', 'Swimming', 'Martial Arts', 'Cricket'],
    status: 'Live',
    highlight: false,
    features: ['Student & batch management', 'Attendance tracking', 'Income & expense logs', 'Custom reports'],
    link: '/contact',
    btnText: 'Request Access →'
  },
]

export default function Products() {
  return (
    <section id="products" className="py-32 relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full glow" />
            <p className="text-blue-500 text-xs tracking-[0.2em] font-bold uppercase">Our Products</p>
          </div>
          <h2 className="font-syne font-extrabold text-white break-words" style={{ fontSize: 'clamp(32px, 8vw, 64px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            BUILT BY US.<br /><span className="text-gradient-blue text-glow">RUNNING NOW.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {products.map((p, i) => (
            <div key={i} className="reveal card-premium group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left info */}
                <div className="lg:col-span-3 p-6 sm:p-10 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                    <span className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight break-words">{p.name}</span>
                    <span className="text-[10px] uppercase tracking-widest border border-blue-500/30 text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full font-bold shrink-0">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm font-semibold mb-4 tracking-wide">
                    {p.tagline}
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs border border-white/10 bg-white/5 text-gray-300 px-4 py-2 rounded-lg font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href={p.link} className="btn-outline group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-[0_0_0_rgba(30,107,255,0)] group-hover:shadow-[0_8px_25px_rgba(30,107,255,0.4)]">
                    {p.btnText}
                  </Link>
                </div>

                {/* Right features */}
                <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-black/20">
                  <p className="text-gray-500 text-xs tracking-[0.2em] font-semibold uppercase mb-6">Key Features</p>
                  <ul className="flex flex-col gap-5">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-blue-500" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm font-medium pt-0.5">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
