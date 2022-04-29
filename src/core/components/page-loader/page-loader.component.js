import React, { Fragment } from 'react';
import './page-loader.styles.scss';
import Loader from '../../../assets/loaders/spinner-blue.gif';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getPageLoader } from '../../../redux/app/app.selector';

const PageLoader = ({ loading }) => {
    return (
        <Fragment>
            {
                loading ? (
                    <Fragment>
                        <div className="overlay-container loading"></div>
                        <div className="loader-container">
                            <div className="loader">
                                <img src={Loader} alt="loader" />
                            </div>
                        </div>
                    </Fragment>
                ) : null
            }
        </Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    loading: getPageLoader
});

export default connect(mapStateToProps)(PageLoader);