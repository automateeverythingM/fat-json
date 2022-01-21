import React, { createContext, Dispatch, useReducer } from 'react';
import generatedResource from '../assets/generated.json';
import { IGeneratedResponse, IProviderProps, IState } from '../interfaces/all';
import { DispatchAction } from '../types/all';
import { reducer } from './reducer';

const items = generatedResource as IGeneratedResponse[];

export const StateContext = createContext<{
	state: IState;
	dispatch: Dispatch<DispatchAction>;
}>({ state: [], dispatch: () => null });


const initialState: IState = items;


export const Provider = ({ children }: IProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
};
