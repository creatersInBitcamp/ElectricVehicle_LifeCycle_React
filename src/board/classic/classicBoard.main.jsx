import React, {useEffect} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {posts} from '../data'
import Recent from "./recent";
import Media from "./media";

const ClassicBoardMain = () => {
        useEffect(()=>{
            console.log('useEffect on')

        })
        return (
            <div>
                <Breadcrumb title={'Board'}/>
                
                {/*Blog Details section*/}
                <section className="section-b-space  blog-page">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="blog-sidebar">
                                    <div className="theme-card">
                                        <h4>Recent Post</h4>
                                        <ul className="recent-blog">
                                            { posts.map( post => (<Recent post={post} key={post.postId}/>) )}
                                        </ul>
                                    </div>
                                    <div className="theme-card">
                                        <h4>Popular Post</h4>
                                        <ul className="popular-blog">
                                            <li>
                                                <div className="media">
                                                    <div className="blog-date">
                                                        <span>03 </span>
                                                        <span>may</span>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <h6>Injected humour the like</h6>
                                                        <p>0 hits</p>
                                                    </div>
                                                </div>
                                                <p>it look like readable English. Many desktop publishing text. </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-9 col-lg-8 col-md-7 order-sec">
                                <div className="row blog-media">
                                    {posts.map( post => (<Media post={post} key={post.postId}/>))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        )
}

export default ClassicBoardMain