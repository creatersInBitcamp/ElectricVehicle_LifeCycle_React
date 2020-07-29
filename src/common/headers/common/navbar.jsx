import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { right: '0px' }
        }
    }

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px' } })
        }
    }

    openNav() {
        console.log('open')
        this.setState({ navClose: { right: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { right: '-410px' } })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    render() {
        const { translate } = this.props;
        return (
            <div>
                <div className="main-navbar">
                    <div id="main-nav" >
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"/>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"/>
                                </div>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {translate('admin')}
                                    <span className="sub-arrow"/>
                                </Link>
                                <ul className="nav-submenu" >
                                    <li><Link to={`${process.env.PUBLIC_URL}/admin/login`} >{translate('login')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/admin/dashboard`} >{translate('dashboard')}</Link></li>
                                </ul>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {translate('new_car')}
                                    <span className="sub-arrow"/>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >{translate('products')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`} >{translate('left_sidebar')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/checkout`} >{translate('checkout')}</Link></li>
                                </ul>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {translate('used_car')}
                                    <span className="sub-arrow"/>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >{translate('products')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`} >{translate('left_sidebar')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/checkout`} >{translate('checkout')}</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {translate('map')}
                                    <span className="sub-arrow"/>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`${process.env.PUBLIC_URL}/contact`} >{translate('contact')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/map`} >{translate('map')}</Link></li>
                                </ul>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {translate('board')}
                                    <span className="sub-arrow"/>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`${process.env.PUBLIC_URL}/blog/right-sidebar`} >{translate('blog_right_sidebar')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/blog/details`} >{translate('blog_detail')}</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/blog/board-main`} >{translate('blog_board_main')}</Link></li>
                                </ul>
                            </li>
                            <li className="mega-menu">
                                <Link to="#" className="dropdown" onClick={(e) => this.handleSubmenu(e)}>
                                    {translate('features')}
                                    <span className="sub-arrow"/>
                                </Link>
                                <div className="mega-menu-container" >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {translate('portfolio')}
                                                            <span className="sub-arrow"/>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/portfolio-grid/2`} >{translate('portfolio_grid_2')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/portfolio-grid/3`} >{translate('portfolio_grid_3')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/portfolio-grid/4`} >{translate('portfolio_grid_4')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/portfolio-masonary/2`} >{translate('portfolio_masonary_2')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/portfolio-masonary/3`} >{translate('portfolio_masonary_3')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/portfolio-masonary/4`} >{translate('portfolio_masonary_4')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/portfolio-masonary/full`} >{translate('portfolio_masonary_full')}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {translate('theme_elements')}
                                                            <span className="sub-arrow"/>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-title`} >{translate('element_title')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-banner`} >{translate('collection_banner')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-slider`} >{translate('home_slider')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-category`} >{translate('category')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-service`} >{translate('service')}</Link></li>
                                                            {/*<li><Link to={`${process.env.PUBLIC_URL}/features/element-ratio`} >{translate('image_size_ratio')}</Link></li>*/}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {translate('product_elements')}
                                                            <span className="sub-arrow"/>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li className="up-text"><Link to={`${process.env.PUBLIC_URL}/features/element-product-box`} >{translate('product_box')}<span>10+</span></Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-product-slider`} >{translate('product_slider')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} >{translate('no_slider')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} >{translate('multi_slider')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/features/element-product-tab`} >{translate('tab')}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {translate('email_template')}
                                                            <span className="sub-arrow"/>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/email-template.html`} target="_blank">{translate('order_success')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/email-template-two.html`} target="_blank">{translate('order_success')}2</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/email-order-success.html`} target="_blank">{translate('email_template')}</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/email-order-success-two.html`} target="_blank">{translate('email_template')}2</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(NavBar);