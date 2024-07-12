import type { ReactNode } from 'react';
import type { ISignUpFormProps, Values } from './types';
import type { FormikHelpers } from 'formik';

import { Form } from 'formik';
import { ManagedForm } from '../../../../../shared/form/ui/ManagedForm';
import { TextInput } from '../../../../../shared/input/TextInput/TextInput';
import { PasswordInput } from '../../../../../shared/input/PasswordInput/PasswordInput';
import { SubmitButton } from '../../../../../shared/button/ui/SubmitButton/SubmitButton';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { authApi } from '../../../../../entities/auth/api/authApi';

import styles from './SignUpForm.module.css';

export const SignUpForm = (props: ISignUpFormProps): ReactNode => {
	const $ValidationSchema = z
		.object({
			email: z
				.string({ required_error: 'required' })
				.email({ message: 'it must be email' })
				.min(6, { message: 'at least 6 characters' })
				.max(20, { message: 'max 20 characters' }),
			password: z
				.string({ required_error: 'required' })
				.min(6, { message: 'at least 6 characters' }),
			confirmPassword: z
				.string({ required_error: 'required' })
				.min(6, { message: 'at least 6 characters' }),
		})
		.refine(data => data.password === data.confirmPassword, {
			message: 'passwords do not match',
			path: ['confirmPassword'],
		});

	return (
		<div {...props} className={styles.container}>
			<ManagedForm<Values>
				validationSchema={toFormikValidationSchema($ValidationSchema)}
				initialValues={{
					email: '',
					password: '',
					confirmPassword: '',
				}}
				onSubmit={async (values: Values, { setStatus }: FormikHelpers<Values>): Promise<void> => {
					const { email, password } = values;
					try {
						await authApi.signUpByEmailAndPassword({ email, password });
						setStatus('success');

						console.log(values);
					} catch (err) {
						setStatus('failed');
					}
				}}
			>
				{/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */}
				{({ errors, touched, status, isSubmitting }) => (
					<Form>
						<label htmlFor="email">
							<h4>Email</h4>
							<TextInput
								id="email"
								name="email"
								placeholder="nester@mail.ru"
								type="email"
								error={Boolean(errors.email && touched.email)}
							/>
							{errors.email && touched.email ? <div>{errors.email}</div> : null}
						</label>
						<label htmlFor="password">
							<h4>Password</h4>
							<PasswordInput
								id="password"
								name="password"
								placeholder="1234"
								error={Boolean(errors.password && touched.password)}
							/>
							{errors.password && touched.password ? <div>{errors.password}</div> : null}
						</label>
						<label htmlFor="confirmPassword">
							<h4>Confirm password</h4>
							<PasswordInput
								id="confirmPassword"
								name="confirmPassword"
								placeholder="1234"
								error={Boolean(errors.confirmPassword && touched.confirmPassword)}
							/>
							{errors.confirmPassword && touched.confirmPassword ? (
								<div>{errors.confirmPassword}</div>
							) : null}
						</label>
						{status === 'failed' ? <div style={{ color: 'red' }}>{'Try another one'}</div> : null}
						<SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
					</Form>
				)}
			</ManagedForm>
		</div>
	);
};
