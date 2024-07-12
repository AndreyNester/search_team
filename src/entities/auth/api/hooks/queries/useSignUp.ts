import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { SignInRequest, ISignInResponse, SignUpRequest, ISignUpResponse } from '../../types';
import { authApi } from '../../authApi';

export interface IUseSignUpProps extends SignUpRequest {}

export const useSignUp = ({
	email,
	password,
}: IUseSignUpProps): UseQueryResult<ISignUpResponse> => {
	return useQuery<ISignUpResponse>({
		queryKey: ['client', 'signUp', email],
		queryFn: () => authApi.signInByEmailAndPassword({ email, password }),
	});
};
