import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { GetUserResponse } from '../../../../entities/users/api/types';

export interface IUserInfoProps
	extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
	data: GetUserResponse;
}
