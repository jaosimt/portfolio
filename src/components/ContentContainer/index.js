import React, { Component, Fragment } from "react";
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
import AboutMe from "../AboutMe";
import './content.scss';

class ContentContainer extends Component {
	constructor() {
		super();
		this.state = {
			menuItem: window.location.pathname === '/' ? 'home' : window.location.pathname.replace(/^\//, ""),
			offset: 0
		}
		
		this.headerRef = React.createRef();
		this.footerRef = React.createRef();
	}
	
	componentDidMount() {
		const offset = this.offsetHeight();
		console.log('ContentContainer [componentDidMount]:', offset);
		this.setState({ offset: offset })
	}
	
	render() {
		const { menuItem, offset } = this.state;
		
		return <Fragment>
			<Router>
				<Header setRef={ this.setHeaderRef }
				        onClick={ this.menuClickHandler }
				        selected={ menuItem } />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about-me">
						<AboutMe offset={ offset } />
					</Route>
					<Route path="/portfolio">
						<Porfolio />
					</Route>
					<Route path="/blogs">
						<Blogs />
					</Route>
				</Switch>
			</Router>
			<Footer setRef={ this.setFooterRef } />
		</Fragment>
	}
	
	menuClickHandler = e => {
		const menuItem = e.currentTarget.getAttribute('data-value');
		this.setState({ menuItem });
	}
	
	setHeaderRef = ref => this.headerRef = ref;
	setFooterRef = ref => this.footerRef = ref;
	
	offsetHeight = () => {
		return this.headerRef.clientHeight + (this.footerRef.clientHeight || 0) + 28;
	}
}

export default ContentContainer