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