import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
	const [bg, setBg] = useState({ background: '' });
	return (
		<div className="fix-box" style={bg} onClick={() => applyColor(setBg)}>
			<h2 className="subheading">Selection</h2>
		</div>
	);
};

export default Selection;
