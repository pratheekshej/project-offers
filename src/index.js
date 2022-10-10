/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.redux';
import PageLoaderComponent from './core/components/loaders/page-loader/page-loader.component';
import PageLoaderWithHooks from './core/components/loaders/page-loader-with-hooks/page-loader-with-hooks.component';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App />
      </Router>
      {/* <PageLoaderComponent /> */}
      <PageLoaderWithHooks />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
