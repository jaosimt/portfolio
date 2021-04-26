import { Component } from "react";
import PropTypes from 'prop-types';
import './pageNotFound.scss';
import UnderConstruction from './under-construction.png';

class PageNotFound extends Component {
	
	render() {
		const { history, isUnderConstruction, title } = this.props;
		
		return <div className="PageNotFound">
			{
				title &&
				<span className="title">{ title }</span>
			}
			<span
				className={ `${ isUnderConstruction ? 'font-smaller ' : '' }bybyn` }>{ isUnderConstruction ? 'ᜊᜎᜒᜃ᜔ ᜎᜅ᜔ ᜉᜓᜑᜓᜈ᜔' : 'ᜇᜒᜎᜒ ᜋᜃᜒᜆ' }</span>
			<span className="message">{ isUnderConstruction ?
				<img height={ 175 } src={ UnderConstruction } alt="Under Construction" /> : '404' }</span>
			<span
				className="description-one">{ isUnderConstruction ? 'This Page Is Under Construction' : 'Oops! This Page Could Not Be Found' }</span>
			<span
				className="description-two">{ isUnderConstruction ? 'Please revisit this page in the future.' : 'Sorry but the page you are looking for does not exist, have been removed, renamed or temporarily unavailable!' }</span>
			<button
				onClick={ () => history.push('/') }>
				Go To Homepage
			</button>
		</div>
	}
}

PageNotFound.propTypes = {
	history: PropTypes.object.isRequired
};

export default PageNotFound;