// Sumber konten card. Tambah/hapus topik di sini, komponen tidak perlu disentuh.
// `slug` dipakai URL halaman detail: /topik/html-semantik
export const topik = [
  {
    slug: 'html-semantik',
    judul: 'HTML Semantik',
    deskripsi:
      'Memakai tag header, main, section, dan footer agar struktur jelas.',
    status: 'sudah dipelajari',
    materi: [
      'HTML semantik berarti memakai tag yang maknanya sesuai dengan isinya, bukan sekadar div untuk semua hal. Tujuannya agar struktur halaman bisa dipahami mesin pencari, pembaca layar, dan orang lain yang membaca kodenya.',
      'Bagian halaman yang paling sering dipakai: header untuk pembuka, nav untuk kumpulan link, main untuk isi utama, section untuk kelompok konten, dan footer untuk penutup.',
    ],
    poin: [
      'header — pembuka halaman atau satu bagian',
      'nav — kumpulan link navigasi',
      'main — isi utama, hanya boleh satu per halaman',
      'section — kelompok konten yang punya judul',
      'footer — penutup: hak cipta, kontak, link tambahan',
    ],
  },
  {
    slug: 'css-layout',
    judul: 'CSS Layout',
    deskripsi: 'Menyusun elemen sejajar dan rapi dengan Flexbox dan Grid.',
    status: 'sudah dipelajari',
  },
  {
    slug: 'tailwind-css',
    judul: 'Tailwind CSS',
    deskripsi: 'Menulis style lewat class utility, tanpa file CSS terpisah.',
    status: 'Sudah dipelajari',
  },
  {
    slug: 'javascript',
    judul: 'JavaScript',
    deskripsi: 'Menambahkan interaktivitas ke halaman web.',
    status: 'Sedang dipelajari',
  },
  {
    slug: 'react',
    judul: 'React',
    deskripsi: 'Memecah halaman jadi komponen yang bisa dipakai ulang.',
    status: 'Sedang dipelajari',
  },
]
