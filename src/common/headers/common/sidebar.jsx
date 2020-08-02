import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const SideBar = () => {


   const closeNav = () => {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

   const handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else{
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }
   const handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else{
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
   const handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else{
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }
   const handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else{
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

   const handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else{
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }
    const handleSuTwobmenu = () => {}

        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={closeNav}/>
                <nav>
                    <a onClick={closeNav}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"/> Back
                        </div>
                    </a>
                    <ul id="sub-menu" className="sidebar-menu">
                        <li>
                            <Link to="#" onClick={(e) => handleMegaSubmenu(e)}>
                                clothing
                                <span className="sub-arrow"/>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>women's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">dresses</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">skirts</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">westarn wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ethic wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">sport wear</Link>
                                                    </li>
                                                </ul>
                                                <h5>men's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">sports wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">western wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ethic wear</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>accessories</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">fashion jewellery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">caps and hats</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">precious jewellery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">necklaces</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">earrings</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">wrist wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ties</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">cufflinks</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">pockets squares</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <a href="#" className="mega-menu-banner">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/fashion.jpg`} alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => handleSubmenu(e)}>
                                bags
                                <span className="sub-arrow"/>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="#">shopper bags</Link>
                                </li>
                                <li>
                                    <Link to="#">laptop bags</Link>
                                </li>
                                <li>
                                    <Link to="#">clutches</Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => handleSubTwoMenu(e)} >
                                        purses
                                        <span className="sub-arrow"/>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">purses</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wallets</Link>
                                        </li>
                                        <li>
                                            <Link to="#">leathers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">satchels</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => handleSubmenu(e)}>
                                footwear
                                <span className="sub-arrow"/>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="#">sport shoes</Link>
                                </li>
                                <li>
                                    <Link to="#">formal shoes</Link>
                                </li>
                                <li>
                                    <Link to="#">casual shoes</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" >
                                watches
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => handleSubmenu(e)}>
                                Accessories
                                <span className="sub-arrow"/>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="#">fashion jewellery</Link>
                                </li>
                                <li>
                                    <Link to="#">caps and hats</Link>
                                </li>
                                <li>
                                    <Link to="#">precious jewellery</Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => handleSubTwoMenu(e)} >
                                        more..
                                        <span className="sub-arrow"/>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">necklaces</Link>
                                        </li>
                                        <li>
                                            <Link to="#">earrings</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wrist wear</Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={(e) => handleSubThreeMenu(e)} >
                                                accessories
                                                <span className="sub-arrow"/>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="#">ties</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">cufflinks</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">pockets squares</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">helmets</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">scarves</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" onClick={(e) => handleSubFourMenu(e)} >
                                                        more...
                                                        <span className="sub-arrow"/>
                                                    </Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="#">accessory gift sets</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">travel accessories</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">phone cases</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">belts & more</Link>
                                        </li>
                                        <li>
                                            <Link to="#">wearable</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" >house of design</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => handleSubmenu(e)}>
                                beauty & personal care
                                <span className="sub-arrow"/>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="#">makeup</Link>
                                </li>
                                <li>
                                    <Link to="#">skincare</Link>
                                </li>
                                <li>
                                    <Link to="#">premium beaty</Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => handleSuTwobmenu(e)}>
                                        more
                                        <span className="sub-arrow"/>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">fragrances</Link>
                                        </li>
                                        <li>
                                            <Link to="#">luxury beauty</Link>
                                        </li>
                                        <li>
                                            <Link to="#">hair care</Link>
                                        </li>
                                        <li>
                                            <Link to="#">tools & brushes</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" >home & decor</Link>
                        </li>
                        <li>
                            <Link to="#" >kitchen</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        )
}


export default SideBar;