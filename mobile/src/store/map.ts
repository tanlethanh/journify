import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CheckInData, PlaceData, PlacesStateType } from '@/types';

const initialState: PlacesStateType = {
	places: [],
	checkIns: [],
};

const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		reset: () => initialState,
		setPlaces(state, action: PayloadAction<{ places: PlaceData[] }>) {
			state.places = action.payload.places;
		},
		setCheckIns(state, action: PayloadAction<{ checkIns: CheckInData[] }>) {
			state.checkIns = action.payload.checkIns;
		},
		updateVote(
			state,
			action: PayloadAction<{
				checkInId: string;
				amount: number;
				type: 'up' | 'down';
			}>,
		) {
			const { checkInId, amount, type } = action.payload;
			const idx = state.checkIns.findIndex((c) => c.id === checkInId);
			if (idx != -1) {
				if (type === 'up') {
					state.checkIns[idx].upvote += amount;
				} else if (type === 'down') {
					state.checkIns[idx].downvote += amount;
				}
			}
		},
		addPlace(state, action: PayloadAction<{ place: PlaceData }>) {
			state.places = [...state.places, action.payload.place];
		},
	},
});

export const mapReducer = mapSlice.reducer;
export const {
	setPlaces,
	setCheckIns,
	updateVote,
	reset: resetMapState,
	addPlace,
} = mapSlice.actions;
