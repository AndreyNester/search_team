import type { ReactNode } from 'react';
import type { ISignUpFormProps, Values } from './types';
import type { FormikHelpers } from 'formik';

import { Form } from 'formik';
import { ManagedForm } from '@src/shared/form';
import { TextInput, PasswordInput } from '@src/shared/input';

import { SubmitButton } from '@src/shared/button';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { authApi } from '@src/entities/auth';

import styles from './SignUpForm.module.css';
import { Link, useNavigate } from 'react-router-dom';

export const SignUpForm = (props: ISignUpFormProps): ReactNode => {
	const navigate = useNavigate();
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
						navigate('/');
					} catch (err) {
						setStatus('failed');
					}
				}}
			>
				{/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */}
				{({ errors, touched, status, isSubmitting }) => (
					<Form>
						<h2 className={styles.title}>Register</h2>
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
						<Link to="/login">already have an account ?</Link>
					</Form>
				)}
			</ManagedForm>
		</div>
	);
};
