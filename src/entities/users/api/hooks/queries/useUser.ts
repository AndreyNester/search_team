import type { UseQueryResult } from '@tanstack/react-query';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { GetUserResponse, GetUserRequest } from '../../types';
import { usersApi } from '../../usersApi';

export interface IUseUserProps extends GetUserRequest {}

export const useUser = ({ id }: IUseUserProps): UseQueryResult<GetUserResponse> => {
	return useQuery<GetUserResponse>({
		queryKey: ['user', id],
		queryFn: () => usersApi.getUser({ id }),
		placeholderData: keepPreviousData,
	});
};
