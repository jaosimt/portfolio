import React, { Fragment } from "react";
import philippineScripts from './images/projects/philippineScripts.jpg';
import baybayinCharacters from './images/projects/baybayinCharacters.png';
import sImoUI from './images/projects/simo-ui-full.jpg';
import pcPrejanVid from './media/pcPrejan2.mp4';
import pinoyKeyboardApk from './media/pinoyKeyboard.apk';
import pinoyKeyboardToggle from './images/projects/pinoyKeyboardToggle.jpg';

export const pinoyKeyboardDetails = <Fragment>
	<h5 className="topic-label">Unpublished</h5>
	<p>Pinoy Keyboard is a baybayin B17+ keyboard extension.</p>
	<p>Unfortunately, due to the fact that I am not ready to pay google app store yet 😂, I did not publish it. However,
		at your own risk, if you are technical enough to install manually, you can do so by downloading Pinoy Keyboard
		extension app for andriod in <a href={ pinoyKeyboardApk } target="_blank" rel="noreferrer">here</a>! Rest assured,
		that it is safe and no hidden agenda whatsoever! It is just a straight keyboard extension application that a
		handful of people are already using.</p>
	<div className="inline-image" style={ { backgroundImage: `url(${ pinoyKeyboardToggle })`, height: '300px' } } />
	<p>Above illustration shows a key that toggles the keyboard characters from baybayin to roman/latin and/or vice
		versa. Ideal for those who are still studying and beginners alike in baybayin.</p>
	<p>As you can see, character placement are ordered left-to-right with <strong>ba ka da ga ha la ma</strong> and
		etc... respectively for easy remembering with the <a
			href="//en.wikipedia.org/wiki/Abakada_alphabet" target="_blank" rel="noreferrer">Abakada</a> alphabet in where
		baybayin and other Philipine scripts are based of.</p>
	<p>The topmost 3 keys are nothing more than a vowel selector. Normally, baybayin characters are syllables by default
		with the vowel <strong>a</strong>. However, for easy transition from the typical typing that we all used to with
		the roman/latin keys, I thought, that it would be easier to start with the same. Meaning, with this keyboard, the
		keys starts with the <b><i>pamatay pantining</i></b> or <b><i>disemvowelment</i></b> of the default syllable
		baybayin character/s.</p>
	<p>That said, when you type <span
		className="bybyn bold x-large">ᜊ</span> or <strong className="x-large">b</strong>, you will have the
		character <span
			className="bybyn bold x-large">ᜊ᜔</span>. And if that is not your intention, you will
		then follow it with one of the <b>3 topmost (vowel selector)</b> keys as follows:</p>
	<span className="bold">Top-Left -> A</span>
	<span className="bold">Top-Center -> E/I</span>
	<span className="bold">Top-Right -> O/U</span>
	<h4 className='label'>By the way, you're android phone might not be able to download the apk on a simple click.  If that is your case, try long-pressing the link and wait for the context menu and download from there.</h4>
	<p>That's It! For any questions, do reach me out to any of the social media platforms below.</p>
</Fragment>

export const pcPrejanDetails = <Fragment>
	<h5 className="topic-label">Unpublished</h5>
	<p>A web application that allows <strong>PCP Architectural Services</strong> to add/update/remove projects and/or
		images and
		details with search capabilities and interactions to viewers/potential client inquires via comments on each and
		every uploaded project
		images.</p>
	<h4 className="label">Video/Snapshots</h4>
	<video controls style={ {
		marginTop: '14px'
	} }>
		<source src={ pcPrejanVid } type="video/mp4" />
		<source src={ pcPrejanVid } type="video/ogg" />
		Your browser does not support the video tag.
	</video>
	<h4 className="label">Languages/Frameworks/Tools:</h4>
	<ul>
		<li>HTML, CSS & (Vanilla) JavaScript</li>
		<li>Powered by <a href="/projects/simo-ui" target="_blank" rel="noreferrer">sImo-ui</a></li>
	</ul>
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
	<h4 className="label">Languages/Frameworks/Tools:</h4>
	<ul>
		<li>HTML, CSS & (Vanilla) JavaScript</li>
	</ul>
</Fragment>

export const baybayinPilipinasDetails = <Fragment>
	<h5 className="topic-label"><a href="//baybayin.jaosimt.com" target="_blank"
	                               rel="noreferrer">baybayin.jaosimt.com</a></h5>
	<p>An online baybayin keyboard and baybayin translator with collections of baybayin related articles and news from
		multiple sources.</p>
	<h4 className="label">What is Baybayin</h4>
	<p>
		Baybayin is an ancient Philippine writing system.<br />A writing system native to the Philippines,
		attested from before Spanish colonization through to at least the eighteenth century. The term Baybay literally
		means "to spell" in Tagalog. Baybayin was extensively documented by the Spanish.
	</p>
	<div className="inline-image" style={ { backgroundImage: `url(${ baybayinCharacters })` } } />
	<p style={ { marginTop: '14px' } }>
		Baybayin is just one of many writing systems in the Philippines
	</p>
	<div className="inline-image" style={ { backgroundImage: `url(${ philippineScripts })` } } />
	<br />
	<h4 className="label">Languages/Frameworks/Tools:</h4>
	<ul>
		<li>React JS</li>
	</ul>
</Fragment>
