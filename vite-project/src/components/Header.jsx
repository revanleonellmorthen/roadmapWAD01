import { NavLink } from 'react-router'

const kelas = ({ isActive }) =>
  isActive ? 'text-blue-600' : 'hover:text-blue-600'

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 px-10 py-4">
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