import React, { Fragment, lazy, Suspense } from 'react';
import Loader from '../../assets/loaders/spinner-blue.gif';

const Header = lazy(() => import('../../core/components/header/header.component'));
const Body = lazy(() => import('../../core/components/body/body.component'));

const PageLoader = (
    <Fragment>
        <div className="overlay-container loading"></div>
        <div className="loader-box">
            <div className="loader">
                <img src={Loader} alt="loader" />
            </div>
        </div>
    </Fragment>
);

const Home = () => {
    return (
        <Suspense fallback={PageLoader}>
            <Fragment>
                <Header />
                <Body />
            </Fragment>
        </Suspense>
    );
};

export default Home;