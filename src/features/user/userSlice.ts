import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IInitialState } from './types';
import { sessionAuthApi } from '../../shared/localStorage/api/SessionAuthApi';

const initialState: IInitialState = {
	email: null,
	token: null,
	id: null,
};

export const userSlice = createSlice({
	name: 'user',
	//Вынуждены хардкодить из-за ошибки в ts (!)
	initialState: sessionAuthApi.getSession() ? sessionAuthApi.getSession()! : initialState,
	reducers: create => ({
		signIn: create.reducer((state, action: PayloadAction<IInitialState>) => {
			//Вынужден кастить из-заа ошибки в ts
			const { email, id, token } = action.payload as { email: string; id: string; token: string };
			state.email = email;
			state.id = id;
			state.token = token;
			sessionAuthApi.setSession({ email, id, token });
		}),
		signOut: create.reducer(state => {
			state.email = null;
			state.id = null;
			state.token = null;
			sessionAuthApi.clear();
		}),
	}),
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
