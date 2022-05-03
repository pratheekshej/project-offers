import React from "react";
import Offers from "../../../routes/home/offers/offers.component";
import './body.styles.scss';

const Body = () => {
    return (
        <div className="body-container" data-testid="body-content">
            <Offers />
        </div>
    );
}

export default Body;