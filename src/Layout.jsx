import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/user/1">User 1</Link>
      </nav>
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  )
}