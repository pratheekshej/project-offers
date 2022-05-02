/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { gridData } from '../../../core/components/grid/grid-data/grid-data';
import Grid from '../../../core/components/grid/grid.component';
import { APP_APIS } from '../../../core/services/app-apis';
import { setPageLoader } from '../../../redux/app/app.actions';
import './offers.styles.scss';

const Offers = () => {
    const [offerList, setOfferList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageLoader(true));
        fetch(APP_APIS.OFFERS)
            .then((res) => res.json())
            .then((json) => {
                let { offers } = json;
                setOfferList(offers);
                dispatch(setPageLoader(false));
            }).catch(err => {
                let { offers } = gridData?.offerData;
                setOfferList(offers);
                dispatch(setPageLoader(false));
            });
    }, []);

    return <Grid gridTitle="Offers List" gridType='grid-block' dataList={offerList} />;
};

export default Offers;