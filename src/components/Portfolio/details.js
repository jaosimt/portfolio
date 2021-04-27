import PropTypes from 'prop-types';
import React from "react";
import { useParams } from "react-router-dom";
import { workList } from "../../data";
import './details.scss';
import PageNotFound from "../PageNotFound";
import noImage from "../../images/noimage.png";

export default function Details(props) {
	let { companyId } = useParams();
	
	let data = workList.filter(d => d.id === companyId);
	
	if (data.length) data = data[ 0 ];
	else data = null;
	
	const { offset: o, history, setMenuItem } = props;
	const offset = o.header + o.footer + o.margin;
	
	return data ? <div
		className={ 'PortfolioDetails' }
		style={ {
			minHeight: `calc(100vh - ${ offset }px)`
		} }>
		<div
			className="banner"
			style={ {
				backgroundImage: `url(${ data.image || noImage })`
			} } />
		<div className="work-details">
			<h1 className="company-name">{ data.company.name }</h1>
			{
				data.company.address &&
				<h5 className="company-address">{ data.company.address }</h5>
			}
			{
				data.details
			}
		</div>
	</div> : <PageNotFound
		setMenuItem={ setMenuItem }
		title={ `${ history.location.pathname }` }
		history={ history }
		isUnderConstruction={ true } />
}

Details.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
		dateRange: PropTypes.string.isRequired,
		position: PropTypes.string.isRequired,
		company: PropTypes.shape({
			name: PropTypes.string.isRequired,
			website: PropTypes.string,
			address: PropTypes.string
		})
	})
};