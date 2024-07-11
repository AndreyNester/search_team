import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IInitialState } from './types';

const initialState: IInitialState = {
	email: null,
	token: null,
	id: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: create => ({
		signIn: create.reducer((state, action: PayloadAction<IInitialState>) => {
			const { email, id, token } = action.payload;
			state.email = email;
			state.id = id;
			state.token = token;
		}),
		signOut: create.reducer(state => {
			state.email = null;
			state.id = null;
			state.token = null;
		}),
	}),
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
