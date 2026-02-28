export default function Services() {
  const services = [
    {
      title: 'SaaS / Portals',
      desc: 'Booking systems, internal tools, customer dashboards. Built to manage 10,000+ users without breaking.',
      icon: '🚀'
    },
    {
      title: 'Business Websites',
      desc: 'High-speed, SEO-optimized sites that convert visitors into actual warm leads. Forget slow WordPress.',
      icon: '🌐'
    },
    {
      title: 'SEO & Growth',
      desc: 'We rank you on Google AND optimize your brand for ChatGPT/AI search. Most agencies ignore AI search.',
      icon: '🔍'
    },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full glow" />
              <p className="text-blue-500 text-xs tracking-[0.2em] font-bold uppercase">What We Build</p>
            </div>
            <h2 className="font-syne font-extrabold text-white text-[clamp(32px,8vw,72px)] leading-none tracking-tight break-words">
              MORE THAN<br />JUST <span className="text-gradient-blue text-glow">CODE.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md reveal delay-100 mb-2">
            Most agencies build you a website and disappear. We build operational systems that save you time, scale your sales, and reduce your headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="reveal card-premium p-10 group" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">{s.icon}</div>
              <h3 className="font-syne font-bold text-2xl text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
