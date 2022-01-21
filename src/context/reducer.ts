import { IState } from '../interfaces/all';
import { ReducerAction } from '../types/all';
import { CHANGE } from './actions';

export const reducer = (state: IState = [], actionCall: ReducerAction) => {
	if (actionCall.type === CHANGE) {
		return state.map((item) => {
			if (item.id === actionCall.payload.id) {
				return { ...item, [actionCall.payload.prop]: actionCall.payload.value };
			}
			return item;
		});
	}

	return state;
};
