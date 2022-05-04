import React from "react";
import './body.styles.scss';

const Body = (props) => {
    return (
        <div className="body-container" data-testid="body-content">
            {props.children}
        </div>
    );
}

export default Body;