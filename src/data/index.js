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
		position: 'Senior Web Developer',
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
		notes: 'Right after graduation in 1996, I was hired after rendering OJT on the same Company.'
	}
]