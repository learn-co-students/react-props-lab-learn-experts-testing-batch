const React = require('react');


class Spaceship extends React.Component{
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors}</h3>
      </div>
    )
  }
}
Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}
module.exports = Spaceship;
