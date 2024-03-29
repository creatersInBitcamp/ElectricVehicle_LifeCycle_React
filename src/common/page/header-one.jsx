import React, {useEffect, useState} from 'react';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'
import axios from 'axios'

// Import custom item
import store from "../../store";
import {NavBar,TopBar,LogoImage,changeCurrency} from "../index";
import {CartContainer} from "../../newCar";
import {useDispatch} from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export const HeaderOne = props =>{
	const [isLoading, setIsLoading] = useState(false)
	const [open, setOpen] = useState(false)
	const [searchWord, setSearchWord] = useState('')
	const [searchResult, setSearchResult] = useState([])

	useEffect(() => {
		setTimeout(function() {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
		setOpen(true);
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	},[])

	const onChangeSearch = (e) => {
		if(e.target.value !== '') {
			setSearchWord(e.target.value)
			axios.get(`http://localhost:8080/electriccars/search/${searchWord}`)
				.then((res)=>{
					setSearchResult(res.data)
				})
				.catch((err)=>{
					console.log(err.status)
				})
		} else {
			setSearchWord('')
		}
	}

	const handleScroll = () => {
		let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (number >= 300) {
			if (window.innerWidth < 576) {
				document.getElementById("sticky").classList.remove('fixed');
			}else
				document.getElementById("sticky").classList.add('fixed');
		} else {
			document.getElementById("sticky").classList.remove('fixed');
		}
	}

	function changeLanguage(lang) {
		store.dispatch(IntlActions.setLocale(lang))
	}

	const openNav = () => {
		const openmyslide = document.getElementById("mySidenav");
		if(openmyslide){
			openmyslide.classList.add('open-side')
		}
	}
	const openSearch = () => {
		document.getElementById("search-overlay").style.display = "block";
	}

	const closeSearch = () => {
		document.getElementById("search-overlay").style.display = "none";
	}

	const load = () =>{
		setIsLoading(true)
		fetch().then(()=>{
			// deal with data fetched
			setIsLoading(false)
		})
	}
	const dispatch = useDispatch()
	return <>
		<div>
			<header id="sticky" className="sticky">
				{isLoading ? <Pace color="#27ae60"/> : null}
				<div className="mobile-fix-option"/>
				{/*Top Header Component*/}
				<TopBar/>

				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="main-menu">
								<div className="menu-left">
									<div className="navbar">
										<a onClick={openNav}>
											{/*<div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"/></div>*/}
										</a>
										{/*Sidebar Navigation Component*/}
										{/*<SideBar/>*/}
									</div>
									<div className="brand-logo">
										<LogoImage logo={props.logoName}/>
									</div>
								</div>
								<div className="menu-right pull-right">
									{/*Top Navigation Bar Component*/}
									<NavBar/>
									<div>
										<div className="icon-nav">
											<ul>
												<li className="onhover-div mobile-setting">
													<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} className="img-fluid" alt="" />
														<i className="fa fa-cog"/></div>
													<div className="show-div setting">
														<h6>language</h6>
														<ul>
															<li><a href={null} onClick={() => changeLanguage('ko')}>Korea</a> </li>
															{/*<li><a href={null} onClick={() => changeLanguage('en')}>English</a> </li>*/}
														</ul>
														<h6>currency</h6>
														<ul className="list-inline">
															<li><a href={null} onClick={()=>{dispatch(changeCurrency('만원'))}}>won</a> </li>
															{/*<li><a href={null} onClick={()=>{dispatch(changeCurrency('만￦'))}}>doller</a> </li>*/}
														</ul>
													</div>
												</li>
												{/*Header Cart Component */}
												<CartContainer/>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</div>
	</>
}

export default HeaderOne