import { useState } from 'react'
import { Button } from '@/components/ui/button'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="rounded-lg border p-5">
            <p className="text-2xl font-bold">{count}</p>
            <p className="text-sm text-muted-foreground">
                dobel: {count * 2} (dihitung tiap render, bukan state)
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
                <Button onClick={() => setCount((c) => c - 1)}>-1</Button>
                <Button onClick={() => setCount((c) => c + 1)}>+1</Button>
                <Button variant="outline" onClick={() => setCount(0)}>reset</Button>
                <Button
                    variant="secondary"
                    onClick={() => { setCount((c) => c + 1); setCount((c) => c + 1) }}
                >
                    +2 benar
                </Button>
                <Button
                    variant="ghost"
                    onClick={() => { setCount(count + 1); setCount(count + 1) }}
                >
                    +2 salah
                </Button>
            </div>
        </div>
    )
}

export default Counter