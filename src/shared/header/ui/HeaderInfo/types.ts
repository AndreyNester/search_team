import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHeaderInfoProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	classNameOfContentWrapper?: string;
}
