import type { ReactNode } from 'react';
import type { IHomePageProps } from './types';

import { useState } from 'react';
import { useUsers } from '../../entities/users/api/hooks/queries/useUsers';
import { HeaderInfo } from '../../shared/header/ui/HeaderInfo/HeaderInfo';
import styles from './HomePage.module.css';
import { CardsField } from '../../features/card/ui/CardsField/CardsField';
import arrowIcon from '../../shared/styles/icons/arrowIcon.svg';
import cn from 'classnames';
import { ClipLoader } from 'react-spinners';

export const HomePage = (props: IHomePageProps): ReactNode => {
	const [page, setPage] = useState<number>(1);

	const {
		error: error_users,
		data: data_users,
		isFetching: isFetching_users,
	} = useUsers({
		page: page,
		per_page: 4,
	});

	const classForArrowLeft = cn({
		[styles.arrow]: true,
		[styles.arrow_left]: true,
	});

	const classForArrowRight = cn({
		[styles.arrow]: true,
		[styles.arrow_right]: true,
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
				<div className={styles.content}>
					{isFetching_users ? (
						<ClipLoader className={styles.lodaer} />
					) : error_users ? (
						<div>something was wrong</div>
					) : !data_users ? (
						<div>no content on server</div>
					) : (
						<CardsField data={data_users} />
					)}
				</div>

				<div className={styles.paginationContainer}>
					<button
						className={classForArrowLeft}
						onClick={(): any => setPage(prevState => --prevState)}
						disabled={page === 1}
					>
						<img src={arrowIcon} alt="arrow icon left" />
					</button>
					<button
						className={classForArrowRight}
						onClick={(): any => setPage(prevState => ++prevState)}
						disabled={page === data_users?.total_pages}
					>
						<img src={arrowIcon} alt="arrow icon right" />
					</button>
				</div>
			</div>
		</section>
	);
};
