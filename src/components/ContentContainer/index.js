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
import PortfolioDetails from "../Portfolio/details";

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
	
	useEffect(() => {
		console.log('[ContentContainer] useEffect');
		const offsetHeight = () => {
			return {
				header: headerRef.clientHeight,
				footer: footerRef.clientHeight,
				margin: 14
			};
		}
		
		const offset = offsetHeight();
		setOffset(offset);
		const currentPath = window.location.pathname.replace(/^\//, "");
		if (currentPath !== '') {
			history.push(currentPath);
		}
	}, [footerRef.clientHeight, headerRef.clientHeight, history])
	
	return <div className="ContentContainer" style={ {
		marginTop: `${ offset.header - offset.margin }px`,
		minHeight: `calc(100vh - ${ offset.header + offset.margin }px)`
	} }>
		<Header
			history={ history }
			setRef={ setHeaderRef }
			onClick={ menuClickHandler }
			setMenuItem={ setMenuItem }
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
				<Route exact path="/portfolio/:companyId">
					<PortfolioDetails
						setMenuItem={ setMenuItem }
						offset={ offset } />
				</Route>
				<Route exact path="/portfolio">
					<Porfolio offset={ offset } history={ history } />
				</Route>
				<Route path="/blogs">
					<Blogs
						setMenuItem={ setMenuItem }
						history={ history } />
				</Route>
				<Route path="*">
					<PageNotFound
						setMenuItem={ setMenuItem }
						title={ history.location.pathname }
						history={ history } />
				</Route>
			</Switch>
		}
		<Footer history={ history } setRef={ setFooterRef } />
	</div>
}