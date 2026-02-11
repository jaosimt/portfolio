import React, {useState, useEffect, memo} from "react";
import {
	Routes,
	Route,
	useLocation,
	useNavigate
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
import deepEqual from "deep-equal";

function ContentContainer(props) {
	const location = useLocation(),
		navigate = useNavigate();
	
	const [ pathname, setPathname ] = useState(location.pathname);
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
		console.log('[logHistory] location.pathname:', location.pathname);
		setPathname(location.pathname);
	}
	
	const setHeaderRef = ref => headerRef = ref;
	const setFooterRef = ref => footerRef = ref;
	
	useEffect(() => {
		console.log('[ContentContainer] [useEffect] componentDidMount')
	}, [])
	
	useEffect(() => {
		const pathName = location.pathname;
		
		console.log('[ContentContainer] [useEffect] [componentDidUpdate] location.pathname:', pathName);
		
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
			navigate(window.location.pathname);
		}
		
		const currentPath = pathName.replace(/^\//, '').split("/")[ 0 ];
		if (currentPath === "") setMenuItem('home');
		else if (menuItem !== currentPath) setMenuItem(currentPath);
		
	}, [
		footerRef.clientHeight,
		headerRef.clientHeight,
		location.pathname,
		menuItem,
		navigate
	])
	
	return <div className="ContentContainer" style={ {
		marginTop: `${ offset.header - offset.margin }px`,
		minHeight: `calc(100vh - ${ offset.header + offset.margin }px)`
	} }>
		<Header
			theme={ props.theme }
			onThemeChange={ props.onThemeChange }
			navigate={ navigate }
			setRef={ setHeaderRef }
			onClick={ menuClickHandler }
			setMenuItem={ setMenuItem }
			selected={ menuItem } />
		
		<span />
		{
			<Routes>
				{<Route exact path="/" element={<Home />} />
                    /*<Route path="/about" element={<About offset={ offset } />} />
                    <Route exact path="/employment/:id" element={<Details
                        data={ workList }
                        setMenuItem={ setMenuItem }
                        offset={ offset } />} />
                    <Route exact path="/projects/:id" element={<Details
                        data={ projectList }
                        setMenuItem={ setMenuItem }
                        offset={ offset } />} />
                    <Route exact path="/demo" element={<Demo offset={ offset } />} />
                    <Route exact path="/blogs/:id" element={<Details
                        data={ blogList }
                        setMenuItem={ setMenuItem }
                        offset={ offset } />} />

                    <Route exact path="/employment" element={<List
                            logHistory={ logHistory }
                            offset={ offset }
                            navigate={ navigate }
                            location={ location }
                            data={ workList }
                            banner={ employmentBanner }
                            title="Employment" />}/>
                    <Route exact path="/projects" element={<List
                            logHistory={ logHistory }
                            offset={ offset }
                            navigate={ navigate }
                            location={ location }
                            data={ projectList }
                            banner={ projectBanner }
                            title="Projects" />}/>
                    <Route path="/blogs" element={<List
                            logHistory={ logHistory }
                            offset={ offset }
                            navigate={ navigate }
                            location={ location }
                            data={ blogList }
                            banner={ blogBanner }
                            title={ <div style={ { display: 'flex', flexFlow: 'column' } }><span>Random Articles</span><span
                                style={ { fontSize: '21px', textTransform: 'none' } }>Anything Out Of The Blue</span></div> } />}/>*/}
                <Route exact path="/portfolio/" element={<Home />} />
                <Route path="/portfolio/about" element={<About offset={ offset } />} />
                <Route exact path="/portfolio/employment/:id" element={<Details
                    data={ workList }
                    setMenuItem={ setMenuItem }
                    offset={ offset } />} />
                <Route exact path="/portfolio/projects/:id" element={<Details
                    data={ projectList }
                    setMenuItem={ setMenuItem }
                    offset={ offset } />} />
                <Route exact path="/portfolio/demo" element={<Demo offset={ offset } />} />
                <Route exact path="/portfolio/blogs/:id" element={<Details
                    data={ blogList }
                    setMenuItem={ setMenuItem }
                    offset={ offset } />} />

                <Route exact path="/portfolio/employment" element={<List
                    logHistory={ logHistory }
                    offset={ offset }
                    navigate={ navigate }
                    location={ location }
                    data={ workList }
                    banner={ employmentBanner }
                    title="Employment" />}/>
                <Route exact path="/portfolio/projects" element={<List
                    logHistory={ logHistory }
                    offset={ offset }
                    navigate={ navigate }
                    location={ location }
                    data={ projectList }
                    banner={ projectBanner }
                    title="Projects" />}/>
                <Route path="/portfolio/blogs" element={<List
                    logHistory={ logHistory }
                    offset={ offset }
                    navigate={ navigate }
                    location={ location }
                    data={ blogList }
                    banner={ blogBanner }
                    title={ <div style={ { display: 'flex', flexFlow: 'column' } }><span>Random Articles</span><span
                        style={ { fontSize: '21px', textTransform: 'none' } }>Anything Out Of The Blue</span></div> } />}/>
				<Route path="*" element={<PageNotFound
						setMenuItem={ setMenuItem }
						title={ location.pathname }
						navigate={ navigate } />}/>
			</Routes>
		}
		<Footer currentPath={ pathname } setRef={ setFooterRef } />
	</div>
}

export default memo(ContentContainer, deepEqual)