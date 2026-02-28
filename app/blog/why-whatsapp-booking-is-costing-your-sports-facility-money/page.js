import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function ArticlePage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#030509]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[150px] -z-10 pointer-events-none" />
            <Navbar />

            <article className="pt-32 sm:pt-40 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 w-full">
                <Link href="/blog" className="text-blue-500 font-semibold text-xs sm:text-sm hover:underline mb-6 sm:mb-8 inline-block">
                    ← Back to Articles
                </Link>

                <header className="mb-10 sm:mb-14 w-full">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest border border-blue-500/30 text-blue-400 bg-[rgba(30,107,255,0.1)] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold">
                            PlaySa
                        </span>
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest border border-blue-500/30 text-blue-400 bg-[rgba(30,107,255,0.1)] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold">
                            Operations
                        </span>
                        <span className="text-gray-500 text-[10px] sm:text-xs font-semibold whitespace-nowrap">4 min read</span>
                    </div>

                    <h1 className="font-syne font-extrabold text-[clamp(28px,6vw,56px)] leading-[1.1] sm:leading-[1.05] tracking-tight text-white mb-6 sm:mb-8 break-words text-balance">
                        Why WhatsApp Booking is Costing Your Sports Facility Money <br className="hidden sm:block" />
                        <span className="text-gray-500 text-[clamp(20px,4vw,36px)] block mt-2">(And How to Fix It)</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-[rgba(255,255,255,0.05)] py-4 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-blue rounded-full shadow-[0_0_15px_rgba(30,107,255,0.3)] flex items-center justify-center shrink-0 overflow-hidden">
                                <img src="/letter_logo.svg" alt="BN Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">BeNext Operations Team</p>
                                <p className="text-[10px] sm:text-xs text-gray-500 font-medium truncate">Dubai, UAE</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* TLDR BOX for the 'Lazy Reader' */}
                <div className="mb-12 p-6 sm:p-8 card-premium border-blue-500/30 bg-[rgba(10,15,25,0.8)] shadow-[0_0_40px_rgba(30,107,255,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mb-3 flex items-center gap-2">
                        <span className="text-blue-500">⚡</span> Executive Summary (TL;DR)
                    </h3>
                    <ul className="space-y-3 text-sm sm:text-base text-gray-300 font-medium list-disc pl-5">
                        <li><strong className="text-white">The Problem:</strong> Managing courts via WhatsApp & Excel leads to "ghost bookings" (no-shows) and double bookings.</li>
                        <li><strong className="text-white">The Cost:</strong> UAE sports facilities lose roughly <strong>15-25%</strong> of their monthly revenue to unpaid slots and administrative chaos.</li>
                        <li><strong className="text-white">The Fix:</strong> Force upfront digital payments and automate the scheduling using an Operating System like <Link href="/playsa" className="text-blue-400 hover:underline">PlaySa</Link>.</li>
                    </ul>
                </div>

                {/* Main Clean Content */}
                <div className="text-base sm:text-lg text-gray-300 font-medium leading-[1.8] sm:leading-relaxed break-words w-full overflow-hidden">

                    <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed font-light text-balance">
                        If you manage a football turf, a padel court, or a sports academy, you likely started out using the cheapest tools available: <strong>WhatsApp Groups and Excel spreadsheets.</strong>
                    </p>

                    <p className="mb-8">
                        When you're handling five bookings a week, WhatsApp works fine. But locally in the UAE, scaling your facility turns that convenience into an absolute bottleneck.
                        Data from over a dozen sports facilities shows that relying on manual, message-based bookings leaks massive amounts of revenue without the owner even realizing it.
                    </p>

                    <h2 className="text-2xl sm:text-3xl mt-12 sm:mt-16 mb-6 text-white font-syne font-bold tracking-tight">1. The "Ghost Booking" Epidemic</h2>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6 text-sm sm:text-base italic text-gray-400 border-l-4 border-l-amber-500">
                        "Hey, lock the turf for me at 8 PM this Thursday." <br />
                        <span className="not-italic text-xs block mt-2 text-gray-500">— An unpaid text message</span>
                    </div>

                    <p className="mb-6">
                        Thursday 8 PM hits. Nobody shows up. When you follow up, the customer reads the message and ignores it. Because they didn't pay upfront and there's no digital booking constraint, you just suffered a <strong>100% loss</strong> on your prime-time slot.
                    </p>

                    <h2 className="text-2xl sm:text-3xl mt-12 sm:mt-16 mb-6 text-white font-syne font-bold tracking-tight">2. Double Bookings Cost You Clients</h2>
                    <p className="mb-6">
                        Friday night rush. Multiple admins trying to update a single Google Sheet or a physical piece of paper. Human error strikes.
                        You accidentally tell two different football teams they have the 6 PM slot.
                    </p>

                    <div className="my-8 sm:my-12 p-6 sm:p-8 glass shadow-lg flex gap-4 sm:gap-6 items-start rounded-2xl relative">
                        <span className="text-4xl sm:text-5xl shrink-0 opacity-80 leading-none">💥</span>
                        <div>
                            <p className="text-white font-syne font-bold text-lg sm:text-xl mb-2">The Reality of Human Error</p>
                            <p className="text-gray-400 text-sm sm:text-base m-0 leading-relaxed">
                                "The quickest way to rack up negative 1-star Google reviews is telling a 10-person football team who just drove 30 minutes that their court was double-booked."
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl mt-12 sm:mt-16 mb-6 text-white font-syne font-bold tracking-tight">3. Nightmare Financials & VAT</h2>
                    <p className="mb-6">
                        If a business owner cannot instantly open their phone and see <strong>exactly</strong> how much revenue was collected today vs. what is pending, the business is out of control. Match tracking bank transfers (cash, links, POS) to loose WhatsApp timestamps takes hours every week and makes VAT auditing a complete nightmare.
                    </p>

                    {/* Solution Highlight Block */}
                    <div className="mt-16 bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl p-6 sm:p-10 text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl mb-4 text-white font-syne font-bold tracking-tight">The Modern Fix: PlaySa OS</h2>
                        <p className="mb-8 text-gray-400 text-sm sm:text-base">
                            A basic website calendar isn't enough. You need an Operating System that structurally prevents revenue leaks.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 text-sm font-medium text-left">
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <span className="block text-2xl mb-3">💳</span>
                                <strong className="text-white block mb-1">Force Online Payment</strong>
                                <span className="text-gray-400">Eliminate no-shows instantly by requiring upfront checkouts.</span>
                            </div>
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <span className="block text-2xl mb-3">🛡️</span>
                                <strong className="text-white block mb-1">Conflict-Free Engine</strong>
                                <span className="text-gray-400">The software physically prevents overlapping bookings.</span>
                            </div>
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <span className="block text-2xl mb-3">📊</span>
                                <strong className="text-white block mb-1">Smart Automated Ledger</strong>
                                <span className="text-gray-400">Calculates revenue, splits expenses, and tracks VAT automatically.</span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-lg sm:text-xl text-white font-bold">
                        Stop giving your traffic away to administrative chaos. Plug the leaks.
                    </p>
                </div>

                <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-[rgba(255,255,255,0.05)] text-center flex flex-col items-center w-full">
                    <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-6 sm:mb-8 tracking-tight">Ready to stop losing revenue?</h3>
                    <Link href="/playsa" className="btn-premium w-full sm:w-auto px-10 py-5 text-sm sm:text-base justify-center">
                        See How PlaySa Works →
                    </Link>
                </div>
            </article>

            <Footer />
        </main>
    )
}
