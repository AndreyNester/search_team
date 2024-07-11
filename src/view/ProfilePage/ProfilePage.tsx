import type { ReactNode } from 'react';
import type { IProfilePageProps } from './types';
import { useParams } from 'react-router-dom';

export const ProfilePage = (props: IProfilePageProps): ReactNode => {
	const { id } = useParams<{ id: string }>();
	console.log(id);

	return (
		<div {...props}>
			<h3>Profile page</h3>
			<p>if is : {id}</p>
		</div>
	);
};
