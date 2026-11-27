import Container from '../components/Container.jsx'
import Counter from '../latihan/Counter.jsx'
import FetchData from '../latihan/FetchData.jsx'
import TodoList from '../latihan/TodoList.jsx'

function Latihan() {
  return (
    <Container className="py-16 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Latihan</p>
      <h1 className="mt-3 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
        Latihan Hooks
      </h1>
      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
        Tiga contoh kecil: state angka, state daftar, dan pengambilan data dari API.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Counter />
        <TodoList />
        <FetchData />
      </div>
    </Container>
  )
}

export default Latihan
