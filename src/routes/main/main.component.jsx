import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/offers-transparent.png';
import logo from '../../assets/special-offer-cropped.png';

const Main = () => {
    return (
        <div className="App">
            <div className="App-header">
                <Link className='logo-wrapper' to={"/home"}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <Link data-testid="app-redirection" className="App-link" to={"/home"}>
                    view offers
                </Link>
            </div>
        </div>
    );
};

export default Main;