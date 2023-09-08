import "./App.scss"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import News from "./components/News"

function App() {


  return (
    <>
      <header className="container" >
        <Navbar />
      </header>
      <main className="container">
        <News />
        <Card />
      </main>
      <Footer />

    </>
  )
}

export default App
