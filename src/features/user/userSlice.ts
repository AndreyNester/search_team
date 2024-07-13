import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IInitialState } from './types';
import { sessionAuthApi } from '@src/shared/localStorage/api/SessionAuthApi';

const initialState: IInitialState = {
	email: null,
	token: null,
	id: null,
	liked: [],
};

export const userSlice = createSlice({
	name: 'user',
	//Вынуждены хардкодить из-за ошибки в ts (!)
	initialState: sessionAuthApi.getSession() ? sessionAuthApi.getSession()! : initialState,
	reducers: create => ({
		signIn: create.reducer((state, action: PayloadAction<IInitialState>) => {
			//Вынужден кастить из-заа ошибки в ts
			const { email, id, token, liked } = action.payload as {
				email: string;
				id: string;
				token: string;
				liked: number[];
			};
			state.email = email;
			state.id = id;
			state.token = token;
			state.liked = liked;
			sessionAuthApi.setSession({ email, id, token, liked: [] });
		}),
		signOut: create.reducer(state => {
			state.email = null;
			state.id = null;
			state.token = null;
			sessionAuthApi.clear();
		}),
		onChangeLike: create.reducer((state, action: PayloadAction<number>) => {
			if (state.liked.indexOf(action.payload) !== -1) {
				const newArr: number[] = state.liked.filter(item => item !== action.payload);
				state.liked = [...newArr];
				const globState = sessionAuthApi.getSession();
				if (globState) {
					globState.liked = [...newArr];
					sessionAuthApi.setSession({ ...globState });
				}
			} else {
				state.liked.push(action.payload);
				const globState = sessionAuthApi.getSession();
				if (globState) {
					globState.liked.push(action.payload);
					sessionAuthApi.setSession({ ...globState });
				}
			}
		}),
	}),
});

export const { signIn, signOut, onChangeLike } = userSlice.actions;

export default userSlice.reducer;
