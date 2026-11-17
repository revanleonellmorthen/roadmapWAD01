# Roadmap-Rvn (React)

Halaman roadmap belajar WAD Blok B — versi React dari
`../tailwind/migrasi_CSS-tailwind`, yang tadinya HTML + Tailwind statis.

Status: **porting selesai + komponen shadcn**. Belum ada state/interaksi, beda
dari versi HTML cuma di cara menyusun markup dan asal komponen.

## Struktur

```
vite-project/
├── index.html              <- shell, #root + judul halaman
├── vite.config.js          <- plugin react + @tailwindcss/vite + alias @/
├── jsconfig.json           <- alias @/ buat editor & CLI shadcn
├── components.json         <- config shadcn (style base-nova, baseColor neutral)
├── src/
│   ├── main.jsx            <- pintu masuk, render <App /> ke #root
│   ├── App.jsx             <- susun Header + section + Footer
│   ├── data.js             <- array topik (sumber isi card)
│   ├── index.css           <- Tailwind + variabel tema shadcn + font Geist
│   ├── lib/
│   │   └── utils.js        <- cn(): gabung class tanpa bentrok
│   └── components/
│       ├── Header.jsx      <- logo + nav
│       ├── TopikCard.jsx   <- Card + Badge shadcn, terima props
│       ├── Footer.jsx      <- 3 kolom
│       └── ui/             <- KODE VENDOR shadcn, jangan diubah strukturnya
│           ├── card.jsx
│           ├── badge.jsx
│           └── button.jsx
└── package.json
```


## Perintah

```powershell
npm.cmd run dev     # http://localhost:5173
npm.cmd run build   # hasil ke dist/
npm.cmd run lint
```

`npm.cmd`, bukan `npm`: PowerShell di mesin ini memblokir `npm.ps1`
(execution policy). Alternatif sekali jalan:
`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

## Konsep React yang dipakai di sini

**1. Komponen = fungsi yang mengembalikan JSX.** `function Header() { return (...) }`.
Nama file dan nama fungsi pakai huruf besar — `<Header />` dibaca React sebagai
komponen, `<header>` sebagai tag HTML biasa.

**2. Panggil komponen seperti tag.** `<Header />` di `App.jsx` menyisipkan hasil
fungsi Header ke situ. Satu file = satu komponen, export default di bawah.

**3. props = parameter komponen.**

```jsx
<TopikCard judul={t.judul} deskripsi={t.deskripsi} status={t.status} />
// di TopikCard.jsx:
function TopikCard({ judul, deskripsi, status }) { ... }
```

Satu arah: App -> Card. Card tidak bisa mengubah data App (itu baru mungkin
dengan state + callback, belum ada di sini).

**4. `.map()` + `key` untuk daftar.** Card tidak ditulis 5x, tapi:

```jsx
{topik.map((t) => <TopikCard key={t.judul} ... />)}
```

`key` harus unik dan stabil, supaya React tahu card mana yang berubah saat
daftar berubah. Jangan pakai index array kalau urutan bisa berubah.

**5. `{...}` di JSX = ekspresi JavaScript.** `{judul}`, `{status && <span/>}`
(render kondisional: `&&` hanya jalan kalau `status` truthy), dan `{}` di dalam
atribut berarti nilai JS, bukan string.

**6. JSX beda dari HTML:** `class` -> `className`, atribut camelCase
(`onClick`), semua tag harus ditutup (`<img />`), dan satu komponen hanya boleh
mengembalikan satu elemen induk (`<>...</>` kalau perlu pembungkus hantu).

**7. `import` / `export`.** `data.js` export `topik`, `App.jsx` import. Gaya
ES module — sama seperti yang dipakai di `vite.config.js`.

**8. Tailwind v4 di Vite.** Cukup plugin `tailwindcss()` + `@import "tailwindcss";`.
Tidak ada `style.css` hasil build (beda dari project Tailwind CLI sebelumnya) —
Vite yang compile saat dev dan saat `npm run build`.

## Shadcn/ui

Terpasang lewat CLI, bukan `npm install` komponen:

```powershell
npx.cmd shadcn@latest init          # sekali per project
npx.cmd shadcn@latest add card badge  # tiap komponen yang dipakai
```

Yang terjadi: source komponen **disalin** ke `src/components/ui/`, bukan diambil
dari `node_modules`. Jadi file itu milik project — boleh diedit, tapi tidak ikut
update kalau CLI upgrade.

Versi yang kepasang: **shadcn v4, style `base-nova`**. Bedanya dari tutorial lama:

| Tutorial lama | Project ini |
|---|---|
| Radix UI | **Base UI** (`@base-ui/react`) |
| `clsx` + `tailwind-merge` | package **`cn`** (drop-in resmi dari shadcn-ui) |
| variabel warna `--primary` | sama, tapi ditambah `--chart-1..5`, `--sidebar-*` |
| font system | **Geist** (`@fontsource-variable/geist`) |

**`cn()`** menggabungkan class dan menyelesaikan bentrok. Di file ui dipakai
seperti `cn("p-4", className)` — `className` dari pemanggil menang atas `p-4`.

**Varian** dibuat dengan CVA. `<Badge variant="secondary" />` — varian yang ada:
`default`, `secondary`, `destructive`, `outline`, `ghost`, `link`.

**Tema** bukan warna hardcode, tapi CSS variable di `src/index.css`. Class
seperti `text-foreground` dan `bg-muted` mengambil nilai dari sana, jadi ganti
`--primary` sekali = semua komponen ikut.

**Alias `@/`** disiapkan dua kali: `jsconfig.json` (buat editor dan CLI) dan
`resolve.alias` di `vite.config.js` (buat Vite saat build). Tanpa keduanya,
`import { Card } from '@/components/ui/card'` gagal.

**Lint:** file di `src/components/ui/` dikecualikan dari rule
`react-refresh/only-export-components` di `eslint.config.js`, karena satu file
mengekspor komponen sekaligus varian `cva`. Itu pola bawaan shadcn.

## Cara menambah topik

Edit `src/data.js`, tambah object `{ judul, deskripsi }`. Card baru otomatis
muncul, tidak perlu sentuh komponen. `status` opsional — kalau diisi, badge
"Sedang dipelajari" muncul.

## Yang sengaja belum ada

- State (`useState`) — checkbox selesai, progress bar
- Routing — sekarang cuma satu halaman + anchor
- LocalStorage

Itu project berikutnya, setelah props dan list rendering terasa biasa.
