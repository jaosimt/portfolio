import React, { Fragment } from "react";
import qwerty from "./images/blogs/baybayin_QWERTY.jpg";
import baybayinInMac from './images/blogs/baybayinKeyboardInMac.png';
import teeth from './images/blogs/teeth.jpeg';
import firstCenturyGold from "./images/blogs/PhilippineGoldIn1stCenturyEgypt.png";
import philippineCollar from './images/blogs/philippineCollar.jpg';
import boxerCodex from './images/blogs/PhilippineBoxerCodex.jpg';
import boholFlag from './images/blogs/FlagOfBohol.jpg';
import boholHymn from './media/Awit-sa-Bohol-Bohol-Hymn.mp3';
import kadaugan from './images/blogs/kadauganSaMactan.jpg';
import kadaugan2 from './images/blogs/kadaugan.jpeg';
import fiveK from './images/blogs/tibo_okSinkoMil.jpg';
import moreDecals from './images/blogs/moreDecals.jpg';

export const kadauganDetails = <Fragment>
	<br />
	<div className="inline-image" style={ {
		backgroundPosition: 'center top',
		backgroundSize: 'cover',
		backgroundImage: `url(${ kadaugan })`
	} } />
	<p>Kadaugan sa Mactan (or the Victory in Mactan) is a celebration reenacting the victory of Mactan people
		(Oponganons) during the famous “Battle of Mactan” in the 16th century.</p>
	<h3>Brief History</h3>
	<span>The bloody Battle of Mactan took place in April 27, 1521 when the iron-clad soldiers of Ferdinand Magellan reach
		the shores of the island but was fiercely confronted by Chief Lapu-Lapu and his fighters.</span><br/>
	<span>During the confrontation, the Portuguese explorer lost the battle and met his fate together with most of his
		soldiers. Most historians have agreed that the event actually took place and there is no doubt that it
		happened.</span><br/>
	<div className="inline-image"
	     style={ { backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${ kadaugan2 })` } } />
	<br />
	<h3>A battle won! Or is it?</h3>
	<span>This year, 2021, We are commemorating the 500th anniversary of the arrival of Christianity in the Philippines. BSP
		even printed a Php5000 Lapu-lapu commemorative banknote with the Quincentennial Commemoration logo in it.</span><br/>
	<div className="inline-image" style={ { backgroundSize: 'cover', backgroundImage: `url(${ fiveK })` } } />
	<br />
	<h3>Did Chief Lapu-lapu embraced Christianity?</h3>
	<span>I think not! He fought and won! And probably died hating it... Or not liking it at-least.</span><br/>
	<div style={ {
		backgroundColor: '#000',
		color: "#fff",
		fontWeight: 'bold',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		padding: '14px 21px'
	} }>
		<h1 style={ { margin: 0, lineHeight: 0.7 } }>com·mem·o·rate</h1>
		<span>recall and show respect for (someone or something)</span>
	</div>
	<br/>
	<div className="inline-image" style={ { backgroundSize: 'cover', minHeight: 300, backgroundImage: `url(${ moreDecals })` } } />
	<br />
	<h3>So who or what are we commemorating?</h3>
	<span>Is it Chief Lapu-lapu? His bravery for standing his ground against the colonizers? And most probably Christianity is one of the reason he stood his ground and fought.</span>
	<p>None of these make any sense to me at all!</p>
	<p>We are not respecting Chief Lapu-lapu if we're infusing the very same thing, religion or someone else's tradition that he probably fought against, especially during the celebration of what is supposed to be <strong className="italic">The Kadaugan sa Mactan</strong>.</p>
	<p>This is my humble opinion and my opinion alone and I am asking...</p>
	<h3>Did he really win?</h3>
	<br/>
</Fragment>;

export const boholHymnDetails = <Fragment>
	<br />
	<div className="inline-image" style={ { backgroundSize: 'cover', backgroundImage: `url(${ boholFlag })` } } />
	<p>"<a href="//en.wikipedia.org/wiki/Awit_sa_Bohol"
	       target="_blank" rel="noreferrer">Awit sa Bohol</a>" (Boholano for "Song of Bohol"), also known as the Bohol
		Hymn, is the official anthem of the province of Bohol in the Philippines.</p>
	<div className="bohol-hym-lyrics">
		<p>
			<span>Yuta kong minahal, Hatag ni Bathala;</span><br />
			<strong className="bybyn">ᜌᜓᜆ ᜃᜓᜅ᜔ ᜋᜒᜈᜑᜎ᜔, ᜑᜆᜄ᜔ ᜈᜒ ᜊᜆ᜔ᜑᜎ;</strong>
		</p>
		<p>
			<span>Sa adlaw’g gabi-i, Taknang tanan</span><br />
			<strong className="bybyn">ᜐ ᜀᜇ᜔ᜎᜏ᜔'ᜄ᜔ ᜄᜊᜒ-ᜁ, ᜆᜃ᜔ᜈᜅ᜔ ᜆᜈᜈ᜔</strong>
		</p>
		<p>
			<span>Dinasig sa kinaiyahan, Sa mga bayaning yutawhan</span><br />
			<strong className="bybyn">ᜇᜒᜈᜐᜒᜄ᜔ ᜐ ᜃᜒᜈᜁᜌᜑᜈ᜔, ᜐ ᜋᜅ ᜊᜌᜈᜒᜅ᜔ ᜌᜓᜆᜏ᜔ᜑᜈ᜔</strong>
		</p>
		<p>
			<span>Imong kalinaw gi-ampingan.  Lungsod sa bungtod nga matunhay</span><br />
			<strong className="bybyn">ᜁᜋᜓᜅ᜔ ᜃᜎᜒᜈᜏ᜔ ᜄᜒ-ᜀᜋ᜔ᜉᜒᜅᜈ᜔. ᜎᜓᜅ᜔ᜐᜓᜇ᜔ ᜐ ᜊᜓᜅ᜔ᜆᜓᜇ᜔ ᜅ ᜋᜆᜓᜈ᜔ᜑᜌ᜔</strong>
		</p>
		<p>
			<span>Ug matam-is nga kinampay</span><br />
			<strong className="bybyn">ᜂᜄ᜔ ᜋᜆᜋ᜔-ᜁᜐ᜔ ᜅ ᜃᜒᜈᜋ᜔ᜉᜌ᜔</strong>
		</p>
		<p>
			<span>Puti ang kabaybayunan, Walog sa suba binisbisan</span><br />
			<strong className="bybyn">ᜉᜓᜆᜒ ᜀᜅ᜔ ᜃᜊᜌ᜔ᜊᜌᜓᜈᜈ᜔, ᜏᜎᜓᜄ᜔ ᜐ ᜐᜓᜊ ᜊᜒᜈᜒᜐ᜔ᜊᜒᜐᜈ᜔᜔</strong>
		</p>
		<p>
			<span>Bahandi sa dagat ug kapatagan</span><br />
			<strong className="bybyn">ᜊᜑᜈ᜔ᜇᜒ ᜐ ᜇᜄᜆ᜔ ᜂᜄ᜔ ᜃᜉᜆᜄᜈ᜔</strong>
		</p>
		<p>
			<span>Gugma ang tuburan.  Sa kagawasan sa tanan</span><br />
			<strong className="bybyn">ᜄᜓᜄ᜔ᜋ ᜀᜅ᜔ ᜆᜓᜊᜓᜍᜈ᜔. ᜐ ᜃᜄᜏᜐᜈ᜔ ᜐ ᜆᜈᜈ᜔᜔</strong>
		</p>
		<p>
			<span>Panalanginan ka.  Ihalad ko lawas ug kalag</span><br />
			<strong className="bybyn">ᜉᜈᜎᜅᜒᜈᜈ᜔ ᜃ. ᜁᜑᜎᜇ᜔ ᜃᜓ ᜎᜏᜐ᜔ ᜂᜄ᜔ ᜃᜎᜄ᜔</strong>
		</p>
		<p>
			<span>Sa mutya kong Bohol.</span><br />
			<strong className="bybyn">ᜐ ᜋᜓᜆ᜔ᜌ ᜃᜓᜅ᜔ ᜊᜓᜑᜓᜎ᜔.</strong>
		</p>
	</div>
	<br />
	<audio controls>
		<source src={ boholHymn } type="audio/ogg" />
		<source src={ boholHymn } type="audio/mpeg" />
		Your browser does not support the audio element.
	</audio>
	<br />
</Fragment>;

export const lusonensisDetails =
	<Fragment>
		<br />
		<div className="inline-image" style={ { backgroundImage: `url(${ teeth })` } } />
		<h2>New Species Of Ancient Human Discovered In The Philippines!</h2>
		<div className="inline-flex-image">
			<div className="img">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MGN2DvDYWgc"
				        title="YouTube video player"
				        frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				        allowFullScreen></iframe>
			</div>
			<div className="img">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Lo-h7lBAycQ"
				        title="YouTube video player"
				        frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				        allowFullScreen></iframe>
			</div>
		</div>
		
		<div className="articles">
			<a href="//www.nationalgeographic.com/science/article/new-species-ancient-human-discovered-luzon-philippines-homo-luzonensis"
			   target="_blank" rel="noreferrer">
				<div className="group">
					<h3>National Geographic</h3>
					<div className="img"
					     style={ { backgroundImage: `url(//i.natgeofe.com/n/9f9022f5-6f49-446a-aca1-f0f1a2f1830d/new-human-species-9146100_uploadsmember1367551yourshot-1367551-9146100jpg_33qcb7xlzgnh6wujrw4xhizhytp3eflutfvvbpyjwjhzlmh4iziq_4288x2848.jpg?w=636&h=422)` } } />
					<p>Dubbed Homo luzonensis, the species is one of the most important finds that will be out in the coming
						years, one scientist predicts.</p>
				</div>
			</a>
			<a href="//www.sciencealert.com/new-hominin-species-suggests-we-once-lived-alongside-several-types-of-humans"
			   target="_blank" rel="noreferrer">
				<div className="group">
					<h3>Science Alert</h3>
					<div className="img"
					     style={ { backgroundImage: `url(//www.sciencealert.com/images/2019-04/processed/WelcomeToTheHumanFamily_600.jpg)` } } />
					<p>Archaeologists just pried another secret of our past from the clutches of the earth, welcoming a new
						human species to our growing family tree.</p>
				</div>
			</a>
			<a href="//www.bbc.com/news/science-environment-47873072" target="_blank" rel="noreferrer">
				<div className="group">
					<h3>BBC News</h3>
					<div className="img"
					     style={ { backgroundImage: `url(//ichef.bbci.co.uk/news/976/cpsprodpb/AD2A/production/_106403344_b54d74f2-64f9-4904-9666-011fa0dd6e29.jpg)` } } />
					<p>There’s a new addition to the family tree: an extinct species of human that’s been found in the
						Philippines.</p>
				</div>
			</a>
			<a href="//news.abs-cbn.com/news/multimedia/photo/04/11/19/homo-luzonensis" target="_blank" rel="noreferrer">
				<div className="group">
					<h3>ABS CBN News</h3>
					<div className="img"
					     style={ { backgroundImage: `url(//sa.kapamilya.com/absnews/abscbnnews/media/2019/news/04/11/20190411-homo-luzonensis-jc-1896.jpg?ext=.jpg)` } } />
					<p>Professor Armand Mijares illustrates the similarities of the bones from the foot of the Homo
						Luzonensis
						during a press briefing at University of the Philippines</p>
				</div>
			</a>
			<a href="https://www.nytimes.com/2019/04/10/science/homo-luzonensis-philippines-evolution.html" target="_blank"
			   rel="noreferrer">
				<div className="group">
					<h3>The New York Times</h3>
					<div className="img"
					     style={ { backgroundImage: `url(//static01.nyt.com/images/2019/04/16/science/10HOMININ1/10HOMININ1-jumbo.jpg?quality=90&auto=webp)` } } />
					<p>Archaeologists in Luzon Island have turned up the bones of a distantly related species, Homo
						luzonensis,
						further expanding the human family tree.</p>
				</div>
			</a>
		</div>
		
		<h3>What Do we Know About The Philippines?</h3>
		<span>According to <a href="//en.wikipedia.org/wiki/Homo_luzonensis" target="_blank" rel="noreferrer">wikipedia</a> -
			"It is possible that—like what is hypothesized for H. floresiensis from Flores, Indonesia—H. luzonensis
			descended
			from an early H. erectus dispersal across Southeast Asia. It is also possible that these two insular archaic
			humans descend from an entirely different Homo species <strong>possibly earlier than H. erectus</strong>."</span>
		<p>So ...</p>
		<span>1) Homo Luzonensis is old!</span>
		<span>2) we have a Gold jewelry found and dated <strong>1st century</strong> egypt.</span><br/>
		<div className="inline-image" style={ { backgroundImage: `url(${ firstCenturyGold })` } } />
		<div className="inline-image" style={ { backgroundImage: `url(${ philippineCollar })` } } />
		<br />
		<p>3) Then we know that this guys exist in abundance when the Spañards came.</p>
		<div className="inline-image" style={ { backgroundImage: `url(${ boxerCodex })` } } />
		<br />
		<p>4) Then we have the Surigao treasures which is also pre colonial.</p>
		<div className="inline-flex-image">
			<div className="img">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rn7nqNAoVd4"
				        title="YouTube video player"
				        frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				        allowFullScreen></iframe>
			</div>
			<div className="img">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6mYAHUq6bck"
				        title="YouTube video player"
				        frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				        allowFullScreen></iframe>
			</div>
		</div>
		<br />
		<p>5) <a href="//en.wikipedia.org/wiki/Verde_Island_Passage" target="_blank" rel="noreferrer">What about The
			Center
			Of The Center Of Marine Biodiversity being the Philippines?</a></p>
		<p>Does these back-up the study of <a href="//www.thegodculture.com/">The God Culture</a> that the Philippines is
			the
			very same Biblical Ophir? Thus Solomon's Gold actually came from the Philippines?</p>
		<iframe width="100%" height="auto" style={ { minHeight: '245px' } }
		        src="https://www.youtube.com/embed/u4xQlVOmRkg"
		        title="YouTube video player"
		        frameBorder="0"
		        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		        allowFullScreen></iframe>
		<br />
		<p>Ancient Havilah? Named after Havah (Eve)? Land of Creation?</p>
		<iframe width="100%" height="auto" style={ { minHeight: '245px' } }
		        src="https://www.youtube.com/embed/oWPvmX3halg"
		        title="YouTube video player"
		        frameBorder="0"
		        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		        allowFullScreen></iframe>
		<br />
		<h4>What do you think?</h4>
	
	</Fragment>
;

export const baybayinKeyboardDetails =
	<Fragment>
		<br />
		<div className="inline-image" style={ { backgroundImage: `url(${ qwerty })` } } />
		<h3>Let’s talk about how to install it first and foremost.</h3>
		<p>Follow the instructions from this incredible blog post: <a
			href="//nordenx.blogspot.com/2012/05/baybayin-unicode-keyboard-layout-for.html" target="_blank"
			rel="noreferrer">Baybayin
			Unicode Keyboard Layout</a></p>
		<p>It got keyboards for Windows, Mac and Linux with its corresponding instructions. Like I said, Incredible
			blog!</p>
		<h3>In Mac OSX, given you’d setup yours correctly, the keyboard selection should look like this:</h3>
		<div className="inline-image" style={ { backgroundImage: `url(${ baybayinInMac })` } } />
		<h3>All you have to do is select the Baybayin keyboard and type on with it.</h3>
		<span>Easy right? Well, I would say not quite. Here’s why:</span>
		<p>
			As you can see on the keyboard layout (credits to <a
			href="//nordenx.blogspot.com/" target="_blank" rel="noreferrer">nordenx.blogspot.com</a>), the baybayin
			characters
			are laid out to their corresponding latin characters and it means exactly what it is. The problem is, most of
			us
			do not pay attention to such details. And besides we are used to typing with the latin scripts.
		</p>
		<p>What do I mean by that? Well, consider the following words and the ways on how we would be typing them.</p>
		<h3>Kamusta (How are you)</h3>
		<ul style={{marginTop: 0}}>
			<li>
				Using latin/roman keys, obviously it is the combination of individual keys: <strong>k, a, m, u, s, t &
				a</strong>; This is what we all got used to typing
			</li>
			<li>Using Baybayin with the above typing habit will produce: <span className="bold bybyn">ᜃᜋᜓᜐᜆ</span> which
				translates to <strong>kamusata</strong></li>
		</ul>
		<h3>Magaling (Good)</h3>
		<ul style={{marginTop: 0}}>
			<li>With the same latin/roman typing ways on baybayin keyboard will produce: <span
				className="bold bybyn">ᜋᜄᜎᜒᜈᜄ</span> which translates to <strong>magalinaga</strong></li>
		</ul>
		<h3>Maaga (Early)</h3>
		<ul style={{marginTop: 0}}>
			<li><span className="bold bybyn">ᜋᜄ</span> which translates to <strong>maga</strong></li>
		</ul>
		<h3>What do you think is wrong?</h3>
		<p>With baybayin keyboard, <strong>always type baybayin with your caps lock OFF.</strong></p>
		<p>Now, typing characters like you are typing them using the latin/roman keyboard will NOT work! And yes, you will
			have a bunch of typos if you won’t disconnect yourself from the latin/roman typing ways.</p>
		<p>Why? Baybayin characters are not really letters. <strong>They are syllables, except the vowels and the ones
			with
			a <a href="https://en.wikipedia.org/wiki/Virama" target="_blank" rel="noreferrer">virama</a></strong>. Meaning,
			and by default, each baybayin “characters” are a pair of one consonant (or two with the syllable nga) and a
			vowel.
			Again, except the vowels and the ones with a virama.</p>
		<p>How typing works in baybayin keyboard? The default is a pair of <strong>one consonant</strong> (or two for nga)
			and the vowel <strong>a</strong>.</p>
		<p>For example the <span className="bold bybyn">ᜃ</span> character; A press on the key <strong>k</strong> on your
			keyboard will show the <strong>ka (<span className="bybyn">ᜃ</span>)</strong> character. So if you only need it
			to
			be just the <strong>k</strong>, you need to press the <strong>equal sign (=)</strong> key after it. That is how
			we
			bring the virama to disemvowel a syllable.</p>
		<p>On that note, typing <strong>kamusta</strong> using baybayin keyboard is either one of two ways. A combination
			of
			key presses as follows:</p>
		<ul>
			<li><strong>k, mo, s=</strong> and <strong>t</strong></li>
			<li><strong>ka, mo, s=</strong> and <strong>ta</strong></li>
		</ul>
		<p>How about the word <strong>magaling</strong>? Well, just the same. What’s special here is
			the <strong>ng</strong>.
			Typing ng directly will produce <span className="bold bybyn">ᜈᜄ</span> which translates
			to <strong>naga</strong>.
			That would make it <strong>magalinaga</strong> as shown above which is needless to say that it is wrong.</p>
		<p>If I would call it a trick, like how the virama is brought up, the character/letter case also plays an
			important
			role in the baybayin keyboard typing. Thus the word <strong>magaling</strong> was chosen for this purpose.</p>
		<p>Look back up when I noted to always type with you caps lock OFF, simply because of a few things. One is the
			distinction between the <strong>na (<span className="bybyn">ᜈ</span>)</strong> and <strong>nga (<span
				className="bybyn">ᜅ</span>)</strong> syllables.</p>
		<p>Typing it is one of two ways again and are as follows:</p>
		<ul>
			<li><strong>m, g, li</strong> and <strong>N=</strong></li>
			<li><strong>ma, ga, li</strong> and <strong>Na=</strong></li>
		</ul>
		<p>That’s right, a little bit weird, maybe crazy… but that is how it works. Perhaps a specification on typing such
			is
			just lying around somewhere but I haven’t been able to find it yet. If there’s any.</p>
		<p>Did you notice how the <strong>uppercase or the capital letter plays an important role</strong>? That’s right
			if
			you noticed. If not, typing <strong>n</strong> will bring the syllable <strong>na (<span
				className="bybyn">ᜈ</span>)</strong> while typing <strong>N</strong> will bring the syllable <strong>nga
				(<span
					className="bybyn">ᜅ</span>)</strong>. And this is why the character/letter case plays an important role
			in
			baybayin keyboard.</p>
		<p>How about the word <strong>maaga</strong>?</p>
		<p>Whenever you need to be typing <strong>a vowel after a vowel</strong>, the same uppercase letter role plays the
			part. One of two ways yet again and are as follows:</p>
		<ul>
			<li><strong>m, A</strong> and <strong>g</strong></li>
			<li><strong>ma, A</strong> and <strong>ga</strong></li>
		</ul>
		<p>The same is true when you are typing any vowel as the first character. For
			example: <strong>aklat</strong>, <strong>ilog</strong> and <strong>ulo</strong> amongst others.</p>
		<p>So, the next time that you would see such writing, you should know that the latin/roman key presses equivalents
			are as follows:</p>
		<ul>
			<li><span className="bybyn">ᜃᜋᜓᜐ᜔ᜆ</span> ➛ <strong>kmus=t</strong> or <strong>kamus=ta</strong></li>
			<li><span className="bybyn">ᜋᜄᜎᜒᜅ᜔</span> ➛ <strong>mgliN=</strong> or <strong>magaliNa=</strong></li>
			<li><span className="bybyn">ᜋᜀᜄ</span> ➛ <strong>mAg</strong> or <strong>maAga</strong></li>
		</ul>
		<p>That’s it! Once you keep all that in mind? You will be typing baybayin like you’re doing it with latin/roman
			scripts.</p>
		<h3>Common mistakes</h3>
		<ol>
			<li>Thinking of Baybayin as a Language.</li>
			<ul>
				<li>It is <strong>not!</strong></li>
				<li>Baybayin is a <strong>writing system!</strong></li>
			</ul>
			<li>Writing Baybayin with <a href="//en.wikipedia.org/wiki/English_alphabet" target="_blank" rel="noreferrer">English
				Alphabet</a> in mind.
			</li>
			<ul>
				<li>Is <strong>Wrong!</strong></li>
				<li><a href="//en.wikipedia.org/wiki/Kulitan" target="_blank" rel="noreferrer">Kulitan</a>, <a
					href="//en.wikipedia.org/wiki/File:Kurdita.jpg" target="_blank" rel="noreferrer">Kurdita</a>, <a
					href="//en.wikipedia.org/wiki/Baybayin" target="_blank" rel="noreferrer">Baybayin</a>, <a
					href="//en.wikipedia.org/wiki/Tagbanwa_script" target="_blank" rel="noreferrer">Tagbanwa</a>, <a
					href="//en.wikipedia.org/wiki/Basahan" target="_blank" rel="noreferrer">Basahan</a>, <a
					href="//akopito.weebly.com/suwat-bisaya.html" target="_blank" rel="noreferrer">Badlit</a>, etc... are
					writing systems in the Philippines!
				</li>
				<li>Our languages and dialects are originally using <a href="//en.wikipedia.org/wiki/Abakada_alphabet"
				                                                       target="_blank" rel="noreferrer">Abakada alphabet</a>!
				</li>
				<li>That is what Baybayin and many other scripts in the Philippines are made for!</li>
			</ul>
		</ol>
		<h3>Do take note that in baybayin, always write it how you pronounced it!</h3>
		<p className="bybyn">ᜇᜄ᜔ᜑᜅ᜔ ᜐᜎᜋᜆ᜔᜶ ᜉᜈᜎᜅᜒᜈᜈ᜔ ᜃ ᜈᜒ ᜊᜆ᜔ᜑᜎ!</p>
	</Fragment>
;