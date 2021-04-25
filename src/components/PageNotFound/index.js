import { Component } from "react";
import './pageNotFound.scss';

class PageNotFound extends Component {
	render() {
		return <div className="PageNotFound">
			<span>404</span>
			<span>Oops! This Page Could Not Be Found</span>
			<span>Sorry but the page you are looking for does not exist, have been removed, renamed or temporarily unavailable!</span>
			<button
				onClick={ () => window.location = '/' }>
				Go To Homepage
			</button>
		</div>
	}
}

export default PageNotFound;