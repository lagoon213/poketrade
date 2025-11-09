import "./Collection.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import collection from "../assets/collection.png";
import wishlist from "../assets/wishlist.png";
import shop from "../assets/shopping-cart.png";
import trade from "../assets/trade.png";

function Collection() {
    return (
        <>
            <Navbar />

            <div className="collection-page">

                <h2>Collection</h2>
                <div className="upper-page-line"></div>

                <div className="collection-buttons">

                    <div className="collection-button">
                        <div className="collection-text">
                            <h3>My collection</h3>
                            <p>Manage your owned cards</p>
                        </div>
                        <img src={collection} alt="collection icon" />
                    </div>

                    <div className="collection-small-button">
                        <div className="collection-text">
                            <h3>Wishlist</h3>
                            <p>Add cards to your wishlist</p>
                        </div>
                        <img src={wishlist} alt="wishlist icon" />
                    </div>

                </div>

                <div className="collection-buttons">

                    <div className="collection-small-button">
                        <div className="collection-text">
                            <h3>Shop</h3>
                            <p>Buy cards from other users or put up cards for sale</p>
                        </div>
                        <img src={shop} alt="shop icon" />
                    </div>

                    <div className="collection-button">
                        <div className="collection-text">
                            <h3>My trades</h3>
                            <p>Create and manage your own trade offers</p>
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
