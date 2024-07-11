import type { ReactNode } from 'react';
import type { IRegsiterProps } from './types';
import { Link } from 'react-router-dom';

export const RegisterPage = (props: IRegsiterProps): ReactNode => {
	return (
		<div {...props}>
			<h3>RegisterPage</h3>
			<Link to="/register" />
		</div>
	);
};
