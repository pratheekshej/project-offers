import React from "react";
import Offers from "../../../routes/home/offers/offers.component";
import './body.styles.scss';

const Body = (props) => {
    return (
        <div className="body-container">
            <Offers />
        </div>
    );
}

export default Body;