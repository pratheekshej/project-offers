import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/offers-transparent.png';

const Main = () => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link className="App-link" to={"/home"}>view offers</Link>
            </div>
        </div>
    );
};

export default Main;