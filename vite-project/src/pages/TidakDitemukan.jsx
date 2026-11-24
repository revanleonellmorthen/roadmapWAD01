import { Link } from 'react-router'

function TidakDitemukan() {
    return (
        <section className="mx-auto max-w-[1000px] px-10 py-24 text-center">
            <h1 className="text-3xl font-bold">404</h1>
            <p className="mt-2 text-muted-foreground">Halaman tidak ditemukan.</p>
            <Link className="mt-6 inline-block underline" to="/">Ke beranda</Link>
        </section>
    )
}

export default TidakDitemukan