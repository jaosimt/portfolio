import React, { Component } from "react";
import PropTypes from 'prop-types';
import './workTiles.scss';
import noImage from '../../images/noimage.png';

class WorkTiles extends Component {
	state = {
		logoHeight: 0
	}
	
	componentDidMount() {
		if (this.logoRef) this.setState({
			logoHeight: this.logoRef.clientWidth
		})
	}
	
	render() {
		const { logoHeight } = this.state;
		const { data } = this.props;
		const { dateRange, position, company, image, notes, details } = data;
		
		const logo = <div
			ref={ ref => this.logoRef = ref }
			className="logo"
			style={ {
				backgroundImage: `url(${ image || noImage })`,
				height: `${ logoHeight }px`
			} } />;
		
		return <div className="WorkTiles">
			<div className="logo-wrapper">
				{
					company.website &&
					<a
						href={ company.website || "#" }
						target="_blank"
						className="website">
						{ logo }
					</a>
				}
				{
					!company.website &&
					logo
				}
			</div>
			<div className="details" style={{
				height: `calc(100% - ${logoHeight}px)`
			} }>
				<div>
					<h3 className="position">{ position }</h3>
					<h5 className="company">{ company.name }</h5>
					<h5 className="date-range">{ dateRange }</h5>
				</div>
				{/*{*/}
				{/*	details &&*/}
				{/*	<span className='read-more'>... read more</span>*/}
				{/*}*/}
			</div>
		</div>
	}
}

WorkTiles.propTypes = {
	data: PropTypes.shape({
		dateRange: PropTypes.string.isRequired,
		position: PropTypes.string.isRequired,
		company: PropTypes.shape({
			name: PropTypes.string.isRequired,
			website: PropTypes.string
		})
	})
};

export default WorkTiles;