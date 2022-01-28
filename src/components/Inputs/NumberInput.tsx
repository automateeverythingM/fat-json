import React, { ChangeEvent, HTMLAttributes } from 'react';

interface INumberInputProps extends HTMLAttributes<HTMLInputElement> {
	value: number;
	onChangedValue: (value: number) => void;
}

export const NumberInput = ({ value, onChangedValue }: INumberInputProps) => {
	return (
		<input
			type="number"
			value={value}
			onChange={(event: ChangeEvent<HTMLInputElement>) =>
				onChangedValue(Number(event.target.value))
			}
		/>
	);
};
