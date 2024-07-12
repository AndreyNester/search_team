import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISignUpFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface Values {
	email: string;
	password: string;
	confirmPassword: string;
}
