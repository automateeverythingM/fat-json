import React, { ChangeEvent, useContext } from 'react';
import { changeStateValue } from '../../context/actions';
import { StateContext } from '../../context/Context';

export const AddFile = () => {
	const { dispatch } = useContext(StateContext);

	const handleAddingFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files === null) return;
		const file = event.target?.files[0];
		const reader = new FileReader();
		reader.onloadend = (e:ProgressEvent<FileReader>) => {
			if (!e.target?.result) return;
			const parsedJSON = JSON.parse(e.target.result as string);
			dispatch(changeStateValue(parsedJSON));
		};
		reader.readAsText(file);
	};

	return (
		<div>
			<h3>Load file</h3>
			<input
				type="file"
				name="json"
				id="json"
				onChange={handleAddingFile}
				multiple={false}
				accept="application/json, text/javascript"
			/>
		</div>
	);
};
