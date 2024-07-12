import type { ReactNode } from 'react';
import type { ISignUpFormProps } from './types';
import type { FormikHelpers } from 'formik';

import { Form } from 'formik';
import { ManagedForm } from '../../../../../shared/form/ui/ManagedForm';
import { TextInput } from '../../../../../shared/input/TextInput/TextInput';
import { PasswordInput } from '../../../../../shared/input/PasswordInput/PasswordInput';
import { SubmitButton } from '../../../../../shared/button/ui/SubmitButton/SubmitButton';

import styles from './SignUpForm.module.css';

export const SignUpForm = (props: ISignUpFormProps): ReactNode => {
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
					<label htmlFor="email">
						<h4>Email</h4>
						<TextInput id="email" name="email" placeholder="nester@mail.ru" type="email" />
					</label>
					<label htmlFor="password">
						<h4>Password</h4>
						<PasswordInput id="password" name="password" placeholder="1234" />
					</label>
					<SubmitButton>Submit</SubmitButton>
				</Form>
			</ManagedForm>
		</div>
	);
};
