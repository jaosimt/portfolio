// COMPANY LOGOS
import codev from './images/work/codev.webp';
import metron from './images/work/metron.png';
import tieto from './images/work/tieto.png';
import rizon from './images/work/rizon.png';
import kimwa from './images/work/kimwa.png';

import {
	hmcDetails,
	kimwaDetails,
	rphcDetails,
	tietoDetails,
	metroDetails,
	codevDetails
} from './WorkDetails';

export const workList = [
	{
		id: 'codev',
		dateRange: '2019 to present',
		subject: {
			name: 'Complete Development (CoDev)',
			website: '//www.codev.com',
			address: '7F, The Link Building, Cebu I.T. Park, Apas, Lahug, Cebu City, Cebu, 6000 Philippines'
		},
		title: 'Senior Front-End Developer',
		image: codev,
		details: codevDetails
	}, {
		id: 'metron',
		dateRange: '2013 to 2018',
		subject: {
			name: 'Metron Innovation Group',
			website: '//metron.io',
			address: 'San Jose, California'
		},
		title: 'Senior Front-End Engineer',
		image: metron,
		notes: "Spearheaded the Cebu team during a part time job in 2013.  Signed a full time job as a Sr. Frontend Engineer in 2014.",
		languages: "JavaScript MVC, React JS, IOS Swift",
		details: metroDetails
	}, {
		id: 'tieto',
		dateRange: '2012 to 2014',
		subject: {
			name: 'Tieto Global Oy - Philippines',
			address: '8th Floor, Cebu I.T. Tower, Bohol Avenue, corner Mindanao Avenue, Cebu City 6000 Philippines'
		},
		title: 'Web UI Developer',
		image: tieto,
		notes: "In 2012, applied and Hired as a Web UI Developer. The companies label for a Front-End Developer.  Working alongside a handful of a few hundreds employee all in all.",
		languages: "Java, JSF",
		details: tietoDetails
	}, {
		id: 'rphc',
		dateRange: '2008 to 2012',
		subject: {
			name: 'Rizon Property Holdings Corporation',
			website: 'http://www.rizonholdings.com',
			address: 'M. Rizon Building, Dap-dap, Mactan, Lapu-Lapu City, Cebu, 6015 Philippines'
		},
		title: 'EDP Head',
		image: rizon,
		languages: 'APS Net, jQuery, Java, JSP',
		details: rphcDetails
	}, {
		id: 'kcdc',
		dateRange: '1997 - 2007',
		subject: {
			name: 'Kimwa Construction & Development Corporation',
			website: '//kimwaconstruction.com',
			address: 'S. O. Albaño Street, Subangdaku, Mandaue City, Cebu, 6014 Philippines'
		},
		title: 'EDP Head / Transport Supervisor / Plant Supervisor',
		image: kimwa,
		details: kimwaDetails
	}, {
		id: 'hmc',
		dateRange: '1996',
		subject: {
			name: 'Has-Mirage Corporation',
			address: '11 Zamora street, Cebu City, 6000 Philippines'
		},
		title: 'Computer Programmer',
		details: hmcDetails
	}
]