import { FileChangePayload, InputChangePayload } from '../types/app';

export const CHANGE = 'CHANGE';
export const ADD_FILE = 'ADD_FILE';

export const changeInputValue = (payload: InputChangePayload) => {
	return { type: CHANGE, payload };
};

export const changeStateValue = (payload: FileChangePayload) => {
	return { type: ADD_FILE, payload };
};
