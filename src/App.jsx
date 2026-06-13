import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Experience from './components/sections/Experience/Experience'
import Projects from './components/sections/Projects/Projects'
import Contact from './components/sections/Contact/Contact'
import Layout from './components/layout/Layout/Layout'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
