import React, {useEffect, useState} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {Search} from "react-feather";

const datatableTypes = {REQUEST: 'datatable/REQUEST'}
const datatableReducer = (state={}, action) => {
    switch (action.type) {
        case datatableTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Datatable = (props) => {
    const [checkedValues, setCheckedValues] = useState([])
    const [myData, setMyData] = useState(props.myData)
    const [searchValue, setSearchValue] = useState('')
    const [searchbar, setSearchbar] = useState(false)

    const dispatch = useDispatch()

    const selectRow = (e, i) => {
        if (!e.target.checked) {
            setCheckedValues(checkedValues).filter((item, i) => i !== item)
        } else {
            checkedValues.push(i);
            setCheckedValues(checkedValues)
        }
    }

    const globalSearch = () => {
        let filteredData = props.myData.filter(value => {
            return ( value.car_name.includes(searchValue.toLowerCase())
            )
        });
        setMyData( filteredData );
        console.log(filteredData)
    };

    const handleSearchClick = () => {
        setSearchbar(!searchbar)

    }

    const onSearch = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
        globalSearch()
    }

    const handleRemoveRow = () => {
        const selectedValues = checkedValues;
        const updatedData = myData.filter(function (el) {

            return selectedValues.indexOf(el.id) < 0;
        });
            setMyData(updatedData)
        toast.success("Successfully Deleted !")
    };

    const renderEditable = (cellInfo) => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...myData];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    setMyData(data);
                }}
                dangerouslySetInnerHTML={{
                    __html: myData[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


        const { pageSize, myClass, multiSelectOption, pagination } = props;

        const columns = [];
        for (var key in myData[0]) {

            let editable = renderEditable
            if (key === "image") {
                editable = null;
            }
            if (key === "status") {
                editable = null;
            }
            if (key === "avtar") {
                editable = null;
            }
            if (key === "vendor") {
                editable = null;
            }
            if(key === "order_status"){
                editable = null;
            }
            if(key === 'id'){
                editable = null;
            }

            columns.push(
                {
                    Header: <b>{Capitalize(key.toString())}</b>,
                    accessor: key,
                    Cell: editable,
                    style: {
                        textAlign: 'center'
                    }
                });
        }

        if (multiSelectOption === true) {
            columns.push(
                {
                    Header: <button className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
                        onClick={
                            (e) => {
                                if (window.confirm('Are you sure you wish to delete this item?'))
                                    handleRemoveRow()
                            }}>Delete</button>,
                    id: 'delete',
                    accessor: any => 'delete',
                    sortable: false,
                    style: {
                        textAlign: 'center'
                    },
                    Cell: (row) => (
                        <div>
                            <span >
                                <input type="checkbox" name={row.original.id} defaultChecked={checkedValues.includes(row.original.id)}
                                    onChange={e => selectRow(e, row.original.id)} />
                            </span>
                        </div>
                    ),
                }
            )
        } else {
            columns.push(
                {
                    Header: <b>Action</b>,
                    id: 'delete',
                    accessor: str => "delete",
                    Cell: (row) => (
                        <div>
                            <span onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this item?')) {
                                    let data = myData;
                                    data.splice(row.index, 1);
                                    setMyData(data);
                                }
                                toast.success("Successfully Deleted !")

                            }}>
                                <i className="fa fa-trash" style={{ width: 35, fontSize: 20, padding: 11, color: '#e4566e' }}/>
                            </span>

                        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 20, padding: 11,color:'rgb(40, 167, 69)' }}/></span>
                    </div>
                ),
                style: {
                    textAlign: 'center'
                },
                sortable: false
            }
        )
        }

        return (
            <>
                <form className="form-inline search-form">
                    <div className="form-group">
                        <input className={"form-control-plaintext " + (searchbar ? 'open' : '')}
                               type="search" placeholder="Search.." value={searchValue|| ""} onChange={onSearch} />
                        <span className="d-sm-none mobile-search" onClick={handleSearchClick}><Search /></span>
                    </div>
                </form>
                <ReactTable
                    data={myData}
                    columns={columns}
                    defaultPageSize={pageSize}
                    className={myClass}
                    showPagination={pagination}

                />
                <ToastContainer />
            </>
        )

}

export default datatableReducer
