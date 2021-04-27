import React, { Component } from "react";
import './portfolio.scss';
import { workList } from "../../data";
import WorkTiles from "../WorkTiles";

class Porfolio extends Component {
	componentDidMount() {
		const { logHistory } = this.props;
		console.log('[Portfolio] componentDidMount');
		logHistory();
	}
	
	render() {
		const { offset: o, history, logHistory } = this.props;
		const offset = o.header + o.footer + o.margin;
		
		return <div
			className={ 'Portfolio' }
			style={ {
				minHeight: `calc(100vh - ${ offset }px)`
			} }>
			<div className="banner text-shadow-white">Work Experience</div>
			<div className="work-list">
				{
					workList.map((w, i) => <WorkTiles key={ i } data={ w } history={ history } logHistory={ logHistory } />)
				}
			</div>
		</div>
	}
}

export default Porfolio;