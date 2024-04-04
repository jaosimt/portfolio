import React, {Component, memo} from "react";
import './list.scss';
import Tiles from "../Tiles";
import deepEqual from "deep-equal";

class List extends Component {
	componentDidMount() {
		const { location, logHistory } = this.props;
		logHistory();
		
		
		if (location.hash) {
			const target = document.querySelector(location.hash);
			if (target) setTimeout(() => {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center'
				});
			}, 300);
		} else window.scrollTo({ top: 0 });
	}
	
	render() {
		const { offset: o, location, navigate, logHistory, data, title, banner } = this.props;
		const offset = o.header + o.footer + o.margin;
		
		return <div
			className={ 'List' }
			style={ {
				minHeight: `calc(100vh - ${ offset }px)`
			} }>
			<div className="banner text-shadow-white" style={ {
				backgroundImage: `url(${ banner })`
			} }>{ title }</div>
			<div className="list-items">
				{
					data.map((w, i) => <Tiles key={ i } data={ w } location={ location } navigate={navigate} logHistory={ logHistory } />)
				}
			</div>
		</div>
	}
}

export default memo(List, deepEqual);