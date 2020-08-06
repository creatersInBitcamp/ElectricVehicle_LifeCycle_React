import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import Breadcrumb from "../../common/breadcrumb";
import PageNotFound from "../../common/404";
import {posts} from '../data'

const ClassicBoardDetails = () => {
        // const [post, setPost] = useState({})
        const match = useRouteMatch('/board/details/:postId')
        // const {post} = useSelector((state) => {
        //     let postId = macth.params.postId
        //     return {
        //         post: state.data.posts.find(el => el.postId == postId)
        //     }
        // })
        // useEffect(() => {
        //     setPost(
        //         posts.filter( post => {
        //             return post.postId === match
        //         })
        //     )
        // })

        return (
            <div>
                {/*Blog Details section*/}
                {(true)?
                    <>
                    <Breadcrumb title={'Board - Details'}/>
                    <section className="blog-detail-page section-b-space">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 blog-detail">
                                    {/*<img src={post.img} className="img-fluid" alt=""/>*/}
                                    <h3>{match}</h3>
                                    <ul className="post-social">
                                        {/*<li>{post.dateTime}</li>*/}
                                        {/*<li>Posted By :{post.name}</li>*/}
                                        {/*<li><i className="fa fa-heart"/> {post.hits} Hits</li>*/}
                                        {/*<li><i className="fa fa-comments"/> {post.comments.length} Comment</li>*/}
                                    </ul>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            {/*<p>{post.content}</p>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row section-b-space">
                                <div className="col-sm-12">
                                    <ul className="comment-section">
                                        <li>
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`}
                                                     alt="Generic placeholder image"/>
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
                                                       placeholder="Enter Your name" required=""/>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" id="email"
                                                       placeholder="Email"
                                                       required=""/>
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
                    </>
                    :
                    <PageNotFound/>}
            </div>
        )
}

export default ClassicBoardDetails