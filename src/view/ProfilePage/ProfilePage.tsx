import type { ReactNode } from 'react';
import type { IProfilePageProps } from './types';
import { useParams } from 'react-router-dom';
import { HeaderInfo } from '../../shared/header/ui/HeaderInfo/HeaderInfo';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export const ProfilePage = (props: IProfilePageProps): ReactNode => {
	const { id } = useParams<{ id: string }>();
	console.log(id);

	return !Number.isNaN(Number(id)) ? (
		<section {...props}>
			<HeaderInfo>header info</HeaderInfo>
			profile info
		</section>
	) : (
		<NotFoundPage />
	);
};
