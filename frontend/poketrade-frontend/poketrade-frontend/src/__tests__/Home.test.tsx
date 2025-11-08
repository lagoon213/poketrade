import { render, screen } from "@testing-library/react";
import Home from "../home/Home";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(ui: React.ReactElement) {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
}

test("renders homepage title", () => {
    renderWithRouter(<Home />);
    const title = screen.getByText(/Ruil je Pokemon kaarten eenvoudig en veilig/i);
    expect(title).toBeInTheDocument();
});

test("renders homepage text", () => {
    renderWithRouter(<Home />);
    const text = screen.getByText(/Vindt verzamelaars, maak afspraken/i);
    const lineBreak = screen.getByText(/en breid je collectie uit/i);
    expect(text).toBeInTheDocument();
    expect(lineBreak).toBeInTheDocument();
});

test("renders signup button", () => {
    renderWithRouter(<Home />);
    const button = screen.getByText(/Maak account aan/i);
    expect(button).toBeInTheDocument();
});

test("renders open trades section", () => {
    renderWithRouter(<Home />);
    const sectionTitle = screen.getByText(/Openstaande trades/i);
    expect(sectionTitle).toBeInTheDocument();
});