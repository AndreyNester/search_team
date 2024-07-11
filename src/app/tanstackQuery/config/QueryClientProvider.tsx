import { QueryClient, QueryClientProvider as TQueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

export const QueryClientProvider = ({ children }: { children: ReactNode }): ReactNode => {
	const queryClient = new QueryClient();
	return <TQueryClientProvider client={queryClient}>{children}</TQueryClientProvider>;
};
