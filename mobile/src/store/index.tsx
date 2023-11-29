import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from './app';

export const store = configureStore({
	reducer: {
		app: appReducer,
	},
});
