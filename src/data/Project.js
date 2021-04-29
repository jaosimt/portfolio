// COMPANY LOGOS
import baybayinPilipinas from './images/projects/baybayin-pilipinas.jpg';
import underConstruction from '../components/PageNotFound/under-construction.png';

import {
	baybayinPilipinasDetails
} from './ProjectDetails';

export const projectList = [
	{
		id: 'baybayin-pilipinas',
		subject: {
			name: 'Baybayin Pilipinas',
			website: '//baybayin.jaosimt.com/'
		},
		title: 'Online Baybayin Keyboard & Translator',
		image: baybayinPilipinas,
		details: baybayinPilipinasDetails
	}, {
		id: 'more-to-come',
		subject: {
			name: 'Stay Tuned!'
		},
		title: 'More To Come',
		image: underConstruction
	}
]