import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from 'cn'

function TopikCard({ nomor, judul, deskripsi, status, className }) {
  const sedangBelajar = status?.toLowerCase().includes('sedang')

  return (
    <Card
      className={cn(
        'h-full border-border/70 bg-card/80 backdrop-blur-sm transition duration-200',
        'motion-safe:group-hover:-translate-y-0.5 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/5',
        className,
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground">{nomor}</span>
          {status && (
            <Badge
              className={cn(
                'shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium',
                sedangBelajar
                  ? 'border-transparent bg-accent text-accent-foreground'
                  : 'border-border bg-transparent text-muted-foreground',
              )}
            >
              {status}
            </Badge>
          )}
        </div>
        <CardTitle className="mt-3 text-lg font-medium tracking-[-0.01em]">{judul}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{deskripsi}</p>
      </CardContent>
    </Card>
  )
}

export default TopikCard
