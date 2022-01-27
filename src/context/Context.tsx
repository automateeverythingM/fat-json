import React, { createContext, Dispatch, useReducer } from 'react';
import { DispatchAction, IProviderProps, IState } from '../types/app';
import { reducer } from './reducer';


export const StateContext = createContext<{
	state: IState;
	dispatch: Dispatch<DispatchAction>;
}>({ state: [], dispatch: () => null });


const initialState: IState = [];


export const Provider = ({ children }: IProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
};
