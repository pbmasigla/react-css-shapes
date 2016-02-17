import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import Demo from "./demo/demo";

export default class Root extends React.Component {
	render() {
		const { history } = this.props;
		return (
			<Router history={ history }>
				<Route path="/" component={ Demo } />
			</Router>
		);
	}
}

Root.propTypes = {
	history: PropTypes.object.isRequired
};
