import { z } from 'zod';

export interface ISessionGetItemProps {
	email: string;
	token: string;
	id: string | number;
}

export const $ISessionGetItemProps = z.object({
	email: z.string(),
	token: z.string(),
	id: z.union([z.string(), z.number()]),
});
