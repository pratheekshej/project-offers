/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import './page-loader-with-hooks.styles.scss';
import Loader from '../../../../assets/loaders/spinner-blue.gif';
import { useSelector } from 'react-redux';
import { pageLoader } from '../../../../redux/app/app.selector';

const PageLoaderWithHooks = () => {
    const loading = useSelector(pageLoader);

    return (
        loading && (
            <Fragment>
                <div className="overlay-container loading"></div>
                <div className="loader-container" data-testid="page-loader">
                    <div className="loader">
                        <img src={Loader} alt="loader" />
                    </div>
                </div>
            </Fragment>
        )
    );
}

export default PageLoaderWithHooks;