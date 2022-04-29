/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { gridData } from '../../../core/components/grid/grid-data/grid-data';
import Grid from '../../../core/components/grid/grid.component';
import { setPageLoader } from '../../../redux/app/app.actions';
import './offers.styles.scss';

const Offers = () => {
    const [offerList, setOfferList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageLoader(true));
        fetch("http://cdn.sixt.io/codingtask/offers.json")
            .then((res) => res.json())
            .then((json) => {
                let { offers } = json;
                setOfferList(offers);
                dispatch(setPageLoader(false));
            }).catch(err => {
                let { offers } = gridData['offerData'];
                setOfferList(offers);
                dispatch(setPageLoader(false));
            });
    }, []);

    return (
        <div className='offers-container'>
            <div className='offers-container-title'></div>
            <Grid gridTitle="Offers List" gridType='grid-block' dataList={offerList} />
        </div>
    );
};

export default Offers;