import React from 'react';
import Slider from 'react-slick';

import Breadcrumb from "../common/breadcrumb";
import {Slider2, Team4} from "../atomic/services/script"

// image
import img from '../assets/images/team/1.jpg'
import aboutus from '../assets/images/about/model-s-hero-social.jpg'
import rudduf from '../assets/images/about/avtar/rudduf.png'
import gudxo from '../assets/images/about/avtar/gudxo.png'
import wnsghk from '../assets/images/about/avtar/wnsghk.png'
import tnqls from '../assets/images/about/avtar/tnqls.png'

const aboutUs = () => {


        return (
            <div>
                <Breadcrumb title={'About Us'}/>

                {/*about section*/}
                <section className="about-page  section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-section">
                                    <img src={aboutus} className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium,</p>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                                    desire, that they cannot foresee the pain and trouble that are bound to ensue; and
                                    equal blame belongs to those who fail in their duty through weakness of will, which
                                    is the same as saying through shrinking from toil and pain. These cases are
                                    perfectly simple and easy to distinguish. In a free hour, when our power of choice
                                    is untrammelled and when nothing prevents our being able to do what we like best,
                                    every pleasure is to be welcomed and every pain avoided. But in certain
                                    circumstances and owing to the claims of duty or the obligations of business it will
                                    frequently occur that pleasures have to be repudiated and annoyances accepted. The
                                    wise man therefore always holds in these matters to this principle of selection: he
                                    rejects pleasures to secure other greater pleasures, or else he endures pains to
                                    avoid worse pains.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Testimonial*/}
                <section className="testimonial small-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Slider {...Slider2} className="slide-2 testimonial-slider no-arrow">
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={rudduf} alt="#" />
                                                <h5>곽 경 열</h5>
                                                <h6>Admin Part</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={gudxo} alt="#" />
                                                <h5>이 형 태</h5>
                                                <h6>PM, Board Part, etc</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더 많이 잃은 것이며, 용기를 잃은 사람은
                                                    모든 것을 잃은 것이다.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={wnsghk} alt="#" />
                                                <h5>이 준 화</h5>
                                                <h6>Map, New Car Part</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>나이가 들면 손이 두개라는 걸 발견하게 된다. 한 손은 너 자신을 돕는 손이고,
                                                    다른 한 손은 다른 사람을 돕는 손이다.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={tnqls} alt="#" />
                                                <h5>김 수 빈</h5>
                                                <h6>Used Car Part</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>장벽이 서 있는 것은 가로막기 위함이 아니라, 그것은 우리에게 얼마나 간절히 원하는지
                                                    보여줄 기회를 주기 위해 거기 서 있는 것이다.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Team Section*/}
                <section id="team" className="team section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Our Team</h2>
                                <Slider {...Team4} className="team-4">
                                    <div>
                                        <img src={img} className="img-fluid" alt=""/>
                                        <h4>곽 경 열</h4>
                                        <h6>Admin Part</h6>
                                    </div>
                                    <div>
                                        <img src={img} className="img-fluid" alt=""/>
                                        <h4>이 형 태</h4>
                                        <h6>PM, Board Part, etc</h6>
                                    </div>
                                    <div>
                                        <img src={img} className="img-fluid" alt=""/>
                                        <h4>이 준 화</h4>
                                        <h6>Map, New Car Part</h6>
                                    </div>
                                    <div>
                                        <img src={img} className="img-fluid" alt=""/>
                                        <h4>김 수 빈</h4>
                                        <h6>Used Car Part</h6>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
}

export default aboutUs