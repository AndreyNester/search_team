import type { ILoginPageProps } from './types';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../../features/auth/ui/form/SignInForm/SignInForm';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	return (
		<div {...props}>
			<h3>login page</h3>

			<SignInForm />
			<Link to="/register">to register</Link>
		</div>
	);
};
