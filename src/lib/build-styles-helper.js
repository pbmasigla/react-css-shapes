import ValidShapeProperties from "./valid-shape-properties";

export default function BuildStyles(shape, styles) {
	let builtStyles = {};
	let unsupportedStyles = [];
	const getValidStyles = ValidShapeProperties[shape];

	for (let style in styles) {
		const validStyles = getValidStyles[style];
		if (getValidStyles[style]) {
			const styleValue = styles[style];
			validStyles.attributes.forEach(attr => {
				builtStyles[attr] = styleValue;
			});
		} else {
			unsupportedStyles.push(style);
		}

		if (unsupportedStyles.length > 0) {
			console.warn(`Warning: The following style(s) are not valid for the ${shape.toUpperCase()} shape: ${unsupportedStyles}`);
		}
	}

	return builtStyles;
};
