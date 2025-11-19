import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SetCardSelection.css";

type SeriesInfo = {
    id: string;
    name: string;
    logo: string;
    release_date: string;
    total_cards: number;
};

type CardInfo = {
    id: string;
    name: string;
    image: string;
};

export default function SetCardSelection() {
    const { setId } = useParams();
    const [cards, setCards] = useState<CardInfo[]>([]);
    const [setInfo, setSetInfo] = useState<SeriesInfo | null>(null);

    useEffect(() => {
        async function load() {
            // load cards
            const cardRes = await fetch(`http://127.0.0.1:8000/api/pokemon/cards/${setId}/`);
            const cardData = await cardRes.json();
            setCards(cardData.cards);

            // load series list
            const seriesRes = await fetch("http://127.0.0.1:8000/api/pokemon/pokemon-series/");
            const seriesData = await seriesRes.json();

            const found = seriesData.series.find((s: SeriesInfo) => s.id === setId);
            setSetInfo(found || null);
        }

        load();
    }, [setId]);

    if (!setInfo) return <p>Loading...</p>;

    return (
        <>
        <Navbar/>
        <div className="set-detail-page">

            <div
                className="set-banner"
                style={{
                    backgroundImage: `url(${setInfo.logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1>{setInfo.name}</h1>
            </div>

            <h2>Cards</h2>

            <div className="cards-grid">
                {cards.map(card => (
                    <img key={card.id} src={card.image} alt={card.name} />
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}
