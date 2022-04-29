import { appActionTypes } from "./app.types";

const INITIAL_STATE = {
    offerList: [],
    pageLoader: false
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActionTypes.SET_OFFER_LIST:
            return { ...state, offerList: action.payload };
        case appActionTypes.SET_PAGE_LOADER:
            return { ...state, pageLoader: action.payload };
        default:
            return state;
    }
};

export default appReducer;