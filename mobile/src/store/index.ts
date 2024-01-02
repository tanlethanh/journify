import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from './app';
import { mapReducer } from './map';

export const store = configureStore({
	reducer: {
		app: appReducer,
		places: mapReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export * from './app';
export * from './map';
