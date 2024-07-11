import type { ReactNode } from 'react';
import styles from './App.module.css';
import { LayoutProvider } from './app/layout/layoutProvider';
import { MainPage } from './view/MainPage/MainPage';

const App = (): ReactNode => {
	return (
		<div className={styles.app}>
			<LayoutProvider>
				<MainPage />
			</LayoutProvider>
		</div>
	);
};

export default App;
