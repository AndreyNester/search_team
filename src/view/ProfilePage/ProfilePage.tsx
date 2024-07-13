import type { ReactNode } from 'react';
import type { IProfilePageProps } from './types';
import { useParams } from 'react-router-dom';
import { HeaderInfo } from '../../shared/header/ui/HeaderInfo/HeaderInfo';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import styles from './ProfilePage.module.css';
import { useUser } from '../../entities/users/api/hooks/queries/useUser';
import { UserInfo } from '../../features/card/ui/UserInfo/UserInfo';

export const ProfilePage = (props: IProfilePageProps): ReactNode => {
	const { id } = useParams<{ id: string }>();

	const {
		isPending: isPending_user,
		isError: isError_user,
		error: error_user,
		data: data_user,
		isFetching: isFetching_user,
		isPlaceholderData: isPlaceholderData_user,
	} = useUser({
		id: Number(id),
		/*
		 Guard в случае ввода в поисковую строку не цифр
		*/
		enabled: !Number.isNaN(Number(id)),
	});

	return !Number.isNaN(Number(id)) ? (
		<section {...props}>
			<HeaderInfo classNameOfContentWrapper={styles.headerContentWrapper}>
				<div className={styles.CardsFieldContainer}>
					{isFetching_user ? (
						<div>loading...</div>
					) : isError_user ? (
						<div>something was wrong</div>
					) : !data_user ? (
						<div>no content on server</div>
					) : (
						<div className={styles.headerContainer}>
							<div className={styles.headerTitle}>
								<span className={styles.title}>
									{data_user.data.first_name} {data_user.data.last_name}
								</span>
								<span className={styles.info}>Партнер</span>
							</div>

							<img src={data_user.data.avatar} alt="user icon" className={styles.image} />
						</div>
					)}
				</div>
			</HeaderInfo>
			<div className={styles.CardsFieldContainer}>
				{isFetching_user ? (
					<div>loading...</div>
				) : isError_user ? (
					<div>something was wrong</div>
				) : !data_user ? (
					<div>no content on server</div>
				) : (
					// <CardsField data={data_user} />
					<UserInfo data={data_user} />
				)}
			</div>
		</section>
	) : (
		<NotFoundPage />
	);
};
