import { appActionTypes } from "./app.types";

export const setOfferList = (offerListData = []) => ({
    type: appActionTypes.SET_OFFER_LIST,
    payload: offerListData
});

export const setPageLoader = (val) => ({
    type: appActionTypes.SET_PAGE_LOADER,
    payload: val
});