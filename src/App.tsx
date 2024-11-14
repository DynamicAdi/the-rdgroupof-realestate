// import About from './components/ui/home/about'
import Footer from "./components/ui/global/footer/footer"
import Navbar from "./components/ui/global/navbar/index"
import About from "./components/ui/home/about"
import Hero from "./components/ui/home/hero"
import Upcoming from "./components/ui/home/upcoming"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Upcoming />
      <Footer />
    </>
  )
}

export default App
