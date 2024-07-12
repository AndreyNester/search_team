import type { ReactNode } from 'react';
import type { IInputProps } from './types';
import cn from 'classnames';
import styles from './PasswordInput.module.css';
import { Field } from 'formik';

export const PasswordInput = ({ className, error, ...props }: IInputProps): ReactNode => {
	const classnameForInput = cn({
		[String(className)]: className,
		[styles.defaultStyle]: true,
		[styles.error]: error,
	});
	return <Field type="password" {...props} className={classnameForInput} />;
};
