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
    const [selectedCards, setSelectedCards] = useState<Record<string, boolean>>({});
    const [allCards, setAllCards] = useState<CardInfo[]>([]);
    const [chosenCards, setChosenCards] = useState<Record<string, number>>({});

    function toggleCard(cardId: string) {
        setSelectedCards(prev => {
            const isSelected = prev[cardId] ?? false;
            return {
                ...prev,
                [cardId]: !isSelected
            };
        });
    }

    function setCardAmount(cardId: string, amount: number) {
        setChosenCards(prev => ({
            ...prev,
            [cardId]: amount
        }));
    }

    useEffect(() => {
        async function load() {
            // load cards
            const cardRes = await fetch(`http://127.0.0.1:8000/api/pokemon/cards/${setId}/`);
            const cardData = await cardRes.json();
            setCards(cardData.cards);
            setAllCards(cardData.cards);

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
                    backgroundPosition: "center",
                }}
            >
                <div className="set-banner-text">
                    <h1>{setInfo.name}</h1>
                </div>
            </div>

            <div className="set-cards-upper-page-line"></div>

            <div className="search-bar-container">
                <input type="text" className="search-bar" placeholder="Zoek een kaart..." onChange={(e) => {
                    const searchTerm = e.target.value.toLowerCase();

                    if (searchTerm === "") {
                        setCards(allCards);
                        return;
                    }

                    const filteredSeries = allCards.filter(s => s.name.toLowerCase().includes(searchTerm));
                    setCards(filteredSeries);
                }}/>
            </div>

            <h2>Kaarten</h2>

            <div className="cards-grid">
                {cards.map(card => (
                    <div className="card" key={card.id}>
                        <div className="card-amount-checkbox-container">
                            <input type="checkbox" checked={selectedCards[card.id]} onChange={() => toggleCard(card.id)}/>
                            {selectedCards[card.id] && (
                            <div className="card-amount-container">
                                <input type="number" min={0} value={chosenCards[card.id] ?? 1}
                                       onChange={e => setCardAmount(card.id, Number(e.target.value))}/>
                            </div>)}

                        </div>
                        <img src={card.image} alt={card.name} />
                    </div>
                ))}
            </div>

            <div className="set-cards-container">
                <div className="set-card-collection-bottom-line"></div>
                <div className="card-page-buttons">
                    <button className="add-cards-button">Voeg gekozen kaarten toe</button>
                    <button className="cancel-adding-cards-button">Annuleer toevoegen</button>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    );
}
