import { useEffect, useState, type ReactNode } from 'react';
import { useUsers } from '../../entities/users/api/hooks/queries/useUsers';
// import { useUser } from '../../entities/users/api/hooks/queries/useUser';
import type { IHomePageProps } from './types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signIn } from '../../features/user/userSlice';
import { HeaderInfo } from '../../shared/header/ui/HeaderInfo/HeaderInfo';
import styles from './HomePage.module.css';
import { CardsField } from '../../features/card/ui/CardsField/CardsField';

export const HomePage = (props: IHomePageProps): ReactNode => {
	const user = useAppSelector(store => store.user);

	const {
		isPending: isPending_users,
		isError: isError_users,
		error: error_users,
		data: data_users,
		isFetching: isFetching_users,
		isPlaceholderData: isPlaceholderData_users,
	} = useUsers({
		page: 1,
		per_page: 8,
	});

	return (
		<section {...props}>
			<HeaderInfo classNameOfContentWrapper={styles.headerContentWrapper}>
				<h3 className={styles.headerTitle}>Наша команда</h3>
				<p className={styles.headerText}>
					Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
					плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
				</p>
			</HeaderInfo>
			<div className={styles.CardsFieldContainer}>
				{isFetching_users ? (
					<div>loading...</div>
				) : error_users ? (
					<div>something was wrong</div>
				) : !data_users ? (
					<div>no content on server</div>
				) : (
					<CardsField data={data_users} />
				)}
			</div>
		</section>
	);
};
