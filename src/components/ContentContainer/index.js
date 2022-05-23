import React, { useState, useEffect } from "react";
import {
	Switch,
	Route,
	useHistory
} from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";
import List from "../List";
import About from "../About";
import './content.scss';
import PageNotFound from "../PageNotFound";
import Details from "../List/details";
import { workList } from "../../data/WorkList";
import { projectList } from "../../data/Project";
import { blogList } from "../../data/Blogs";

import employmentBanner from "./images/professional-experience.jpg";
import projectBanner from "./images/projects.jpg";
import blogBanner from "./images/blogs.jpg";
import Demo from "../Demo";

export default function ContentContainer(props) {
	const history = useHistory();
	
	const [ pathname, setPathname ] = useState(history.location.pathname);
	const [ menuItem, setMenuItem ] = useState(window.location.pathname === '/' ? 'home' : window.location.pathname.replace(/^\//, ""));
	const [ offset, setOffset ] = useState({
		header: 0,
		footer: 0,
		margin: 0
	});
	
	let headerRef = React.createRef(),
		footerRef = React.createRef();
	
	const menuClickHandler = e => setMenuItem(e.currentTarget.getAttribute('data-value'));
	
	const logHistory = e => {
		console.log('[logHistory] history.location.pathname:', history.location.pathname);
		setPathname(history.location.pathname);
	}
	
	const setHeaderRef = ref => headerRef = ref;
	const setFooterRef = ref => footerRef = ref;
	
	useEffect(() => {
		console.log('[ContentContainer] [useEffect] componentDidMount')
	}, [])
	
	useEffect(() => {
		const pathName = history.location.pathname;
		
		console.log('[ContentContainer] [useEffect] [componentDidUpdate] history.location.pathname:', pathName);
		
		const offsetHeight = () => {
			return {
				header: headerRef.clientHeight,
				footer: footerRef.clientHeight,
				margin: 14
			};
		}
		
		const offset = offsetHeight();
		setOffset(offset);
		setPathname(pathName);
		
		if (window.location.pathname !== pathName) {
			history.push(window.location.pathname);
		}
		
		const currentPath = pathName.replace(/^\//, '').split("/")[ 0 ];
		if (currentPath === "") setMenuItem('home');
		else if (menuItem !== currentPath) setMenuItem(currentPath);
		
	}, [
		footerRef.clientHeight,
		headerRef.clientHeight,
		history,
		history.location.pathname,
		menuItem
	])
	
	return <div className="ContentContainer" style={ {
		marginTop: `${ offset.header - offset.margin }px`,
		minHeight: `calc(100vh - ${ offset.header + offset.margin }px)`
	} }>
		<Header
			theme={ props.theme }
			onThemeChange={ props.onThemeChange }
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
				
				<Route exact path="/employment/:id">
					<Details
						data={ workList }
						setMenuItem={ setMenuItem }
						offset={ offset } />
				</Route>
				<Route exact path="/projects/:id">
					<Details
						data={ projectList }
						setMenuItem={ setMenuItem }
						offset={ offset } />
				</Route>
				<Route exact path="/demo">
					<Demo
						offset={ offset }
					/>
				</Route>
				<Route exact path="/blogs/:id">
					<Details
						data={ blogList }
						setMenuItem={ setMenuItem }
						offset={ offset } />
				</Route>
				
				<Route exact path="/employment">
					<List
						logHistory={ logHistory }
						offset={ offset }
						history={ history }
						data={ workList }
						banner={ employmentBanner }
						title="Employment" />
				</Route>
				<Route exact path="/projects">
					<List
						logHistory={ logHistory }
						offset={ offset }
						history={ history }
						data={ projectList }
						banner={ projectBanner }
						title="Projects" />
				</Route>
				<Route path="/blogs">
					<List
						logHistory={ logHistory }
						offset={ offset }
						history={ history }
						data={ blogList }
						banner={ blogBanner }
						title={ <div style={ { display: 'flex', flexFlow: 'column' } }><span>Random Articles</span><span
							style={ { fontSize: '21px', textTransform: 'none' } }>Anything Out Of The Blue</span></div> } />
				</Route>
				<Route path="*">
					<PageNotFound
						setMenuItem={ setMenuItem }
						title={ history.location.pathname }
						history={ history } />
				</Route>
			</Switch>
		}
		<Footer currentPath={ pathname } setRef={ setFooterRef } />
	</div>
}
