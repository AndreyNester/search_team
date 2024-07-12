import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISignInFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface Values {
	email: string;
	password: string;
}
