import React, { Component } from 'react';
import './header.scss';
import { SnakeCase, Capitalize } from "../../scripts/utils";
import { NavLink } from "react-router-dom";

class Header extends Component {
	ulRef = React.createRef();
	state = {
		right: '-101%'
	}
	
	componentDidMount() {
		document.addEventListener('mousedown', this.outsideClickHandler);
	}
	
	render() {
		const { right } = this.state;
		const { selected, onClick, setRef, history, setMenuItem } = this.props;
		
		return <div className={ `Header ${ selected }-page` } ref={ setRef }>
			<div
				onClick={ () => {
					history.push('/');
					setMenuItem('home');
				} }
				className="logo bybyn">
				<strong title="Sim Jao">ᜐᜒᜋ᜔&nbsp;ᜑᜏ᜔</strong>
			</div>
			<div id="header-hamburger"><span onClick={ this.toggleMenu }>☰</span></div>
			<ul
				style={ { right: right } }
				ref={ this.ulRef }>
				<div id="menu-hamburger"><span onClick={ this.toggleMenu }>☰</span></div>
				{
					[ 'home', 'about', 'portfolio', 'blogs' ].map((m, i) => {
						const menuItem = SnakeCase(m);
						return <li key={ i }
						           data-value={ menuItem }
						           className={ `${ menuItem } ${ selected === menuItem && 'selected' }` }
						           onClick={ onClick }>
							<NavLink to={ `/${ menuItem === 'home' ? '' : menuItem }` }>{ Capitalize(m) }</NavLink>
						</li>
					})
				}
			</ul>
		</div>
	}
	
	outsideClickHandler = event => {
		const { right } = this.state;
		
		if (right === '0px' && this.ulRef && this.ulRef.current && !this.ulRef.current.contains(event.target)) this.toggleMenu();
	}
	
	toggleMenu = () => {
		const menuWidth = this.ulRef && this.ulRef.current && this.ulRef.current ? `-${ Math.round(this.ulRef.current.getBoundingClientRect().width) + 10 }px` : '-100%';
		this.setState(prevState => {
			return {
				right: prevState.right === '0px' ? menuWidth : '0px'
			}
		})
	}
}

export default Header;