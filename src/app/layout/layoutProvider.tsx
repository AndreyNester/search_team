import type { ReactNode } from 'react';
import type { ILayoutProvider } from './types';
import styles from './layoutProvider.module.css';

export const LayoutProvider = ({ children, ...props }: ILayoutProvider): ReactNode => {
	return (
		<div className={styles.wrapper} {...props}>
			{/* <header className="header">header</header> */}
			<main className={styles.main}>{children}</main>
			{/* <footer className="footer">footer</footer> */}
		</div>
	);
};
