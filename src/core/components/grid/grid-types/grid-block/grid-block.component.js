/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import CardComponent from '../../../card/card.component';
import './grid-block.styles.scss';

const GridBlockComponent = (props) => {
    const {
        gridData = [],
        gridTitle = 'Offers for special brands'
    } = props;

    return (
        <Fragment>
            <div className='grid-block-title'>{gridTitle}</div>
            <div className='grid-block-container'>
                {
                    gridData.map(data => {
                        return <CardComponent key={data?.name} {...data} />
                    })
                }
            </div>
        </Fragment>
    );
};

export default GridBlockComponent;
