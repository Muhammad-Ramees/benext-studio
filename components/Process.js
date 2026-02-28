export default function Process() {
  const steps = [
    { num: '01', title: 'Deep Discovery', desc: "We sit with you to understand the exact bottleneck in your business. No tech jargon, just business logic." },
    { num: '02', title: 'Architecture & Design', desc: "We map out the system visually. You'll see exactly how the software works and flows before we write a single line of code." },
    { num: '03', title: 'Development & Testing', desc: "Fast, iterative builds. We give you staging access so you can test features as they are built, ensuring no surprises." },
    { num: '04', title: 'Launch & Scale', desc: "We deploy the system, train your team, and stick around for maintenance and scaling as your user base grows." },
  ]

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full glow" />
            <p className="text-blue-500 text-xs tracking-[0.2em] font-bold uppercase">How We Work</p>
          </div>
          <h2 className="font-syne font-extrabold text-white text-[clamp(32px,8vw,72px)] leading-[0.9] tracking-tight break-words">
            THE BENEXT<br /><span className="text-gradient-blue text-glow">METHOD.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="reveal card-premium p-8 group relative" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="absolute -top-6 -right-6 font-syne font-extrabold text-[120px] leading-none text-white/[0.03] group-hover:text-blue-500/10 transition-colors duration-500 pointer-events-none z-0">
                {s.num}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(30,107,255,0.4)]">
                  <span className="font-syne font-bold text-white text-lg">{s.num}</span>
                </div>
                <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
