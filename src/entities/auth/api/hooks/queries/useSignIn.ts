import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { SignInRequest, ISignInResponse } from '../../types';
import { authApi } from '../../authApi';

export interface IUseSignInProps extends SignInRequest {}

export const useSignIn = ({
	email,
	password,
}: IUseSignInProps): UseQueryResult<ISignInResponse> => {
	return useQuery<ISignInResponse>({
		queryKey: ['client', 'signIn'],
		queryFn: () => authApi.signInByEmailAndPassword({ email, password }),
		enabled: false,
	});
};
