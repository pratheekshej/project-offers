import React, { Fragment, lazy, Suspense } from 'react';
import Loader from '../../assets/loaders/spinner-blue.gif';

const Header = lazy(() => import('../../core/components/header/header.component'));
const Body = lazy(() => import('../../core/components/body/body.component'));
const Offers = lazy(() => import('./offers/offers.component'));

const Home = () => {
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

    return (
        <Suspense fallback={PageLoader}>
            <Fragment>
                <Header />
                <Body>
                    <Offers />
                </Body>
            </Fragment>
        </Suspense>
    );
};

export default Home;