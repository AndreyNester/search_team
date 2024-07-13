import { $ISessionGetItemProps, type ISessionGetItemProps } from './types';

class SessionAuthApi {
	getSession(): ISessionGetItemProps | null {
		const result = localStorage.getItem('session');
		if (!result) return null;
		return $ISessionGetItemProps.parse(JSON.parse(result));
	}
	setSession(data: ISessionGetItemProps): void {
		localStorage.setItem('session', JSON.stringify(data));
	}
	clear(): void {
		localStorage.removeItem('session');
	}
}

export const sessionAuthApi = new SessionAuthApi();
