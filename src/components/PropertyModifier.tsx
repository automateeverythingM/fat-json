import React, { useMemo } from 'react';
import { getInputTypeFromPropValue } from '../helpers/utils';
import { InputChangePayload as onChangeProps, Value } from '../types/app';
import { PropertyDisplay } from './PropertyDisplay';

interface IPropertyModifierProps {
	prop: string;
	value: Value;
	id: string;
	onChangeValue: ({ id, prop, value }: onChangeProps) => void;
}

export const PropertyModifier = React.memo(
	({ id, prop, value, onChangeValue }: IPropertyModifierProps) => {

		const input = useMemo(() =>
			getInputTypeFromPropValue({ value, id, prop }, (value: Value) =>
				onChangeValue({ id, prop, value })
			), [id, onChangeValue, prop, value]);


		return (
			<div>
				<PropertyDisplay item={{[prop]:value}}/>
				{input}
			</div>
		);
	}
);
