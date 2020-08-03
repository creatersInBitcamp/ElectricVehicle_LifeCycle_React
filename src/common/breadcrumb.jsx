import React from 'react';
import {Link} from 'react-router-dom'

const Breadcrumb = props => {

    return <>
        <div className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="page-title">
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <nav aria-label="breadcrumb" className="theme-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                {props.parent?
                                    <li className="breadcrumb-item" aria-current="page">{props.parent}</li>:''}
                                <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Breadcrumb;