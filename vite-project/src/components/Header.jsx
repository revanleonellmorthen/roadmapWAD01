import { NavLink } from 'react-router'

const kelas = ({ isActive }) =>
  isActive
    ? 'border-b-2 border-accent pb-0.5 text-foreground'
    : 'text-foreground/70 hover:text-foreground'

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-accent bg-panel/90 px-10 py-4 text-foreground backdrop-blur-md">
      <NavLink className="text-lg font-bold" to="/">Roadmap-Rvn</NavLink>
      <nav>
        <ul className="flex gap-6">
          <li><NavLink className={kelas} to="/" end>Beranda</NavLink></li>
          <li><NavLink className={kelas} to="/latihan">Latihan</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
