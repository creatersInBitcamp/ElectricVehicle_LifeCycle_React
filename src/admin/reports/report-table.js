import React, { Component, Fragment } from 'react';
import data from '../../assets/data/reports';
import Datatable from '../common/datatable'

const Report_table = () => {
        return (
            <>
                <div className="translation-list">
                    <Datatable
                        multiSelectOption={false}
                        myData={data}
                        pageSize={12}
                        pagination={false}
                        class="-striped -highlight"
                    />
                </div>
            </>
        )
}

export default Report_table
