import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: (position.coords.latitude || 0).toFixed(2) }),
			(err) => this.setState({ errorMessage: err.message }),
		);
	}

	// Helper function to avoid condintional rendering
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.err && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="Please accept location request" />;
	}

	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		)
	}
};

App.displayName = 'App';

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
