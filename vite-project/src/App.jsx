import { Route, Routes } from 'react-router'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import DetailTopik from './pages/DetailTopik.jsx'
import Latihan from './pages/Latihan.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="topik/:slug" element={<DetailTopik />} />
        <Route path="latihan" element={<Latihan />} />
        <Route path="*" element={<TidakDitemukan />} />
      </Route>
    </Routes>
  )
}

export default App