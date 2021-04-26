import React, { useState, useEffect } from "react";
import {
	Switch,
	Route,
	useHistory
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
	const history = useHistory();
	
	const [ menuItem, setMenuItem ] = useState(window.location.pathname === '/' ? 'home' : window.location.pathname.replace(/^\//, ""))
	const [ offset, setOffset ] = useState({
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
		console.log('[ContentContainer] useEffect');
		
		const offset = offsetHeight();
		setOffset(offset);
		const currentPath = window.location.pathname.replace(/^\//, "");
		if (currentPath !== '') {
			console.log(`[ContentContainer] useEffect -> redirecting to ${ currentPath }`, history);
			history.push(currentPath);
		}
	}, [])
	
	return <div className="ContentContainer" style={ {
		marginTop: `${ offset.header - offset.margin }px`,
		minHeight: `calc(100vh - ${ offset.header + offset.margin }px)`
	} }>
		<Header
			history={ history }
			setRef={ setHeaderRef }
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
					<Porfolio history={ history } />
				</Route>
				<Route path="/blogs">
					<Blogs history={ history } />
				</Route>
				<Route path="*">
					<PageNotFound
						title={ history.location.pathname }
						history={ history } />
				</Route>
			</Switch>
		}
		<Footer setRef={ setFooterRef } />
	</div>
}