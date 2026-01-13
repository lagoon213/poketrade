import "./Collection.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import collection from "../assets/collection.png";
import wishlist from "../assets/wishlist.png";
import shop from "../assets/shopping-cart.png";
import trade from "../assets/trade.png";

import {useNavigate} from "react-router-dom";

function Collection() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />

            <div className="collection-page">

                <h2>Collectie</h2>
                <div className="upper-page-line"></div>

                <div className="collection-buttons">

                    <div onClick={() => navigate("/my-collection")} className="collection-button">
                        <div className="collection-text">
                            <h3>Mijn Collectie</h3>
                            <p>Beheer je kaarten</p>
                        </div>
                        <img src={collection} alt="collection icon" />
                    </div>

                    <div className="collection-small-button">
                        <div className="collection-text">
                            <h3>Verlanglijst</h3>
                            <p>Voeg kaarten toe aan je verlanglijst</p>
                        </div>
                        <img src={wishlist} alt="wishlist icon" />
                    </div>

                </div>

                <div className="collection-buttons">

                    <div className="collection-small-button">
                        <div className="collection-text">
                            <h3>Winkel</h3>
                            <p>Koop kaarten van andere of verkoop je eigen kaarten</p>
                        </div>
                        <img src={shop} alt="shop icon" />
                    </div>

                    <div className="collection-button">
                        <div className="collection-text">
                            <h3>Mijn Ruilverzoeken</h3>
                            <p>Maak en beheer je eigen ruil verzoeken</p>
                        </div>
                        <div className="collection-icon">
                            <img src={trade} alt="trade icon" />
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Collection;
