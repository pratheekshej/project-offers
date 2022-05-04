import React from 'react';
import './component-loader.styles.scss';

const InLoader = (props) => {
    const {
        loaderText = null
    } = props;
    return (
        <div className="in-loader" data-testid="in-loader-elem">
            <div className="in-loader-icon"></div>
            {loaderText ? <div data-testid="loading">{loaderText}</div> : null}
        </div>
    );
};

export default InLoader