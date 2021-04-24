import { Component } from "react";
import './footer.scss';
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

class Footer extends Component {
	render() {
		const { setRef } = this.props;
		
		return <div className="footer" ref={ setRef }>
			<span className="bybyn"><strong title="Bisaya">ᜊᜒᜐᜌ</strong>&nbsp;|&nbsp;<span title="Filipino">ᜉᜒᜎᜒᜉᜒᜈᜓ</span></span>
			<SocialMediaLinks />
		</div>
	}
}

export default Footer;