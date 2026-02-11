import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import './details.scss';
import PageNotFound from "../PageNotFound";
import noImage from "../../images/noimage.png";
import { Capitalize } from "../../scripts/utils";

export default function Details(props) {
	const { id } = useParams(),
		location = useLocation(),
		navigate = useNavigate();
	
	
	let data = props.data.filter(d => d.id === id);
	
	if (data.length) data = data[ 0 ];
	else data = null;
	
	const { offset: o, setMenuItem } = props;
	const offset = o.header + o.footer + o.margin;
	
	const logo = <div
		className="subject-logo"
		style={ {
			backgroundImage: `url(${ data && data.image ? data.image : noImage })`
		} } />;
	
	let pathNames = location.pathname.split('/');
	pathNames.pop();
	pathNames = pathNames.join("/");
	
	const backButton = <button style={ { marginTop: '35px' } } className="go-back" onClick={ () => {
		navigate(`${ pathNames }#${ data.id }`);
	} }>{ `← ${ Capitalize(pathNames.replace(/^\/portfolio\//, '')) }` }</button>;
	
	useEffect(() => {
		window.scrollTo({ top: 0 });
	});
	
	return data ? <div
		className={ 'Details' }
		style={ {
			minHeight: `calc(100vh - ${ offset }px)`
		} }>
		<div className="logo-wrapper">
			{
				data.subject.website ? <a href={ data.subject.website } target="_blank" rel="noreferrer">
					{ logo }
				</a> : logo
			}
			{ backButton }
		</div>
		<div className="subject-details">
			<h1 className="topic-title">{ data.subject.name }</h1>
			{
				data.subject.address &&
				<h5 className="topic-label">{ data.subject.address }</h5>
			}
			{
				data.details
			}
			<div>
				{ backButton }
			</div>
		</div>
	</div> : <PageNotFound
		setMenuItem={ setMenuItem }
		title={ `${ location.pathname }` }
		location={ location }
		isUnderConstruction={ true } />
}
