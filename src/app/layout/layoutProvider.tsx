import type { ReactNode } from 'react';
import type { ILayoutProvider } from './types';
import styles from './layoutProvider.module.css';
import { useAppSelector } from '../hooks';

export const LayoutProvider = ({ children, ...props }: ILayoutProvider): ReactNode => {
	const auth = useAppSelector(store => store.user);

	return (
		<div className={styles.wrapper} {...props}>
			{auth.email && <header>{auth.email}</header>}
			<main className={styles.main}>{children}</main>
			{auth.email && <footer>footer</footer>}
		</div>
	);
};
