import { Component } from "react";
import './blogs.scss';
import PageNotFound from "../PageNotFound";

class Blogs extends Component {
	render() {
		const { history } = this.props;
		return <div className={ 'Blogs flex-center' }>
			<PageNotFound
				title="Blogs"
				history={ history }
				isUnderConstruction={ true } />
		</div>
	}
}

export default Blogs;