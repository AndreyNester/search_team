import type { ReactNode, MouseEvent } from 'react';
import type { ICardsFieldProps } from './types';
import cn from 'classnames';
import styles from './CardsField.module.css';
import { Card } from '../../../../shared/cards/ui/Card/Card';
import { Link } from 'react-router-dom';
import likeIcon from '../../../../shared/styles/icons/likedIcon.svg';
import unlikeIcon from '../../../../shared/styles/icons/unlikedIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { onChangeLike } from '../../../user/userSlice';

export const CardsField = ({ className, data, ...props }: ICardsFieldProps): ReactNode => {
	const dispatch = useAppDispatch();
	const likes = useAppSelector(store => store.user.liked);
	const classNameForContainer = cn({
		[styles.container]: true,
		[String(className)]: className,
	});

	const onLike = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, id: number): void => {
		e.preventDefault();
		dispatch(onChangeLike(id));
	};
	return (
		<div className={classNameForContainer} {...props}>
			<ul className={styles.list}>
				{data.data.map(item => (
					<Card key={item.id} className={styles.card}>
						<Link to={`/profile/${item.id}`} className={styles.link}>
							<img src={item.avatar} alt="user avatar" className={styles.avatar} />
							<p className={styles.name}>
								{item.first_name} {item.last_name}
							</p>
							<div className={styles.likeContainer} onClick={(e): void => onLike(e, item.id)}>
								<img src={likes.indexOf(item.id) !== -1 ? likeIcon : unlikeIcon} alt="like icon" />
							</div>
						</Link>
					</Card>
				))}
			</ul>
		</div>
	);
};
