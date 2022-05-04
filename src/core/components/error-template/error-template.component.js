import React from 'react';
import './error-template.styles.scss';
import warningLogo from '../../../assets/warning-icon-png.png';

const ErrorTemplateComponent = ({ error }) => {
    return (
        <div className='error-container'>
            <img src={warningLogo} alt="" className='warning' />
            <h1>Something went wrong !!!</h1>
            {
                error && (error.message && error.stack) && (
                    <div className='error-content' data-testid="error-content-block">
                        <div className='message'>
                            {error.message}
                        </div>
                        <div className='body'>
                            {error.stack}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorTemplateComponent;
