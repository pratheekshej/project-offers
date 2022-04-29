import React, { Fragment } from 'react';
import { gridData } from '../../grid-data/grid-data';
import './table.styles.scss';

const TableComponent = (props) => {
    const {
        gridVal,
        gridDataList
    } = props;

    let colHeaders = gridData[gridVal]['headers'] || [];
    let colValueList = gridData[gridVal]['dataKeys'] || [];

    return (
        <Fragment>
            <div className="table-grid">
                <div className="table-header">
                    <div className="row">
                        {
                            colHeaders.map(col => {
                                let { title } = col;
                                return (<div className="col" key={title}>{title}</div>);
                            })
                        }
                    </div>
                </div>
                <div className="table-body">
                    {(gridDataList && gridDataList.length) ?
                        gridDataList.map((row, i) => {
                            return (
                                <div className="row" key={i}>
                                    {(colValueList && colValueList.length) ?
                                        colValueList.map((col, kIndex) => {
                                            let { key } = col;
                                            switch (key) {
                                                default:
                                                    return (
                                                        <div className="col" key={`${row[key]}__${kIndex}`}>{row[key]}</div>
                                                    );
                                            }
                                        }) :
                                        null
                                    }
                                </div>
                            );
                        }) :
                        null
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default TableComponent;
