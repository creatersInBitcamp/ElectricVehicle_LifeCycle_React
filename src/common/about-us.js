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
                                <h4>내연기관의 종말, 엔진 멸종시대 곧 닥친다.</h4>
                                <p>"기존 내연기관은 전기차로 대표되는 배출가스 없는 차량시대 도래를 위한 교량 역할을 담당하게 될 것이다."</p>
                                <p>독일 프랑크푸르트에서 열린 국제 모터쇼에서 마티아스 뮐러 폴크스바겐그룹 이사회 회장은 2025년까지 80종의 새로운 전기차를
                                    출시하겠다는 '로드맵 E'를 발표했다. 그는 "모호한 선언이 아니다. 우리가 변화를 선도할 것"이라고 했다.
                                    자동차 산업의 중심이었던 내연기관이 '조연'으로 전락하는 순간이었다.</p>
                                <p>네덜란드와 노르웨이는 2025년, 영국과 프랑스는 2040년에 가솔린과 디젤 엔진 차량의 판매를 금지한다고 밝혔다. 지난달엔 중국 공업정보화부의 신궈빈 부부장(차관)이 "내연기관 자동차의 생산과 판매를 중단하기 위한 일정표를 마련 중"이라고 밝히기도 했다. 업계에서는 중국이 2040년부터 내연기관차를 금지할 것으로 예상한다. 국내에서도 2030년부터 내연기관 차량의 판매를 전면 금지하는 법안이 발의된 상태다.</p>

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