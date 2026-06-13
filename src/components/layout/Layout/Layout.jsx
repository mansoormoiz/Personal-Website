import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <div className="grid-bg min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
