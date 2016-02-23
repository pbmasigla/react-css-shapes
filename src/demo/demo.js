import {
	Circle,
	Rectangle,
	Square,
	Triangle
} from "../shapes";

// temp, will be built better later
const circleProperties = {
	backgroundColor: "purple",
	diameter: 700,
	borderColor: "white"
};

const rectangleProperties = {
	backgroundColor: "pink",
	length: 700,
	width: 200
};

const squareProperties = {
	backgroundColor: "blue",
	length: 900
};

const triangleProperties = {
	backgroundColor: "orange",
	height: 50,
	width: 20,
	direction: "left"
};

export default class Demo extends React.Component {
	render() {
		return (
			<div>
				<Circle properties={ circleProperties } />
				<Rectangle properties={ rectangleProperties } />
				<Square properties={ squareProperties } />
				<Triangle properties={ triangleProperties }/>
			</div>
		);
	}
};
