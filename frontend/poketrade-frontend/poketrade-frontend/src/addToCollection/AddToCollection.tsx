import "./AddToCollection.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddToCollection(){
    return(
        <>
            <Navbar />
            <div className={"add-to-collection-page"}>
            <h2>Voeg toe aan collectie</h2>
            <div className="add-to-collection-upper-page-line"></div>
            <div className="add-to-collection-lower-page-line"></div>
            </div>
            <Footer />
        </>
    );
}

export default AddToCollection;