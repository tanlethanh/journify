import type { CheckInData, Location, PlaceData } from './types';

export const getMockedPlaces = (loc: Location): PlaceData[] => {
	return [
		{
			id: '1',
			name: 'Chiller',
			handle: '@letschill',
			checkInCount: 12400,
			location: {
				latitude: loc.latitude + 0.0072,
				longitude: loc.longitude + 0.0066,
			},
			imageUrl:
				'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
		},
		{
			id: '2',
			name: 'Holicamp',
			handle: '@holicamp',
			checkInCount: 234,
			location: {
				latitude: loc.latitude + 0.0066,
				longitude: loc.longitude - 0.007,
			},
			imageUrl:
				'https://glamptrip.vn/wp-content/uploads/2022/08/280454232_156317880242592_9134584858670621097_n.jpg',
		},
		{
			id: '3',
			name: 'Banh Canh Ca Loc',
			handle: '@bccl',
			checkInCount: 1300,
			location: {
				latitude: loc.latitude - 0.0064,
				longitude: loc.longitude + 0.0078,
			},
			imageUrl: 'https://i.ytimg.com/vi/GsN7anbAvdc/maxresdefault.jpg',
		},
		{
			id: '4',
			name: 'BKBAR',
			handle: '@bk_bar',
			checkInCount: 578,
			location: {
				latitude: loc.latitude - 0.009,
				longitude: loc.longitude - 0.001,
			},
			imageUrl:
				'https://chillvietnam.com/wp-content/uploads/2022/12/lan-dau-di-bar-uong-gi-nhung-do-uong-trong-bar-ban-can-biet-1672437505.jpg',
		},
		{
			id: '5',
			name: 'Hi Coffee',
			handle: '@hicoffee_111',
			checkInCount: 9720,
			location: {
				latitude: loc.latitude - 0.003,
				longitude: loc.longitude - 0.008,
			},
			imageUrl:
				'https://www.posist.com/restaurant-times/wp-content/uploads/2023/07/How-To-Start-A-Coffee-Shop-Business-A-Complete-Guide.jpg',
		},
	];
};

export const checkIns: CheckInData[] = [
	{
		id: '1',
		placeId: '1',
		date: '13 Nov',
		caption:
			'Nestled in tranquility, this chill haven whispers serenity. Soft breezes dance with gentle sunshine, creating a symphony of calm. Time slows, and worries melt away in the embrace of peaceful simplicity.',
		imageUrl:
			'https://c0.wallpaperflare.com/preview/259/493/306/person-car-cloud-sunset.jpg',
		upvote: 375,
		downvote: 0,
		impressions: 1795,
		replyCount: 2,
		user: {
			name: 'Tan Le',
			handle: '@tanle',
			discovery: 112,
			image:
				'https://ih1.redbubble.net/image.3294707811.8499/raf,750x1000,075,t,000000:44f0b734a5.jpg',
			tick: true,
		},
		reply: [
			{
				checkInId: '1',
				user: {
					name: 'Yen Nhi',
					handle: '@nhiiii',
					discovery: 32,
					image:
						'https://lofigirl.com/wp-content/uploads/2023/02/DAY_UPDATE_ILLU.jpg',
					tick: false,
				},
				content: "I'm with you, @tanle!",
				date: '15 Nov',
			},
			{
				checkInId: '1',
				user: {
					name: 'Tommi',
					handle: '@__tommi__',
					discovery: 32,
					image:
						'https://nftcrypto.io/wp-content/uploads/2023/05/2023-05-18-17_57_18-The-Journey-of-an-NFT-Avatar-Word-Product-Activation-Failed.png',
					tick: true,
				},
				content:
					"Can't wait! Let's catch those peaceful vibes together soon. 🌿✨",
				date: '16 Nov',
			},
		],
	},
	{
		id: '2',
		placeId: '1',
		date: '20 Dec',
		caption:
			"Chillin' like a villain in my own little laughter lair. 😎🤣 #SeriousAboutChillaxing",
		imageUrl:
			'https://media.licdn.com/dms/image/D5612AQFjCAi8IuoqbA/article-cover_image-shrink_600_2000/0/1694075367820?e=2147483647&v=beta&t=YuAak2v9NSV7_UAyv2o0-xlH54msee5h1iA_rAmKPwo',
		upvote: 123,
		downvote: 0,
		impressions: 789,
		replyCount: 0,
		user: {
			name: 'Hung Wibu',
			handle: '@hung_wibu',
			discovery: 45,
			image: 'https://i.imgur.com/bMH6qNc.png',
			tick: true,
		},
	},
];
