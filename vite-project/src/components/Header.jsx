function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 px-10 py-4">
      <a className="text-lg font-bold" href="#">
        Roadmap-Rvn
      </a>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a className="hover:text-blue-600" href="#pengenalan">
              Pengenalan
            </a>
          </li>
          <li>
            <a className="hover:text-blue-600" href="#fitur">
              Fitur
            </a>
          </li>
          <li>
            <a className="hover:text-blue-600" href="#kontak">
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
