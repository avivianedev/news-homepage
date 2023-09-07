import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import News from "./components/News"

function App() {


  return (
    <>
      <header className="home-container" >
        <Navbar />
      </header>
      <main className="home-container">
        <News />
        <Card />
      </main>
      <Footer />

    </>
  )
}

export default App
