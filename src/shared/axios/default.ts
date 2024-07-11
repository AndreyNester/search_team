import type { CreateAxiosDefaults } from 'axios';

export const defaultAxiosParams = {
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	responseType: 'json',
} as CreateAxiosDefaults;
