import type { ReactNode } from 'react';
import type { ILoginPageProps } from './types';
import { Link } from 'react-router-dom';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	const arr: number[] = [1, 2, 3, 4, 5, 6];

	return (
		<div {...props}>
			<h3>login page</h3>
			{arr.map(item => (
				<Link key={item} to={`/login/${item}`}>
					way {item}
				</Link>
			))}
		</div>
	);
};
