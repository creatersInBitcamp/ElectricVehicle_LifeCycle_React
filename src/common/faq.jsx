import React from 'react';
import Breadcrumb from "../common/breadcrumb";

const Faq = () => {

        return (
            <div>
                <Breadcrumb title={'Faq'}/>
                
                {/*Dashboard section*/}
                <section className="faq-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="accordion theme-accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                    How can I downgrade to an earlier version of Dummy Content?
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>it look like readable English. Many desktop publishing packages and
                                                    web page editors now use Lorem Ipsum as their default model text,
                                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                                    their infancy. Various versions have evolved over the years,All the
                                                    Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the
                                                    Internet. It uses a dictionary of over 200 Latin words, combined
                                                    with a handful of model sentence structures</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
}

export default Faq