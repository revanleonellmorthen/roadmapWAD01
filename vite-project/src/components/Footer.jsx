function Footer() {
  return (
    <footer
      id="kontak"
      className="flex justify-between gap-8 border-t border-border bg-panel px-10 py-8 text-foreground/70"
    >
      <div className="flex-1">
        <a className="font-bold text-foreground" href="#">
          Roadmap-Rvn
        </a>
      </div>
      <div className="flex-1">
        <p>Dibuat dengan React dan Tailwind CSS.</p>
      </div>
      <div className="flex-1">
        <p>halo@roadmaprvn.id</p>
        <p>Jl. kebebasan No. 2, Belitung</p>
      </div>
    </footer>
  )
}

export default Footer
