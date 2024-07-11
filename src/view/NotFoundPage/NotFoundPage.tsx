import type { ReactNode } from 'react';
import type { INotFoundPageProps } from './types';
import { Link } from 'react-router-dom';

export const NotFoundPage = (props: INotFoundPageProps): ReactNode => {
	return (
		<div {...props}>
			404 Not Found Link
			<Link to="/">Go Home</Link>
		</div>
	);
};
