import type { UseQueryResult } from '@tanstack/react-query';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { GetUsersRequest, GetUsersResponse } from '../../types';
import { usersApi } from '../../usersApi';

export interface IUseUsersProps extends GetUsersRequest {}

export const useUsers = ({ page, per_page }: IUseUsersProps): UseQueryResult<GetUsersResponse> => {
	return useQuery<GetUsersResponse>({
		queryKey: ['users', page],
		queryFn: () => usersApi.getUsers({ page, per_page }),
		placeholderData: keepPreviousData,
	});
};
