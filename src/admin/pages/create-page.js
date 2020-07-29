import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Tabset_page from './tabset-page';

const Create_page = () => {
        return (
            <>
                <Breadcrumb title="Create Page" parent="Pages" />
                <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h5>Add Page</h5>
                    </div>
                    <div className="card-body">
                     <Tabset_page/>
                    </div>
                </div>
            </div>
            </>
        )
}

export default Create_page
