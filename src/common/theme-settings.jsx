import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import { useTranslate  } from 'react-redux-multilingual'

import {SlideUpDown} from "../atomic/services/script"
import { ToastContainer } from 'react-toastify';

const ThemeSettings = () => {

    const [divName, setDivName] = useState('RTL')
    const [themeLayout, setThemeLayout] = useState(false)

    useEffect(()=>{
        SlideUpDown('setting-title');
        window.addEventListener('scroll', handleScroll)
        return()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 600) {
            document.querySelector(".tap-top").style = "display: block";
        } else {
            document.querySelector(".tap-top").style = "display: none";
        }
    }

    const clickToTop = () => {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }

    const openSetting = () => {
        document.getElementById("setting_box").classList.add('open-setting');
        document.getElementById("setting-icon").classList.add('open-icon');
    }
    const closeSetting = () => {
        document.getElementById("setting_box").classList.remove('open-setting');
        document.getElementById("setting-icon").classList.remove('open-icon');
    }

    // Color Picker
    const changeColor = (e, color) => {
        const elems = document.querySelectorAll(".color-box li");
        [].forEach.call(elems, function(elemt) {
            elemt.classList.remove('active');
        })

        e.target.classList.add('active');
        console.log(color)
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/`+color+`.css` );
    }

    const ChangeRtl = divName => {
        if(divName === 'RTL') {
            document.body.classList.add('rtl');
            setDivName('LTR')
        }else{
            document.body.classList.remove('rtl');
            setDivName('RTL')
        }
    }

    const changeThemeLayout = () => {
        setThemeLayout(!themeLayout)
    }

    if(themeLayout){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }
    const tap_to_top = { display: 'none' }

    const translate = useTranslate();

    return <>
        <div>
            <a href="javascript:void(0)" onClick={() => openSetting()}>
                <div className="setting-sidebar" id="setting-icon">
                    <div>
                        <i className="fa fa-cog" aria-hidden="true"/>
                    </div>
                </div>
            </a>
            <div id="setting_box" className="setting-box">
                <a href="javascript:void(0)" className="overlay" onClick={() => closeSetting()}/>
                <div className="setting_box_body">
                    <div onClick={() => closeSetting()}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"/> Back
                        </div>
                    </div>
                    <div className="setting-body">
                        <div className="setting-title">
                            <h4>layout</h4>
                        </div>
                        <div className="setting-contant">
                            <div className="row demo-section">
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo1"/>
                                        <div className="demo-text">
                                            <h4>Fashion</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/fashion`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo21">
                                            <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                            </div>
                                        </div>
                                        <div className="demo-text">
                                            <h4>furniture</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/furniture`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo7">
                                            <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                            </div>
                                        </div>
                                        <div className="demo-text">
                                            <h4>kids</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/kids`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo48">
                                            <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                            </div>
                                        </div>
                                        <div className="demo-text">
                                            <h4>pets</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/pets`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo10">
                                            <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                            </div>
                                        </div>
                                        <div className="demo-text">
                                            <h4>vegetables</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/vegetables`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo6">
                                            <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                            </div>
                                        </div>
                                        <div className="demo-text">
                                            <h4>watch</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/watch`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo11">
                                            <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                            </div>
                                        </div>
                                        <div className="demo-text">
                                            <h4>beauty</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/beauty`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo16">
                                            <div className="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                            </div>
                                        </div>
                                        <div className="demo-text">
                                            <h4>electronics</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/electronic`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setting-title">
                            <h4>shop</h4>
                        </div>
                        <div className="setting-contant">
                            <div className="row demo-section">
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo22"/>
                                        <div className="demo-text">
                                            <h4>left sidebar</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo24"/>
                                        <div className="demo-text">
                                            <h4>right sidebar</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/right-sidebar/collection`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo23"/>
                                        <div className="demo-text">
                                            <h4>no sidebar</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo52"/>
                                        <div className="demo-text">
                                            <h4>metro</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/metro/collection`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo53"/>
                                        <div className="demo-text">
                                            <h4>full width</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/full-width/collection`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setting-title">
                            <h4>product</h4>
                        </div>
                        <div className="setting-contant">
                            <div className="row demo-section">
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo33"/>
                                        <div className="demo-text">
                                            <h4>left sidebar</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo36"/>
                                        <div className="demo-text">
                                            <h4>right sidebar</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/right-sidebar/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>no sidebar</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>col left</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/col-left/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>col right</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/col-right/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>accordian</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/accordian/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>column</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/column/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>left image</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/left-image/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>right image</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/right-image/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 text-center demo-effects">
                                    <div className="set-position">
                                        <div className="layout-container demo34"/>
                                        <div className="demo-text">
                                            <h4>vertical</h4>
                                            <div className="btn-group demo-btn" role="group"
                                                 aria-label="Basic example">
                                                <Link to={`${process.env.PUBLIC_URL}/vertical/product/1`}
                                                      className="btn new-tab-btn">Preview
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setting-title">
                            <h4>color option</h4>
                        </div>
                        <div className="setting-contant">
                            <ul className="color-box">
                                <li className="color1 active" onClick={(e) => changeColor(e, 'color1')}/>
                                <li className="color2" onClick={(e) => changeColor(e, 'color2')}/>
                                <li className="color3" onClick={(e) => changeColor(e, 'color3')}/>
                                <li className="color4" onClick={(e) => changeColor(e, 'color4')}/>
                                <li className="color5" onClick={(e) => changeColor(e, 'color5')}/>
                                <li className="color6" onClick={(e) => changeColor(e, 'color6')}/>
                                <li className="color7" onClick={(e) => changeColor(e, 'color7')}/>
                                <li className="color8" onClick={(e) => changeColor(e, 'color8')}/>
                                <li className="color9" onClick={(e) => changeColor(e, 'color9')}/>
                                <li className="color10" onClick={(e) => changeColor(e, 'color10')}/>
                                <li className="color11" onClick={(e) => changeColor(e, 'color11')}/>
                                <li className="color12" onClick={(e) => changeColor(e, 'color12')}/>
                                <li className="color13" onClick={(e) => changeColor(e, 'color13')}/>
                                <li className="color14" onClick={(e) => changeColor(e, 'color14')}/>
                                <li className="color15" onClick={(e) => changeColor(e, 'color15')}/>
                                <li className="color16" onClick={(e) => changeColor(e, 'color16')}/>
                                <li className="color17" onClick={(e) => changeColor(e, 'color17')}/>
                                <li className="color18" onClick={(e) => changeColor(e, 'color18')}/>
                            </ul>
                        </div>
                        <div className="setting-title">
                            <h4>RTL</h4>
                        </div>
                        <div className="setting-contant">
                            <ul className="setting_buttons">
                                <li className="active" id="ltr_btn">
                                    <a href={null} className="btn setting_btn" onClick={()=>ChangeRtl(divName)}>
                                        {divName}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="buy_btn">
                            <a href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=1"
                               target="_blank" className="btn btn-block purchase_btn">
                                <i className="fa fa-shopping-cart" aria-hidden="true"/> purchase Multikart now!</a>
                            <a href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3"
                               target="_blank" className="btn btn-block purchase_btn">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/angular.png`} alt="" className="img-fluid" /> Multikart Angular</a>
                            <a href="https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967"
                               target="_blank" className="btn btn-block purchase_btn">
                                <img src="" alt="" className="img-fluid" /> Multikart HTML</a>
                            <a href="https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1"
                               target="_blank" className="btn btn-block purchase_btn">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/shopify.png`} alt="" className="img-fluid" /> Multikart Shopify</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-btn dark-light-btn">
                <div className="dark-light">
                    <div
                        className="theme-layout-version"
                        onClick={()=>changeThemeLayout}
                    >{themeLayout?'Light':'Dark'}</div>
                </div>
            </div>
            <div className="tap-top" onClick={clickToTop} style={tap_to_top}>
                <div>
                    <i className="fa fa-angle-double-up"/>
                </div>
            </div>
            <ToastContainer/>
        </div>
    </>
}
export default ThemeSettings
