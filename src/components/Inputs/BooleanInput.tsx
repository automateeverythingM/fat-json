import React, { ChangeEvent, HTMLAttributes } from 'react';

interface IBooleanInputProps extends HTMLAttributes<HTMLInputElement>  {
    value: boolean;
    groupName: string;
    onChangedValue: (value: boolean) => void;
}

export const BooleanInput = ({value, groupName, onChangedValue}: IBooleanInputProps) => {
	return (
		<div>
			<span>true</span>
			<input
				type="radio"
				checked={value}
				name={groupName}
				value="true"
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					onChangedValue(!!event.target.value)
				}
			/>
			<span>false</span>
			<input
				type="radio"
				checked={!value}
				name={groupName}
				value=""
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					onChangedValue(!!event.target.value)
				}
			/>
		</div>
	);
};
