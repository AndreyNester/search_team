import type { ReactNode } from 'react';
import type { IRegsiterProps } from './types';
import { SignUpForm } from '@src/features/auth';
import styles from './RegisterPage.module.css';

export const RegisterPage = (props: IRegsiterProps): ReactNode => {
	return (
		<div {...props} className={styles.container}>
			<SignUpForm className={styles.form} />
		</div>
	);
};
