import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function TopikCard({ judul, deskripsi, status }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{judul}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{deskripsi}</p>
        {status && (
          <Badge variant="secondary" className="mt-3">
            {status}
          </Badge>
        )}
      </CardContent>
    </Card>
  )
}

export default TopikCard