import type { ISignInResponse, ISignUpResponse, SignInRequest, SignUpRequest } from './types';
import { BaseApi } from '../../../shared/axios/baseApi';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

class AuthApi extends BaseApi {
	async signInByEmailAndPassword({ email, password }: SignInRequest): Promise<ISignInResponse> {
		const auth = getAuth();
		const response = await signInWithEmailAndPassword(auth, email, password);
		return response;
	}

	async signUpByEmailAndPassword({ email, password }: SignUpRequest): Promise<ISignUpResponse> {
		const auth = getAuth();
		const response = await createUserWithEmailAndPassword(auth, email, password);
		return response;
	}
}

export const authApi = new AuthApi();
