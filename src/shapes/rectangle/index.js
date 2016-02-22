import buildStyles from "../../lib/build-styles-helper";

// STYLES
const defaultStyles = {
	backgroundColor: "blue",
	height: 100,
	width: 200
};

export default class Rectangle extends React.Component {
	render() {
		const styles = { ...defaultStyles, ...buildStyles("rectangle", this.props.properties) };
		return <div style={ styles }></div>;
	}
}
