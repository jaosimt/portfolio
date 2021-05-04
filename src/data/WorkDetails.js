import React, { Fragment } from "react";

import foxPro from './images/work/FoxPro_2.6_Developers_Guide_Cover.png';
import foxProDosScreens from './images/work/FoxproDosScreens.png';
import sbt from './images/work/sbtAccounting.png';
import jaoCert from './images/work/jao-cert.jpg';
import metronCJ from './media/metronMobileWebAppCJ.mp4';

export const codevDetails = <Fragment>
	<p className="italic">CoDev solves staffing problems by providing highly skilled professionals to growing technical
		companies.</p>
	<p>In June 2019, I was blessed to have been considered and boarded in this wonderful family.</p>
	<h4 className="label"><span>Employment</span><span>2019 - present</span></h4>
	<ul>
		<li className="bold">
			<a href="//turingscraft.com" target="_blank" rel="noreferrer">TuringsCraft</a>
		</li>
		<ul>
			<li>Develop and maintain front-end projects</li>
			<li className="italic">Language</li>
			<ul>
				<li>React JS, Cucumber, Java, JSP</li>
			</ul>
		</ul>
		<li className="bold">VisionEm</li>
		<ul>
			<li>Develop and maintain front-end projects</li>
			<ul>
				<li><a href="//visionem.org/" target="_blank" rel="noreferrer">VisionEm</a></li>
				<li><a href="//allegroreviews.visionem.org/" target="_blank" rel="noreferrer">AllegroReviews</a></li>
				<li><a href="//excellerence.visionem.org/" target="_blank" rel="noreferrer">Excellerence</a></li>
			</ul>
			<li className="italic">Language</li>
			<ul>
				<li>HTML, CSS, JavaScript, jQuery, PHP</li>
			</ul>
		</ul>
		<li className="bold">
			<a href="//www.securechannels.com/" target="_blank" rel="noreferrer">SecureChannels</a>
		</li>
		<ul>
			<li>Develop and maintain front-end project</li>
			<ul>
				<li><a href="//scifcom.com/" target="_blank" rel="noreferrer">scifcom.com</a></li>
			</ul>
			<li className="italic">Language</li>
			<ul>
				<li>HTML, CSS, JavaScript, jQuery, PHP</li>
			</ul>
		</ul>
	</ul>
	<h4 className="label">Nominations</h4>
	<ul>
		<li>Nominee for May 2020 Employee of the Month</li>
		<li>Nominee for March 2021 Employee of the Month</li>
	</ul>
	<h4 className="label">Awards & Recognitions</h4>
	<div className="inline-image" style={ {
		backgroundImage: `url(${ jaoCert })`,
		height: '300px',
		backgroundSize: 'contain',
		marginTop: '14px'
	} } />
</Fragment>

export const metroDetails = <Fragment>
	<p className="italic">
		A Silicon Valley technology start up that propels some of the biggest fitness coaches & brands in the world
		generating millions in revenue. We provide the tools and services they need to automate their business, so they
		can focus on what they do best.
	</p>
	<p>
		In 2013, I was approached by a colleague to work as a par-time Front-End Developer. I was asked if I'm familiar
		with <a href="https://en.wikipedia.org/wiki/JavaScriptMVC" target="_blank" rel="noreferrer">JavaScriptMVC</a> and
		I said, I know JavaScript and I may have an idea what JavaScriptMVC is. But no, I haven't come across with it. And
		so I asked if I can take a look at it first prior to committing on the offered job. And so I did. Little did I
		know I already started working on the project.
	</p>
	<p>
		In 2014, I officially signed a contract as a full-time Senior Front-end Engineer.
	</p>
	<h4 className="label"><span>Employment</span><span>2013 - 2017</span></h4>
	<ul>
		<li className="bold">Responsibilities</li>
		<ul>
			<li className="italic">Lead and mentor Cebu UI development team</li>
			<li className="italic">Help facilitate operations and the point of contact for Metron Innovation(formerly
				MailFin Inc dba WorkoutInbox) Cebu
			</li>
			<li className="italic">Help recruit team members and build camaraderie and productivity</li>
			<li className="italic">Development of the UI architecture to build usability, performance and scalability</li>
			<li className="italic">Maintain and enhance current UI standards and libraries</li>
			<li className="italic">Own and establish the documentation standards for the shared UI pattern library</li>
			<li className="italic">Participate design, task break down, implementation, code reviews and ensure project
				schedule and quality
			</li>
		</ul>
		<li className="bold">Development</li>
		<ul>
			<li>JavaScript fitness applications</li>
			<ul>
				<li className="italic">Leaderboard</li>
				<li className="italic">Workout application [Metron App]</li>
			</ul>
		</ul>
		<li className="bold">Deployment</li>
		<ul>
			<li>Spearheaded the Cebu Team during Application deployment of JavaScript (JavaScriptMVC & React JS)
				applications - hand-in-hand with the U.S. Team.
			</li>
		</ul>
	</ul>
	<h4 className="label">&nbsp;<span>2017 - 2018</span></h4>
	<ul>
		<li className="bold">Development</li>
		<ul>
			<li>IOS Fitness Application [Metron App]</li>
		</ul>
	</ul>
	<h4 className="label">Language:</h4>
	<ul>
		<li>HTML, CSS</li>
		<li>JavaScript</li>
		<ul>
			<li className="italic">JavascriptMVC</li>
			<li className="italic">React JS</li>
		</ul>
		<li>Bash script, subversion, Apache</li>
		<li>IOS Swift</li>
	</ul>
	<h4 className="label">Video/Snapshots</h4>
	<div>
		<video controls style={ { width: '300px', maxWidth: '100%', marginTop: '14px' } }>
			<source src={ metronCJ } type="video/mp4" />
			<source src={ metronCJ } type="video/ogg" />
			Your browser does not support the video tag.
		</video>
	</div>
</Fragment>

export const tietoDetails = <Fragment>
	<p className="italic">
		A leading Nordic IT services and software company. A globally recognized technology company with strong drive to
		grasp the opportunities of the data-driven world and the aim to become customer’s first choice for business
		renewal.
	</p>
	<p>
		In 2012 I was one of the blessed Cebuano who became a part of Tieto - Philipines. I boarded as a member of a small
		group developing a UI framework; A proprietary UI framework use to develop the clients web application.
	</p>
	<h4 className="label"><span>Employment</span><span>2012 - 2014</span></h4>
	<ul>
		<li className="bold">Development</li>
		<ul>
			<li>WebUI Application Framework</li>
		</ul>
		<li className="bold">Management</li>
		<ul>
			<li>Merlin Production Pipe</li>
		</ul>
	</ul>
	<h4 className="label">Language:</h4>
	<ul>
		<li>HTML, CSS, JavaScript</li>
		<li>Java JSF</li>
		<li>Selenium, Robot Framework</li>
	</ul>
</Fragment>

export const rphcDetails = <Fragment>
	<p className="italic">Owner and operator of an appliance dealer, furniture manufacturer, memorial park, hotel and
		apartelle services.</p>
	<p>Hired as EDP Head back in 2008 after the Company acquired an Accounting Information System.</p>
	<h4 className="label"><span>Employment</span><span>20018 - 2012</span></h4>
	<ul>
		<li className="italic">Development</li>
		<ul>
			<li><a href="http://www.rizonholdings.com/" target="_blank" rel="noreferrer">Company Website</a></li>
			<ul>
				<li className="italic"><a href="http://www.rizonholdings.com/cecile/home.aspx" target="_blank"
				                          rel="noreferrer">Cecile Enterprises</a></li>
				<li className="italic"><a href="http://www.rizonholdings.com/fred/home.aspx" target="_blank"
				                          rel="noreferrer">Fredzon Furniture and Appliance Center</a></li>
				<li className="italic"><a href="http://www.rizonholdings.com/farm/home.aspx" target="_blank"
				                          rel="noreferrer">M & C Agricultural Integrated Farm Incorporated</a></li>
				<li className="italic"><a href="http://www.rizonholdings.com/realty/home.aspx" target="_blank"
				                          rel="noreferrer">Lorenz Executive Apartelle</a></li>
			</ul>
			<li><a href="https://ais.rizonholdings.com/" target="_blank" rel="noreferrer">Accounting Information
				System</a></li>
			<ul>
				<li className="italic">Modifications and maintenance</li>
				<li className="italic">Report Pages</li>
			</ul>
			<li>Data Recovery and Enhancement System</li>
			<li><a href="http://helpdesk.rizonholdings.com/" target="_blank" rel="noreferrer">Help Desk</a></li>
		</ul>
		<li className="italic">Server Administration</li>
		<ul>
			<li>Accounting Information System</li>
			<li>Database</li>
		</ul>
	</ul>
	<p>
		There was wide array of language that I juggled almost all at the same time. It was NEVER easy considering that I
		was derailed from the I.T. industry for a decade on top of the learning curve from an xbase language programmer to
		becoming a Web Developer.
	</p>
	<p>
		Struggled but learned it by doing it! Nevertheless, the support of at least 2 wonderful individuals, (1)my
		brother, a Network Administrator from a reputable Japanese company and (2)a seasoned Java developer that believes
		in me really was a big deal. This was the reboot to my I.T. career that opened a few doors.
	</p>
	<h4 className="label">Language</h4>
	<ul>
		<li>HTML, CSS, JavaScript, jQuery, ASP.Net</li>
		<li>C#, Java JSP/JSF</li>
		<li>MSSql, PostgreSQL</li>
		<li>IIS, Tomcat</li>
	</ul>
</Fragment>

export const kimwaDetails = <Fragment>
	<p className="italic">One of, if not the largest and pioneer supplier of ready-mixed concrete, and quality aggregates
		in the Visayas and Mindanao.</p>
	<p>Started as EDP Head in 1997. Heavy Equipment & Transport Supervisor in 2000, and end up as a Plant
		Supervisor/Manager/ET AL in 2002.</p>
	<h4 className="label"><span>Employment</span><span><span>EDP Head</span>&nbsp;|&nbsp;<span>1997 - 1998</span></span>
	</h4>
	<ul>
		<li className="bold">Administration</li>
		<ul>
			<li>SBT Accounting System</li>
			<li>Novell Netware Network System</li>
		</ul>
		<li className="bold">Development</li>
		<ul>
			<li>Telephone Directory System</li>
			<li>Customer Profiler & Quotation System</li>
			<li>Human Resource Information System</li>
		</ul>
	</ul>
	<h4 className="label">&nbsp;<span><span>Outsourced to Subsidiary CYL Trading</span>&nbsp;|&nbsp;
		<span>1998 – 1999</span></span></h4>
	<ul>
		<li className="bold">Development</li>
		<ul>
			<li>Payroll System</li>
			<li>Water Billing System</li>
			<li>Trucking Billing System</li>
		</ul>
	</ul>
	<h4 className="label">&nbsp;<span><span>Heavy Equipment & Transport Supervisor</span>&nbsp;|&nbsp;
		<span>2000 – 2002</span></span></h4>
	<ul>
		<li className="bold">Supervisory</li>
		<ul>
			<li>Oversee Transport / Equipment and Maintenance</li>
			<li>Supervised more than 30 personnel</li>
		</ul>
		<li className="bold">Development</li>
		<ul>
			<li>Equipment Maintenance & Monitoring System</li>
		</ul>
	</ul>
	<h4 className="label">&nbsp;<span><span>Aggregates Plant Supervisor</span>&nbsp;|&nbsp;
		<span>2002 – 2007</span></span></h4>
	<ul>
		<li className="bold">Supervisory / Management</li>
		<ul>
			<li>Overall Plant Operation across 2 crusher plants and 3 quarry sites</li>
			<li>Supervised more than 30 personnel</li>
		</ul>
		<li className="bold">Development</li>
		<ul>
			<li>Oil & Spare parts Inventory System</li>
			<li>Plant Production System</li>
		</ul>
	</ul>
	<p>Right after my first ever job, I was hired to head Kimwa’s Electronic Data Processing Department.</p>
	<p>
		Way back in the 90’s, it was not that easy to get an I.T. job, that if you can even find one. I remembered that
		they needed a Computer Programmer, long story short, I stepped in. To my surprise, there was no working computer
		in the EDP cubicle.
	</p>
	<p>The problem was, I graduated a Computer Programming course and my hardware knowledge back then was next to nothing
		and are all theories. I haven’t tried assembling one ever.</p>
	<p>
		But then like I said, I considered myself blessed to have found the job and so maybe I could fix one.
		Needless to say perhaps? Indeed, I was able to identify the working parts that was just lying all over the place
		and eventually able to configure and have a working computer after almost a day.
	</p>
	<p>
		With the help of a none I.T. personnel that unexpectedly has knowledge with the Novel netware, I am finally in the
		network. That too is a strange field for me. Finally connected which was the second goal and was a bonus for me on
		the same day. The goal really was to access the SBT Accounting software that was running in the network and was
		having database index issues. A Foxpro database index file.
	</p>
	<p>SBT Accounting system. A system most likely today’s ERP, before it was even called “ERP”. My primary
		responsibility.</p>
	<div className="inline-image" style={ { backgroundImage: `url(${ sbt })` } } />
	<p>
		Considering that nobody was there to walk me through the technical aspect of the system, it was a blessing that it
		was built using Foxpro. And, it does comes with a dozen books or so that helps me up to speed.
	</p>
	<h4 className="label">Language</h4>
	<ul>
		<li><a href="//en.wikipedia.org/wiki/FoxPro" target="_blank" rel="noreferrer">Foxpro</a></li>
		<li><a href="//en.wikipedia.org/wiki/Novell" target="_blank" rel="noreferrer">Novell Netware</a></li>
	</ul>
	<h4 className="label">The Crazy Part</h4>
	<p>
		Year 1999, the company suffers labor issues and was forced to temporarily shut down almost all main office and
		main ready-mixed-concrete plant operations and issued a forced indefinite leave to all affected personnels.
		Needless to say that it includes me.
	</p>
	<p>
		For a year, after making a living in my in-laws farm in Mindanao, I got a call from the office, but it was not a
		recall. The company still couldn’t restore the EDP Department. I was only asked to develop a system for the motor
		pool departments (Transport and Maintenance shop). The offer was good and so I took it.
	</p>
	<p>
		That was year 2000. A system that monitor equipment’s consumptions from diesel down to lug nuts. It also monitor
		the routine maintenances from tuneups to oil change and even the number of trips or the operation time for timed
		based equipments such as excavators and dozers. It was a good two plus months of development.
	</p>
	<p>
		During the implementation of the system, an unexpected offer from my boss to supervise the department itself
		primarily because of the newly built application and since there was nobody that has any computer knowledge in
		that department nor a supervisor too. Obviously, it was never his plan since he called me to build and did pay me
		a good amount for it. Despite the need to have a job, I was a little scared and definitely shocked. It was way out
		of my league obviously. I am young and knows nothing other than to work in front of a computer, except of course
		in my in-laws farm since I was born on a small farm too. But Heavy Equipment and Transport? I don’t even know how
		to drive at that point… but, I have to give it to him, he persuaded me good, and his right on one thing for sure.
		I knew the system because I built it. So how hard could it be, he said.
	</p>
	<p>
		Having a kid already, I took the job. Development updates continues almost all through out while in the position.
		And it was a good two years with a satisfied boss. Satisfied enough that he trusted me on a bigger role for a much
		needed supervisory/management et al in an aggregates plant. A remote crusher plant down south Cebu. The offer
		includes a service vehicle, a house for me and my family with free utility expenses including gas.
	</p>
	<p>
		And so I was persuaded once again and lasted for a good seven years. I was having fun despite a rather crazy
		operation responsibilities across 2 towns in the south where 2 plants and 3 quarry sites are situated.
	</p>
	<p>
		The fun part actually was, It became easy when I completed the application that I built specifically to help me do
		all the necessary recordings and inventory from raw materials to finish products including all the functionality
		of the Equipment Maintenance & Monitoring system that I previously built and implemented in the company’s motor
		pool department.
	</p>
	<p>
		If that ain’t crazy then I don’t know what is. Nevertheless, taught me a lot of things. From learning to drive and
		operate all the equipments that the company has; to working with educated down to less educated personnel.
		Handling the business aspect and even communicating with various government offices and officials as far as
		permits and collaborations are concerned.
	</p>
	<p>Crazy but more than educational.</p>
</Fragment>;

export const hmcDetails = <Fragment>
	<p className="italic">Was a startup company owned by a Pilipino-American.</p>
	<p>Right after graduation in 1996, I was hired after rendering OJT on the same Company.</p>
	<p>
		The Company provides I.T. services, sales & consultancy with address at 11 P. Zamora street, Cebu City,
		Philippines. By now, the company was long gone for reasons that I am not entirely sure. One is that, the
		owner went back to the U.S.
	</p>
	<h4 className="label">Employment:</h4>
	<ul>
		<li>On-The-Job Training</li>
		<li>Project based Computer Programmer</li>
	</ul>
	<p>
		During my second year in college, I took an On-The-Job training as a computer programmer. I was responsible
		on building a quotation system for all the sales and services that the company offers.
	</p>
	<p>
		During my Project based employment, I was restoring a half damage Hospital System originally designed and
		used in the Philippine Armed Forces. How the CEO able to grab such application and who originally built it?
		I never asked. All I have at the time was the excitement to work as all graduates probably have.
	</p>
	<p>
		Part of the modification needed was to convert the application’s design from military to civilian. It was a
		painful process since the design especially the templates in adding/admitting patient always comes with a
		military rank and it was all over the system and yes, it was not dynamic. Labels and titles have embedded
		ranks and are manually placed.
	</p>
	<p>
		However a newbie, I was able to revive and revise the application in a few weeks which I originally
		estimated to be 2 to 3 months. I was very happy and I thought that If I wasn't getting any kind of help, I must be
		very good.
	</p>
	<p>
		Talk about an excited newbie able to pocket a 5k Philippine peso in just a little over a week! It wasn't that much
		today but It was back in the 90s. 😉
	</p>
	<p>
		Behind the proud and very delighted newbie being able to complete the job way ahead of time is the fact
		that, I was about to lose my job. I totally forgot that I was a project based employee hired to work on a
		one and only project. Ha ha, I laughed… but saddened deep inside.
	</p>
	<p>
		Nevertheless, It was an achievement and an experience, my very first in-fact after college.
	</p>
	<h4 className="label">Language:</h4>
	<ul>
		<li><a href="//en.wikipedia.org/wiki/FoxPro" target="_blank" rel="noreferrer">Foxpro Dos</a></li>
		<ul>
			<li className="italic">A text-based procedural programming language and database management system.</li>
		</ul>
	</ul>
	<div className="inline-flex-image">
		<div className="img" style={ { backgroundImage: `url(${ foxPro })` } } />
		<div className="img" style={ { backgroundImage: `url(${ foxProDosScreens })` } } />
	</div>
</Fragment>;
