import { Outlet } from 'react-router'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

function Layout() {
    return (
        <div className="font-sans leading-relaxed text-foreground">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout