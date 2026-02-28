export default function Ticker() {
  const items = [
    'SAAS ARCHITECTURE',
    'INTERNAL PORTALS',
    'BUSINESS AUTOMATION',
    'AI CHATBOTS',
    'SEO DOMINANCE',
    'HIGH-CONVERTING WEBSITES',
    'SPORTS FACILITY SOFTWARE',
  ]

  return (
    <div className="border-y border-[rgba(255,255,255,0.05)] bg-[rgba(10,15,25,0.4)] overflow-hidden py-4 reveal">
      <div className="marquee-inner">
        {[...items, ...items, ...items].map((txt, i) => (
          <div key={i} className="flex items-center px-10 shrink-0">
            <span className="text-blue-600 font-bold text-xs glow mx-4">✦</span>
            <span className="font-syne font-extrabold text-[13px] tracking-[0.2em] text-gray-400 whitespace-nowrap">
              {txt}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
