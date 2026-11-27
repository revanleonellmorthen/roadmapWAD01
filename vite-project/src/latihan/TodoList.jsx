import { useState } from "react";
import { Button } from "@/components/ui/button";

function TodoList() {
    const [teks, setTeks] = useState('')        // isi input
    const [daftar, setDaftar] = useState([])    // array object

    function tambah(e) {
        e.preventDefault()                        // tanpa ini halaman reload
        const isi = teks.trim()
        if (!isi) return

        setDaftar((d) => [
            ...d,
            { id: crypto.randomUUID(), teks: isi, selesai: false },
        ])
        setTeks('')                               // kosongkan input
    }

    function toggle(id) {
        setDaftar((d) =>
            d.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t)),
        )
    }

    function hapus(id) {
        setDaftar((d) => d.filter((t) => t.id !== id))
    }

    const sisa = daftar.filter((t) => !t.selesai).length

    return (
        <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-3 font-semibold">To-do</h3>

            <form onSubmit={tambah} className="flex gap-2">
                <input
                    value={teks}
                    onChange={(e) => setTeks(e.target.value)}
                    placeholder="Tugas baru..."
                    className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                />
                <Button type="submit">Tambah</Button>
            </form>

            <p className="mt-3 text-sm text-muted-foreground">Sisa {sisa} tugas</p>

            {daftar.length === 0 ? (
                <p className="mt-2 text-sm text-muted-foreground">Belum ada tugas.</p>
            ) : (
                <ul className="mt-2 space-y-1">
                    {daftar.map((t) => (
                        <li key={t.id} className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={t.selesai}
                                onChange={() => toggle(t.id)}
                                className="size-4 accent-primary"
                            />
                            <span
                                className={
                                    t.selesai
                                        ? 'flex-1 text-muted-foreground line-through'
                                        : 'flex-1'
                                }
                            >
                                {t.teks}
                            </span>
                            <Button variant="ghost" size="sm" onClick={() => hapus(t.id)}>
                                Hapus
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TodoList