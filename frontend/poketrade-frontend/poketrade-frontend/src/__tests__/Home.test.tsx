import { render, screen } from "@testing-library/react";
import Home from "../home/Home";

test("renders homepage title", () => {
    render(<Home />);
    const title = screen.getByText(/Ruil je Pokemon kaarten eenvoudig en veilig/i);
    expect(title).toBeInTheDocument();
});

test("renders homepage text", () => {
    render(<Home />);
    const text = screen.getByText(/Vindt verzamelaars, maak afspraken en breid je collectie uit/i);
    expect(text).toBeInTheDocument();
});

test("renders signup button", () => {
    render(<Home />);
    const button = screen.getByText(/Maak account aan/i);
    expect(button).toBeInTheDocument();
});

test("renders open trades section", () => {
    render(<Home />);
    const sectionTitle = screen.getByText(/Openstaande trades/i);
    expect(sectionTitle).toBeInTheDocument();
});