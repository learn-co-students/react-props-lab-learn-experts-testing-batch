const React = require('react');

class Spaceship extends React.Component{
  render(){
    return(
    <div>
      <p>{this.props.name}</p>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors}</p>
    </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['red', 'black']
}

module.exports = Spaceship;
