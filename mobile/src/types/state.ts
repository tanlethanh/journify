import type { Region } from 'react-native-maps';

import type { CheckInData, PlaceData } from './data';

export type PlacesStateType = {
	places: PlaceData[];
	checkIns: CheckInData[];
};

export type UserState = {
	votes: Record<string, 'up' | 'down'>;
};

export type AppStateType = {
	user: UserState;
	location: Region;
};
