export interface IBaseAuthStructure {
	email: string | null;
	token: string | null;
	id: number | string | null;
}

export interface IInitialState extends IBaseAuthStructure {}
