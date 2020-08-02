import React from 'react';
import {Link} from 'react-router-dom'

const Sidebar = () => {
    const closeNav = () => {
        const closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    const handleSubmenu = e => {
        if (e.target.classList.contains('sub-arrow'))
            return;

        if(e.target.nextElementSibling.classList.contains('opensub1'))
            e.target.nextElementSibling.classList.remove('opensub1')
        else{
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            e.target.nextElementSibling.classList.add('opensub1')
        }
    }
    const handleSubTwoMenu = e => {
        if (e.target.classList.contains('sub-arrow'))
            return;

        if(e.target.nextElementSibling.classList.contains('opensub2'))
            e.target.nextElementSibling.classList.remove('opensub2')
        else{
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            e.target.nextElementSibling.classList.add('opensub2')
        }
    }
    const handleSubThreeMenu = e => {
        if (e.target.classList.contains('sub-arrow'))
            return;

        if(e.target.nextElementSibling.classList.contains('opensub3'))
            e.target.nextElementSibling.classList.remove('opensub3')
        else{
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            e.target.nextElementSibling.classList.add('opensub3')
        }
    }
    const handleSubFourMenu = e => {
        if (e.target.classList.contains('sub-arrow'))
            return;

        if(e.target.nextElementSibling.classList.contains('opensub4'))
            e.target.nextElementSibling.classList.remove('opensub4')
        else{
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            e.target.nextElementSibling.classList.add('opensub4')
        }
    }

    const handleMegaSubmenu = e => {
        if (e.target.classList.contains('sub-arrow'))
            return;

        if(e.target.nextElementSibling.classList.contains('opensidesubmenu'))
            e.target.nextElementSibling.classList.remove('opensidesubmenu')
        else{
            e.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }

    return <>
        <div id="mySidenav" className="sidenav">
            <a className="sidebar-overlay" onClick={closeNav}/>
            <nav>
                <a onClick={closeNav}>
                    <div className="sidebar-back text-left">
                        <i className="fa fa-angle-left pr-2" aria-hidden="true"/> Back
                    </div>
                </a>
                <ul id="sub-menu" className="sidebar-menu">
                    <li>
                        <Link to="#" onClick={handleMegaSubmenu}>
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
                        <Link to="#" onClick={handleSubmenu}>
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
                                <Link to="#" onClick={handleSubTwoMenu} >
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
                        <Link to="#" onClick={handleSubmenu}>
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
                        <Link to="#" onClick={handleSubmenu}>
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
                                <Link to="#" onClick={handleSubTwoMenu} >
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
                                        <Link to="#" onClick={handleSubThreeMenu} >
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
                                                <Link to="#" onClick={handleSubFourMenu} >
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
                        <Link to="#" onClick={handleSubmenu}>
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
                                <Link to="#" onClick={handleSubTwoMenu}>
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
    </>
}
export default Sidebar