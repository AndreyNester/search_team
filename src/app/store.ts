import type { Action, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSlice } from '@src/features/user';

const rootReducer = combineSlices(userSlice);
export type RootState = ReturnType<typeof rootReducer>;
export const makeStore = (preloadedState?: Partial<RootState>): EnhancedStore => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState,
	});
	setupListeners(store.dispatch);
	return store;
};
export const store = makeStore();
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
