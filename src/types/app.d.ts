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
export type InputChangePayload = {
	id: string;
	prop: string;
	value: Value;
};

export type FileChangePayload = {
	value: Record<string,Value>[];
}


export type IProviderProps = {
	children: ReactNode;
};


export type IState = {
	loadedValue:Record<string, Value>[];
};
