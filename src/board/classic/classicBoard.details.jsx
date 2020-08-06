import React from 'react';
import Breadcrumb from "../../common/breadcrumb";

const ClassicBoardDetails = ({match}) => {
        const {postId} = match.params
        return (
            <div>
                <Breadcrumb title={'Board - Details'}/>

                {/*Blog Details section*/}
                <section className="blog-detail-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 blog-detail">
                                <img src={null} className="img-fluid" alt=""/>
                                <h3>Remaining essentially unchanged.</h3>
                                <ul className="post-social">
                                    <li>25 January 2018</li>
                                    <li>Posted By :{postId}</li>
                                    <li><i className="fa fa-heart"/> 5 Hits</li>
                                    <li><i className="fa fa-comments"/> 10 Comment</li>
                                </ul>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <p>Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id,
                                            imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue
                                            nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit
                                            commodo urna, id viverra libero tellus non ipsum. Fusce molestie ultrices nibh
                                            feugiat pretium. Donec pulvinar arcu metus, et dapibus odio condimentum id. Quisque
                                            malesuada mauris sit amet dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus
                                            nec molestie condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel
                                            magna. Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc fermentum
                                            vehicula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row section-b-space">
                            <div className="col-sm-12">
                                <ul className="comment-section">
                                    <li>
                                        <div className="media">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est
                                                        sit amet felis fringilla bibendum at at leo. Proin molestie ac
                                                        nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor.
                                                        Aenean nec felis dui. Integer tristique odio mi, in volutpat
                                                        metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem
                                                        hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget
                                                        lectus sit amet diam vestibulum varius. Suspendisse dignissim
                                                        mattis leo, nec facilisis erat tempor quis. Vestibulum eu
                                                        vestibulum ex. </p>
                                                </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row blog-contact">
                            <div className="col-sm-12">
                                <h2>Leave Your Comment</h2>
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name"
                                                   placeholder="Enter Your name" required="" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required="" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                            <textarea className="form-control" placeholder="Write Your Comment"
                                                      id="exampleFormControlTextarea1" rows="6"/>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
}

export default ClassicBoardDetails