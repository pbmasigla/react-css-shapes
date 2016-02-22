import {
	Circle,
	Rectangle,
	Square
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
}

const squareProperties = {
	backgroundColor: "blue",
	length: 900
}

export default class Demo extends React.Component {
	render() {
		return (
			<div>
				<Circle properties={ circleProperties } />
				<Rectangle properties={ rectangleProperties } />
				<Square properties={ squareProperties } />
			</div>
		);
	}
};
