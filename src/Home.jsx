import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
function Home() {
  return (
    
    <div className="bg-[#fff9f1fff9f1] min-h-screen">
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Skills /> */}
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home