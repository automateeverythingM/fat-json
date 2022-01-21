import React, { ChangeEvent } from 'react';
import { Payload as onChangeProps, Value } from '../types/all';

export const getInputTypeFromPropValue = (
	{id, prop, value}:onChangeProps,
	onChangeValue: (value: Value) => void
) => {
	if (typeof value === 'number')
		return (
			<input
				type="number"
				defaultValue={value}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					onChangeValue(Number(event.target.value))
				}
			/>
		);

	if (typeof value === 'boolean') {
		return (
			<div>
				<span>true</span>
				<input
					type="radio"
					checked={value}
					name={`${id}${prop}`}
					value="true"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						onChangeValue(event.target.value === 'true')
					}
				/>
				<span>false</span>
				<input
					type="radio"
					checked={!value}
					name={`${id}${prop}`}
					value="false"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						onChangeValue(event.target.value === 'true')
					}
				/>
			</div>
		);
	}

	if (Date.parse(value))
		return (
			<input
				type="date"
				value={value}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					onChangeValue(event.target.value)
				}
			/>
		);

	return (
		<input
			defaultValue={value}
			onChange={(event: ChangeEvent<HTMLInputElement>) =>
				onChangeValue(event.target.value)
			}
		/>
	);
};
