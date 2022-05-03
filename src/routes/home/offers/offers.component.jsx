/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '../../../core/components/grid/grid.component';
import { APP_APIS } from '../../../core/services/app-apis';
import { setPageLoader } from '../../../redux/app/app.actions';
import { useErrorHandler } from 'react-error-boundary';
import './offers.styles.scss';

const Offers = () => {
    const [offerList, setOfferList] = useState([]);
    const dispatch = useDispatch();
    const handleError = useErrorHandler();

    useEffect(() => {
        dispatch(setPageLoader(true));
        fetch(APP_APIS.OFFERS).then((res) => res.json()).then((response) => {
            try {
                let { offers } = response;
                setOfferList(offers);
                dispatch(setPageLoader(false));
            } catch (e) {
                dispatch(setPageLoader(false));
                handleError(e);
            }
        }).catch(err => {
            handleError(err);
            dispatch(setPageLoader(false));
        });
    }, []);

    // UNCOMMENT : (To see the results if the offers API call throws error in the above defined hook)
    /* useEffect(() => {
        let { offers } = APP_APIS.OFFERS_JSON;
        setOfferList(offers);
    }, []); */

    return (
        <Grid
            gridTitle="Offers for special brands"
            dataList={offerList} />
    );
};

export default Offers;