import type { ReactNode } from 'react';
import type { IHeaderInfoProps } from './types';
import cn from 'classnames';
import styles from './HeaderInfo.module.css';
import logOutIcon from '../../../styles/icons/LogOutIcon.svg';
import prevPageIcon from '../../../styles/icons/prevPageIcon.svg';
import { Button } from '../../../button/ui/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { signOut } from '@src/features/user';

export const HeaderInfo = ({
	children,
	className,
	classNameOfContentWrapper,
	...props
}: IHeaderInfoProps): ReactNode => {
	const dispatch = useAppDispatch();
	const navigator = useNavigate();
	const location = useLocation();
	const classnameForHeaderInfo = cn({
		[styles.header]: true,
		[String(className)]: className,
	});

	const classnameForContent = cn({
		[styles.headerPart]: true,
		[styles.content]: true,
		[String(classNameOfContentWrapper)]: classNameOfContentWrapper,
	});

	const redirect = (route: string): void => {
		navigator(route);
	};

	return (
		<header className={classnameForHeaderInfo} {...props}>
			<div className={styles.headerPart}>
				{location.pathname !== '/' ? (
					<>
						{/* INFO: Вынужден использовать button вместо Link чтоб не писать стили 2 раза*/}
						<button className={styles.prevPageBtn_mobile} onClick={(): void => redirect('/')}>
							<img src={prevPageIcon} alt="previous page icon" />
						</button>
						{/* INFO: Вынужден использовать button вместо Link чтоб не писать стили 2 раза*/}
						<Button className={styles.prevPageBtn_desktop} onClick={(): void => redirect('/')}>
							previous
						</Button>
					</>
				) : null}
			</div>

			<div className={classnameForContent}>{children}</div>
			<div className={styles.headerPart}>
				<button className={styles.logOutIcon_mobile} onClick={(): any => dispatch(signOut())}>
					<img src={logOutIcon} alt="log out icon" />
				</button>
				<Button className={styles.logOutIcon_desktop} onClick={(): any => dispatch(signOut())}>
					logOut
				</Button>
			</div>
		</header>
	);
};
