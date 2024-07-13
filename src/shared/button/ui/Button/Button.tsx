import type { ReactNode } from 'react';
import type { IButtonProps } from './types';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, className, ...props }: IButtonProps): ReactNode => {
	const classnameForButton = cn({
		[styles.button]: true,
		[String(className)]: className,
	});
	return (
		<button className={classnameForButton} {...props}>
			{children}
		</button>
	);
};
