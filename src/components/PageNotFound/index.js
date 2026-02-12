import { Component } from "react";
import './pageNotFound.scss';
import underConstruction from './under-construction.png'

class PageNotFound extends Component {
	
	render() {
		const { navigate, isUnderConstruction, title, setMenuItem } = this.props;
		
		return <div className="PageNotFound">
			{
				title &&
				<span className="title">{ title.replace(/\/portfolio\//, '') }</span>
			}
			<span
				className={ `${ isUnderConstruction ? 'font-smaller ' : '' }bybyn` }>
				{ isUnderConstruction ? 'ᜊᜎᜒᜃ᜔ ᜎᜅ᜔ ᜉᜓᜑᜓᜈ᜔' : 'ᜇᜒᜎᜒ ᜋ ᜃᜒᜆ' }
			</span>
			<span className={ `message ${ !isUnderConstruction ? 'four-o-four' : '' }` }>{ isUnderConstruction ?
				<img height={ 175 }
				     src={ underConstruction }
				     alt="Under Construction" /> : '404' }</span>
			<span
				className="description-one">{ isUnderConstruction ? 'This Page Is Under Construction' : 'Oops! This Page Could Not Be Found' }</span>
			<span
				className="description-two">{ isUnderConstruction ? 'Please revisit this page some time soon.' : 'Sorry but the page you are looking for does not exist, have been removed, renamed or temporarily unavailable!' }</span>
			{
				navigate &&
				<button
					onClick={ () => {
						if (typeof setMenuItem === 'function') {
							navigate('/');
							setMenuItem('home');
						} else window.location = '/'
					} }>
					Go To Homepage
				</button>
			}
		</div>
	}
}

export default PageNotFound;