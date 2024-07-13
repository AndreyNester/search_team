import type { ReactNode } from 'react';
import type { IHeaderProps } from './types';
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({ className, children, ...props }: IHeaderProps): ReactNode => {
	const classnameForHeader = cn({
		[styles.header]: true,
		[String(className)]: className,
	});
	return (
		<header className={classnameForHeader} {...props}>
			{children}
		</header>
	);
};
