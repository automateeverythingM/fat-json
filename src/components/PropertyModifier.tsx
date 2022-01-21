import React, { useMemo } from 'react';
import { getInputTypeFromPropValue } from '../helpers/utils';
import { Payload as onChangeProps, Value } from '../types/all';

interface IPropertyModifierProps {
	prop: string;
	value: Value;
	id: string;
	onChangeValue: ({ id, prop, value }: onChangeProps) => void;
}

export const PropertyModifier = React.memo(
	({ id, prop, value, onChangeValue }: IPropertyModifierProps) => {
		const input = useMemo(()=>
			!(prop === 'id' && value) &&
			getInputTypeFromPropValue({ value, id, prop }, (value: Value) =>
				onChangeValue({ id, prop, value })
			),[id, onChangeValue, prop, value]);


		return (
			<div>
				<div>{`${prop} : ${value}`}</div>
				{input}
			</div>
		);
	}
);
