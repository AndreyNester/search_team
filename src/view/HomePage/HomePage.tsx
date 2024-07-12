import { useEffect, useState, type ReactNode } from 'react';
import { useUsers } from '../../entities/users/api/hooks/queries/useUsers';
import { useUser } from '../../entities/users/api/hooks/queries/useUser';
import type { IHomePageProps } from './types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signIn } from '../../features/user/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const HomePage = (props: IHomePageProps): ReactNode => {
	const [page, setPage] = useState<number>(1);

	const dispatch = useAppDispatch();
	const user = useAppSelector(store => store.user);
	console.log(user);

	const {
		isPending: isPending_users,
		isError: isError_users,
		error: error_users,
		data: data_users,
		isFetching: isFetching_users,
		isPlaceholderData: isPlaceholderData_users,
	} = useUsers({
		page,
		per_page: 6,
	});

	const {
		isPending: isPending_user,
		isError: isError_user,
		error: error_user,
		data: data_user,
		isFetching: isFetching_user,
		isPlaceholderData: isPlaceholderData_user,
	} = useUser({ id: page });

	useEffect(() => {
		console.log(data_user);
	}, [data_user]);

	return (
		<div {...props}>
			{isPending_users ? (
				<div>Loading...</div>
			) : isError_users ? (
				<div>Error: {error_users.message}</div>
			) : (
				<div>
					{data_users.data.map(item => (
						<p key={item.id}>{item.email}</p>
					))}
				</div>
			)}
			<span>Current Page: {page}</span>
			<button onClick={() => setPage(old => Math.max(old - 1, 0))} /*disabled={page === 0}*/>
				Previous Page
			</button>{' '}
			<button
				onClick={() => {
					if (!isPlaceholderData_users && data_users?.data) {
						setPage(old => old + 1);
					}
				}}
				// Disable the Next Page button until we know a next page is available
				//disabled={isPlaceholderData || true}
			>
				Next Page
			</button>
			{isFetching_users ? <span> Loading...</span> : null}{' '}
			<button onClick={() => dispatch(signIn({ email: 'nester', id: 4, token: '123456' }))}>
				sign in
			</button>
		</div>
	);
};
