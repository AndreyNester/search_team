import type { ReactNode } from 'react';
import styles from './App.module.css';
import { LayoutProvider } from './app/layout/layoutProvider';
import { HomePage } from './view/HomePage/HomePage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { RegisterPage } from './view/RegisterPage/RegisterPage';
import { LoginPage } from './view/LoginPage/LoginPage';
import { NotFoundPage } from './view/NotFoundPage/NotFoundPage';
import { ProfilePage } from './view/ProfilePage/ProfilePage';
import { useAppSelector } from './app/hooks';

const App = (): ReactNode => {
	const auth = useAppSelector(store => store.user);

	const router = createBrowserRouter([
		{
			path: '/',
			element: auth.email ? <HomePage /> : <Navigate to="/login" />,
			errorElement: <NotFoundPage />,
		},
		{
			path: '/register',
			element: !auth.email ? <RegisterPage /> : <Navigate to="/" />,
		},
		{
			path: '/login',
			element: !auth.email ? <LoginPage /> : <Navigate to="/" />,
		},
		{
			path: '/profile/:id',
			element: auth.email ? <ProfilePage /> : <Navigate to="/login" />,
		},
	]);

	return (
		<div className={styles.app}>
			<LayoutProvider>
				<RouterProvider router={router} />
			</LayoutProvider>
		</div>
	);
};

export default App;
