import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const posts = [
    {
        title: 'Why WhatsApp Booking is Costing Your Sports Facility Money (And How to Fix It)',
        slug: 'why-whatsapp-booking-is-costing-your-sports-facility-money',
        excerpt: 'Sports facilities using WhatsApp and spreadsheets to manage bookings lose up to 25% of their revenue annually to unpaid slots and double bookings.',
        date: 'Oct 24, 2024',
        readTime: '4 min read',
        tags: ['PlaySa', 'Operations']
    }
]

export default function BlogIndex() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-[#030509]">
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
            <Navbar />

            <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center">
                    <h1 className="font-syne font-extrabold text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight text-white mb-6">
                        Insights on Systemizing <br />
                        <span className="text-gradient-blue text-glow">Your Business.</span>
                    </h1>
                    <p className="text-gray-400 text-lg font-medium">Actionable advice on building scalable operations and powerful digital systems.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {posts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="card-premium p-8 group flex flex-col justify-between hover:border-blue-500/50">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    {post.tags.map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-widest border border-blue-500/30 text-blue-400 bg-[rgba(30,107,255,0.1)] px-3 py-1.5 rounded-full font-bold">
                                            {t}
                                        </span>
                                    ))}
                                    <span className="text-gray-500 text-xs font-semibold">{post.date} · {post.readTime}</span>
                                </div>
                                <h2 className="font-syne font-bold text-2xl md:text-3xl text-white tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 font-medium leading-relaxed mb-8">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="text-blue-500 font-semibold group-hover:translate-x-2 transition-transform self-start">
                                Read Article →
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
