import type { ILoginPageProps } from './types';
import type { ReactNode } from 'react';
import { SignInForm } from '../../features/auth/ui/form/SignInForm/SignInForm';
import styles from './LoginPage.module.css';

export const LoginPage = (props: ILoginPageProps): ReactNode => {
	return (
		<div {...props} className={styles.container}>
			<SignInForm className={styles.form} />
		</div>
	);
};
