import { Link, useParams } from 'react-router'
import { topik } from '../data.js'

function DetailTopik() {
    const { slug } = useParams()
    const t = topik.find((x) => x.slug === slug)

    if (!t) {
        return (
            <section className="mx-auto max-w-[1000px] px-10 py-16">
                <p className="text-muted-foreground">Topik "{slug}" tidak ada.</p>
                <Link className="mt-4 inline-block underline" to="/">Kembali</Link>
            </section>
        )
    }

    return (
        <section className="mx-auto max-w-[1000px] px-10 py-16">
            <Link className="text-sm text-muted-foreground hover:underline" to="/">
                ← Semua topik
            </Link>
            <h1 className="mt-4 mb-3 text-3xl font-bold">{t.judul}</h1>
            <p className="max-w-[60ch] text-muted-foreground">{t.deskripsi}</p>
            {t.Materi?.map((paragraf, i) => (
                <p key={i} className="mt-4 max-w-[60ch] text-muted-background">
                    {paragraf}
                </p>
            ))}
            <p className="mt-6 text-sm">
                Status: {t.status ?? 'Selesai dipelajari'}
            </p>
        </section>
    )
}

export default DetailTopik