import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {},
});

export const appReducer = appSlice.reducer;
