import type { ReactNode } from 'react';
import type { ILoginPageProps } from './types';
import { Link } from 'react-router-dom';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	return (
		<div {...props}>
			<h3>login page</h3>
			<Link to="/register" />
		</div>
	);
};
