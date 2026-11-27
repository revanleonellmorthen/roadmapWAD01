import Container from './Container.jsx'

function Footer() {
  return (
    <footer id="kontak" className="border-t border-border/60 bg-panel">
      <Container className="grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <a className="flex items-center gap-2.5 text-sm font-semibold" href="#">
            <span className="size-2.5 rounded-[3px] bg-accent" aria-hidden="true" />
            Roadmap-Rvn
          </a>
          <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
            Catatan perjalanan belajar WAD blok B.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Dibuat dengan
          </p>
          <p className="mt-3 text-sm text-foreground/80">React 19 · Tailwind v4 · shadcn/ui</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Kontak
          </p>
          <p className="mt-3 text-sm">halo@roadmaprvn.id</p>
          <p className="text-sm text-muted-foreground">Jl. kebebasan No. 2, Belitung</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
