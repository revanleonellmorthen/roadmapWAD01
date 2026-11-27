import { Link } from 'react-router'
import Container from '../components/Container.jsx'
import TopikCard from '../components/TopikCard.jsx'
import { topik } from '../data.js'

function Home() {
  const selesai = topik.filter((t) => t.status?.toLowerCase().includes('sudah')).length

  return (
    <>
      <section id="pengenalan" className="border-b border-border/60">
        <Container className="py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            WAD Blok B · Ilkom 2026
          </p>
          <h1 className="mt-5 max-w-[22ch] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Roadmap belajar frontend, satu topik satu proses.
          </h1>
          <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground md:text-lg">
            Dari struktur HTML sampai komponen React yang bisa dipakai ulang.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span><span className="text-foreground">{topik.length}</span> topik</span>
            <span><span className="text-foreground">{selesai}</span> selesai</span>
            <span className="font-mono text-xs uppercase tracking-[0.14em]">
              {/* untuk isi stack yang dipakai */}
            </span>
          </div>
        </Container>
      </section>

      <section id="fitur" className="bg-muted/40">
        <Container className="py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Kurikulum
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                Apa yang dipelajari
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">
              {topik.length} topik
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topik.map((t, i) => (
              <Link
                key={t.slug}
                to={`/topik/${t.slug}`}
                className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <TopikCard
                  nomor={String(i + 1).padStart(2, '0')}
                  judul={t.judul}
                  deskripsi={t.deskripsi}
                  status={t.status}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
