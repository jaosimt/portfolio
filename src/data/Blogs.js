// BLOG LOGOS
import keyboard from './images/blogs/baybayin_keyboard.png';
import ancientHumanPH from './images/blogs/ancientHumanPH.jpg';
import awitSaBohol from './images/blogs/awit-sa-bohol.jpg';
import lapulapuDecals from './images/blogs/lapulapuDecals.jpg';

import {
	kadauganDetails,
	boholHymnDetails,
	baybayinKeyboardDetails,
	lusonensisDetails
} from './BlogDetails';

export const blogList = [
	{
		id: 'baybayin_keyboard',
		subject: {
			name: 'How to use the Baybayin Keyboard',
		},
		title: 'Baybayin Keyboard',
		image: keyboard,
		details: baybayinKeyboardDetails
	}, {
		id: 'homo_lusonensis',
		subject: {
			name: 'Homo Luzonensis',
		},
		title: 'Ancient Human Discovered In The Philippines',
		image: ancientHumanPH,
		details: lusonensisDetails
	}, {
		id: 'awit_sa_bohol',
		subject: {
			name: 'Awit Sa Bohol',
		},
		title: 'Bohol Hymn',
		image: awitSaBohol,
		details: boholHymnDetails
	}, {
		id: 'kadaugan_sa_mactan',
		date: '05/01/2021',
		subject: {
			name: 'Kadaugan Sa Mactan',
		},
		title: 'Chief Lapu-Lapu',
		image: lapulapuDecals,
		details: kadauganDetails
	}
]