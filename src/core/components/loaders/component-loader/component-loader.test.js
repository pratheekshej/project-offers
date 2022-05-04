import { render, screen } from "@testing-library/react";
import InLoader from "./component-loader.component";

describe('Component Loader', () => {
    test('Checking for component loader element', () => {
        render(<InLoader />);
        const componentLoaderElem = screen.getByTestId('in-loader-elem');
        expect(componentLoaderElem).toBeTruthy();
        expect(componentLoaderElem).toBeDefined();
        expect(componentLoaderElem).toBeInTheDocument();
    });

    test('Checking for component loader text', () => {
        render(<InLoader loaderText={'loading...'} />);
        const componentLoaderElem = screen.getByTestId('loading');
        expect(componentLoaderElem).toBeTruthy();
        expect(componentLoaderElem).toBeDefined();
        expect(componentLoaderElem).toBeInTheDocument();
    });
});
