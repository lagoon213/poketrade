import Footer from "../components/Footer";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(ui: React.ReactElement) {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
}

test("renders footer logo", () => {
    renderWithRouter(<Footer />);
    const logo = screen.getByAltText(/poketrade/i);
    expect(logo).toBeInTheDocument();
});

test("renders footer navigation links", () => {
    renderWithRouter(<Footer />);
    const faqLink = screen.getByText(/Asked questions/i);
    const contactLink = screen.getByText(/Contact us/i);
    const storyLink = screen.getByText(/Our story/i);
    const aboutLink = screen.getByText(/About us/i);
    expect(faqLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(storyLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
});