import { render, screen } from "@testing-library/react";
import Grid from "./grid.component";

test('To see if the grid component has basic features including grid title and body', () => {
    render(<Grid />);
    const gridTitle = screen.getByTestId('grid-title');
    const gridBody = screen.getByTestId('grid-data-content');
    expect(gridTitle).toBeTruthy();
    expect(gridBody).toBeTruthy();
});