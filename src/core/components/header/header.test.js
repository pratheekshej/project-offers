import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header.component";

test('Check if header contains link to the main page', () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    const headerComponentElem = screen.getByTestId('main-page-link');
    expect(headerComponentElem).toBeTruthy();
    expect(headerComponentElem).toBeInTheDocument();
    expect(headerComponentElem).toBeDefined();
});