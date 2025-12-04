import "./My-collection.css"
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate} from "react-router-dom";

function MyCollection(){
    const navigate = useNavigate();
    return(
        <>
            <NavBar />
            <div className="myCollection-page">
            <h2>Mijn Collectie</h2>
            <div className="my-collection-upper-page-line"></div>
            <div className="my-collection-lower-page-line"></div>
                <div className="my-collection-buttons">
                    <button onClick={() => navigate("/addtocollection")} className="add-button">Voeg kaarten toe aan collectie</button>
                    <button className="edit-button">Bewerk kaarten in collectie</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyCollection;