// import logger from 'redux-logger';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer.redux';

let middlewares = []; // thunk

const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, composedEnhancers);
export const persistor = persistStore(store);
const exportContent = { store, persistor };

export default exportContent;