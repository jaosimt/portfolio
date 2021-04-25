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
		const { selected, onClick, setRef } = this.props;
		const disabledMenuItem = [ 'portfolio', 'blogs' ];
		
		return <div className={ `header ${ selected }-page` } ref={ setRef }>
			<div
				onClick={ () => window.location = '/' }
				className="logo bybyn">
				<strong title="Sim">ᜐᜒᜋ᜔</strong>&nbsp;<span title="Jao">ᜑᜏ᜔</span>
			</div>
			<div id="header-hamburger"><span onClick={ this.toggleMenu }>☰</span></div>
			<ul
				style={ { right: right } }
				ref={ this.ulRef }>
				<div id="menu-hamburger"><span onClick={ this.toggleMenu }>☰</span></div>
				{
					[ 'home', 'about me', 'portfolio', 'blogs' ].map((m, i) => {
						const menuItem = SnakeCase(m);
						return <li key={ i }
						           data-value={ menuItem }
						           className={ `${ menuItem } ${ selected === menuItem && 'selected' } ${ disabledMenuItem.includes(menuItem) ? 'disabled' : '' }` }
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
		
		if (right === '0px' && this.ulRef && this.ulRef.current && !this.ulRef.current.contains(event.target)) {
			console.log('outside click');
		}
	}
	
	toggleMenu = () => this.setState(prevState => {
		return {
			right: prevState.right === '0px' ? '-101%' : '0px'
		}
	})
}

export default Header;