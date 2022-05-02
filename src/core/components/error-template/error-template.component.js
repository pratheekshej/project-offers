import React from 'react';
import './error-template.styles.scss';
import warningLogo from '../../../assets/warning-icon-png.png';

const ErrorTemplateComponent = () => {
    return (
        <div className='error-container'>
            <img src={warningLogo} alt="" className='warning' />
            <h1>Something went <span>wrong!!!</span></h1>
        </div>
    );
};

export default ErrorTemplateComponent;
