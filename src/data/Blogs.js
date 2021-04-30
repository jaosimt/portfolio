// BLOG LOGOS
import keyboard from './images/blogs/baybayin_keyboard.png';
import ancientHumanPH from './images/blogs/ancientHumanPH.jpg';
import awitSaBohol from './images/blogs/awit-sa-bohol.jpg';
import underConstruction from '../components/PageNotFound/under-construction.png';

import {
	boholHymnDetails,
	baybayinKeyboardDetails,
	lusonensisDetails
} from './BlogDetails';

export const blogList = [
	{
		id: 'baybayin-keyboard',
		subject: {
			name: 'How to use the Baybayin Keyboard',
		},
		title: 'Baybayin Keyboard',
		image: keyboard,
		details: baybayinKeyboardDetails
	}, {
		id: 'lusonensis',
		subject: {
			name: 'Homo Luzonensis',
		},
		title: 'Ancient Human Discovered In The Philippines',
		image: ancientHumanPH,
		details: lusonensisDetails
	}, {
		id: 'awit-sa-bohol',
		subject: {
			name: 'Awit Sa Bohol',
		},
		title: 'Mutya Kung Bohol',
		image: awitSaBohol,
		details: boholHymnDetails
	}
]