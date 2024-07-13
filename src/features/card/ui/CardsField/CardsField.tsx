import type { ReactNode } from 'react';
import type { ICardsFieldProps } from './types';
import cn from 'classnames';
import styles from './CardsField.module.css';
import { Card } from '../../../../shared/cards/ui/Card/Card';
import { useUsers } from '../../../../entities/users/api/hooks/queries/useUsers';
import { Link } from 'react-router-dom';

export const CardsField = ({ className, data, ...props }: ICardsFieldProps): ReactNode => {
	const classNameForContainer = cn({
		[styles.container]: true,
		[String(className)]: className,
	});
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
						</Link>
					</Card>
				))}
			</ul>
		</div>
	);
};
