const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceShip">
        <p>{this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;