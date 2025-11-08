import "./Footer.css"
import Logo from "../assets/logo-PokeTrade.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top-line"></div>

            <div className="footer-triangle">
                <div className="footer-navigation">
                    <p>Asked questions</p>
                    <p>Contact us</p>
                    <p>Our story</p>
                    <p>About us</p>
                </div>
            </div>
            <div className="logo">
                <img src={Logo} alt="poketrade logo"/>
                <h1>poketrade</h1>
            </div>
            <div className="socialmedia-icons">

            </div>
        </div>
    )
}