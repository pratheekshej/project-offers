import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store.redux";
import PageLoaderComponent from "./page-loader.component";

describe("Loader Component", () => {
    test('to see if page loader is defined', () => {
        render(
            <Provider store={store}>
                <PageLoaderComponent loading={true} />
            </Provider>
        );
        const pageLoaderElem = screen.queryByTestId('page-loader');
        expect(pageLoaderElem).toBeDefined();
    });

    test('to see if page loader is null', () => {
        render(
            <Provider store={store}>
                <PageLoaderComponent loading={false} />
            </Provider>
        );
        const pageLoaderElem = screen.queryByTestId('page-loader');
        expect(pageLoaderElem).toBeNull();
    });
});
