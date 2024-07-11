import type { ReactNode } from 'react';
import styles from './App.module.css';
import { LayoutProvider } from './app/layout/layoutProvider';
import { HomePage } from './view/HomePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RegisterPage } from './view/RegisterPage/RegisterPage';
import { LoginPage } from './view/LoginPage/LoginPage';
import { NotFoundPage } from './view/NotFoundPage/NotFoundPage';
import { ProfilePage } from './view/ProfilePage/ProfilePage';

const App = (): ReactNode => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
			errorElement: <NotFoundPage />,
		},
		{
			path: '/register',
			element: <RegisterPage />,
		},
		{
			path: '/login',
			element: <LoginPage />,
		},
		{
			path: '/profile/:id',
			element: <ProfilePage />,
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
