/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GridBlockComponent from "./grid-types/grid-block/grid-block.component";
import TableComponent from "./grid-types/table/table.component";
import './grid.styles.scss';

const Grid = (props) => {
    const {
        gridVal = 'offers',
        gridType = 'table',
        dataList = []
    } = props;

    const [gridDataList, setGridDataList] = useState(dataList);

    useEffect(() => {
        if (dataList && dataList.length) {
            switch (gridVal) {
                case 'offers':
                    let tableData = [];
                    dataList.forEach(data => {
                        const obj = {
                            images: data?.splashImages ? data?.splashImages : [],
                            image: data?.carGroupInfo?.modelExample?.imageUrl, // data?.splashImages ? data?.splashImages[0]?.url : 'No data',
                            name: data?.carGroupInfo?.modelExample?.name, // data?.['description'],
                            price: `${data['prices']['totalPrice']['amount']['currency']} ${data['prices']['totalPrice']['amount']['value']}`,
                            ...data
                        };
                        tableData.push(obj);
                    });
                    setGridDataList(tableData);
                    break;
                default:
                    setGridDataList(dataList);
                    break;
            }
        }
    }, [dataList]);

    return (
        <div className="grid-container">
            {(() => {
                switch (gridType) {
                    case 'grid-block':
                        return <GridBlockComponent gridData={gridDataList} />
                    default:
                        return <TableComponent gridVal={gridVal} gridDataList={gridDataList} />
                }
            })()}
        </div>
    );
};

export default Grid;