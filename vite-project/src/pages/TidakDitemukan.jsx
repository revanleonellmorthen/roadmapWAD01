import { Link } from 'react-router'
import Container from '../components/Container.jsx'

function TidakDitemukan() {
  return (
    <Container className="py-24 text-center">
      <p className="font-mono text-6xl font-semibold tracking-[-0.04em] text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Alamat yang kamu buka tidak ada di roadmap ini.
      </p>
      <Link
        className="mt-8 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        to="/"
      >
        Kembali ke beranda
      </Link>
    </Container>
  )
}

export default TidakDitemukan
