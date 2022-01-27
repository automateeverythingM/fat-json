import { IState, ReducerAction } from '../types/app';
import { CHANGE } from './actions';

export const reducer = (state: IState = [], actionCall: ReducerAction) => {
	if (actionCall.type === CHANGE) {
		return state.map((item) => {
			const {prop, value} = actionCall.payload;

			if (item.id === actionCall.payload.id) {
				return { ...item, [prop]: value };
			}
			return item;
		});
	}

	return state;
};
