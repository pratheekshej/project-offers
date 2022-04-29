import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/offers-transparent.png';

const Main = () => {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={"https://static.sixt.jobs/_sxtv2/img/logo-white-orange.png?version=V425"} className="App-logo" alt="logo" /> */}
                <img src={logo} className="App-logo" alt="logo" />
                <p> Welcome, lets check out for some special offers. </p>
                <Link className="App-link" to={"/home"}>View Offers</Link>
            </header>
        </div>
    );
};

export default Main;