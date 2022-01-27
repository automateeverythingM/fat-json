import React from 'react';
import { InputChangePayload as onChangeProps, Value } from '../types/app';
import { PropertyModifier } from './PropertyModifier';

interface IItemProps {
	item: any;
	onChange: ({ id, prop, value }: onChangeProps) => void;
}

export const Item = React.memo(({ item, onChange }: IItemProps) => {
	return (
		<div className="single-item">
			{Object.keys(item).map((key) => {
				const id = item.id || item.tempId;
				return <PropertyModifier
					onChangeValue={onChange}
					prop={key}
					id={id}
					value={item[key]}
					key={`${id}${key}`}
				/>;
			})}
		</div>
	);
});
