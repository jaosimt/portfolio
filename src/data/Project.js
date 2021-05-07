// PROJECT LOGOS
import baybayinPilipinas from './images/projects/baybayin-pilipinas.jpg';
import underConstruction from '../components/PageNotFound/under-construction.png';
import simoUI from './images/projects/simo-ui.jpg';
import pcpLogo from './images/projects/pcp-logo.png';
import pinoyKeyboard from './images/projects/pinoyKeyboard.jpg';

import {
	pinoyKeyboardDetails,
	baybayinPilipinasDetails,
	simoUIDetails,
	pcPrejanDetails
} from './ProjectDetails';

export const projectList = [
	{
		id: 'more-to-come',
		subject: {
			name: 'Stay Tuned!'
		},
		title: 'More To Come',
		image: underConstruction
	}, {
		id: 'pinoy-keyboard',
		subject: {
			name: 'Pinoy Keyboard'
		},
		title: 'Android Baybayin Keyboard',
		image: pinoyKeyboard,
		details: pinoyKeyboardDetails
	}, {
		id: 'baybayin_pilipinas',
		subject: {
			name: 'Baybayin Pilipinas',
			website: '//baybayin.jaosimt.com/'
		},
		title: 'Online Baybayin Keyboard & Translator',
		image: baybayinPilipinas,
		details: baybayinPilipinasDetails
	}, {
		id: 'pcprejan',
		subject: {
			name: 'PCP Architectural Services Webapp'
		},
		title: 'PCP Web App',
		image: pcpLogo,
		details: pcPrejanDetails
	}, {
		id: 'simo-ui',
		subject: {
			name: 'simo UI Widgets',
			website: '//simo-ui.jaosimt.com/'
		},
		title: 'JS Library',
		image: simoUI,
		details: simoUIDetails
	}
]
