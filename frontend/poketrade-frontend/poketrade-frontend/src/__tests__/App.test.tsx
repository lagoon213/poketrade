import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders homepage title", () => {
    render(<App />);
    const title = screen.getByText(/Vite \+ React/i);
    expect(title).toBeInTheDocument();
});
