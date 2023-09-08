import "./App.scss";
import Footer from "./components/Footer"
import InfoNews from "./components/InfoNews"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
      <header className="container" >
        <Navbar />
      </header>
      <main className="container">
        <InfoNews />
      </main>
      <div>
        <Footer />
      </div>


    </>
  )
}

export default App
