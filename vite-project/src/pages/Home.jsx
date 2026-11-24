import { Link } from 'react-router'
import TopikCard from '../components/TopikCard.jsx'
import { topik } from '../data.js'

function Home() {
    return (
        <>
            <section id="pengenalan" className="mx-auto max-w-[1000px] px-10 py-16">
                <h1 className="mb-3 text-3xl font-bold">Roadmap-Rvn - WAD Blok B</h1>
                <p className="max-w-[60ch] text-muted-foreground">
                    Alur pembelajaran WAD blok B, dari HTML sampai React.
                </p>
            </section>

            <section id="fitur" className="bg-muted px-10 py-16">
                <div className="mx-auto max-w-[1000px]">
                    <h2 className="mb-6 text-2xl font-bold">Apa yang dipelajari</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        {topik.map((t) => (
                            <Link key={t.slug} to={`/topik/${t.slug}`} className="block">
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