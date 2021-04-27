import React  from "react";
import './footer.scss';
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { Capitalize } from "../../scripts/utils";
import { useHistory } from "react-router-dom";

function Footer(props) {
	const history = useHistory();
	const { setRef } = props;
	
	const currentPath = history.location.pathname.replace(/^\//, '');
	
	return <div className="Footer" ref={ setRef }>
			<span className="current-page">{ currentPath ? Capitalize(currentPath) : <span className='bybyn'>
					<span title="Bisaya"><strong>ᜊᜒᜐᜌᜓ</strong></span>&nbsp;|&nbsp;
				<span title="Filipino">ᜉᜒᜎᜒᜉᜒᜈᜓ</span>
				</span> }</span>
		<SocialMediaLinks iconSize={ 28 } />
	</div>
}

export default Footer;