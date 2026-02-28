export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[var(--color-bg)] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 group mb-6 inline-flex">
              <img src="/letter_logo.svg" alt="BN Logo" className="w-8 h-8 rounded-lg shadow-[0_0_10px_rgba(30,107,255,0.3)] group-hover:scale-105 transition-transform duration-500" />
              <span className="font-syne font-bold text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
                BeNext Studio<span className="text-blue-500">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              We build operational software, SaaS products, and digital visibility systems that make money for businesses across the UAE.
            </p>
          </div>

          <div>
            <h4 className="font-syne text-white font-bold mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {['Services', 'Products', 'Why Us', 'Process'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors w-max">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-syne text-white font-bold mb-6 tracking-wide text-sm uppercase">Contact</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-gray-400">
              <span className="flex items-center gap-2">📍 Dubai, UAE</span>
              <span className="flex items-center gap-2">✉️ info@benextstudio.com</span>
              <span className="flex items-center gap-2">📱 +971542711288</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-semibold tracking-wide uppercase">
            © {new Date().getFullYear()} BeNext Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
