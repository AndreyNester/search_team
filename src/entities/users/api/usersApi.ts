import type { GetUsersResponse, GetUsersRequest, GetUserRequest, GetUserResponse } from './types';
import { BaseApi } from '@src/shared/axios';
import { $GetUsersResponse, $GetUserResponse } from './types';

class UsersApi extends BaseApi {
	async getUsers(params: GetUsersRequest): Promise<GetUsersResponse> {
		const response = (await this.instance.get('users', { params })).data;
		return $GetUsersResponse.parse(response);
	}

	async getUser({ id }: GetUserRequest): Promise<GetUserResponse> {
		const response = (await this.instance.get(`users/${id}`)).data;
		return $GetUserResponse.parse(response);
	}
}

export const usersApi = new UsersApi();
