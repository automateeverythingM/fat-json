import React from 'react';
import { IGeneratedResponse, Payload as onChangeProps } from '../types/app';
import { PropertyModifier } from './PropertyModifier';

interface IItemProps {
	item: IGeneratedResponse;
	onChange: ({ id, prop, value }: onChangeProps) => void;
}

export const Item = React.memo(({ item, onChange }: IItemProps) => {



	return (
		<div className="single-item">
			{Object.keys(item).map(key => (
				<PropertyModifier
					onChangeValue={onChange}
					prop={key}
					id={item.id}
					value={item[key as keyof IGeneratedResponse]}
					key={`${item.id}${key}`} />
			))}
		</div>
	);
});
