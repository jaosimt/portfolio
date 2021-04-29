import React, { Fragment } from "react";
import philippineScripts from './images/projects/philippineScripts.jpg';
import baybayinCharacters from './images/projects/baybayinCharacters.png';

export const baybayinPilipinasDetails = <Fragment>
	<h5 className="topic-label"><a href="//baybayin.jaosimt.com" target="_blank" rel="noreferrer">baybayin.jaosimt.com</a></h5>
	<p>An online baybayin keyboard and baybayin translator with collections of baybayin related articles and news from
		multiple sources.</p>
	<h4 className="label">What is Baybayin</h4>
	<p>
		Baybayin is an ancient pre-colonial Philippine writing system.<br />A writing system native to the Philippines,
		attested from before Spanish colonization through to at least the eighteenth century. The term Baybay literally
		means "to spell" in Tagalog. Baybayin was extensively documented by the Spanish.
	</p>
	<div className="inline-image" style={ { backgroundImage: `url(${ baybayinCharacters })` } } />
	<p>
		Baybayin is just one of many writing system in the Philippines
	</p>
	<div className="inline-image" style={ { backgroundImage: `url(${ philippineScripts })` } } />
	<br/>
</Fragment>;