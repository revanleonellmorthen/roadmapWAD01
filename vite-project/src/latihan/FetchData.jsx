import { useEffect, useState } from 'react'

const URL_USERS = 'https://jsonplaceholder.typicode.com/users'

function FetchData() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [coba, setCoba] = useState(0)   // pemicu fetch ulang

    useEffect(() => {
        console.log('effect jalan, coba =', coba)
        const kontrol = new AbortController()

        fetch(URL_USERS, { signal: kontrol.signal })
            .then((r) => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`)
                return r.json()
            })
            .then((data) => setUsers(data))
            .catch((e) => { if (e.name !== 'AbortError') setError(e.message) })
            .finally(() => {
                if (!kontrol.signal.aborted) setLoading(false)
            })

        return () => kontrol.abort()   // cleanup
    }, [coba])

    if (loading) return <p className="text-sm text-muted-foreground">Memuat...</p>
    if (error) return (
        <div className="text-sm">
            <p className="text-destructive">Gagal: {error}</p>
            <button className="mt-2 underline" onClick={() => {
                setLoading(true)
                setError(null)
                setCoba((c) => c + 1)
            }}>coba lagi</button>
        </div>
    )

    return (
        <ul className="space-y-1 text-sm">
            {users.slice(0, 5).map((u) => (
                <li key={u.id}>{u.name} — <span className="text-muted-foreground">{u.email}</span></li>
            ))}
        </ul>
    )
}

export default FetchData