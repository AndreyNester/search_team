import type { ReactNode } from 'react';
import type { IButtonProps } from './types';
import cn from 'classnames';
import styles from './SubmitButton.module.css';

export const SubmitButton = ({ children, className, ...props }: IButtonProps): ReactNode => {
	const classnameForButton = cn({
		[styles.defaultStyles]: true,
		[String(className)]: className,
	});

	return (
		<button {...props} className={classnameForButton} type="submit">
			{children}
		</button>
	);
};
