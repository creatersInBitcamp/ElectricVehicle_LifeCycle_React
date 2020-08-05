import React from 'react';
import data from '../../assets/data/reports';
import {Datatable} from '../common'

const report_tableTypes = {REQUEST: 'report_table/REQUEST'}
const report_tableReducer = ( state={}, action ) => {
    switch (action.type) {
        case report_tableTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Report_table = () => {
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

export default report_tableReducer
