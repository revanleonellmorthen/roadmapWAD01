import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import TopikCard from './components/TopikCard.jsx'
import { topik } from './data.js'

function App() {
  return (
    <div className="font-sans leading-relaxed text-foreground">
      <Header />

      <main>
        <section id="pengenalan" className="mx-auto max-w-[1000px] px-10 py-16">
          <h1 className="mb-3 text-3xl font-bold">
            Roadmap-Rvn - WAD Blok B
          </h1>
          <p className="max-w-[60ch] text-muted-foreground">
            Roadmap-Rvn adalah alur pembelajaran WAD di blok B. Materi dimulai
            dari struktur semantik sampai layout Flexbox dan Grid, lalu
            JavaScript, Tailwind, dan React.
          </p>
        </section>

        <section id="fitur" className="bg-muted px-10 py-16">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 text-2xl font-bold">Apa yang dipelajari</h2>

            <div className="grid gap-5 md:grid-cols-3">
              {topik.map((t) => (
                <TopikCard
                  key={t.judul}
                  judul={t.judul}
                  deskripsi={t.deskripsi}
                  status={t.status}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
