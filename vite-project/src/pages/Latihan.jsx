import Counter from '../latihan/Counter.jsx'
import FetchData from '../latihan/FetchData.jsx'
import TodoList from '../latihan/TodoList.jsx'

function Latihan() {
    return (
        <section className="mx-auto max-w-[1000px] px-10 py-16">
            <h2 className="mb-6 text-2xl font-bold">Latihan Hooks</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <Counter />
                <TodoList />
                <FetchData />
            </div>
        </section>
    )
}

export default Latihan