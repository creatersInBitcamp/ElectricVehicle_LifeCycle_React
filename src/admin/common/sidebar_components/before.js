import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { MENUITEMS } from '../../../constants/menu';

// image import
import logo from '../../../assets/images/dashboard/08.png'
import man from '../../../assets/images/dashboard/man.png'
import SidebarManus from "./sidebar_manus";
import {AlignLeft, BarChart, Box, Camera, Clipboard, DollarSign, Home, LogIn, UserPlus, Users} from "react-feather";



const sidebar =() => {

    const [mainmenu, setmainmenu] = useState(MENUITEMS)


    useEffect(()=>{
        var currentUrl = window.location.pathname;

        mainmenu.filter(items => {
            if (!items.children) {
                if (items.path === currentUrl)
                    setNavActive(items)
                return false
            }
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        setNavActive(subSubItems)
                })
            })
        })
    })
    const setNavActive = (item)=> {

        MENUITEMS.filter(menuItem => {
            if (menuItem !== item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems !== item) {
                        submenuItems.active = false
                    }
                    if (submenuItems.children) {
                        submenuItems.children.map(childItem => {
                            childItem.active = false;
                        })
                        if (submenuItems.children.includes(item)) {
                            submenuItems.active = true
                            menuItem.active = true
                        }
                    }
                })
            }
        })
        item.active = !item.active
    }

    return (
        <>
            <div className="page-sidebar">
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
                            <img className="blur-up lazyloaded" src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="sidebar custom-scrollbar">
                    <div className="sidebar-user text-center">
                        <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="#" />
                        </div>
                        <h6 className="mt-3 f-14">곽 경 열</h6>
                        <p> ADMIN 담당개발자 </p>
                    </div>
                    <ul className="sidebar-menu">
                        {mainmenu.map((menuItem, i) =>
                            <li className={`${menuItem.active ? 'active' : ''}`} key={i}>
                                {(menuItem.sidebartitle) ?
                                    <div className="sidebar-title">{menuItem.sidebartitle}</div>
                                    : ''}
                                {(menuItem.type === 'sub') ?
                                    <a className="sidebar-header " onClick={setNavActive(menuItem)}>
                                        <menuItem.icon />
                                        <span>{menuItem.title}</span>
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </a>
                                    : ''}
                                {(menuItem.type === 'link') ?
                                    <Link
                                        to={`${process.env.PUBLIC_URL}${menuItem.path}`}
                                        className={`sidebar-header ${menuItem.active ? 'active' : ''}`}

                                        onClick={setNavActive(menuItem)}
                                    >
                                        <menuItem.icon /><span>{menuItem.title}</span>
                                        {menuItem.children ?
                                            <i className="fa fa-angle-right pull-right"></i> : ''}
                                    </Link>
                                    : ''}
                                {menuItem.children ?
                                    <ul
                                        className={`sidebar-submenu ${menuItem.active ? 'menu-open' : ''}`}
                                        style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}
                                    >
                                        {menuItem.children.map((childrenItem, index) =>
                                            <li key={index} className={childrenItem.children ? childrenItem.active ? 'active' : '' : ''}>
                                                {(childrenItem.type === 'sub') ?
                                                    <a onClick={() => setNavActive(childrenItem)} >
                                                        <i className="fa fa-circle"></i>{childrenItem.title} <i className="fa fa-angle-right pull-right"></i></a>
                                                    : ''}

                                                {(childrenItem.type === 'link') ?
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}${childrenItem.path}`}
                                                        className={childrenItem.active ? 'active' : ''}
                                                        onClick={() => setNavActive(childrenItem)}
                                                    >
                                                        <i className="fa fa-circle"></i>{childrenItem.title} </Link>
                                                    : ''}
                                                {childrenItem.children ?
                                                    <ul className={`sidebar-submenu ${childrenItem.active ? 'menu-open' : 'active'}`}>
                                                        {childrenItem.children.map((childrenSubItem, key) =>
                                                            <li className={childrenSubItem.active ? 'active' : ''} key={key}>
                                                                {(childrenSubItem.type === 'link') ?
                                                                    <Link
                                                                        to={`${process.env.PUBLIC_URL}${childrenSubItem.path}`}
                                                                        className={childrenSubItem.active ? 'active' : ''}
                                                                        onClick={() => setNavActive(childrenSubItem)}
                                                                    >
                                                                        <i className="fa fa-circle"></i>{childrenSubItem.title}</Link>
                                                                    : ''}
                                                            </li>
                                                        )}
                                                    </ul>
                                                    : ''}
                                            </li>
                                        )}
                                    </ul>
                                    : ''}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )

}

export default sidebar
