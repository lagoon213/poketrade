import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(ui: React.ReactElement) {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
}

test("renders logo", () => {
    renderWithRouter(<Navbar />);
    const logo = screen.getByAltText(/poketrade/i);
    expect(logo).toBeInTheDocument();
});

test("renders navigation links", () => {
    renderWithRouter(<Navbar />);
    const homeLink = screen.getByText(/Home/i);
    const tradesLink = screen.getByText(/Trades/i);
    const collectionLink = screen.getByText(/Collection/i);
    const loginLink = screen.getByText(/Login/i);
    expect(homeLink).toBeInTheDocument();
    expect(tradesLink).toBeInTheDocument();
    expect(collectionLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
});