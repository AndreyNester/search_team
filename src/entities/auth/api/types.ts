import type { UserCredential } from 'firebase/auth';
import { z } from 'zod';

export interface ISignInResponse extends UserCredential {}
export type SignInRequest = z.infer<typeof $SignInRequest>;
export interface ISignUpResponse extends UserCredential {}
export type SignUpRequest = z.infer<typeof $SignUpRequest>;

export const $SignInRequest = z.object({
	email: z.string(),
	password: z.string(),
});

export const $SignUpRequest = z.object({
	email: z.string(),
	password: z.string(),
});
