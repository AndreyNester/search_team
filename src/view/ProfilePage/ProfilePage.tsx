import { useState, type ReactNode } from 'react';
import type { IProfilePageProps } from './types';
import { useParams } from 'react-router-dom';
import { HeaderInfo } from '@src/shared/header';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import styles from './ProfilePage.module.css';
import { useUser } from '@src/entities/users';
import { UserInfo } from '@src/features/card';
import { ClipLoader } from 'react-spinners';

export const ProfilePage = (props: IProfilePageProps): ReactNode => {
	const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
	const { id } = useParams<{ id: string }>();

	const {
		isError: isError_user,
		data: data_user,
		isFetching: isFetching_user,
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
				<div className={styles.Container}>
					{isFetching_user ? (
						<ClipLoader className={styles.lodaer} />
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
							{isImageLoading && <ClipLoader className={styles.loader} />}
							<img
								src={data_user.data.avatar}
								alt="user icon"
								className={styles.image}
								onLoad={(): void => setIsImageLoading(false)}
								onError={(): void => setIsImageLoading(false)}
								style={{ display: isImageLoading ? 'none' : 'block' }}
							/>
						</div>
					)}
				</div>
			</HeaderInfo>
			<div className={styles.Container}>
				{isFetching_user ? (
					<ClipLoader className={styles.lodaer} />
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
