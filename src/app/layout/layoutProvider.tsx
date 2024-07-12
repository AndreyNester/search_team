import type { ReactNode } from 'react';
import type { ILayoutProvider } from './types';
import styles from './layoutProvider.module.css';
import { useAppSelector } from '../hooks';

export const LayoutProvider = ({ children, ...props }: ILayoutProvider): ReactNode => {
	const auth = useAppSelector(store => store.user);
	return (
		<div className={styles.wrapper} {...props}>
			<header>{auth.email ? auth.email : 'not authorized '}</header>
			<main className={styles.main}>{children}</main>
			<footer>footer</footer>
		</div>
	);
};
