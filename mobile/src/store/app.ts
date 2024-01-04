import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { AppStateType } from '@/types';

const initialState: AppStateType = {
	user: {
		votes: {},
	},
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
		reset: () => initialState,
		setLocation(state, action: PayloadAction<{ lat: number; long: number }>) {
			state.location = {
				...state.location,
				latitude: action.payload.lat,
				longitude: action.payload.long,
			};
		},
		vote(state, action: PayloadAction<{ id: number; vote: 'up' | 'down' }>) {
			const { id, vote } = action.payload;
			const latestVote = state.user.votes[id];
			if (vote === latestVote) {
				delete state.user.votes[id];
			} else {
				state.user.votes[id] = vote;
			}
		},
	},
});

export const appReducer = appSlice.reducer;
export const { setLocation, vote, reset: resetAppState } = appSlice.actions;
