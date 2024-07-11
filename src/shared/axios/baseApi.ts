import type { AxiosInstance, CreateAxiosDefaults } from 'axios';
import axios from 'axios';
import { defaultAxiosParams } from './default';

export abstract class BaseApi {
	protected instance: AxiosInstance;

	constructor(axiosParams?: CreateAxiosDefaults) {
		this.instance = axios.create({
			...defaultAxiosParams,
			baseURL: 'https://reqres.in/api/',
		});
	}
}
