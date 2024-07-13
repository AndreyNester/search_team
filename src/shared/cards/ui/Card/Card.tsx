import type { ReactNode } from 'react';
import type { ICardProps } from './types';
import cn from 'classnames';
import styles from './Card.module.css';

export const Card = ({ className, children, ...props }: ICardProps): ReactNode => {
	const classNameForContainer = cn({
		[styles.container]: true,
		[String(className)]: className,
	});
	return (
		<li className={classNameForContainer} {...props}>
			{children}
		</li>
	);
};
