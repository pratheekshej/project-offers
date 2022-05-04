import { render, screen } from "@testing-library/react"
import ErrorTemplateComponent from "./error-template.component"

describe('Error Template Component', () => {
    test('testing for error message and stack', () => {
        render(<ErrorTemplateComponent error={{ message: 'NULL', stack: 'at ErrorTemplate' }} />);
        const errorTemplate = screen.getByTestId('error-content-block');
        expect(errorTemplate).toBeTruthy();
        expect(errorTemplate).toBeInTheDocument();
    });

    test('testing for no error message and stack', () => {
        render(<ErrorTemplateComponent />);
        const errorTemplate = screen.queryByTestId('error-content-block');
        expect(errorTemplate).toBeFalsy();
        expect(errorTemplate).not.toBeInTheDocument();
    });
});