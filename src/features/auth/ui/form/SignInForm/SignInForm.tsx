import { useState, type ReactNode } from 'react';
import type { ISignInFormProps } from './types';
import { Form, type FormikHelpers } from 'formik';
import { ManagedForm } from '../../../../../shared/form/ui/ManagedForm';
import styles from './signInForm.module.css';
import { TextInput } from '../../../../../shared/input/TextInput/TextInput';
import { PasswordInput } from '../../../../../shared/input/PasswordInput/PasswordInput';
import { SubmitButton } from '../../../../../shared/button/ui/SubmitButton/SubmitButton';

interface Values {
	email: string;
	password: string;
}

export const SignInForm = (props: ISignInFormProps): ReactNode => {
	//====

	// 	const [credentials, setCredentials] = useState<SignInRequest>({
	// 		email: '',
	// 		password: '',
	// 	});
	// 	const dispatch = useAppDispatch();

	// 	const successLogIn = ({ email, id, token }: IBaseAuthStructure): void => {
	// 		dispatch(signIn({ email, id, token }));
	// 	};

	// 	const { data, error, refetch } = useSignIn({
	// 		email: credentials.email,
	// 		password: credentials.password,
	// 	});

	// 	useEffect(() => {
	// 		/*
	// Эффект для прокидывания реквизитов в глобальное хранилище
	// */
	// 		if (data && !error) {
	// 			const { uid, accessToken, email } = data.user;
	// 			successLogIn({ email, id: uid, token: accessToken });
	// 		}
	// 	}, [data]);

	//====

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
