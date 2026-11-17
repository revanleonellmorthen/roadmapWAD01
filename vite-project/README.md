# Roadmap-Rvn (React)

Halaman roadmap belajar WAD Blok B — versi React dari
`../tailwind/migrasi_CSS-tailwind`, yang tadinya HTML + Tailwind statis.

Status: **porting selesai**. Belum ada state/interaksi, beda dari versi HTML
cuma di cara menyusun markup.

## Struktur

```
vite-project/
├── index.html              <- shell, #root + judul halaman
├── vite.config.js          <- plugin react + @tailwindcss/vite
├── src/
│   ├── main.jsx            <- pintu masuk, render <App /> ke #root
│   ├── App.jsx             <- susun Header + section + Footer
│   ├── data.js             <- array topik (sumber isi card)
│   ├── index.css           <- 1 baris: @import "tailwindcss";
│   └── components/
│       ├── Header.jsx      <- logo + nav
│       ├── TopikCard.jsx   <- satu card, terima props
│       └── Footer.jsx      <- 3 kolom
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

## Cara menambah topik

Edit `src/data.js`, tambah object `{ judul, deskripsi }`. Card baru otomatis
muncul, tidak perlu sentuh komponen. `status` opsional — kalau diisi, badge
"Sedang dipelajari" muncul.

## Yang sengaja belum ada

- State (`useState`) — checkbox selesai, progress bar
- Routing — sekarang cuma satu halaman + anchor
- LocalStorage

Itu project berikutnya, setelah props dan list rendering terasa biasa.
