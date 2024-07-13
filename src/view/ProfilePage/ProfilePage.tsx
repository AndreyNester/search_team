import type { ReactNode } from 'react';
import type { IProfilePageProps } from './types';
import { useParams } from 'react-router-dom';
import { HeaderInfo } from '../../shared/header/ui/HeaderInfo/HeaderInfo';

export const ProfilePage = (props: IProfilePageProps): ReactNode => {
	const { id } = useParams<{ id: string }>();
	console.log(id);

	return (
		<section {...props}>
			<HeaderInfo>header info</HeaderInfo>
			profile info
		</section>
	);
};
