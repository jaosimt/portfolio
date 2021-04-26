import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";
import Blogs from "../Blogs";
import Porfolio from "../Portfolio";
import About from "../About";
import './content.scss';
import PageNotFound from "../PageNotFound";

export default function ContentContainer() {
	const [menuItem, setMenuItem] = useState(window.location.pathname === '/' ? 'home' : window.location.pathname.replace(/^\//, ""))
	const [offset, setOffset] = useState({
		header: 0,
		footer: 0,
		margin: 0
	});
	
	let headerRef = React.createRef(),
		footerRef = React.createRef();
	
	const menuClickHandler = e => {
		setMenuItem(e.currentTarget.getAttribute('data-value'));
	}
	
	const setHeaderRef = ref => headerRef = ref;
	const setFooterRef = ref => footerRef = ref;
	
	const offsetHeight = () => {
		return {
			header: headerRef.clientHeight,
			footer: footerRef.clientHeight,
			margin: 14
		};
	}
	
	useEffect(() => {
		const offset = offsetHeight();
		setOffset(offset);
	}, [])
	
	return <div className="content-container" style={ {
		marginTop: `${ offset.header - offset.margin }px`,
		minHeight: `calc(100vh - ${ offset.header + offset.margin }px)`
	} }>
		<Router>
			<Header setRef={ setHeaderRef }
			        onClick={ menuClickHandler }
			        selected={ menuItem } />
			<span />
			{
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About offset={ offset } />
					</Route>
					<Route path="/portfolio">
						<Porfolio />
					</Route>
					<Route path="/blogs">
						<Blogs />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			}
		</Router>
		<Footer setRef={ setFooterRef } />
	</div>
}