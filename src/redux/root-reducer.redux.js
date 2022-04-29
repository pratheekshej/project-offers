import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const rootReducer = combineReducers({
    app: appReducer
});

export default persistReducer(persistConfig, rootReducer);