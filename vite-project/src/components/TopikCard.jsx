// props = data dari App. Satu card, dipakai berkali-kali lewat map.
function TopikCard({ judul, deskripsi, status }) {
  return (
    <article className="rounded-lg border border-gray-300 bg-white p-5">
      <h3 className="mb-2 font-semibold">{judul}</h3>
      <p className="text-slate-500">{deskripsi}</p>
      {status && (
        <span className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {status}
        </span>
      )}
    </article>
  )
}

export default TopikCard
