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
        setTimeout(() => {
            fetch(APP_APIS.OFFERS).then((res) => res.json()).then((response) => {
                dispatch(setPageLoader(false));
                try {
                    let { offers } = response;
                    setOfferList(offers);
                } catch (e) {
                    handleError(e);
                }
            }).catch(err => {
                handleError(err);
                dispatch(setPageLoader(false));
            });
        }, 1500);
    }, []);

    // UNCOMMENT : (To see the results if the offers API call throws error in the above defined hook)
    /* useEffect(() => {
        let { offers } = APP_APIS.OFFERS_JSON;
        setOfferList(offers);
    }, []); */

    return (
        <Grid
            gridTitle="SPECIAL BRAND OFFERS"
            dataList={offerList} />
    );
};

export default Offers;