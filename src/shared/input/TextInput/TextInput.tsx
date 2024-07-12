import type { ReactNode } from 'react';
import type { IInputProps } from './types';
import cn from 'classnames';
import styles from './TextInput.module.css';
import { Field } from 'formik';

export const TextInput = ({ className, error, ...props }: IInputProps): ReactNode => {
	const classnameForInput = cn({
		[String(className)]: className,
		[styles.defaultStyle]: true,
		[styles.error]: error,
	});
	return <Field type="text" {...props} className={classnameForInput} />;
};
