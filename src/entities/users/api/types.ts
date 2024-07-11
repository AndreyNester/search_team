import { z } from 'zod';
export type GetUsersResponse = z.infer<typeof $GetUsersResponse>;
export type GetUsersRequest = z.infer<typeof $GetUsersRequest>;
export type GetUserResponse = z.infer<typeof $GetUserResponse>;
export type GetUserRequest = z.infer<typeof $GetUserRequest>;

export const $User = z.object({
	id: z.number(),
	email: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	avatar: z.string(),
});

export const $Data = z.array($User);

export const $GetUsersResponse = z.object({
	page: z.number(),
	per_page: z.number(),
	total: z.number(),
	total_pages: z.number(),
	data: $Data,
	support: z.object({ url: z.string(), text: z.string() }),
});

export const $GetUserResponse = z.object({
	data: $User,
	support: z.object({ url: z.string(), text: z.string() }),
});

export const $GetUserRequest = z.object({
	id: z.number(),
});
export const $GetUsersRequest = z.object({
	page: z.number().optional(),
	per_page: z.number().optional(),
});
