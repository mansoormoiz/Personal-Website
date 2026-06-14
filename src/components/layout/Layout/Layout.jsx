import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal, .reveal-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

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
