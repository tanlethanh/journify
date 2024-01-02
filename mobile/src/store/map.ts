import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CheckInData, PlaceData } from './types';

type PlacesStateType = {
	places: PlaceData[];
	checkIns: CheckInData[];
};

const initialState: PlacesStateType = {
	places: [],
	checkIns: [],
};

const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setPlaces(state, action: PayloadAction<{ places: PlaceData[] }>) {
			state.places = action.payload.places;
		},
		setCheckIns(state, action: PayloadAction<{ checkIns: CheckInData[] }>) {
			state.checkIns = action.payload.checkIns;
		},
	},
});

export const mapReducer = mapSlice.reducer;
export const { setPlaces, setCheckIns } = mapSlice.actions;
