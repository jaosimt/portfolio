import React, { Component } from "react";
import './footer.scss';
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { Capitalize } from "../../scripts/utils";

class Footer extends Component {
	render() {
		const { setRef, history } = this.props;
		
		const currentPath = history.location.pathname.replace(/^\//, '');
		
		return <div className="Footer" ref={ setRef }>
			<span className="current-page">{ currentPath ? Capitalize(currentPath) : <span className='bybyn'>
					<span title="Bisaya"><strong>ᜊᜒᜐᜌᜓ</strong></span>&nbsp;|&nbsp;
				<span title="Filipino">ᜉᜒᜎᜒᜉᜒᜈᜓ</span>
				</span> }</span>
			<SocialMediaLinks iconSize={ 28 } />
		</div>
	}
}

export default Footer;