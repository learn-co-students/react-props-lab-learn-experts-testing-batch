const React = require('react');

class Spaceship extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.name} </h1>
        <p>speed: {this.props.speed} mph </p>
        <p>has rockets: {this.props.hasRockets} </p>
        <p>colors: {this.props.colors.join(', ')} </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: 'un-named',
  speed: 10000,
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;