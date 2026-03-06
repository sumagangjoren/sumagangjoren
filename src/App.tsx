
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import Home from './components/home'
// import ParticleBackground from './components/particleBackground'


function App() {

  return (
    <div className="relative min-h-screen bg-[#0b0f14] text-white [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:26px_26px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Home />
        <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <About />
        <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Projects />
        <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
