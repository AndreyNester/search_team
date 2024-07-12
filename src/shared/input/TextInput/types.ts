import type { FieldAttributes } from 'formik';

export interface IInputProps extends FieldAttributes<any> {
	error?: boolean;
}
