import React, { ChangeEvent, HTMLAttributes } from 'react';
import { TextArea } from './TextArea';

interface ITextInputProps extends HTMLAttributes<HTMLInputElement> {
	prop: string;
	value: string;
	onChangedValue: (value: string) => void;
	type: 'text' | 'email' | 'datetime-local';
}

export const TextInput = ({
	prop,
	value,
	onChangedValue,
	type,
	...rest
}: ITextInputProps) => {
	if ((prop === 'id' && value)) return null;
	if (value.length > 150)
		return <TextArea value={value} onChangedValue={onChangedValue} />;
	

	return (
		<input
			type={type}
			onChange={(event: ChangeEvent<HTMLInputElement>) =>
				onChangedValue(event.target.value)
			}
			value={value}
			{...rest}
		/>
	);
};
