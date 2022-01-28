import React, { ChangeEvent, HTMLAttributes } from 'react';

interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
	value: string;
	onChangedValue: (value: string) => void;
}

export const TextArea = ({ value, onChangedValue }: ITextAreaProps) => {
	return (
		<textarea
			className="w-100"
			value={value}
			onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
				onChangedValue(event.target.value)
			}
			rows={8}
		/>
	);
};
