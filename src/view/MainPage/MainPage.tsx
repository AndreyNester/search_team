import { useEffect, type ReactNode } from 'react';
import { usersApi } from '../../entities/users/api/usersApi';

export const MainPage = (): ReactNode => {
	useEffect(() => {
		usersApi.getUsers({ page: 1, per_page: 6 });
		usersApi.getUser({ id: 3 });
	}, []);
	return <div>MainPage</div>;
};
