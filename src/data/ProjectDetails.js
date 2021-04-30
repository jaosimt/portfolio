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
	<h3>Common mistakes</h3>
	<ol>
		<li>Thinking of Baybayin as a Language.</li>
		<ul>
			<li>It is <strong>not!</strong></li>
			<li>Baybayin is a <strong>writing system!</strong></li>
		</ul>
		<li>Writing Baybayin with <a href="//en.wikipedia.org/wiki/English_alphabet" target="_blank" rel="noreferrer">English Alphabet</a> in mind.</li>
		<ul>
			<li>Is <strong>Wrong!</strong></li>
			<li><a href="//en.wikipedia.org/wiki/Kulitan" target="_blank" rel="noreferrer">Kulitan</a>, <a href="//en.wikipedia.org/wiki/File:Kurdita.jpg" target="_blank" rel="noreferrer">Kurdita</a>, <a href="//en.wikipedia.org/wiki/Baybayin" target="_blank" rel="noreferrer">Baybayin</a>, <a href="//en.wikipedia.org/wiki/Tagbanwa_script" target="_blank" rel="noreferrer">Tagbanwa</a>, <a href="//en.wikipedia.org/wiki/Basahan" target="_blank" rel="noreferrer">Basahan</a>, <a href="//akopito.weebly.com/suwat-bisaya.html" target="_blank" rel="noreferrer">Badlit</a>, etc... are writing systems in the Philippines!</li>
			<li>Our languages and dialects are originally using <a href="//en.wikipedia.org/wiki/Abakada_alphabet" target="_blank" rel="noreferrer">Abakada alphabet</a>!</li>
			<li>That is what Baybayin and many other scripts in the Philippines are made for!</li>
		</ul>
	</ol>
	<br/>
</Fragment>;