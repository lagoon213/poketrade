import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const IsLoggedIn = !!localStorage.getItem("access");
    return (

        <>
            <Navbar />
            <div className="main-page">
                <h1>Ruil je Pokemon kaarten eenvoudig en veilig</h1>
                <p>Vindt verzamelaars, maak afspraken<br />en breid je collectie uit</p>
                {!IsLoggedIn && (
                <button onClick={() => navigate("/register")}>Maak account aan</button>
                )}

                <div className="main-page-line"></div>
                <h2>Openstaande trades</h2>
            </div>
            <Footer />
        </>
    )
}

export default App
