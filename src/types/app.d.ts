import { IGeneratedResponse } from '../interfaces/all';

export type ReducerAction = {
	type: string;
	payload: Payload;
};

export type DispatchAction = {
	type: string;
	payload: Payload;
};

export type KeyofIGeneratedResponse = keyof IGeneratedResponse;
export type Value = string | number | boolean;

export type Payload = {
	id: string;
	prop: string;
	value: Value;
};

export type IGeneratedResponse = {
	id: string;
	index: number;
	guid: string;
	isActive: boolean;
	balance: string;
	picture: string;
	age: number;
	eyeColor: string;
	date: string;
	name: string;
	gender: string;
	company: string;
	email: string;
	phone: string;
	address: string;
	about: string;
	registered: string;
	latitude: number;
	longitude: number;
	greeting: string;
	favoriteFruit: string;
};

export type IProviderProps = {
	children: ReactNode;
};

export type IState = IGeneratedResponse[];
