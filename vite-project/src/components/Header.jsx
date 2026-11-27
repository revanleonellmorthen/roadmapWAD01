import { NavLink } from 'react-router'
import Container from './Container.jsx'

const kelas = ({ isActive }) =>
  isActive
    ? 'rounded-full bg-accent px-3 py-1.5 text-accent-foreground'
    : 'rounded-full px-3 py-1.5 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3.5">
        <NavLink className="flex items-center gap-2.5 text-sm font-semibold tracking-tight" to="/">
          <span className="size-2.5 rounded-[3px] bg-accent" aria-hidden="true" />
          Roadmap-Rvn
        </NavLink>
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-1 text-sm">
            <li><NavLink className={kelas} to="/" end>Beranda</NavLink></li>
            <li><NavLink className={kelas} to="/latihan">Latihan</NavLink></li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
