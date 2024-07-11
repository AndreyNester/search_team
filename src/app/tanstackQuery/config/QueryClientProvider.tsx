import { QueryClient, QueryClientProvider as TQueryClientProvider } from '@tanstack/react-query';
import type { QueryClientProviderProps } from '@tanstack/react-query';
import type { ReactNode } from 'react';

export const QueryClientProvider = ({
	children,
}: Omit<QueryClientProviderProps, 'client'>): ReactNode => {
	const queryClient = new QueryClient();
	return <TQueryClientProvider client={queryClient}>{children}</TQueryClientProvider>;
};
