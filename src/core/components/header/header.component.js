import React from "react";
import './header.styles.scss';
import logo from '../../../assets/cars.png';
import { Link } from "react-router-dom";
// import logo from '../../../assets/offers-transparent.png';

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-title-wrap">
                <Link to={{ pathname: '/' }}>
                    <img src={logo} className="header-title-wrap-img" alt="logo" />
                </Link>
                <div className="header-title-wrap-label-text">OFFERS</div>
            </div>
        </div>
    );
};

export default Header;