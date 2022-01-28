import React, { useMemo } from 'react';
import { getInputTypeFromPropValue } from '../../helpers/utils';
import { InputChangePayload as onChangeProps } from '../../types/app';
import { field as inputsField } from '../Inputs/Field';
import { PropertyDisplay } from './PropertyDisplay';

interface IPropertyModifierProps {
	prop: string;
	value: any;
	id: string;
	onChangeValue: ({ id, prop, value }: onChangeProps) => void;
}

export const PropertyModifier = React.memo(
	({ id, prop, value, onChangeValue }: IPropertyModifierProps) => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		const type = useMemo(() => getInputTypeFromPropValue(value), []);

		return (
			<div>
				<PropertyDisplay item={{ [prop]: value }} />
				{inputsField({id, onChangeValue, type, value, prop})}
			</div>
		);
	}
);
