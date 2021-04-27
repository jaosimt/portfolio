import React, { Fragment } from "react";
import codev from './codev.webp';
import metron from './metron.png';
import tieto from './tieto.png';
import rizon from './rizon.png';
import kimwa from './kimwa.png';

export const workList = [
	{
		dateRange: '2019 to present',
		company: {
			name: 'Complete Development (CoDev)',
			website: '//www.codev.com'
		},
		position: 'Senior Front-End Developer',
		image: codev,
		client: [
			{
				name: 'Turingscraft',
				website: 'turingscraft.com',
				responsibility: 'Develop and maintain front-end projects',
				notes: '',
				languages: 'React JS, Cucumber, Java, JSP'
			},
			{
				name: 'Visionem',
				website: 'visionem.org',
				responsibility: 'Develop and maintain front-end projects',
				notes: '',
				languages: 'HTML, JavaScript, JQuery, PHP'
			},
			{
				name: 'Securechannel',
				website: 'www.securechannel.com',
				responsibility: 'Develop and maintain front-end projects',
				notes: '',
				languages: 'HTML, JavaScript, JQuery, PHP'
			}
		]
	}, {
		dateRange: '2013 to 2018',
		company: {
			name: 'Metron Innovation Group',
			website: '//metron.io'
		},
		position: 'Senior Front-End Engineer',
		image: metron,
		notes: "Spearheaded the Cebu team during a part time job in 2013.  Signed a full time job as a Sr. Frontend Engineer in 2014.",
		languages: "Javascript MVC, React JS, IOS Swift"
	}, {
		dateRange: '2012 to 2014',
		company: {
			name: 'Tieto Global Oy - Philippines'
		},
		position: 'Web UI Developer',
		image: tieto,
		notes: "In 2012, applied and Hired as a Web UI Developer. The companies label for a Front-End Developer.  Working alongside a handful of a few hundreds employee all in all.",
		languages: "Java, JSF"
	}, {
		dateRange: '2008 to 2012',
		company: {
			name: 'Rizon Property Holdings Corporation',
			website: '//www.rizonholdings.com'
		},
		position: 'EDP Head',
		image: rizon,
		notes: '',
		languages: 'APS Net, JQuery, Java, JSP'
	}, {
		dateRange: '1997 - 2007',
		company: {
			name: 'Kimwa Construction & Development Corporation',
			website: '//kimwaconstruction.com'
		},
		position: 'EDP Head / Transport Supervisor / Plant Supervisor',
		image: kimwa,
		notes: 'Started as EDP Head in 1997.  Heavy Equipment. & Transport Supervisor in 2000, and end up as a Plant Supervisor/Manager/ET AL in 2002.'
	}, {
		dateRange: '1996',
		company: {
			name: 'Has-Mirage Corporation'
		},
		position: 'Computer Programmer',
		notes: 'Right after graduation in 1996, I was hired after rendering OJT on the same Company.',
		details: <Fragment>
			<p>Was a startup company owned by a Pilipino-American.</p>,
			<p>
				The Company provides I.T. services, sales & consultancy with address at 11 P. Zamora street, Cebu City, Philippines.  By now, the company was long gone for reasons that I am not entirely sure.  One is that, the owner went back to the U.S.
			</p>
			<h5>Employment:</h5>
			<ul>
				<li>On-The-Job Training</li>
				<li>Project based Computer Programmer</li>
			</ul>
			<p>
				During my second year in college, I took an On-The-Job training as a computer programmer.  I was responsible on building a quotation system for all the sales and services that the company offers.
			</p>
			<p>
				During my Project based employment, I was restoring a half damage Hospital System originally designed and used in the Philippine Armed Forces.  How the CEO able to grab such application and who originally built it? I never asked.  All I have at the time was the excitement to work as all graduates probably have.
			</p>
			<p>
				Part of the modification needed was to convert the application’s design from military to civilian.  It was a painful process since the design especially the templates in adding/admitting patient always comes with a military rank and it was all over the system and yes, it was not dynamic.  Labels and titles have embedded ranks and are manually placed.
			</p>
			<p>
				However a newbie, I was able to revive and revise the application in less than two weeks which I originally estimated to be 2 to 3 months.  I was very happy and I thought that If I was not lucky, I must be very good.  Talk about an excited newbie able to pocket a 5k Philippine peso in just a little over a week 😉
			</p>
			<p>
				Behind the proud and very delighted newbie being able to complete the job way ahead of time is the fact that, I was about to lose my job.  I totally forgot that I was a project based employee hired to work on a one and only project.  Ha ha, I laughed… but saddened deep inside.
			</p>
			<p>
				Nevertheless, It was an achievement and an experience, my very first in-fact after college.
			</p>
			<h5>Language:</h5>
			<p>
				Back then, It was <a href="//en.wikipedia.org/wiki/FoxPro" target='_blank' rel="noreferrer">Foxpro</a> Dos.  A text-based procedural programming language and database management system.
			</p>
		</Fragment>
	}
]