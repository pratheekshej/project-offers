import React, { Fragment } from 'react';
import Body from '../../core/components/body/body.component';
import Header from '../../core/components/header/header.component';

const Home = (props) => {
    return (
        <Fragment>
            <Header {...props} />
            <Body />
        </Fragment>
    );
};

export default Home;