import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
        <div className="main-page">
            <h1>Ruil je Pokemon kaarten eenvoudig en veilig</h1>
            <p>Vindt verzamelaars, maak afspraken<br />en breid je collectie uit</p>
            <button>Maak account aan</button>
            <div className="main-page-line"></div>
            <h2>Openstaande trades</h2>
        </div>
        <Footer />
    </>
  )
}

export default App
