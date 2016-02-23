import buildStyles from "../../lib/build-styles-helper";

// STYLES

const buildTriangle = ({ height = 50, width = 50, direction = "top", backgroundColor = "blue" }) => {
	const standardStyles = {
		height: 0,
		width: 0
	};
	let borderStyles = {};

	switch(direction) {
		case "top":
			borderStyles = {
				border: `${height}px solid transparent`,
				borderBottom: `${width}px solid ${backgroundColor}`,
				borderTop: 0
			};
			break;
		case "bottom":
			borderStyles = {
				border: `${height}px solid transparent`,
				borderTop: `${width}px solid ${backgroundColor}`,
				borderBottom: 0
			};
			break;
		case "left":
			borderStyles = {
				border: `${width}px solid transparent`,
				borderRight: `${height}px solid ${backgroundColor}`,
				borderLeft: 0
			};
			break
		case "right":
			borderStyles = {
				border: `${width}px solid transparent`,
				borderLeft: `${height}px solid ${backgroundColor}`,
				borderRight: 0
			};
		default:
			borderStyles = {
				border: `${width}px solid transparent`,
				borderBottom: `${width}px solid ${backgroundColor}`,
				borderTop: 0
			};
			break;
	}

	return {...standardStyles, ...borderStyles};
};

export default class Triangle extends React.Component {
	render() {
		const builtTriangle = buildTriangle(this.props.properties);
		const styles = builtTriangle;
		return <div style={ styles }></div>;
	}
}
