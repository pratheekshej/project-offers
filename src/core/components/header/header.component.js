import React from "react";
import './header.styles.scss';
import logo from '../../../assets/cars.png';
// import logo from '../../../assets/offers-transparent.png';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-title-wrap">
                <img src={logo} className="header-title-wrap-img" alt="logo" />
                <div className="header-title-wrap-label-text">OFFERS</div>
            </div>
        </div>
    );
};

export default Header;