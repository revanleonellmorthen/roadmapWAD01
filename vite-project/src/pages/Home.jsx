import { Link } from 'react-router'
import TopikCard from '../components/TopikCard.jsx'
import { topik } from '../data.js'

function Home() {
    return (
        <>
            <section id="pengenalan" className="mx-auto max-w-[1000px] px-10 py-16">
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    WAD Blok B
                </span>
                <h1 className="mt-4 mb-3 text-4xl font-bold tracking-tight md:text-5xl">
                    Roadmap-Rvn
                </h1>
                <p className="max-w-[60ch] text-muted-foreground">
                    Alur pembelajaran WAD blok B, dari HTML sampai React.
                </p>
            </section>

            <section id="fitur" className="bg-muted px-10 py-16">
                <div className="mx-auto max-w-[1000px]">
                    <h2 className="mb-6 text-2xl font-bold">Apa yang dipelajari</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        {topik.map((t) => (
                            <Link
                                key={t.slug}
                                to={`/topik/${t.slug}`}
                                className="block rounded-xl transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10"
                            >
                                <TopikCard judul={t.judul} deskripsi={t.deskripsi} status={t.status} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home