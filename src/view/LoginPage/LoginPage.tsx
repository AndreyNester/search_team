import { useEffect, useState, type ReactNode } from 'react';
import type { ILoginPageProps } from './types';
import { Link } from 'react-router-dom';
import { authApi } from '../../entities/auth/api/authApi';
import { useSignIn } from '../../entities/auth/api/hooks/queries/useSignIn';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	const [credentials, setCredentials] = useState<{ email: string; password: string }>({
		email: '',
		password: '',
	});

	const { data, error, refetch } = useSignIn({
		email: credentials.email,
		password: credentials.password,
	});

	const signInhandler = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}): Promise<void> => {
		const result = await authApi.signInByEmailAndPassword({ email, password });
		console.log('result -->', result);
	};

	useEffect(() => {
		console.log(data);
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
			<Link to="/register" />
		</div>
	);
};
