import type { Region } from 'react-native-maps';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type AppStateType = {
	location: Region;
};

const initialState: AppStateType = {
	// Ho Chi Minh city
	location: {
		latitude: 10.762622,
		latitudeDelta: 0.04,
		longitude: 106.660172,
		longitudeDelta: 0.02,
	},
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLocation(state, action: PayloadAction<{ lat: number; long: number }>) {
			state.location = {
				...state.location,
				latitude: action.payload.lat,
				longitude: action.payload.long,
			};
		},
	},
});

export const appReducer = appSlice.reducer;
export const { setLocation } = appSlice.actions;
