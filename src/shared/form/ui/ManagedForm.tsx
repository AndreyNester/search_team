import type { FormikConfig, FormikValues } from 'formik';
import { Formik } from 'formik';
import type { ReactNode } from 'react';
import styles from './ManagedForm.module.css';

export const ManagedForm = <Values extends FormikValues = FormikValues, ExtraProps = {}>({
	children,
	...props
}: FormikConfig<Values> & ExtraProps): ReactNode => {
	return (
		<div className={styles.container}>
			<Formik {...props}>{children}</Formik>
		</div>
	);
};
