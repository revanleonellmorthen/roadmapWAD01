# Roadmap-Rvn

Website untuk mencatat perjalanan belajar WAD Blok B — dari HTML sampai React.
Dibuat dengan React, Tailwind CSS, dan komponen shadcn/ui.

Isinya empat halaman: beranda yang menampilkan daftar topik, halaman detail tiap
topik, halaman latihan hooks, dan halaman 404 untuk alamat yang tidak ada.

## Cara menjalankan

```powershell
cd vite-project
npm.cmd run dev      # buka http://localhost:5173
```

Perintah lain:

```powershell
npm.cmd run build    # membuat versi siap upload ke folder dist/
npm.cmd run lint     # memeriksa kesalahan kode
```

Kenapa `npm.cmd`, bukan `npm`? Di komputer ini PowerShell memblokir file
`npm.ps1` (kebijakan keamanan Windows). Memakai `npm.cmd` melewati masalah itu.
Kalau mau permanen: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

## Halaman yang tersedia

| Alamat | Isi |
|---|---|
| `/` | Beranda: penjelasan singkat + 5 card topik |
| `/topik/html-semantik` | Detail satu topik |
| `/latihan` | Tiga latihan hooks (counter, to-do, fetch data) |
| alamat lain | Halaman 404 |

**Cara kerja perpindahan halaman:** saat card diklik, React mengganti isi
halaman tanpa memuat ulang seluruh website. Header dan footer tetap di tempat,
alamat di browser berubah, dan tombol back tetap berfungsi. Karena setiap
halaman punya alamat sendiri, halaman detail bisa dibagikan lewat link dan tetap
terbuka walau di-refresh.

Alamat detail dibuat dari kata kunci topik (`slug`). Contohnya topik React
punya slug `react`, jadi alamatnya `/topik/react`. Kalau alamatnya tidak cocok
dengan topik mana pun, muncul pesan "Topik tidak ada" — bukan halaman error.

## Struktur folder

```
vite-project/
├── index.html
├── vite.config.js          <- pengaturan Vite (React, Tailwind, alias @/)
├── jsconfig.json           <- supaya editor paham arti @/ (folder src)
├── components.json         <- pengaturan shadcn
└── src/
    ├── main.jsx            <- titik awal: menyalakan React + router
    ├── App.jsx             <- daftar alamat dan halaman yang ditampilkan
    ├── index.css           <- Tailwind, warna tema, font
    ├── data.js             <- isi topik (judul, deskripsi, status, slug)
    ├── lib/utils.js        <- fungsi cn() untuk menggabung class CSS
    ├── pages/
    │   ├── Layout.jsx      <- bingkai: header + isi halaman + footer
    │   ├── Home.jsx        <- beranda
    │   ├── DetailTopik.jsx <- detail satu topik
    │   ├── Latihan.jsx     <- latihan hooks
    │   └── TidakDitemukan.jsx
    ├── components/
    │   ├── Header.jsx      <- menu atas
    │   ├── Footer.jsx
    │   ├── TopikCard.jsx   <- card satu topik
    │   └── ui/             <- komponen shadcn (card, badge, button)
    └── latihan/
        ├── Counter.jsx
        ├── TodoList.jsx
        └── FetchData.jsx
```

## Konsep yang dipakai, dengan bahasa sederhana

**Komponen.** Satu bagian tampilan ditulis sebagai satu fungsi yang
mengembalikan HTML. `Header.jsx` berisi menu, `TopikCard.jsx` berisi card. Nama
komponen selalu diawali huruf besar, dan dipakai seperti tag: `<Header />`.

**Props.** Data yang dikirim dari komponen induk ke anak. `TopikCard` tidak tahu
topik apa pun; dia hanya menggambar apa yang dikirim lewat `judul`, `deskripsi`,
dan `status`. Karena itu satu card bisa dipakai untuk lima topik berbeda.

**Satu sumber data.** Semua isi topik ada di `data.js`. Menambah topik berarti
menambah satu baris di sana; halaman beranda dan halaman detail otomatis ikut
karena keduanya membaca file yang sama.

**State.** Ingatan milik komponen — data yang bisa berubah selama halaman
terbuka. Di `Counter.jsx` ingatannya adalah angka; di `TodoList.jsx` ingatannya
adalah daftar tugas. Perubahan hanya terlihat di layar kalau diubah lewat fungsi
pengubah dari `useState`, bukan dengan mengganti variabel biasa.

**Effect.** Tugas tambahan yang dijalankan **setelah** tampilan selesai digambar.
Dipakai untuk urusan di luar React, contohnya mengambil data dari internet
seperti di `FetchData.jsx`. Kapan diulang diatur oleh daftar di akhir
`useEffect`; `[]` berarti cukup sekali.

**Routing.** Peta antara alamat di browser dan halaman yang ditampilkan, diatur
di `App.jsx`. Menu memakai `Link`/`NavLink` supaya perpindahan tidak memuat ulang
website. Halaman detail membaca bagian alamat lewat `useParams` — misalnya dari
`/topik/react` didapat `react`, lalu dicari di `data.js`.

**Tampilan.** Warna, jarak, dan ukuran ditulis langsung sebagai class Tailwind.
Komponen `Card`, `Badge`, dan `Button` berasal dari shadcn: kodenya disalin ke
`src/components/ui/`, jadi boleh diedit dan tidak diambil dari internet saat
website dibuka. Warna temanya diatur lewat variabel di `index.css`.

Catatan lebih dalam soal state dan effect ada di
[`catatan-usestate-useeffect.md`](./catatan-usestate-useeffect.md).

## Menambah atau mengubah topik

Edit `src/data.js`. Setiap topik butuh empat hal:

```js
{
  slug: 'bootstrap',                    // bagian alamat: /topik/bootstrap
  judul: 'Bootstrap',
  deskripsi: 'Grid dan komponen siap pakai.',
  status: 'Belum dipelajari',           // opsional
}
```

`slug` harus unik dan tanpa spasi (pakai tanda hubung). Kalau dua topik punya
slug sama, halaman detail akan menampilkan yang pertama ditemukan.

## Yang belum ada

- Data belum tersimpan permanen. Kalau halaman di-refresh, isi to-do hilang,
  dan topik baru harus ditambah lewat `data.js`.
- Belum ada form untuk menambah topik dari website.
- Detail topik masih satu paragraf; belum ada halaman materi per topik.
- Belum terhubung ke API atau login sungguhan.
- Kalau nanti di-upload ke hosting, server perlu diatur supaya semua alamat
  diarahkan ke `index.html`, kalau tidak halaman detail akan 404 saat di-refresh.
