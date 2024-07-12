import type { ReactNode } from 'react';
import type { ISignInFormProps } from './types';
import { Field, Form, type FormikHelpers } from 'formik';
import { ManagedForm } from '../../../../../shared/form/ui/ManagedForm';
import styles from './signInForm.module.css';

export const SignInForm = (props: ISignInFormProps): ReactNode => {
	interface Values {
		email: string;
		password: string;
	}

	return (
		<div {...props} className={styles.container}>
			<ManagedForm<Values>
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>): void => {
					console.log(values);
				}}
			>
				<Form>
					<label htmlFor="name">
						<h4>Name</h4>
						<Field id="name" name="name" placeholder="John" />
					</label>

					<label htmlFor="email">
						<h4>Email</h4>
						<Field id="email" name="email" placeholder="nester@mail.ru" type="email" />
					</label>

					<label htmlFor="password">
						<h4>Password</h4>
						<Field id="password" name="password" type="password" />
					</label>

					<label htmlFor="confirmPassword">
						<h4>Confirm password</h4>
						<Field id="confirmPassword" name="confirmPassword" type="password" />
					</label>

					<button type="submit">Submit</button>
				</Form>
			</ManagedForm>
		</div>
	);
};
