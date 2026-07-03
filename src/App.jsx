import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="site-frame">
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Experience />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
