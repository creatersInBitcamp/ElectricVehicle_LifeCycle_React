import React from 'react'

const footerTypes = {REQUEST: 'footer/REQUEST'}
const footerReducer = (state={}, action) => {
    switch (action.type) {
        case footerTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 footer-copyright">
                            <p className="mb-0">Copyright 2020 © ElectricCar All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p className="pull-right mb-0">Hand crafted & made with</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footerReducer
