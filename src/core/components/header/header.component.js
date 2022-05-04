import React from "react";
import './header.styles.scss';
import logo from '../../../assets/cars.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-title-wrap">
                <Link data-testid="main-page-link" to={'/'} title={'Go to main page'}>
                    <img src={logo} className="header-title-wrap-img" alt="logo" />
                </Link>
                <div className="header-title-wrap-label-text">OFFERS</div>
            </div>
        </div>
    );
};

export default Header;