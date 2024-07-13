import type { UseQueryResult } from '@tanstack/react-query';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { GetUserResponse, GetUserRequest } from '../../types';
import { usersApi } from '../../usersApi';

export interface IUseUserProps extends GetUserRequest {
	enabled?: boolean;
}

export const useUser = ({ id, enabled = true }: IUseUserProps): UseQueryResult<GetUserResponse> => {
	return useQuery<GetUserResponse>({
		queryKey: ['user', id],
		queryFn: () => usersApi.getUser({ id }),
		placeholderData: keepPreviousData,
		enabled,
	});
};
