import type { ReactNode } from 'react';
import type { IUserInfoProps } from './types';
import styles from './UserInfo.module.css';
import cn from 'classnames';
import mobileIcon from '@src/shared/styles/icons/mobileIcon.svg';
import mailIcon from '@src/shared/styles/icons/mailIcon.svg';

export const UserInfo = ({ className, data, ...props }: IUserInfoProps): ReactNode => {
	const classnameForContainer = cn({
		[styles.container]: true,
		[String(className)]: className,
	});

	return (
		<div className={classnameForContainer} {...props}>
			<div className={styles.description}>
				<p>
					Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых
					продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и
					ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
					процессы за счет применения новейших технологий и увеличивать продажи, используя самые
					современные аналитические инструменты.
				</p>
				<p>
					В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться
					с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных
					моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень
					компетентности, уверенность в том, что после окончания проекта у клиента есть все
					необходимое, чтобы дальше развиваться самостоятельно".
				</p>
				<p>
					Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
					предпринимательскую деятельность. Он является совладельцем сети клиник эстетической
					медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором
					других бизнес-проектов.
				</p>
			</div>
			<div className={styles.info}>
				<div>
					<img src={mobileIcon} alt="mobile icon" />
					<span>+7 (954) 333-44-55</span>
				</div>
				<div>
					<img src={mailIcon} alt="mail icon" />
					<span>{data.data.email}</span>
				</div>
			</div>
		</div>
	);
};
