import { Component } from "react";
import './portfolio.scss';
import PageNotFound from "../PageNotFound";

class Porfolio extends Component {
	render() {
		const { history } = this.props;
		
		return <div className={ 'Portfolio flex-center' }>
			<PageNotFound
				title="Portfolio"
				history={ history }
				isUnderConstruction={ true } />
		</div>
	}
}

export default Porfolio;