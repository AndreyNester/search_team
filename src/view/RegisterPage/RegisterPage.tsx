import type { ReactNode } from 'react';
import type { IRegsiterProps } from './types';
import { Link } from 'react-router-dom';
import { authApi } from '../../entities/auth/api/authApi';

export const RegisterPage = (props: IRegsiterProps): ReactNode => {
	const signUpHandler = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}): Promise<void> => {
		const result = await authApi.signUpByEmailAndPassword({ email, password });
		console.log('result -->', result);
	};

	return (
		<div {...props}>
			<h3>RegisterPage</h3>
			<button onClick={() => signUpHandler({ email: 'nester@mail.ru', password: '123456' })}>
				sign Up
			</button>
			<Link to="/register" />
		</div>
	);
};
