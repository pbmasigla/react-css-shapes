import buildStyles from "../../lib/build-styles-helper";

// STYLES
const defaultStyles = {
	backgroundColor: "blue",
	height: 0,
	width: 0,
	borderLeft: "50px solid transparent",
	borderRight: "50px solid transparent",
	borderBottom: "50px solid blue",
	borderTop: ""
};

export default class Triangle extends React.Component {
	render() {
		const styles = { ...defaultStyles, ...buildStyles("triangle", this.props.properties) };
		return <div style={ styles }></div>;
	}
}
