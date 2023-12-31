import type { Location, PlaceData } from './types';

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
