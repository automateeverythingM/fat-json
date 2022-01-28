import React from 'react';
import { BooleanInput } from './BooleanInput';
import { NumberInput } from './NumberInput';
import { TextInput } from './TextInput';

interface IFieldProps {
	type: 'text' | 'datetime-local' | 'number' | 'boolean' | 'email' | null;
	prop: string;
	value: any;
	id: string;
	onChangeValue: (value: any) => void;
}

export const field = ({
	type,
	prop,
	value,
	id,
	onChangeValue,
}: IFieldProps) => {
	if (type === 'boolean')
		return (
			<BooleanInput
				groupName={`${id}${prop}`}
				value={value}
				onChangedValue={val => onChangeValue({ id, prop, value: val })}
			/>
		);
	if (type === 'number')
		return (
			<NumberInput
				value={value}
				onChangedValue={val => onChangeValue({ id, prop, value: val })}
			/>
		);
	if (type === 'text' || type === 'datetime-local' || type === 'email')
		return (
			<TextInput
				prop={prop}
				type={type}
				value={value}
				onChangedValue={val => onChangeValue({ id, prop, value: val })}
			/>
		);
	return null;
};
