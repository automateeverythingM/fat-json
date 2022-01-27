import { Payload } from '../types/app';

export const CHANGE = 'CHANGE';

export const changeInputValue = (payload: Payload) => {
	return { type: CHANGE, payload };
};
