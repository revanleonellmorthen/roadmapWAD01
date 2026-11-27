import { Link, useParams } from 'react-router'
import Container from '../components/Container.jsx'
import { topik } from '../data.js'

function DetailTopik() {
  const { slug } = useParams()
  const t = topik.find((x) => x.slug === slug)

  if (!t) {
    return (
      <Container className="py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Topik tidak ditemukan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tidak ada topik dengan alamat &quot;{slug}&quot;.
        </p>
        <Link className="mt-6 inline-block text-sm text-accent hover:underline" to="/">
          ← Semua topik
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-16 md:py-24">
      <Link
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        to="/"
      >
        <span aria-hidden="true">←</span> Semua topik
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {t.status ?? 'Selesai dipelajari'}
      </p>
      <h1 className="mt-4 max-w-[20ch] text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">
        {t.judul}
      </h1>

      <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />

      <p className="mt-6 max-w-[60ch] leading-relaxed text-muted-foreground">
        {t.deskripsi}
      </p>

      {t.materi?.map((paragraf, i) => (
        <p key={i} className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">
          {paragraf}
        </p>
      ))}

      {t.poin && (
        <ul className="mt-6 max-w-[60ch] list-disc space-y-2 pl-5 text-sm text-muted-foreground marker:text-accent">
          {t.poin.map((butir) => (
            <li key={butir}>{butir}</li>
          ))}
        </ul>
      )}
    </Container>
  )
}

export default DetailTopik
