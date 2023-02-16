import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
	const [background, setBackground] = useState('');
	return (
		<div
			className="fix-box"
			style={{ background: `${background}` }}
			onClick={() => {}}>
			<h2 className="subheading">Selection</h2>
		</div>
	);
};

export default Selection;
