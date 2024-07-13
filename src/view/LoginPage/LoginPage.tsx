import type { ILoginPageProps } from './types';
import type { ReactNode } from 'react';
import { SignInForm } from '@src/features/auth';
import styles from './LoginPage.module.css';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	return (
		<section {...props} className={styles.container}>
			<SignInForm className={styles.form} />
		</section>
	);
};
