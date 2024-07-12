import type { SignInRequest } from '../../entities/auth/api/types';
import type { ILoginPageProps } from './types';
import type { IBaseAuthStructure } from '../../features/user/types';
import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useSignIn } from '../../entities/auth/api/hooks/queries/useSignIn';
import { useAppDispatch } from '../../app/hooks';
import { signIn } from '../../features/user/userSlice';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	const [credentials, setCredentials] = useState<SignInRequest>({
		email: '',
		password: '',
	});
	const dispatch = useAppDispatch();

	const successLogIn = ({ email, id, token }: IBaseAuthStructure): void => {
		dispatch(signIn({ email, id, token }));
	};

	const { data, error, refetch } = useSignIn({
		email: credentials.email,
		password: credentials.password,
	});

	useEffect(() => {
		/*
Эффект для прокидывания реквизитов в глобальное хранилище
*/
		if (data && !error) {
			const { uid, accessToken, email } = data.user;
			successLogIn({ email, id: uid, token: accessToken });
		}
	}, [data]);

	return (
		<div {...props}>
			<h3>login page</h3>

			<form>
				<label htmlFor="login">
					<input
						type="text"
						id="login"
						value={credentials.email}
						onChange={e => setCredentials(prevState => ({ ...prevState, email: e.target.value }))}
					/>
				</label>
				<label htmlFor="password">
					<input
						type="password"
						id="password"
						value={credentials.password}
						onChange={e =>
							setCredentials(prevState => ({ ...prevState, password: e.target.value }))
						}
					/>
				</label>
			</form>

			<button onClick={() => refetch()}>Sign In</button>
			<Link to="/register">to register</Link>
		</div>
	);
};
