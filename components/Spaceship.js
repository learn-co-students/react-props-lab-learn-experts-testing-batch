const React = require('react');

class Spaceship extends React.Component {
	render() {
		return (
			<div>
				<h3>{ this.props.name }</h3>
				<h4>Speed: { this.props.speed }</h4>
				<h4>Armed with Rockets: { this.props.hasRockets }</h4>
				<h4>Colors: { this.props.colors.join(", ") }</h4>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	hasRockets: false,
	colors: ['black', 'red']
}

module.exports = Spaceship;