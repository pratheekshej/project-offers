/**
 * createSelector accepts one or more "input" selectors, which extract values from arguments,
 * and an "output" selector that receives the extracted values and should return a derived value.
 */
import { createSelector } from "reselect";

const appState = (state) => state.app;

export const getOfferList = createSelector(
    [appState],
    (app) => app.offerList
);

export const getPageLoader = createSelector(
    [appState],
    (app) => app.pageLoader ? app.pageLoader : false
);

export const pageLoader = (state) => {
    return (state?.app?.pageLoader) ? state?.app?.pageLoader : false
}