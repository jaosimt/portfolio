import React, { Fragment } from "react";
import philippineScripts from './images/projects/philippineScripts.jpg';
import baybayinCharacters from './images/projects/baybayinCharacters.png';
import sImoUI from './images/projects/simo-ui-full.jpg';
import pcPrejanVid from './media/pcPrejan2.mp4';

export const pcPrejanDetails = <Fragment>
	<h5 className="topic-label">Unpublished</h5>
	<p>A web application that allows <strong>PCP Architectural Services</strong> to add/update/remove projects and/or images and
		details with search capabilities and interactions to viewers/potential client inquires via comments on each and every uploaded project
		images.</p>
	<video controls>
		<source src={ pcPrejanVid } type="video/mp4" />
		<source src={ pcPrejanVid } type="video/ogg" />
		Your browser does not support the video tag.
	</video>
	<h4 className="label">Language</h4>
	<ul>
		<li>HTML, CSS & (Vanilla) JavaScript</li>
		<li>Powered by <a href="/projects/simo-ui" target="_blank" rel="noreferrer">sImo-ui</a></li>
	</ul>
	<br/>
	<br/>
</Fragment>

export const simoUIDetails = <Fragment>
	<h5 className="topic-label"><a href="//simo-ui.jaosimt.com" target="_blank" rel="noreferrer">simo-ui.jaosimt.com</a>
	</h5>
	<p>
		A lightweight Javascript library. Originally built just for fun and practice. Turns out it came handy on one of my
		small web project. Thus, it can be a tool or a stepping stone for students and beginners alike.
	</p>
	<p>The goal for the library is to automatically load css dependency for the inclusive ui components and unload them
		whenever no longer present on the screen. An automatic process that does not require intervention from the
		user.</p>
	<p>Can be for coding practice or even use in an HTML, CSS & Vanilla JS web project. I have successfully use this in
		my <a href="/projects/pcprejan" target="_blank" rel="noreferrer">PCPrejan Webapp</a> project.</p>
	<p>Download simo-ui (sImoJS) library <a href="//simo-ui.jaosimt.com/sImoJS.zip">here</a>.</p>
	<p>Copy it in your web project and simply paste the following line at the end of your html's body tag.</p>
	<code>{ `<script type="text/javascript" src="sImoJS/sImo.js"></script>` }</code>
	<p>For more information and documentation, click the logo or the link provided above.</p>
	<a href="//simo-ui.jaosimt.com" target="_blank" rel="noreferrer">
		<div className="inline-image" style={ { backgroundSize: 'contain', backgroundImage: `url(${ sImoUI })` } } />
	</a>
	<h4 className="label">Language</h4>
	<ul>
		<li>HTML, CSS & (Vanilla) JavaScript</li>
	</ul>
	<br />
	<br />
</Fragment>

export const baybayinPilipinasDetails = <Fragment>
	<h5 className="topic-label"><a href="//baybayin.jaosimt.com" target="_blank"
	                               rel="noreferrer">baybayin.jaosimt.com</a></h5>
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
	<br />
	<h4 className="label">Language</h4>
	<ul>
		<li>React JS</li>
	</ul>
	<br />
	<br />
</Fragment>;
