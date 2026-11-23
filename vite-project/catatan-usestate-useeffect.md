# Catatan useState & useEffect

Catatan pribadi untuk tugas Minggu 3. Contoh diambil dari kode sendiri, di
`src/latihan/`.

## 1. useState

```jsx
const [count, setCount] = useState(0)
//     ^nilai  ^pengubah     ^nilai awal
```

- State adalah data yang **berubah antar render**. Mengganti nilainya wajib
  lewat setter, karena setter itu yang memberi tahu React untuk render ulang.
- `count = count + 1` tidak berefek: variabelnya berubah di memori, tapi React
  tidak tahu dan tidak menggambar ulang.
- Nilai turunan **jangan** dijadikan state. Di `Counter.jsx`, `count * 2`
  dihitung langsung saat render. Kalau dijadikan state, harus disinkronkan
  manual dan bisa tidak sinkron.

**Update fungsional.** Kalau nilai baru bergantung nilai lama, pakai bentuk
fungsi:

```jsx
setCount((c) => c + 1)
```

Dua pemanggilan berurutan dengan cara ini menghasilkan +2, karena React mengantre
dan tiap fungsi menerima nilai terbaru. `setCount(count + 1)` dua kali memakai
`count` yang sama dari render saat itu, jadi hasilnya cuma +1. Perbedaan ini bisa
dilihat langsung di tombol "+2 benar" dan "+2 salah".

**Array dan object harus diganti, bukan diubah.** Di `TodoList.jsx`:

```jsx
setDaftar((d) => [...d, itemBaru])                                  // tambah
setDaftar((d) => d.map((t) => t.id === id ? { ...t, selesai: !t.selesai } : t))  // centang
setDaftar((d) => d.filter((t) => t.id !== id))                      // hapus
```

`push`, `splice`, atau `t.selesai = true` mengubah object lama. Referensinya
tetap sama, jadi React menganggap tidak ada perubahan.

**Input terkontrol.** `value={teks}` + `onChange` membuat nilai input hidup di
state. Tanpa `value`, input jadi tidak terkontrol dan tidak bisa dikosongkan
lewat `setTeks('')`.

**`key`** pakai `id` yang stabil, bukan index. Kalau pakai index lalu item di
tengah dihapus, React salah mencocokkan baris dan centang bisa pindah.

## 2. useEffect

`useEffect` untuk menyinkronkan komponen dengan hal **di luar React**: fetch,
`localStorage`, `document.title`, timer, event listener global. Bukan untuk
menghitung nilai dari props — itu cukup variabel biasa.

### Kapan effect berjalan

1. **Setelah render selesai dan browser sudah menggambar.** Bukan sebelum,
   bukan saat render.
2. **Tergantung dependency array:**

| Dependency | Kapan jalan |
|---|---|
| tidak ditulis sama sekali | setiap selesai render (hampir selalu bug) |
| `[]` | sekali, setelah komponen pertama kali muncul |
| `[coba]` | saat mount, lalu setiap `coba` berubah nilainya |
| `[a, b]` | sama, kalau salah satu berubah |

3. **Perbandingan dependency pakai `Object.is`.** Object atau array yang dibuat
   ulang tiap render selalu dianggap beda, walau isinya sama.

### Cleanup

Kalau fungsi di dalam effect mengembalikan fungsi, fungsi itu jalan sebelum
effect berikutnya dan saat komponen hilang.

```jsx
useEffect(() => {
  const kontrol = new AbortController()
  fetch(url, { signal: kontrol.signal }) /* ... */
  return () => kontrol.abort()
}, [coba])
```

Tanpa cleanup: request lama tetap jalan, hasilnya bisa menimpa hasil request
baru, dan kalau komponen sudah hilang muncul update ke komponen mati.

### StrictMode

`main.jsx` membungkus `<App />` dengan `<StrictMode>`. Di mode **dev**, React
sengaja menjalankan effect dua kali (mount → cleanup → mount) untuk membongkar
cleanup yang salah. Akibat yang terlihat:

- `console.log('effect jalan')` muncul dua kali saat halaman dimuat.
- Network tab memperlihatkan dua request.

Itu bukan bug dan tidak terjadi di hasil `npm run build`. Yang jadi bug: kalau
cleanup tidak ada, effect yang jalan dua kali meninggalkan sisa (timer ganda,
request ganda yang tidak dibatalkan).

### Jebakan yang dialami

- Effect yang memanggil setter tanpa dependency benar → render → effect →
  render, berulang tanpa henti.
- Menaruh `setLoading(true)` langsung di badan effect kena rule
  `react-hooks/set-state-in-effect` dari eslint plugin react-hooks v7. Solusi:
  set `loading` di handler tombol ("coba lagi"), biarkan effect hanya mengubah
  state dari dalam `.then`/`.catch` (asynchronous). Lihat bagian kesulitan.

## 3. Kesulitan dan cara mengatasi

**1. `npm` tidak bisa dijalankan di PowerShell.**
`npm.ps1 cannot be loaded because running scripts is disabled`. Solusi: pakai
`npm.cmd` / `npx.cmd`, atau `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.
Semua perintah di README memakai `.cmd`.

**2. `npx shadcn init` menghasilkan `import { cn } from "cn"`.**
Dikira salah generate. Setelah dicek `node_modules/cn/package.json`, ternyata
memang package resmi dari shadcn-ui: pengganti `clsx` + `tailwind-merge` di
shadcn v4. Jadi dibiarkan, tidak diganti ke `@/lib/utils`.

**3. ESLint protes di file `src/components/ui/`.**
`react-refresh/only-export-components` menolak file yang mengekspor komponen
sekaligus `badgeVariants`/`buttonVariants`. Itu pola bawaan shadcn. Solusi:
pengecualian rule khusus folder vendor di `eslint.config.js`, bukan dimatikan
global.

**4. Fetch kepanggil dua kali.**
Dikira bug `useEffect`. Ternyata StrictMode di mode dev. Solusi: pahami alurnya
dan pastikan cleanup `abort()` ada, lalu verifikasi dengan `npm run build`.

**5. Counter +2 hanya menambah 1.**
Penyebab: `setCount(count + 1)` dua kali memakai nilai `count` lama. Solusi:
bentuk fungsional `setCount((c) => c + 1)`. Dibuktikan dengan dua tombol
bersebelahan di `Counter.jsx`.

**6. Checkbox mengubah semua baris.**
Penyebab: object todo diubah langsung (`t.selesai = !t.selesai`). Solusi: `map`
yang mengembalikan object baru `{ ...t, selesai: !t.selesai }`.

**7. `set-state-in-effect` di `FetchData.jsx`.**
Rule baru dari `eslint-plugin-react-hooks`. `setLoading(true)` dan `setError(null)`
dipanggil langsung di badan effect. Solusi: pindahkan `setLoading(true)` ke
handler tombol "coba lagi", dan biarkan state lain diubah dari `.then`/`.catch`.

## 4. Rangkuman satu paragraf

`useState` menyimpan data yang berubah dan memicu render ulang lewat setter;
array/object harus diganti bukan diubah. `useEffect` menjalankan kode setelah
render untuk urusan di luar React; dependency array menentukan kapan ia dijalankan
ulang, fungsi cleanup membereskan efek sebelumnya, dan StrictMode menjalankannya
dua kali di mode dev sebagai uji ketahanan cleanup.
