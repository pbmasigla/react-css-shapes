import Radium from "radium";
import buildStyles from "../../lib/build-styles-helper";

// STYLES
const defaultStyles = {
	backgroundColor: "blue",
	borderRadius: "100%",
	height: 100,
	width: 100
};

export default class Circle extends React.Component {
	render() {
		const styles = { ...defaultStyles, ...buildStyles("circle", this.props.properties) };
		return <div style={ styles }></div>;
	}
}
