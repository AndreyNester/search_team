import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { GetUsersResponse } from '../../../../entities/users/api/types';

export interface ICardsFieldProps
	extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLDivElement>, 'children'> {
	data: GetUsersResponse;
}
