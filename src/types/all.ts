import { IGeneratedResponse } from "../interfaces/all";

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

