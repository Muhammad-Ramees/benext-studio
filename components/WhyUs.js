export default function WhyUs() {
  const points = [
    {
      title: 'We Actually Run Businesses',
      desc: "We aren't just coders. We've built and scaled live operational companies. We understand P&L, operations, and the bottom line.",
    },
    {
      title: 'Operational Experience',
      desc: "We've run PlaySa in live sports facilities. We know what breaks, what owners actually need, and how to build software for people who aren't tech-savvy.",
    },
    {
      title: 'One Roof — SaaS, Service, Custom',
      desc: "Need a custom tool? We build it. Need an off-the-shelf product today? Use PlaySa. Need leads? We do SEO. One partner for everything digital.",
    },
    {
      title: 'Zero Offshore Risk',
      desc: "You deal directly with the founders in Dubai. No language barriers, no timezone issues, no excuses. Fast, reliable execution.",
    },
  ]

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

        {/* Left sticking header */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-40 reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full glow animate-pulse" />
              <p className="text-blue-500 text-xs tracking-[0.2em] font-bold uppercase">The BeNext Difference</p>
            </div>
            <h2 className="font-syne font-extrabold text-white text-[clamp(32px,8vw,60px)] leading-[0.9] tracking-tight mb-6 break-words">
              WHY FOUNDERS<br />CHOOSE US.
            </h2>
            <p className="text-gray-400 text-base font-medium leading-relaxed max-w-sm">
              We don't build useless dashboards. We build software designed to streamline chaos and make the cash register ring.
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {points.map((p, i) => (
            <div key={i} className="reveal card-premium p-10 flex flex-col sm:flex-row gap-6 items-start group hover:border-blue-500/50" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-600/20">
                <span className="font-syne font-bold text-2xl text-blue-500 glow">0{i + 1}</span>
              </div>
              <div className="pt-2">
                <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-gray-400 text-base font-medium leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
