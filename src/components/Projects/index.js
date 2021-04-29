import React, { Component } from "react";
import './projects.scss';
import PageNotFound from "../PageNotFound";

class Projects extends Component {
	render() {
		const { history, setMenuItem } = this.props;
		return <div className={ 'Blogs flex-center' }>
			<PageNotFound
				setMenuItem={ setMenuItem }
				title="Projects"
				history={ history }
				isUnderConstruction={ true } />
		</div>
	}
}

export default Projects;