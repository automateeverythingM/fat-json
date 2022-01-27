import React, { useCallback, useContext } from 'react';
import { changeInputValue } from '../context/actions';
import { StateContext } from '../context/Context';
import { Item } from './Item';
import { Payload as onChangeProps } from '../types/app';


export const List = () => {
	const { state, dispatch } = useContext(StateContext);
	const changeValue = useCallback(
		({ id, prop, value }: onChangeProps) => {
			dispatch(changeInputValue({ id, prop, value }));
		},
		[dispatch]
	);

	return (
		<div className="list">
			{state.map(item => (
				<Item key={item.id} item={item} onChange={changeValue} />
			))}
		</div>
	);
};
