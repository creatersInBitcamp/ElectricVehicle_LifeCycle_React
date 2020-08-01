import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'react-toastify/dist/ReactToastify.css';
import myData from './data-charging-station';

export class Datatable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            myData: this.props.myData
        }
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const { pageSize, pagination } = this.props;

        const columns = [];
        for (var key in myData[0]) {
            if ((key === 'unit_name') || (key === 'charger_type') || (key === 'address')
                && (key === 'business_hours') || (key === 'agency_name') || (key === 'phone')
                || (key === 'charger_state')|| (key === 'address')){
                columns.push(
                    {
                        Header: <b>{this.Capitalize(key.toString())}</b>,
                        accessor: key,
                        style: {
                            textAlign: 'center'
                        }
                    });
            }
        }

        return (
            <>
                <ReactTable
                    data={myData}
                    columns={columns}
                    defaultPageSize={pageSize}
                    showPagination={pagination}
                />
            </>
        )
    }
}

export default Datatable
