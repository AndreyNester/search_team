import type { ReactNode } from 'react';
import type { ISignInFormProps, Values } from './types';
import type { FormikHelpers } from 'formik';
import { Form } from 'formik';
import { ManagedForm } from '@src/shared/form';
import styles from './signInForm.module.css';
import { TextInput, PasswordInput } from '@src/shared/input';
import { SubmitButton } from '@src/shared/button';
import { authApi } from '@src/entities/auth';
import { useAppDispatch } from '@src/app/hooks';
import { signIn } from '../../../../user/userSlice';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

export const SignInForm = ({ className, ...props }: ISignInFormProps): ReactNode => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const $ValidationSchema = z.object({
		email: z.string({ required_error: 'required' }).email({ message: 'it must be email' }),
		password: z.string({ required_error: 'required' }),
	});

	const classnameForForm = cn({
		[styles.container]: true,
		[String(className)]: className,
	});

	return (
		<div {...props} className={classnameForForm}>
			<ManagedForm<Values>
				validationSchema={toFormikValidationSchema($ValidationSchema)}
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={async (values: Values, { setStatus }: FormikHelpers<Values>): Promise<void> => {
					const { email, password } = values;
					try {
						const {
							user: { accessToken, uid, email: userEmail },
						} = await authApi.signInByEmailAndPassword({ email, password });
						setStatus('success');
						dispatch(signIn({ email: userEmail, id: uid, token: accessToken, liked: [] }));
						navigate('/');
					} catch (err) {
						setStatus('failed');
					}
				}}
			>
				{/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */}
				{({ errors, touched, status, isSubmitting }) => (
					<Form>
						<h2 className={styles.title}>Login</h2>
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
						{status === 'failed' ? (
							<div style={{ color: 'red' }}>{'Invalid credentials'}</div>
						) : null}
						<SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
						<Link to="/register">do not have account ?</Link>
					</Form>
				)}
			</ManagedForm>
		</div>
	);
};
