import type { ReactNode } from 'react';
import type { ILoginPageProps } from './types';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { authApi } from '../../entities/auth/api/authApi';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	const signInhandler = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}): Promise<void> => {
		const result = await authApi.signInByEmailAndPassword({ email, password });
		console.log('result -->', result);
	};

	return (
		<div {...props}>
			<h3>login page</h3>
			<button onClick={() => signInhandler({ email: 'nester@mail.ru', password: '123456' })}>
				Sign In
			</button>
			<Link to="/register" />
		</div>
	);
};
