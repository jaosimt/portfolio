import React, { Component } from "react";
import './blogs.scss';
import PageNotFound from "../PageNotFound";

class Blogs extends Component {
	render() {
		const { history, setMenuItem } = this.props;
		return <div className={ 'Blogs flex-center' }>
			<PageNotFound
				setMenuItem={ setMenuItem }
				title="Blogs"
				history={ history }
				isUnderConstruction={ true } />
		</div>
	}
}

export default Blogs;