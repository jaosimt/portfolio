// PROJECT LOGOS
import baybayinPilipinas from './images/projects/baybayin-pilipinas.jpg';
import underConstruction from '../components/PageNotFound/under-construction.png';
import simoUI from './images/projects/simo-ui.jpg';

import {
	baybayinPilipinasDetails,
	simoUIDetails
} from './ProjectDetails';

export const projectList = [
	{
		id: 'baybayin_pilipinas',
		subject: {
			name: 'Baybayin Pilipinas',
			website: '//baybayin.jaosimt.com/'
		},
		title: 'Online Baybayin Keyboard & Translator',
		image: baybayinPilipinas,
		details: baybayinPilipinasDetails
	}, {
		id: 'simo-ui',
		subject: {
			name: 'simo UI Widget',
			website: '//simo-ui.jaosimt.com/'
		},
		title: 'JS Library',
		image: simoUI,
		details: simoUIDetails
	}, {
		id: 'more-to-come',
		subject: {
			name: 'Stay Tuned!'
		},
		title: 'More To Come',
		image: underConstruction
	}
]
