import './Navbar.css'
import pokeTradeLogo from '../assets/logo-PokeTrade.png'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const Navigate = useNavigate();
    return (
            <div>
                <div className="navbar">
                    <div className="navbar-brand">
                        <img src={pokeTradeLogo} className="logo-poketrade" alt="PokeTrade logo" />
                        <h1 onClick={()=> Navigate("/")}>POKETRADE</h1>
                    </div>
                    <div className="navbar-buttons">
                        <h2 onClick={()=> Navigate("/")}>Home</h2>
                        <h2>Trades</h2>
                        <h2 onClick={() => Navigate("/collection")}>Collection</h2>
                        <button onClick={() => Navigate("/login")}>Login</button>
                    </div>
                </div>
            </div>
    );
}
