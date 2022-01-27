import { nanoid } from 'nanoid';
import { IState, ReducerAction } from '../types/app';
import { ADD_FILE, CHANGE } from './actions';

export const reducer = (state: IState, actionCall: ReducerAction) => {
	if (actionCall.type === CHANGE) {
		return {
			...state,
			loadedValue: state.loadedValue.map((item) => {
				const { prop, value } = actionCall.payload;

				if ((item.id || item.tempId) === actionCall.payload.id) {
					return { ...item, [prop]: value };
				}
				return item;
			}),
		};
	}

	if (actionCall.type === ADD_FILE) {
		const withTempId = actionCall.payload.map((item:any) =>{
			if (!item.id) return { ...item, "tempId": nanoid()};
			return item;
		});
		return { ...state, loadedValue: withTempId };
	}

	return state;
};
