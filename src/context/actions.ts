import { Payload } from '../types/all';

export const CHANGE = 'CHANGE';

export const changeInputValue = (payload: Payload) => {
	return { type: CHANGE, payload };
};
