import React from 'react';

interface IUnEditableFieldProps {
	item: any;
}

export const PropertyDisplay = ({ item }: IUnEditableFieldProps) => {
	return <div>{JSON.stringify(item, undefined, 4)}</div>;
};
