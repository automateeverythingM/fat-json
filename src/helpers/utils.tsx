export const getInputTypeFromPropValue = (value: any) => {
	if (typeof value === 'number') return 'number';
	if (typeof value === 'boolean') return 'boolean';
	if (Date.parse(value)) return 'datetime-local';
	if (typeof value === 'string') {
		const emailMatch = value.match(/..+@.+\..+/);
		return 'email';
	}
	if (typeof value === 'string') return 'text';
	return null;
};
