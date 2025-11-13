import "./AddToCollection.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function AddToCollection() {
    const [series, setSeries] = useState<PokemonSeries[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    type PokemonSeries = {
        name: string;
        release_date: string;
        total_cards: number;
        logo: string;
    };


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/pokemon/pokemon-series/")
            .then((res) => res.json())
            .then((data) => {
                setSeries(data.series || []);
                setLoading(false);
            })
            .catch(() => {
                setError("Kon series niet laden");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{color: "red"}}>{error}</p>;
    return (
        <>
            <Navbar/>
            <div className="add-to-collection-page">
                <h2>Voeg toe aan collectie</h2>
                <div className="add-to-collection-upper-page-line"></div>

                <ul className="pokemon-series-container">
                    {series.map((s, idx) => (
                        <li key={idx} className="pokemon-series-card" style={{ backgroundImage: `url(${s.logo})` }}>
                            <div className="series-left">
                                <span className="series-name">{s.name}</span>
                                <span className="series-count">{s.total_cards}/{s.total_cards}</span>
                            </div>

                            <span className="series-date">{s.release_date}</span>
                        </li>

                    ))}
                </ul>

                <div className="add-to-collection-lower-page-line"></div>
            </div>
            <Footer/>
        </>
    );
}