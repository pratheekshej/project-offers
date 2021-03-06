/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { APP_SER } from "../../services/data-serializer";
import CardComponent from "../card/card.component";
import './grid.styles.scss';

const Grid = (props) => {
    const {
        gridVal = 'offers',
        gridTitle = 'Offers for special brands',
        dataList = []
    } = props;

    const [gridDataList, setGridDataList] = useState(dataList);

    useEffect(() => {
        if (dataList && dataList.length) {
            switch (gridVal) {
                case 'offers':
                    let tableData = [];
                    tableData = dataList.map(data => APP_SER.OFFER(data));
                    setGridDataList(tableData);
                    break;
                default:
                    setGridDataList(dataList);
                    break;
            }
        } else if (dataList == null) {
            throw new Error('Data list is NULL!!!');
        }
    }, [dataList]);

    return (
        <div className="grid-container">
            <div className='grid-container-title' data-testid="grid-title">{gridTitle}</div>
            <div className='grid-container-block' data-testid="grid-data-content">
                {
                    gridDataList.map(data => {
                        return (
                            <Fragment key={data?.id}>
                                <CardComponent {...data} />
                            </Fragment>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Grid;