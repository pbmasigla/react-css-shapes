import Circle from "../shapes/circle";

// temp, will be built better later
const circleProperties = {
	backgroundColor: "purple",
	height: 700,
	width: 700
};

export default class Demo extends React.Component {
	render() {
		return <Circle properties={ circleProperties } />;
	}
};
