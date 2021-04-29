import React, { Component } from "react";
import './portfolio.scss';
import { workList } from "../../data/WorkList";
import WorkTiles from "../WorkTiles";

class Porfolio extends Component {
	componentDidMount() {
		const { history } = this.props;
		const { logHistory } = this.props;
		console.log('[Portfolio] componentDidMount');
		logHistory();
		
		
		if (history.location.hash) {
			console.log('[Porfolio] componentDidMount', history.location.hash);
			setTimeout(() => {
				document.querySelector(history.location.hash).scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center'
				});
			}, 300);
		} else window.scrollTo({ top: 0 });
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