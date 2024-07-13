export interface IBaseAuthStructure {
	email: string | null;
	token: string | null;
	id: number | string | null;
	liked: number[];
}

export interface IInitialState extends IBaseAuthStructure {}
