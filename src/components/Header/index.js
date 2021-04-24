import { Component } from 'react';
import './header.scss';
import { SnakeCase, Capitalize } from "../../scripts/utils";
import { NavLink } from "react-router-dom";

class Header extends Component {
	
	render() {
		const { selected, onClick, setRef } = this.props;
		const disabledMenuItem = [ 'portfolio', 'blogs' ];
		
		return <div className={`header ${selected}-page`} ref={ setRef }>
			<div className="logo bybyn"><strong title="Sim">ᜐᜒᜋ᜔</strong>&nbsp;<span title="Jao">ᜑᜏ᜔</span></div>
			<ul>
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
}

export default Header;