import buildStyles from "../../lib/build-styles-helper";

// STYLES
const defaultStyles = {
	backgroundColor: "blue",
	height: 100,
	width: 100
};

export default class Square extends React.Component {
	render() {
		const styles = { ...defaultStyles, ...buildStyles("square", this.props.properties) };
		return <div style={ styles }></div>;
	}
}
