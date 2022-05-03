import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "../main.component";

test('check for redirection to the home page', () => {
    render(<Main />, { wrapper: BrowserRouter });
    const linkComponent = screen.getByTestId('app-redirection');
    expect(linkComponent).toBeTruthy();
    expect(linkComponent).toHaveTextContent('view offers');
});