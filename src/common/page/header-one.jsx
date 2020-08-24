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
												{/*<li className="onhover-div mobile-search">
													<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={openSearch} className="img-fluid" alt="" />
														<i className="fa fa-search" onClick={openSearch}/></div>
												</li>*/}
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

			{/*<div id="search-overlay" className="search-overlay">
				<div>
					<span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
					<div className="overlay-content">
						<div className="container">
							<div className="row">
								<div className="col-xl-12">
									<form>
										<div className="form-group">
											<input type="text" className="form-control" id="exampleInputPassword1" value={searchWord}
												   placeholder="Search here"
												   onChange={onChangeSearch}

											/>
										</div>
										<button type="submit" className="btn btn-primary"><i className="fa fa-search"/></button>
									</form>
								</div>
								<div className="col-xl-12">
									{
										(searchResult !== undefined)?
											<ListGroup>
												{
													searchResult.map( item => (
													<ListGroupItem key={item.eccarId}>
														<img src={item.img} className="img-30" alt=""/>
														<p>{item.carName}</p>
													</ListGroupItem>
														)
												)}
											</ListGroup>
										:
											""
									}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>*/}

		</div>
	</>
}

export default HeaderOne